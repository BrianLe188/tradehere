"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

type Props = {
  data: { id: string; name: string };
};
export default function BestItem({ data }: Props) {
  const [isHover, setIsHover] = useState(false);
  const onHover = () => setIsHover(true);
  const onLeaveHover = () => setIsHover(false);
  return (
    <div
      className="hover:cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeaveHover}
    >
      <Image
        src={require("@/assets/imgs/demo.jpg")}
        width={200}
        height={200}
        alt={data.name}
        className="w-full rounded-md"
      />
      <p className="text-center my-5 truncate">
        <strong>{data.name}</strong>
      </p>
      {isHover ? (
        <Button className="w-full h-20 text-lg">JOIN TRADE</Button>
      ) : (
        <div className="bg-primary h-20 rounded-md py-2 text-primary-foreground text-center">
          <p className="text-2xl">
            <strong>100</strong>
          </p>
          <span>People want to trade</span>
        </div>
      )}
    </div>
  );
}
