'use client'

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { CgMenuLeft } from "react-icons/cg";
import { useEffect } from "react";
import { getRobotByid, getallRobotsList } from "@/features/robots/robotsSlice";
import { RiRobot2Line } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";


const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallRobotsList());
  }, [])

  const robots = useSelector((state) => state.robots)

  const {lists, singlerobot} = robots;

  const getBadgeProperties = (live) => {
    const badgeColor = live ? 'border-green-500' : 'border-red-500';
    const badgeText = live ? 'live' : 'available';
    return { badgeColor, badgeText };
  }

  const { badgeColor, badgeText } = getBadgeProperties(singlerobot.live);

  return (
    <div className="flex justify-between h-[87vh] ">

      {/* sidebar */}
      <div className="basis-3/12 bg-white px-5  space-y-3 ">
        <Image src={'/assets/Kiti-Logo.png'} alt="kiti_logo_image"  width={200} height={200} />
        <div className="bg-primary flex space-x-3 p-2 px-5 rounded-md flex-start" >
          <CgMenuLeft size={25} />
          <p className="font-semibold" >Robots List</p>
        </div>

        <div className="flex space-x-4 shadow-sm p-3 bg-slate-50 border rounded-md justify-around items-center">
            <span className="flex  items-center space-x-4" >
              <RiRobot2Line size={40} />
              <p className="font-semibold">{singlerobot.robotName}</p>
            </span>
            <div className={`badge ${badgeColor}`}>{badgeText}</div>
        </div>


        <div className="space-y-3 overflow-y-auto h-64  scrollbar-thin scrollbar-thumb-primary scrollbar-track-blue-100 scrollbar-rounded px-4 ">
        {lists.slice(1,).map((item) => {
        const { badgeColor, badgeText } = getBadgeProperties(item.live);

    return (
        <btn onClick={() => dispatch(getRobotByid(item.id)) } key={item.id} className=" cursor-pointer flex space-x-4 shadow-sm p-3 bg-slate-50 border rounded-md justify-between items-center">
            <span className="flex  items-center space-x-4" >
              <RiRobot2Line size={40} />
              <p className="font-semibold">{item.robotName}</p>
            </span>
            <div className={`badge ${badgeColor}`}>{badgeText}</div>
        </btn>
    );
})}
</div>

<button className="bg-primary  w-full flex justify-center items-center space-x-4 p-3 rounded-md" >
 <h2 className="font-semibold" >Add Robot</h2>
  <MdAddCircleOutline size={30} />
</button>

</div>
      {/* sidebar */}

      <div className="basis-9/12 bg-blue-50 flex flex-col p-4  space-y-4"  >
        <div className="flex justify-between space-x-10 " >
          
          <div className="flex space-x-4" >

            <span className="bg-slate-100 flex space-x-4 items-center rounded-md p-4 shadow-md " >
              <AiOutlineDeliveredProcedure size={30} color="blue" />
              <div className="font-semibold" >
                <p>255</p>
                <h2>Total delivered</h2>

              </div>
            </span>
            <span className="bg-slate-100 flex space-x-4 items-center rounded-md p-4 shadow-md " >
              <FaCartArrowDown size={30} color="blue" />
              <div className="font-semibold" >
                <p>300</p>
                <h2>Total orders</h2>

              </div>
            </span>
          </div>
          <div  className="bg-slate-200 shadow-md rounded-md w-full " > 
            
            <p>here top right item will be set</p>
            
           </div>
        </div>
        <div className="flex justify-between " >
          
          <div className="basis-8/12 bg-green-200 " >
              
              <div className="flex" >               
                <div className="basis-9/12 bg-slate-700" >
                  <h2>Main camera</h2>
                </div>
                <div  className="basis-3/12 bg-orange-800" >
                  <h2>side camera </h2>
                </div>
              </div>
              <div className="bg-cyan-400" >
                <h2>Map</h2>
              </div>
          </div>
          <div className="basis-4/12" >
              
              <div>Control panel top</div>
              <div>Control panel bottom </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;
