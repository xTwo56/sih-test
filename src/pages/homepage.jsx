import { BACKGROUND_IMAGE } from "../constant";
import { AppBar } from "../components/appbar";
import { Services } from "./sevices";
import { AboutUsCard } from "../components/aboutUsCard";
 const HomePage = () => {
  return (
    <div className="">
       <AppBar/>
       <div className="absolute mt-72 font-bold text-4xl text-green-600 ml-12 -z-12">
        <h1>
            Most Relaible And Efficient
            <tr/>
             Contact Farming Services
        </h1>
      </div>
       <img alt="bckground_image" className="shadow-md w-full h-[510px]"  src={BACKGROUND_IMAGE}/>
      <Services/>
      <hr/>
      <AboutUsCard/>
      <hr/>
    </div>
  )
};
export default HomePage