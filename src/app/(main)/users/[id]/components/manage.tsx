"use client";
import { ProductWide } from "@/components/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/constants/products";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import EditProductDialog from "./edit-product-dialog";

export default function Manage() {
  return (
    <Tabs defaultValue="products" className="max-w-4xl mx-auto mt-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="products">My Products</TabsTrigger>
        <TabsTrigger value="exchanges">My Exchanges</TabsTrigger>
      </TabsList>
      <TabsContent value="products">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>My Products</CardTitle>
              <EditProductDialog />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <ProductWide key={product.id} data={product} />
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="exchanges">
        <Card>
          <CardHeader>
            <CardTitle>My Exchanges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* This is where you would map through the user's exchanges */}
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={require("@/assets/imgs/demo.jpg")}
                    alt="Exchange item"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">
                      Vintage Camera for Smartphone
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Status: Pending
                    </p>
                  </div>
                </div>
                <Button variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat
                </Button>
              </div>
              {/* Add more exchange items here */}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
