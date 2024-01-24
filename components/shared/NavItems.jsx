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

export default NavItems;



