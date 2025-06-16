import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UploadProduct from "../components/inventory/UploadProduct";

const page = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  // Chỉ kiểm tra token, redirect nếu không có (bổ sung cho Middleware)
  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <UploadProduct token={token} />
    </div>
  );
};

export default page;
