// "use client";
// import React, { useState } from "react";
// import Header from "../components/layout/navigation/Header";
// import Footer from "../components/layout/navigation/Footer";
// import { IoInformationCircle } from "react-icons/io5";
// import { TbCameraPlus } from "react-icons/tb";
// import { FaPlus } from "react-icons/fa6";
// import RadioButton from "../components/radioGroup/RadioButton";

// const SellProduct = () => {
//   // State để quản lý giá trị radio button
//   const [formData, setFormData] = useState({
//     condition: "", // Tình trạng: new, used
//     purpose: "", // Mục đích: trade, sell
//   });

//   // Xử lý thay đổi radio button
//   const handleRadioChange = (field: string) => (value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Tùy chọn cho radio button
//   const conditionOptions = [
//     { value: "used", label: "Đã sử dụng" },
//     { value: "new", label: "Mới" },
//   ];

//   const purposeOptions = [
//     { value: "trade", label: "Trao đổi" },
//     { value: "sell", label: "Bán" },
//   ];
// const page = () => {
//   return (
//     <div className="flex flex-col min-h-screen items-center justify-center">
//       <Header />
//       <div className="flex-grow w-4/5 bg-white px-10 py-10">
//         <div className="flex ">
//           <div className="w-3/10">
//             <p className="text-center font-bold text-xl mb-3">
//               Hình ảnh về sản phẩm
//             </p>

//             <div className="mx-auto relative border-3 border-primary bg-gray-100 w-fit p-10">
//               <div className="absolute top-0 right-0 p-1 flex justify-end">
//                 <IoInformationCircle className="text-2xl text-blue-500" />
//                 <p className="text-blue-600">Hình ảnh hợp lệ</p>
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <TbCameraPlus className="text-6xl " />

//                 <p>Đăng từ 1 đến 6 hình</p>
//               </div>
//             </div>
//           </div>
//           <div className="w-7/10">
//             <div className="grid gap-6 border-2 border-black px-10 py-10">
//               <p>Thông tin chi tiết</p>
//               <div className="flex items-center gap-4">
//                 <p>Series sản phẩm</p>
//                 <div className="bg-yellow-300 p-2 w-fit rounded">
//                   <p>Pokemon</p>
//                 </div>
//                 <FaPlus className="bg-gray-200 p-1 h-fit w-7 hover:bg-gray-300" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <div>
//                   <p className="my-2">Tình trạng</p>
//                   {/* <div className="flex items-center gap-4">
//                     <div>Đã sử dụng</div>
//                     <div>Mới</div>
//                     <FaPlus />
//                   </div> */}
//                   <RadioButton
//                     name="condition"
//                     options={conditionOptions}
//                     value={formData.condition}
//                     onChange={handleRadioChange("condition")}
//                   />
//                 </div>
//                 <div className="ml-20">
//                   <p className="my-2">Mục đích</p>
//                   <div className="flex items-center gap-4">
//                     <div>Trao đổi</div>
//                     <div>Bán</div>
//                     <FaPlus />
//                   </div>
//                 </div>
//               </div>
//               <div className=" items-center gap-4 grid">
//                 <textarea
//                   className=" h-fit w-full border-1  px-2 py-2 focus:border-4 rounded-lg"
//                   placeholder="Tên sản phẩm"
//                 ></textarea>
//                 <textarea
//                   className=" h-fit w-full border-1  px-2 py-2 focus:border-4 rounded-lg"
//                   placeholder="Giá sản phẩm"
//                 ></textarea>
//                 <textarea
//                   className=" h-fit w-full border-1  px-2 py-2 focus:border-4 rounded-lg"
//                   placeholder="Mô tả sản phẩm"
//                 ></textarea>
//                 <select
//                   className="h-fit w-full border-1  px-2 py-2 focus:border-4 rounded-lg"
//                   defaultValue=""
//                 >
//                   <option disabled value="Địa chỉ" className="text-gray-400">
//                     Địa chỉ
//                   </option>
//                   <option value="">Thủ Đức</option>
//                   <option value="">Hồ Chí Minh</option>
//                   <option value="">Đà Nẵng</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SellProduct;

