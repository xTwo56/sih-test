import { Aboutus_image } from "../constant";

export const AboutUsCard = () => {
  return (
    <div className="mt-20 mb-20 grid grid-cols-12 gap-8">
      <div className="col-span-6">
        <img
          alt="about us image card"
          className="h-80 w-full object-cover ml-8 rounded-xl"
          src={Aboutus_image}
        />
      </div>
      <div className="col-span-6 flex flex-col mt-10 items-center">
        <h2 className="text-3xl text-green-700 mb-4">About Us</h2>
        <p className="text-center">Your content goes here. This is where you describe the About Us section.</p>
      </div>
    </div>
  );
};
