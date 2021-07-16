import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div
      className={`flex w-full p-8 z-10 h-17 fixed top-0 justify-between transition-all duration-150 ease-in ${
        show && "bg-black"
      }`}
    >
      <img
        className="logo h-8 object-contain"
        src="https://fontmeme.com/permalink/210622/131f531897c0c542bafe47935851500c.png"
        alt="WatchaMania Logo"
      />

      <img
        className="h-8 
        
        
        
        w-12 flex justify-end object-contain avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="WatchaMania Avatar"
      />
    </div>
  );
}

export default Navbar;