// src/pages/SellProduct.tsx
"use client";
import React, { useState } from "react";
import Header from "../components/layout/navigation/Header";
import Footer from "../components/layout/navigation/Footer";
import RadioButton from "../components/radioGroup/RadioButton";
import { IoInformationCircle } from "react-icons/io5";
import { TbCameraPlus } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const SellProduct = () => {
  // State để quản lý giá trị radio button
  const [formData, setFormData] = useState({
    condition: "", // Tình trạng: new, used
    purpose: "", // Mục đích: trade, sell
  });

  // Xử lý thay đổi radio button
  const handleRadioChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Tùy chọn cho radio button
  const conditionOptions = [
    { value: "used", label: "Đã sử dụng" },
    { value: "new", label: "Mới" },
  ];

  const purposeOptions = [
    { value: "trade", label: "Trao đổi" },
    { value: "sell", label: "Bán" },
  ];

  // Xử lý submit form (gửi dữ liệu lên backend)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // TODO: Gửi dữ liệu lên API /api/products
    // fetch('http://localhost:8080/model_trade/api/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //   },
    //   body: JSON.stringify(formData),
    // })
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Header />
      <div className="flex-grow w-4/5 bg-white px-10 py-10">
        <div className="flex">
          <div className="w-3/10">
            <p className="text-center font-bold text-xl mb-3">
              Hình ảnh về sản phẩm
            </p>
            <div className="mx-auto relative border-3 border-primary bg-gray-100 w-fit p-10 z-0">
              <div className="absolute top-0 right-0 p-1 flex justify-end">
                <IoInformationCircle className="text-2xl text-blue-500" />
                <p className="text-blue-600">Hình ảnh hợp lệ</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <TbCameraPlus className="text-6xl" />
                <p>Đăng từ 1 đến 6 hình</p>
              </div>
            </div>
          </div>
          <div className="w-7/10">
            <form onSubmit={handleSubmit} className="grid gap-6  px-10 py-10">
              <p>Thông tin chi tiết</p>
              <div className="flex items-center gap-4">
                <p>Series sản phẩm</p>
                <div className="bg-yellow-300 p-2 w-fit rounded">
                  <p>Pokemon</p>
                </div>
                <FaPlus className="bg-gray-200 p-1 h-fit w-7 hover:bg-gray-300" />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="my-2">Tình trạng</p>
                  <RadioButton
                    className=""
                    name="condition"
                    options={conditionOptions}
                    value={formData.condition}
                    onChange={handleRadioChange("condition")}
                  />
                </div>
                <div className="ml-20">
                  <p className="my-2">Mục đích</p>
                  <RadioButton
                    name="purpose"
                    options={purposeOptions}
                    value={formData.purpose}
                    onChange={handleRadioChange("purpose")}
                  />
                </div>
              </div>
              <div className="items-center gap-4 grid">
                <textarea
                  className="h-fit w-full border-1 px-2 py-2 focus:border-4 rounded-lg"
                  placeholder="Tên sản phẩm"
                  name="productName"
                ></textarea>
                <textarea
                  className="h-fit w-full border-1 px-2 py-2 focus:border-4 rounded-lg"
                  placeholder="Giá sản phẩm"
                  name="price"
                ></textarea>
                <textarea
                  className="h-fit w-full border-1 px-2 py-2 focus:border-4 rounded-lg"
                  placeholder="Mô tả sản phẩm"
                  name="description"
                ></textarea>
                <select
                  className="h-fit w-full border-1 px-2 py-2 focus:border-4 rounded-lg"
                  defaultValue=""
                  name="address"
                >
                  <option disabled value="" className="text-gray-400">
                    Địa chỉ
                  </option>
                  <option value="Thu Duc">Thủ Đức</option>
                  <option value="Ho Chi Minh">Hồ Chí Minh</option>
                  <option value="Da Nang">Đà Nẵng</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Đăng sản phẩm
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellProduct;
