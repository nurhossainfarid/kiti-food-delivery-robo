import { BsFillCartCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { Button } from "../ui/button";

const FoodItem = ({ item }) => {
  const { name, description, price, photo: image } = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full ">
        <figure>
          <img src={image} alt={name} className="hover:scale-105 " />
        </figure>
        <div className="card-body justify-end p-5">
          <div className="">
            <div className="flex gap-5 mb-2">
              <h2 className="card-title text-white">{name}</h2>
              <h4 className="text-2xl font-bold text-white">
                <span
                  className="text-yellow-500 text-lg"
                >
                  TK
                </span>{" "}
                {price}{" "}
              </h4>
            </div>
            <div className="card-actions flex justify-between">
              <Button className="bg-primary">Order Now</Button>
              <div className="flex gap-2">
                <BsFillCartCheckFill className="text-green-700 text-3xl font-bold" />
                <MdFavorite className="text-green-700 text-3xl font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
