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

            <li className="hidden md:block">
                <Button className="btn bg-primary " onClick={()=>document.getElementById('my_modal_3').showModal()}>Login/SignUp</Button>
                <dialog id="my_modal_3" className="modal  ">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2 ">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Signup</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat cupiditate quae est, ipsam earum corrupti molestiae molestias iure quis eius ullam voluptatem reprehenderit eum sit accusamus repellendus doloremque amet ab.</h2>
                            </TabsContent>
                            <TabsContent value="signup">
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores voluptatum aperiam suscipit eum iure rem expedita quas dolorum praesentium, odit id illo, porro laborum, quasi ipsa dignissimos itaque deleniti?</h2>
                            </TabsContent>
                        </Tabs>
                </div>
            </dialog>
            </li>

            
        </ul>
    )
}

export default NavItems;



