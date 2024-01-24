import Link from "next/link";
import { Button } from "../ui/button";


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"



const NavItems = () => {

    return (
        <ul className="flex flex-col md:flex-row   md:space-x-4 items-center  " >
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/about'} >About Us</Link></li>
            <li><Link href={'/food-items'} >Food Items</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/dashboard'}>Dashboard</Link></li>


        </ul>
    )
}
=======
import LoginRegistrationPage from "@/app/(auth)/login/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row   md:space-x-4 items-center  ">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About Us</Link>
      </li>
      <li>
        <Link href={"/food-items"}>Food Items</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>

      <li className="hidden md:block">
        <Button
          className="btn bg-primary "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login/Registration
        </Button>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0">
                ✕
              </button>
            </form>
            <Tabs defaultValue="account" className="w-full ">
              <TabsList className="grid w-full grid-cols-2 mt-2 bg-primary">
                <TabsTrigger className="text-neutral-950" 
                 value="login">Login</TabsTrigger>
                <TabsTrigger className="text-neutral-950" 
                value="registration">Registration</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginRegistrationPage login={true} />
              </TabsContent>
              <TabsContent value="registration">
                <LoginRegistrationPage />
              </TabsContent>
            </Tabs>
          </div>
        </dialog>
      </li>
    </ul>
  );
};

export default NavItems;
