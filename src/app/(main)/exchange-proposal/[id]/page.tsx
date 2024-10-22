import Back from "@/components/back";
import { Card, CardContent } from "@/components/ui/card";
import UserAvatar from "@/components/user-avatar";
import { product as desiredItem } from "@/constants/products";
import Image from "next/image";
import YourOffer from "./components/your-offer";
import Message from "./components/message";
import Guide from "./components/guide";
import Proposals from "./components/exchanges";
import { defaultImage } from "@/constants/default";

export default function Page() {
  return (
    <>
      <Back title="Back to Item" />
      <main className="py-8">
        <h1 className="text-3xl font-bold mb-6">Propose Exchange</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Item You Want</h2>
            <Card>
              <CardContent className="flex items-center space-x-4 p-4">
                <Image
                  width={100}
                  height={100}
                  src={defaultImage}
                  alt={desiredItem.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{desiredItem.name}</h3>
                  <div className="flex items-center mt-2">
                    <UserAvatar img="" name="ANH" />
                    <span className="text-sm text-muted-foreground">
                      {desiredItem.owner.name}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <YourOffer />
            <Message />
          </div>
          <Guide />
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold mb-6">
            Pending Exchange Proposals
          </h1>
          <Proposals />
        </div>
      </main>
    </>
  );
}
