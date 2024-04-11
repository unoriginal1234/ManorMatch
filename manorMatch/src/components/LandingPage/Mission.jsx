import { FaCircle } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { RiUserHeartFill } from "react-icons/ri";

const Mission = () => {

  return (
      <div className="flex flex-col items-center justify-center w-full h-full bg-mmcream  relative bottom-32 px-16 border-t-8 border-mmblue">
        <h1 className="text-5xl font-serif font-bold text-mmblue pt-36 pb-4">ManorMatch</h1>
        <div className="flex text-mmblue mt-8 gap-8">
          <FaCircle />
          <FaCircle />
          <FaCircle />
        </div>
        <p className="text-2xl text-center font-serif text-mmblue w-1/2 py-12 z-100">At ManorMatch, we pride ourselves on delivering unparalleled property management services tailored to the needs of homeowners with luxury estates and historic properties. Our commitment to excellence ensures that every aspect of upscale home management and maintenance is seamlessly executed through our sophisticated user portal, offering a comprehensive array of services at your fingertips. With a focus on quality, discretion, and personalized attention, we strive to alleviate any concerns you may have, providing peace of mind and allowing you to fully enjoy the splendor of your estate. </p>
        <div className="h-32 pt-8 flex justify-center items-center text-mmblue font-bold pl-8 gap-40">
          <div className="flex flex-col items-center justify-center">
            <MdVpnKey size={64}/>
            Exclusivity
          </div>
          <div className="flex flex-col items-center">
            <IoMdStar size={64}/>
            Excellence
          </div>
          <div className="flex flex-col items-center">
            <RiUserHeartFill size={64}/>
            Personalization
          </div>
        </div>
        <img src="https://cdn11.bigcommerce.com/s-1a728/images/stencil/1280x1280/products/594/2699/IMG_9293__83954.1630448240.png?c=2" alt="ManorMatch Logo" className="w-7/8 h-auto absolute translate-y-8 z-10"/>
      </div>
  )
}

export default Mission;