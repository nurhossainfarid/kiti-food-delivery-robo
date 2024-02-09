import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserDashboard = () => {
    return (
        <div className="h-screen flex  w-full  " >
            <Tabs defaultValue="account" className="w-full flex">
                <TabsList className="basis-2/12 flex flex-col space-y-4">
                    <TabsTrigger className="text-xl" value="account">Account</TabsTrigger>
                    <TabsTrigger className="text-xl" value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="bg-red-500 basis-10/12 " >
                    <h2>Hello world</h2>
                </TabsContent>
                <TabsContent value="password" className="bg-blue-500 basis-10/12 " >
                    <h2>Hello worlddddddddddd</h2>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default UserDashboard;

