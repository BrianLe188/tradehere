"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("");

  const onSubmit = () => {};

  return (
    <>
      <h2 className="text-xl font-semibold mt-8 mb-4">Message</h2>
      <Textarea
        placeholder="Write a message to the owner (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />

      <Button className="mt-8 w-full" size="lg" onClick={onSubmit}>
        <Send className="h-4 w-4 mr-2" />
        Send Exchange Proposal
      </Button>
    </>
  );
}
