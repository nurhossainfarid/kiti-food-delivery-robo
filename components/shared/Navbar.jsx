'use client'
import Image from "next/image";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import NavItems from "./NavItems";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Navbar = () => {


    return  (
        <nav className="flex justify-between  backdrop-blur-md items-center  md:px-10 sticky top-0 drop-shadow-md z-10">
            <Image src={'/assets/Kiti-Logo.png'} width={200} height={200} alt="logo" />
            
            <div className="hidden  md:block text-lg font-normal">
                <NavItems />
            </div>

            <div className="md:hidden" >
           
            <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button>Login/SignUp</Button>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent style={{width:'100%', position:'relative', top:'25px'}} >
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Signup</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero explicabo porro sint, perspiciatis nam ipsum sapiente, tempora, ratione dignissimos nesciunt accusamus optio. Ratione officia quibusdam voluptatum, facere tempora quae rem.</h2>
                            </TabsContent>
                            <TabsContent value="signup">
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate voluptates minus dicta, id ducimus in repellendus vitae ad rem, sed recusandae accusantium necessitatibus repellat doloribus eos debitis reprehenderit temporibus!</h2>
                            </TabsContent>
                        </Tabs>
                    </DropdownMenuContent>
                </DropdownMenu>
                
            </div>

            <div className="md:hidden" >
                <Sheet>
                    <SheetTrigger>
                        <Image  src={'/assets/menu.png'} width={40} height={40} alt="menubar_log" />
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

