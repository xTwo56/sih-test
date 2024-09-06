import { useState, useEffect } from 'react';

export const AppBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex  z-40 justify-between items-center text-white fixed top-0 w-full p-10 transition-all duration-300 ${
        isScrolled ? 'bg-green-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div>
        <ul className="flex gap-10">
          <li className='hover:text-green-700'>HOME</li>
          <li className='hover:text-green-700'>SERVICES</li>
          <li className='hover:text-green-700'>ABOUT US</li>
          <li className='hover:text-green-700'>WHY US</li>
        </ul>
      </div>
      <div>
        <h1 className='hover:text-green-700'>NINJAFARM</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li className='hover:text-green-700'>GALLERY</li>
          <li className='hover:text-green-700'>TESTIMONIALS</li>
          <li className='hover:text-green-700'>CONTACT US</li>
        </ul>
      </div>
     
    </div>
  );
};
