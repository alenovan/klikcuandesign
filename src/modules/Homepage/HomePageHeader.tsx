import FloatingNotif from "@/components/FloatingNotif";
import React from "react";

const HomePageHeader = () => {
  return (
    <div className="bg-[url('/assets/images/bg-header.jpg')] w-full min-h-[250px] bg-cover bg-no-repeat bg-bottom p-4 rounded-b-3xl relative px-4 py-4">
      <span className="absolute top-4 right-4">
        <FloatingNotif />
      </span>
    </div>
  );
};

export default HomePageHeader;
