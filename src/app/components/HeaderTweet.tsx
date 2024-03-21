"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const HeaderTweet: React.FC = () => {
  const [tweet, setTweet] = useState("");

  return (
    <section >
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Textarea
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          placeholder="What's on your mind"
          style={{ resize: "none" }}
          maxLength={200}
        />
      </div>
      <p className="text-right my-1 text-xs justify-end" >{tweet.length}/200</p>
      <div className="flex justify-end">
        <Button>Send</Button>
      </div>
      <Separator className="my-4" />
    </section>
  );
};

export default HeaderTweet;
