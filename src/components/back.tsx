"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type Props = {
  title: string;
};

export default function Back({ title }: Props) {
  return (
    <header className="bg-primary text-primary-foreground shadow-md mt-5">
      <div className="container mx-auto px-4 py-4">
        <Button
          variant="ghost"
          className="text-primary-foreground"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          {title}
        </Button>
      </div>
    </header>
  );
}
