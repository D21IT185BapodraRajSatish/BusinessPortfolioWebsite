import React from "react";

function Hero() {
  return (

    <>
    <section className="hero relative bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="text-center max-w-2xl px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">Expert Electrical Solutions Since 1996</h1>
          <p className="mt-4 text-lg md:text-xl">Delivering Excellence in Solar, Motors, Panels, and Electrical Contracting Since 1996.</p>
        </div>
    </section>

    </>


  );
}

export default Hero;

