'use client'
import Image from "next/image";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { Button } from "../ui/button";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import AuthPage from "@/app/(auth)/authpage/page";


const Navbar = () => {

    return (
        <nav className="flex justify-between  backdrop-blur-md items-center  md:px-10 sticky top-0 drop-shadow-md z-10 ">
            <Image src={'/assets/Kiti-Logo.png'} width={200} height={200} alt="logo" />

            <div className="hidden  md:block text-lg font-normal">
                <NavItems />
            </div>

                <Button className="btn bg-primary " onClick={() => document.getElementById('my_modal_3').showModal()}>Login/SignUp</Button>

                <dialog id="my_modal_3" className=" mx-auto rounded-md bg-white p-10 relative ">

                    <form method="dialog" className=" absolute  right-2 top-2 " >
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute  right-2 top-2">✕</button>
                    </form>

                    <Tabs defaultValue="login" >
                        <TabsList className="grid w-full grid-cols-2 ">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="signup">Signup</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                          <AuthPage login={true} />
                        </TabsContent>
                        <TabsContent value="signup">
                          <AuthPage  />
                        </TabsContent>
                    </Tabs>
                </dialog>

           

            <div className="md:hidden" >
                <Sheet>
                    <SheetTrigger>
                        <Image src={'/assets/menu.png'} width={40} height={40} alt="menubar_log" />
                    </SheetTrigger>
                    <SheetContent>
                        <NavItems />
                    </SheetContent>
                </Sheet>
            </div>


        </nav>
    )
}

export default Navbar