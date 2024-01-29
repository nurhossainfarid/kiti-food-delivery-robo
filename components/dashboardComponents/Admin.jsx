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
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator"
import { Button } from "../ui/button";


const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallRobotsList());
  }, [])

  const robots = useSelector((state) => state.robots)

  const { lists, singlerobot } = robots;

  const getBadgeProperties = (live) => {
    const badgeColor = live ? 'border-green-500' : 'border-red-500';
    const badgeText = live ? 'live' : 'available';
    return { badgeColor, badgeText };
  }

  const { badgeColor, badgeText } = getBadgeProperties(singlerobot.live);

  return (
    <div className="flex justify-between h-screen ">

      {/* sidebar */}
      <div className="basis-3/12 bg-white px-5  space-y-3 ">
        {/* <Image src={'/assets/Kiti-Logo.png'} alt="kiti_logo_image" width={200} height={200} /> */}
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
              <btn onClick={() => dispatch(getRobotByid(item.id))} key={item.id} className=" cursor-pointer flex space-x-4 shadow-sm p-3 bg-slate-50 border rounded-md justify-between items-center">
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
      {/* sidebar ends */}

      <div className="basis-9/12 bg-blue-50 flex flex-col p-4  space-y-4"  >

        {/* top section */}
        <div className="flex justify-between space-x-10 " >
          <div className="flex space-x-4" >

            <span className="bg-white flex space-x-4 items-center rounded-md p-4 px-12 shadow-md " >
              <AiOutlineDeliveredProcedure size={40} color="blue" />
              <div className="font-semibold" >
                <p>255</p>
                <h2>Total delivered</h2>

              </div>
            </span>
            <span className="bg-white flex space-x-4 items-center rounded-md p-4  px-12 shadow-md " >
              <FaCartArrowDown size={40} color="blue" />
              <div className="font-semibold" >
                <p>300</p>
                <h2>Total orders</h2>

              </div>
            </span>
          </div>
          <div className="bg-white shadow-md rounded-md w-full flex j items-center justify-center space-x-5 " >

            <div className="flex space-x-8  " >
              <div className="bg-blue-200 relative p-3 rounded-md " >
                <IoMdNotificationsOutline size={30} color="blue" />
                <span className="absolute bg-blue-500 -right-2 -top-2 rounded-full p-1 " >
                  <p className="text-white" >35</p>
                </span>
              </div>
              <div className="bg-blue-200 relative p-3 rounded-md " >
                <FaRegMessage size={30} color="blue" />
                <span className="absolute bg-blue-500 -right-2 -top-2 rounded-full p-1 " >
                  <p className="text-white" >35</p>
                </span>
              </div>
              <div className="bg-blue-200 relative p-3 rounded-md " >
                <IoSettingsOutline size={30} color="blue" />
                <span className="absolute bg-blue-500 -right-2 -top-2 rounded-full p-1 " >
                  <p className="text-white" >35</p>
                </span>
              </div>
            </div>





            <div className="bg-white shadow-lg flex items-center space-x-4 rounded-md p-1 px-4 " >
              <h3 className="font-semibold  text-lg " >Hafizul Imran</h3>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* top section end */}

        
        {/* bottom section */}
        <div className="flex justify-between " >

          <div className="basis-8/12  " >
          <h2  className="font-semibold" >Camera View</h2>
            <div className="flex space-x-4 "  >
              <div className="basis-9/12 space-y-4  " >
                
                <Image src={'https://i.ibb.co/b7wpjtB/2151176287.jpg'} alt="dummy_image"  width={1000} height={1000} className="w-full  h-64 rounded"  />
                <div className="flex justify-evenly" >
                  <Button className='bg-primary' >Front</Button>
                  <Button className='bg-primary' >Back</Button>
                  <Button className='bg-primary' >Left</Button>
                  <Button className='bg-primary' >Right</Button>
                </div>
              </div>
              <div className="basis-3/12   space-y-4 " >
                 <Image src={'https://i.ibb.co/CvCq1rp/43822.jpg'} alt="camera_image" className="w-full  h-24 " width={1000} height={50} />
                 <Image src={'https://i.ibb.co/GdtXkbC/2151153910.jpg'} alt="camera_image" className="w-full h-24  " width={1000} height={50} />
                 <Image src={'https://i.ibb.co/pxjMBR2/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg'} alt="camera_image" className="w-full h-24 " width={1000} height={50} />
                 
              </div>
            </div>
            <div className="bg-cyan-400 " >
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29183.554488498266!2d90.31956364999999!3d23.89159335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1706485148845!5m2!1sen!2sbd" 
  className="w-full h-[240px]" 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
            </div>
          </div>

            {/* bottom section end */}
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
