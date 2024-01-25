"use client";
import Image from "next/image";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import NavItems from "./NavItems";

import { Button } from "../ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Navbar = () => {
  return (
    <nav className="flex justify-between  backdrop-blur-md items-center  md:px-10 sticky top-0 drop-shadow-md z-10 ">
      <Image
        src={"/assets/Kiti-Logo.png"}
        width={200}
        height={200}
        alt="logo"
      />

      <div className="hidden  md:block text-lg font-normal">
        <NavItems />
      </div>

      <div className="block md:hidden">
        <Button
          className="btn bg-primary "
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Login/SignUp
        </Button>

      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              src={"/assets/menu.png"}
              width={40}
              height={40}
              alt="menubar_log"
            />
          </SheetTrigger>
          <SheetContent>
            <NavItems />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
