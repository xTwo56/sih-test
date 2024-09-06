import { service_image1, service_image2, service_image3, service_image4 } from "../constant";

export const Services = () => {
  return (
    <div id="service-section" className="mt-20 mb-10 mx-8">
      <h1 className="text-green-700 text-4xl text-center">Services</h1>
      <div className="flex h-auto justify-around mt-10 gap-6">
       
        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 1"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image1}
            />
          </div>
          <div className="mt-4 flex-grow text-center">
            <h5 className="text-xl font-semibold">Algo Farming</h5>
            <p className="mt-2 text-gray-600">
              Algo Farming uses advanced algorithms to optimize agricultural practices for higher efficiency and sustainability.
            </p>
          <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            Enquire Now
          </button>
          </div>
        </div>

        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 2"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image2}
            />
          </div>
          <div className="mt-4 flex-grow">
            <h5 className="text-xl font-semibold">Medicinal Farming</h5>
            <p className="mt-2 text-gray-600">
              Medicinal Farming focuses on cultivating plants with therapeutic properties used in the pharmaceutical industry.
            </p>
            <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            Enquire Now
          </button>
          </div>
        </div>

      
        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 3"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image3}
            />
          </div>
          <div className="mt-4 flex-grow">
            <h5 className="text-xl font-semibold">Poultry Farming</h5>
            <p className="mt-2 text-gray-600">
              Poultry Farming involves raising chickens, ducks, and other birds for meat and egg production, ensuring quality products.
            </p>
            <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            Enquire Now
          </button>
          </div>
        </div>

       
        <div className="hover:shadow-xl text-center flex flex-col">
          <div>
            <img
              alt="service image 4"
              className="rounded-full w-48 h-48 mx-auto object-cover"
              src={service_image4}
            />
          </div>
          <div className="mt-4 flex-grow">
            <h5 className="text-xl font-semibold">Dairy Farming</h5>
            <p className="mt-2 text-gray-600">
              Dairy Farming is centered around the production of milk and dairy products, ensuring the best quality from healthy livestock.
            </p>
            <button className="bg-green-700 mb-4  text-center  text-white rounded-2xl mt-4 w-32 py-3 hover:bg-green-900">
            Enquire Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
