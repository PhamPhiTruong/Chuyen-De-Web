import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Lấy token từ cookie
  const token = request.cookies.get("token")?.value;

  // Danh sách các trang yêu cầu xác thực
  const protectedRoutes = ["/inventory", "/sell-product"];

  // Kiểm tra nếu đường dẫn hiện tại là trang cần bảo vệ
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!token) {
      // Redirect về trang đăng nhập nếu không có token
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/inventory", "/uploadProduct"], // Áp dụng middleware cho các trang này
};
