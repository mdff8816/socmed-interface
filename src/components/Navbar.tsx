import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-4">
          <h1 className="cursor-pointer text-3xl font-bold text-white">
            SOSMED
          </h1>
          <div className="flex gap-4">
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
