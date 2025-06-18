"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function editProduct(formData: FormData, productId: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const quantity = parseInt(formData.get("quantity") as string);

  const res = await fetch(
    `http://localhost:8080/model_trade/api/model/${productId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, description, price, quantity }),
    }
  );

  if (res.ok) {
    redirect(`/product/${productId}`);
  } else {
    throw new Error("Cập nhật thất bại");
  }
}
