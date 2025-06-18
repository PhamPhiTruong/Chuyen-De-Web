import ProductDetailPage from "../../components/inventory/ProductDetailPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface PageProps {
  params: { id: string };
}

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
    userId: string;
    name: string;
    phoneNumber: string;
    createDate: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const productId = params.id;

  // Fetch dữ liệu sản phẩm từ API
  let product: Product | null = null;
  try {
    const res = await fetch(
      `http://localhost:8080/model_trade/api/model/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        credentials: "include",
      }
    );

    if (!res.ok) {
      throw new Error(`Lỗi: ${res.statusText}`);
    }

    const data = await res.json();
    product = data.result || null; // Giả định API trả về { result: product }
  } catch (err) {
    console.error("Lỗi fetch sản phẩm:", err);
    // if (err.message.includes("401")) {
    //   redirect("/login");
    // }
    product = null; // Fallback nếu fetch thất bại
  }

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
    // Hoặc redirect/error page
  }

  return <ProductDetailPage product={product} token={token} />;
};

export default Page;
