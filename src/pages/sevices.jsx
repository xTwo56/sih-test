
import { service_image1,service_image2,service_image3,service_image4 } from "../constant"
export const Services=()=>{
    return (
        <div className="mt-20 mb-10">
         <h1 className="text-green-700 text-4xl text-center">Services</h1>
         <div className="flex h-96  justify-around mt-10">
            <div className="hover:shadow-xl">
                <div>
                <img alt="service image 1" src={service_image2}/>
                </div>
                <div>
                <h5>Algo Farming</h5>
                   <p>
                    content
                   </p>
                   <button className="bg-green-700 rounded-xl hover:bg-green-900" value="Enqurie Now"/>
                </div>
            </div>
            <div className="hover:shadow-xl">
                <div>
                <img alt="service image 2" className="rounded-full w-full" src={service_image1}/>
                </div>
                <div>
                <h5>Algo Farming</h5>
                   <p>
                    content
                   </p>
                   <button className="bg-green-700 rounded-xl hover:bg-green-900" value="Enqurie Now"/>
                </div>
            </div>
            <div className="hover:shadow-xl">
                <div>
                <img alt="service image 1" src={service_image2}/>
                </div>
                <div>
                <h5>poutiry Farming</h5>
                   <p>
                    content
                   </p>
                   <button className="bg-green-700 rounded-xl hover:bg-green-900" value="Enqurie Now"/>
                </div>
            </div>
            <div className="hover:shadow-xl">
                <div>
                <img alt="service image 4" src={service_image4}/>
                </div>
                <div>
                <h5>Dariry Farming</h5>
                   <p>
                    content
                   </p>
                   <button className="bg-green-700 rounded-xl hover:bg-green-900" value="Enqurie Now"/>
                </div>
            </div>
         </div>
        </div>
    )
}