"use client";
import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/user-avatar";
import { Check, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { defaultImage } from "@/constants/default";

type Props = {
  exchange: {
    id: string;
    proposer: { id: string; name: string; avatar?: string };
    date: string;
    desiredItem: { id: string; name: string; image?: string };
    offeredItems: { id: string; name: string; image: string }[];
    message: string;
  };
  isPrivate?: boolean;
};

export default memo(function ExchangeItem({
  exchange,
  isPrivate = false,
}: Props) {
  const onDecline = (id: string) => {
    console.log(id);
  };
  const onAccept = (id: string) => {
    console.log(id);
  };
  return (
    <Card key={exchange.id} className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <UserAvatar img="" name="ANH" />
            <div>
              <h2 className="text-lg font-semibold">
                {exchange.proposer.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                Proposed on {exchange.date}
              </p>
            </div>
          </div>
          <Badge>Pending</Badge>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="font-medium mb-2">Desired Item:</h3>
            <div className="flex items-center space-x-2">
              <Image
                src={defaultImage}
                alt={exchange.desiredItem.name}
                className="w-12 h-12 object-cover rounded"
                width={100}
                height={100}
              />
              <span>{exchange.desiredItem.name}</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-medium mb-2">Offered Items:</h3>
            <div className="flex flex-wrap gap-2">
              {exchange.offeredItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-muted p-2 rounded"
                >
                  <Image
                    src={defaultImage}
                    alt={item.name}
                    className="w-8 h-8 object-cover rounded"
                    width={100}
                    height={100}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPrivate && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4">
                <MessageCircle className="h-4 w-4 mr-2" />
                View Message
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Message from {exchange.proposer.name}</DialogTitle>
                <DialogDescription>
                  Regarding the exchange proposal for{" "}
                  {exchange.desiredItem.name}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="mt-4 max-h-[200px] p-4 border rounded">
                <p>{exchange.message}</p>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>

      {isPrivate && (
        <CardFooter className="flex justify-end space-x-2 p-6">
          <Button variant="outline" onClick={() => onDecline(exchange.id)}>
            <X className="h-4 w-4 mr-2" />
            Decline
          </Button>
          <Button onClick={() => onAccept(exchange.id)}>
            <Check className="h-4 w-4 mr-2" />
            Accept
          </Button>
        </CardFooter>
      )}
    </Card>
  );
});
