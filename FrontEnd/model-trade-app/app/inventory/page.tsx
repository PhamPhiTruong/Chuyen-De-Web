// src/app/inventory/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/layout/navigation/Header";
import Footer from "../components/layout/navigation/Footer";
import SellerInfo from "../components/inventory/SellerInfo";
import ProductList from "../components/inventory/ProductList";

interface InventoryPageProps {}

const InventoryPage: React.FC<InventoryPageProps> = () => {
  const [seller, setSeller] = useState({
    name: "Xưởng sản xuất mô hình",
    rating: 4.8,
    productCount: 7,
    location: "Gò Vấp, Hồ Chí Minh",
  });
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Nendoroid Akami Karubi",
      price: 1000000,
      location: "Tp.Hồ Chí Minh",
      imageUrl: "https://via.placeholder.com/150", // Thay bằng URL ảnh thật
    },
    {
      id: "2",
      name: "Nendoroid Akami Karubi",
      price: 1050000,
      location: "Tp.Hồ Chí Minh",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "Nendoroid Akami Karubi",
      price: 1050000,
      location: "Tp.Hồ Chí Minh",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      name: "Nendoroid Akami Karubi",
      price: 1050000,
      location: "Tp.Hồ Chí Minh",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: "5",
      name: "Nendoroid Akami Karubi",
      price: 1050000,
      location: "Tp.Hồ Chí Minh",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: "6",
      name: "Nendoroid Akami Karubi",
      price: 1050000,
      location: "Tp.Hồ Chí Minh",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const handleFollow = () => {
    console.log("Follow seller:", seller.name);
    // TODO: Gọi API để theo dõi người bán
  };

  const handleViewMore = (productId: string) => {
    console.log("View more product:", productId);
    // TODO: Điều hướng đến trang chi tiết sản phẩm
  };

  useEffect(() => {
    // Giả lập fetch dữ liệu từ API
    // fetch(`http://localhost:8080/model_trade/api/seller/${sellerId}`)
    //   .then((res) => res.json())
    //   .then((data) => setSeller(data))
    //   .catch((err) => console.error(err));
    // fetch(`http://localhost:8080/model_trade/api/products/seller/${sellerId}`)
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data))
    //   .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <div className="flex-grow w-4/5 py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/10">
            <SellerInfo seller={seller} onFollow={handleFollow} />
          </div>
          <div className="w-full lg:w-7/10">
            <h2 className="text-xl font-bold mb-4">Đang hiển thị (14)</h2>
            <p className="text-gray-600 mb-4">Đã bán (10)</p>
            <ProductList products={products} onViewMore={handleViewMore} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InventoryPage;
