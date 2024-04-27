import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";

function Reservation() {
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px]">Book A Table</Title>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Input />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98139.243189768!2d30.46241416802413!3d39.76544582250223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3e08220c0e5f%3A0xbc89395938049a08!2sEski%C5%9Fehir!5e0!3m2!1str!2str!4v1714245493101!5m2!1str!2str"
          width="100%"
          height="85%"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}

export default Reservation;
