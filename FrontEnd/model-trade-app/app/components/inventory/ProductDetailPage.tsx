"use client";
import React from "react";
import Header from "../layout/navigation/Header";
import Footer from "../layout/navigation/Footer";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  modelId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  see: boolean;
  isDelete: boolean;
  images: Array<string>;
  seller?: {
    name: string;
    rating: number;
    followCount: number;
  };
}

interface ProductDetailPageProps {
  product: Product;
  token: string | null;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  token,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-white container rounded-2xl mx-auto w-3/4 my-4 px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Hình ảnh sản phẩm */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.images[0] || "/placeholder-image1.jpg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={image || `/placeholder-image${index + 2}.jpg`}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-red-600 text-xl mt-2">{`${product.price.toLocaleString()} đ`}</p>

            <div className="mt-6 flex space-x-4">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                Đặt hàng
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center">
                <FaShoppingCart className="mr-2" /> Thêm vào giỏ
              </button>
            </div>
            {/* Phần chat và thông tin người bán */}
            <div className="w-full bg-gray-100 p-4 rounded-lg mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/placeholder-avatar.jpg" // Thay bằng API trả về avatar nếu có
                    alt={product.seller?.name || "Seller Avatar"}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold">
                      {product.seller?.name || "Unknown Seller"}
                    </p>
                    <p className="text-yellow-500">
                      ★ {product.seller?.rating || 0}
                    </p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white text-sm py-1 px-2 rounded hover:bg-blue-700">
                  Theo dõi
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {product.seller?.followCount || 0} người theo dõi
              </p>
              <div className="mt-4 text-sm text-gray-600">
                <p>Đánh giá: 98% (174 đánh giá)</p> {/* Có thể lấy từ API */}
                <p>Đang bán: 5 sản phẩm</p> {/* Có thể lấy từ API */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow bg-white container rounded-2xl mx-auto w-3/4 my-4 px-4 py-6">
        <div className="w-full px-4">
          <p className="text-black font-bold mt-4">Mô tả chi tiết</p>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4">
            <p className="text-black font-bold mt-6">Thông tin chi tiết</p>
            <div className="mt-2">
              <span className="text-sm text-gray-500">
                Tình trạng: {product.see ? "Mới" : "Đã dùng"}
              </span>
              <span className="text-sm text-gray-500 ml-4">
                Địa chỉ: Thủ Đức
              </span>{" "}
              {/* Có thể lấy từ API */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
