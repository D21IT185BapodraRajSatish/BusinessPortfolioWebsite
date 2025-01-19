import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetails from "./components/ServiceDetails";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
function App() {
  const serviceData = [
    {
      slug: "solar-installation",
      imageSrc: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Solar Installation",
      description: "Efficient solar power solutions for industrial needs.",
      details: "Here are more details about Solar Installation...",
    },
    {
      slug: "ht-lt-motors",
      imageSrc: "https://images.pexels.com/photos/159181/pexels-photo-159181.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "HT & LT Motors",
      description: "Maintenance and installation up to 3750 kW.",
      details: "Here are more details about HT & LT Motors...",
    },
  ];

  console.log("Service Data:", serviceData); // Log this

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:slug" element={<ServiceDetails services={serviceData} />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
