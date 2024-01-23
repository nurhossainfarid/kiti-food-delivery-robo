import FoodItem from "@/components/shared/FoodItem";
import { Fooditems } from "@/constants";

const FoodItemPage = () => {

  //The FoodItems APi will come from websocket backend server(it will be provided by backend)

  return (
   <main className="bg-primary_background  px-5 ">
        <h2  className="text-4xl text-center p-4" >Food Items</h2>
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-4  " >
           {Fooditems.map((item) => <FoodItem key={item.id}  item={item} /> )  }
        </div>
   </main>
  )
}

export default FoodItemPage;

