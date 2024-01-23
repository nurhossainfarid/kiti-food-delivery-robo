import Image from "next/image";
import { Button } from "../ui/button";

const FoodItem = ({item}) => {

  const {id, title, description, price, quantity, stock, totalsale,createdAt, updatedAt, image } = item;


  return (
    <div >
          <div className=" flex space-y-3 bg-white shadow-xl  items-center p-3 rounded-md w-10/12 relative  ">
              <div className=" w-3/6  md:w-4/6 lg:w-8/12 space-y-2 "  >
                <h2 className="card-title">{title}</h2>
                <p  >{description.slice(0, 40)}...</p>
                <h4 className="text-xl font-bold " >{price} tk</h4>
                <div className="card-actions">
                  <Button className='bg-primary' >Order Now</Button>
                </div>
              </div>

              <div className="rounded-full   bg-blue-300 absolute -right-16  my-auto" >
                <Image src={image} alt="food_item_card" width={200} height={200} className="rounded-full "  />
              </div>
          </div>

          {/* <Image src={image} alt="food_item_card" width={300} height={300} className=" w-4/12 rounded-full absolute right-0  top-0  " /> */}
    </div>
  )
}

export default FoodItem;


