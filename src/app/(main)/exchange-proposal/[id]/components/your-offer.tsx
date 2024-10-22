"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { defaultImage } from "@/constants/default";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function YourOffer() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const myItems = Array.from({ length: 5 }).map((e, index) => ({
    id: index.toString(),
    name: "Product with very long name",
  }));

  const onToggleItemSelection = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <h2 className="text-xl font-semibold mt-8 mb-4">Your Offer</h2>
      <Card>
        <CardContent className="p-4">
          {selectedItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {selectedItems.map((id) => {
                const item = myItems.find((item) => item.id === id)!;
                return (
                  <div key={id} className="relative">
                    <Image
                      src={defaultImage}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded"
                      width={100}
                      height={100}
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1"
                      onClick={() => onToggleItemSelection(id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <p className="mt-2 text-sm font-medium">{item.name}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No items selected yet. Click &quot;Add Item&quot; to choose items
              to offer.
            </p>
          )}
        </CardContent>
      </Card>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Items to Offer</DialogTitle>
            <DialogDescription>
              Choose the items you want to offer in exchange.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {myItems.map((item) => (
              <div
                key={item.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden ${
                  selectedItems.includes(item.id) ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => onToggleItemSelection(item.id)}
              >
                <Image
                  src={defaultImage}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                  width={100}
                  height={100}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/75 p-2">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </div>
                {selectedItems.includes(item.id) && (
                  <Badge className="absolute top-2 right-2">Selected</Badge>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
