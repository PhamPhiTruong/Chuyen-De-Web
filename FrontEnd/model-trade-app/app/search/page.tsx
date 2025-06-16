import React from "react";
import Footer from "../components/layout/navigation/Footer";
import HomeSideLeft from "../components/layout/navigation/HomeSideLeft";
import HomeSideRight from "../components/layout/navigation/HomeSideRight";
import SearchPost from "../components/search/SearchPost";
import Header from "../components/layout/navigation/Header";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex w-full h-fit ">
        <HomeSideLeft />
        <div className="w-full relative">
          <SearchPost />
        </div>
        <HomeSideRight />
      </div>

      <Footer />
    </div>
  );
};

export default page;
