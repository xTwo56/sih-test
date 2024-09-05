import { Aboutus_image } from "../constant"
export const AboutUsCard=()=>{
    return (
        <div className="flex">
        <div className="">
         <img alt="about us image card" src={Aboutus_image}/>
        </div>
        <div className="">
          <h2 className=" text-center text-3xl text-green-700">About Us </h2>
          <p>content</p>
        </div>

        </div>
    )
}