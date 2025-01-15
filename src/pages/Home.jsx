import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Services";
import Client from "../components/Clients";


function Home() {
  const serviceData = [
    {
      imageSrc: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Solar Installation",
      description: "Efficient solar power solutions for industrial needs.",
      link: "#solar-installation",
    },
    {
      imageSrc: "https://images.pexels.com/photos/159181/pexels-photo-159181.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "HT & LT Motors",
      description: "Maintenance and installation up to 3750 kW.",
      link: "#ht-lt-motors",
    },
    {
      imageSrc: "https://images.pexels.com/photos/324655/pexels-photo-324655.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Transformer Oil  Filteration",
      description: "High-quality panel erection and setup services.",
      link: "#panel-installation",
    },
    {
      imageSrc: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Panel Irrection",
      description: "Efficient solar power solutions for industrial needs.",
      link: "#solar-installation",
    },
    {
      imageSrc: "https://images.pexels.com/photos/159181/pexels-photo-159181.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cabel",
      description: "Maintenance and installation up to 3750 kW.",
      link: "#ht-lt-motors",
    },
    {
      imageSrc: "https://images.pexels.com/photos/324655/pexels-photo-324655.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Aerosols",
      description: "High-quality panel erection and setup services.",
      link: "#panel-installation",
    }
  ];
  const clients = [
    {
      name: "Hathi Cements",
      logo: "https://www.hathi-sidheecements.com/hathi_site/images/logo.png",
    },
    {
      name: "Valbaux Minetech",
      logo: "https://www.valbaux.com/upload/image/Valbaux%20Minetech.png",
    },
    {
      name: "Orient Ceratech",
      logo: "https://www.orientceratech.com/images/Orient%20Ceratech%20Logo.jpg",
    },
  ];
  
  
  return (
    <>
      <Hero />
      <Service services={serviceData} />
      <Client clients={clients}/>
      
    </>
  );
}

export default Home;
