"use client";
import React, { useState, useEffect } from "react";
import Header from "../layout/navigation/Header";
import Footer from "../layout/navigation/Footer";
import SellerInfo from "./SellerInfo";
import ProductList from "./ProductList";
import { useRouter } from "next/navigation";

interface InventoryPageProps {}

interface ModelResponseDTO {
  modelId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  see: boolean;
  isDelete: boolean;
  images: Array<string>;
}

const InventoryPage: React.FC<InventoryPageProps> = () => {
  const [seller, setSeller] = useState({
    name: "Trần Hoàng Sơn",
    rating: 4.8,
    productCount: 7,
    location: "Gò Vấp, Hồ Chí Minh",
  });
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const handleFollow = () => {
    console.log("Follow seller:", seller.name);
    // TODO: Gọi API để theo dõi người bán
  };

  const handleViewMore = (productId: string) => {
    console.log("View more product:", productId);
    // TODO: Điều hướng đến trang chi tiết sản phẩm
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      alert("Vui lòng đăng nhập để sử dụng chức năng này!");
      return;
    }
    fetch("http://localhost:8080/model_trade/api/model/getAllModelByUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.result)) {
          setProducts(data.result);
        } else {
          console.error("API không trả về result là mảng:", data);
        }
      })
      .catch((err) => console.error("Fetch failed:", err));
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
            <h2 className="text-xl font-bold mb-4">
              Đang hiển thị ({products.length})
            </h2>
            <p className="text-gray-600 mb-4">Đã bán ({products.length - 1})</p>
            <ProductList products={products} onViewMore={handleViewMore} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InventoryPage;
