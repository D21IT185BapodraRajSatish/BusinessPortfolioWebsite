import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const Clients = ({ clients }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="text-center">
              <img
                src={client.logo}
                alt={client.name}
                 className="h-16 w-auto sm:h-20 sm:w-auto md:h-24 lg:h-32 mx-auto"
                onError={(e) => {
                  e.target.src = '/images/fallback-logo.jpg';
                }}
              />
              <h3 className="mt-4 text-lg font-semibold">{client.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
