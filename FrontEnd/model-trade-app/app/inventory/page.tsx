import React from "react";
import Header from "../components/layout/navigation/Header";
import Footer from "../components/layout/navigation/Footer";
import { IoInformationCircle } from "react-icons/io5";
import { TbCameraPlus } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header />
      <div className="flex-grow w-4/5 bg-white px-10 py-10">
        <div className="flex ">
          <div className="w-3/10">
            <p className="text-center font-bold text-xl mb-3">
              Hình ảnh về sản phẩm
            </p>

            <div className="mx-auto relative border-3 border-primary bg-gray-100 w-fit p-10">
              <div className="absolute top-0 right-0 p-1 flex justify-end">
                <IoInformationCircle className="text-2xl text-blue-500" />
                <p className="text-blue-600">Hình ảnh hợp lệ</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <TbCameraPlus className="text-6xl " />

                <p>Đăng từ 1 đến 6 hình</p>
              </div>
            </div>
          </div>
          <div className="w-7/10">
            <div className="border-2 border-black">
              <p>Thông tin chi tiết</p>
              <div className="flex items-center">
                <p>Series sản phẩm</p>
                <div className="bg-yellow-300 p-2 w-fit rounded">
                  <p>Pokemon</p>
                </div>
                <FaPlus />
              </div>
              <div className="flex items-center">
                <div>
                  <p>Tình trạng</p>
                  <div className="flex items-center gap-4">
                    <div>Đã sử dụng</div>
                    <div>Mới</div>
                    <FaPlus />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
