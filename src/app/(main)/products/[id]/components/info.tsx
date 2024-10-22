"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import UserAvatar from "@/components/user-avatar";
import { defaultImage } from "@/constants/default";
import { product } from "@/constants/products";
import { mockId } from "@/lib/utils";
import { MessageCircle, Share2, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Info() {
  const navigate = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);

  const onNavigateToExchange = () => {
    navigate.push(`/exchange-proposal/${mockId()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="aspect-w-4 aspect-h-3 mb-4">
          <Image
            src={product.images[selectedImage] || defaultImage}
            alt={`${product.name} - Image ${selectedImage + 1}`}
            className="rounded-lg object-cover w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto p-1">
          {Array.from({ length: 5 }).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                index === selectedImage ? "ring-2 ring-primary" : ""
              }`}
            >
              <Image
                src={defaultImage}
                alt={`${product.name} - Thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
                height={100}
                width={100}
              />
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center space-x-2 mb-4">
          {product?.category && <Badge>{product.category.name}</Badge>}
          {/* <Badge variant="outline">{product.condition}</Badge> */}
        </div>
        <p className="text-muted-foreground mb-6">{product.description}</p>

        <Card className="mb-6">
          <CardContent className="flex items-center space-x-4 p-4">
            <UserAvatar img={defaultImage} name={product.owner.name} />
            <div>
              <p className="font-semibold">{product.owner.name}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>{4.9}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-4 mb-6">
          <Button className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Owner
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        <h2 className="text-xl font-semibold mb-4">Propose an Exchange</h2>
        <p className="text-muted-foreground mb-4">
          To propose an exchange, select one or more of your items to offer in
          return for this product.
        </p>
        <Button onClick={onNavigateToExchange}>Select Items to Exchange</Button>
      </div>
    </div>
  );
}
