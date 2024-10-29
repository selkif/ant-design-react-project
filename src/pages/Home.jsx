import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";

import Pricing from "../components/pricing/Pricing";

import Testimonial from "../components/Testimonial/Testimonial";
import Faq from "../components/Faq/Faq.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Client from "../components/Client/Client.jsx";

export default function Home() {
  return (
    <>
      <Hero />

      <Services />

      <Testimonial />

      <Faq />
      <Client />

      <Contact />
      <Pricing />
    </>
  );
}
