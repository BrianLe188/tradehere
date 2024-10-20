import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserAvatar from "@/components/user-avatar";
import { Star } from "lucide-react";

export default function Review() {
  return (
    <Card className="max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Ratings and Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-gray-300" />
          <span className="font-semibold">4.0</span>
          <span className="text-muted-foreground">(15 reviews)</span>
        </div>
        <div className="space-y-4">
          {/* This is where you would map through the user's reviews */}
          <div className="border-b pb-4">
            <div className="flex items-center space-x-2 mb-2">
              <UserAvatar img={require("@/assets/imgs/demo.jpg")} name="ANH" />
              <span className="font-semibold">Jane Smith</span>
              <div className="flex">
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-gray-300 w-4 h-4" />
              </div>
            </div>
            <p className="text-sm">
              Great trader! The item was exactly as described and the exchange
              was smooth.
            </p>
          </div>
          {/* Add more review items here */}
        </div>
      </CardContent>
    </Card>
  );
}
