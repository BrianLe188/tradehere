import { memo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Status from "./status";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type Product } from "@/lib/types/product";
import { defaultImage } from "@/constants/default";

type Props = {
  data: Product;
};

export default memo(function ProductSquare({ data }: Props) {
  return (
    <Link href={`/products/${data.id}`}>
      <Card
        key={data.id}
        className="relative shadow-red-50 hover:cursor-pointer hover:scale-105 transition duration-500"
      >
        {data?.status && <Status status={data.status} />}
        <Image
          src={defaultImage}
          width={200}
          height={200}
          alt={data.name}
          className="w-full h-auto rounded-tl-md rounded-tr-md"
        />
        <CardContent>
          <p className="truncate mt-2 text-black dark:text-white">
            {data.name}
          </p>
          {data.category && (
            <Badge className="mr-1">{data.category.name}</Badge>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full flex-col h-auto">
            <p className="text-xl">
              <strong>100</strong>
            </p>
            <span>People want to trade</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
});
