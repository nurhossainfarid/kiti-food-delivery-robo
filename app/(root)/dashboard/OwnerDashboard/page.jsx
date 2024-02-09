import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OwnerDashboard = () => {
    return (
        <div className="h-screen flex  w-full  " >
            <Tabs defaultValue="orders" className="w-full flex">
                <TabsList className="basis-2/12 flex flex-col space-y-4">
                    <TabsTrigger className="text-xl" value="orders">Orders</TabsTrigger>
                    <TabsTrigger className="text-xl" value="history">Orders History</TabsTrigger>
                </TabsList>
                <TabsContent value="orders" className="bg-red-500 basis-10/12 " >
                    <h2>Hello world</h2>
                </TabsContent>
                <TabsContent value="history" className="bg-blue-500 basis-10/12 " >
                    <h2>Hello worlddddddddddd</h2>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default OwnerDashboard;


