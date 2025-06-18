import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { editProduct } from "@/app/components/action/editProduct"; // Import Server Action

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
    product = data.result || null;
  } catch (err) {
    console.error("Lỗi fetch sản phẩm:", err);
    product = null;
  }

  if (!product) {
    return <div>Không tìm thấy sản phẩm để chỉnh sửa</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Chỉnh sửa mô hình</h1>
      <form action={(formData) => editProduct(formData, productId)}>
        <label className="block mb-2">Tên mô hình</label>
        <input
          type="text"
          name="name"
          defaultValue={product.name}
          className="border p-2 mb-4 w-full"
          required
        />
        <label className="block mb-2">Mô tả</label>
        <textarea
          name="description"
          defaultValue={product.description}
          className="border p-2 mb-4 w-full"
          required
        />
        <label className="block mb-2">Giá</label>
        <input
          type="number"
          name="price"
          defaultValue={product.price}
          className="border p-2 mb-4 w-full"
          required
        />
        <label className="block mb-2">Số lượng</label>
        <input
          type="number"
          name="quantity"
          defaultValue={product.quantity}
          className="border p-2 mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
};

export default Page;
