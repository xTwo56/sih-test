import { Gallery_image1, Gallery_image2, Gallery_image3 } from "../constant";

export const GalleryCard = () => {
  return (
    <div className="text-center mt-10 mx-10">
      <h1 className="text-green-700 font-semibold text-3xl">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
       
        <div className="h-64 w-full">
          <img
            alt="gallery image 1"
            className="w-full h-full object-cover rounded-xl"
            src={Gallery_image1}
          />
        </div>

       
        <div className="h-64 w-full">
          <img
            alt="gallery image 2"
            className="w-full h-full object-cover rounded-xl"
            src={Gallery_image2}
          />
        </div>

        <div className="h-64 w-full">
          <img
            alt="gallery image 3"
            className="w-full h-full object-cover rounded-xl"
            src={Gallery_image3}
          />
        </div>
      </div>
    </div>
  );
};
