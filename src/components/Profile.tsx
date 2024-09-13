import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import React from "react";

export default function Profile() {
  return (
    <Avatar className="w-16 h-16">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
