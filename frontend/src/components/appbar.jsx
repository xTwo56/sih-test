import { useState, useEffect } from 'react';

export const AppBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
     
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      
     
      window.scrollTo({
        top: sectionTop - 110, 
        behavior: "smooth",
      });
    }
  };
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
          <li className='hover:text-green-700' onClick={() => scrollToSection("service-section")} >SERVICES</li>
          <li className='hover:text-green-700' onClick={() => scrollToSection("about-section")}>ABOUT US</li>
          <li className='hover:text-green-700' onClick={() => scrollToSection("why-us-section")}>WHY US</li>
        </ul>
      </div>
      <div>
        <h1 className='hover:text-green-700'>NINJAFARM</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li className='hover:text-green-700' onClick={() => scrollToSection("gallery-section")}>GALLERY</li>
          <li className='hover:text-green-700' onClick={() => scrollToSection("testimonials-section")}>TESTIMONIALS</li>
          <li className='hover:text-green-700' onClick={() => scrollToSection("contact-section")}>CONTACT US</li>
          <div>
            <ul className='flex'>
          <li className='hover:text-green-700'>LOGIN|</li>
          <li className='hover:text-green-700'>SIGN UP</li>

            </ul>
          </div>
        </ul>
      </div>
     
    </div>
  );
};
