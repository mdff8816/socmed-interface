import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";
import React from "react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="bg-violet-200 p-4 rounded-lg ml-4">
      <h2 className="font-bold">Who To Follow</h2>
      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firza</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}
      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Siti</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}
      {/* CARD USER */}
      <div className="my-2 flex items-center justify-between rounded-md border border-gray-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Budi</p>
        </div>

        <UserPlus />
      </div>
      {/* END CARD USER */}
    </div>
  );
};

export default CardWhoToFollow;
