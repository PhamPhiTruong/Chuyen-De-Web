import React from "react";
import { cookies } from "next/headers";
import InventoryPage from "../components/inventory/InventoryPage";
import { redirect } from "next/navigation";

const page = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  // Chỉ kiểm tra token, redirect nếu không có (bổ sung cho Middleware)
  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <InventoryPage token={token} />
    </div>
  );
};

export default page;
