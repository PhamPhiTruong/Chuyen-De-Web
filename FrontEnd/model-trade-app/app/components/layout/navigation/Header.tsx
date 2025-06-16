// "use client";
// import { BsChatDots } from "react-icons/bs";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import CategoryMenu from "./CategoryMenu";
// import SearchBar from "./Search";
// import { useRouter } from "next/navigation";
// import { IoLogOutOutline } from "react-icons/io5";

// interface HeaderProps {
//   openModal?: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ openModal }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   // Kiểm tra trạng thái đăng nhập dựa trên token
//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");
//   //   setIsAuthenticated(!!token);
//   // }, []);
//   useEffect(() => {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("token="))
//       ?.split("=")[1];
//     setIsAuthenticated(!!token);
//   }, []);

//   // Xử lý sự kiện cuộn
//   const controlNavbar = () => {
//     if (typeof window !== "undefined") {
//       if (window.scrollY > lastScrollY && window.scrollY > 20) {
//         setIsNavVisible(false);
//       } else {
//         setIsNavVisible(true);
//       }
//       setLastScrollY(window.scrollY);
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", controlNavbar);
//       return () => window.removeEventListener("scroll", controlNavbar);
//     }
//   }, [lastScrollY]);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/search?keyword=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   // // Xử lý đăng xuất
//   // const handleLogout = () => {
//   //   localStorage.removeItem("token"); // Xóa token khỏi localStorage
//   //   setIsAuthenticated(false); // Cập nhật trạng thái đăng nhập
//   //   router.push("/login"); // Chuyển hướng về trang đăng nhập
//   // };
//   const handleLogout = () => {
//     document.cookie = "token=; max-age=0"; // Xóa cookie
//     setIsAuthenticated(false);
//     router.push("/login");
//   };

//   //  Xử lý nhấp vào logo reload trang
//   const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
//     const curentPath = window.location.pathname; // Lưu đường dẫn hiện tại
//     if (curentPath === "/home") {
//       // Nếu đang ở trang home, không cần reload
//       window.location.reload(); // Tải lại trang
//     }
//     router.push("/home"); // Chuyển hướng về trang home
//   };

//   return (
//     <header className="border-gray-200 w-full top-0 left-0 sticky z-10">
//       <div className="bg-primary py-2 relative lg:h-17 z-20">
//         <div className="container mx-auto flex justify-between items-center ">
//           <Link
//             href="/home"
//             className="top-0 left-0 flex items-start ml-4 md:mx-8"
//             onClick={handleLogoClick} // Thêm sự kiện nhấp vào logo
//           >
//             <div className="relative  lg:pt-0">
//               <Image
//                 src="https://res.cloudinary.com/dxgqzu2vb/image/upload/v1748609195/nludev/product/Efigure.png_20250530194627.png"
//                 alt="Logo"
//                 width={60}
//                 height={30}
//                 className=""
//               />
//             </div>
//           </Link>
//           <div className="hidden md:block w-3/5">
//             <SearchBar />
//           </div>
//           <div className="flex items-center justify-end">
//             {/* Hiển thị các thẻ và nút đăng xuất chỉ khi đã đăng nhập */}
//             {isAuthenticated && (
//               <>
//                 <Link href="/cart" className="flex items-center mx-3">
//                   <div className="flex w-fit items-center">
//                     <MdOutlineShoppingCart className="text-2xl mr-2" />
//                     <p className="flex text-base items-center">Cart</p>
//                   </div>
//                 </Link>

//                 <Link href="/chat" className="flex items-center mx-3">
//                   <div className="flex w-fit items-center">
//                     <BsChatDots className="text-2xl mr-2" />
//                     <p className="flex text-base items-center">Chat</p>
//                   </div>
//                 </Link>

//                 <button
//                   className="cursor-pointer flex items-center w-full mx-3"
//                   onClick={openModal}
//                 >
//                   <div className="flex h-auto w-fit items-center justify-center">
//                     <BsChatDots className="text-2xl mr-2" />
//                     <p className="flex whitespace-nowrap text-base">Bài viết</p>
//                   </div>
//                 </button>

//                 <Link className="flex items-center mx-3" href="/notification">
//                   <div className="flex h-auto w-fit items-center">
//                     <BsChatDots className="text-2xl mr-2" />
//                     <p className="flex text-base whitespace-nowrap">
//                       Thông báo
//                     </p>
//                   </div>
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center mx-3 hover:text-red-700"
//                 >
//                   <IoLogOutOutline className="text-2xl mr-2" />
//                   <span className="flex text-base items-center">Logout</span>
//                 </button>
//               </>
//             )}
//             {/* Hiển thị nút đăng nhập nếu chưa đăng nhập */}
//             {!isAuthenticated && (
//               <Link href="/login" className="flex items-center mx-3 mr-5">
//                 <div className="flex w-fit items-center">
//                   <FaRegUser className="text-2xl mr-2" />
//                   <span className="flex text-base items-center">Login</span>
//                 </div>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>

//       <nav
//         className={`bg-primary text-white transition-transform duration-300 ease-in-out border-none relative z-10 ${
//           isNavVisible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="container h-12 md:h-8 flex md:items-center">
//           <CategoryMenu />
//           <div className="hidden container md:mx-auto px-2 md:flex justify-items-start items-start md:space-x-6">
//             <Link
//               href="/newsletter"
//               className="text-sm font-medium whitespace-nowrap"
//             >
//               Join Our Newsletter
//             </Link>
//             <Link
//               href="/how-to"
//               className="text-sm font-medium whitespace-nowrap"
//             >
//               How to Use It
//             </Link>
//             <Link
//               href="/warehouse"
//               className="text-sm font-medium whitespace-nowrap"
//             >
//               What's Private Warehouse?
//             </Link>
//             <Link
//               href="/help"
//               className="text-sm font-medium whitespace-nowrap"
//             >
//               Help Center
//             </Link>
//             <Link
//               href="/wishlist"
//               className="text-sm font-medium whitespace-nowrap"
//             >
//               Wish List
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 inline-block ml-1"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
"use client";
import { BsChatDots } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryMenu from "./CategoryMenu";
import SearchBar from "./Search";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";

interface HeaderProps {
  openModal?: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Kiểm tra trạng thái đăng nhập dựa trên token
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    setIsAuthenticated(!!token);
  }, []);

  // Xử lý sự kiện cuộn
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 20) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  // Xử lý đăng xuất
  const handleLogout = () => {
    document.cookie = "token=; max-age=0"; // Xóa cookie
    setIsAuthenticated(false);
    router.push("/login");
  };

  // Xử lý nhấp vào logo reload trang
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    if (currentPath === "/home") {
      window.location.reload();
    }
    router.push("/home");
  };

  return (
    <header className="border-gray-200 w-full top-0 left-0 sticky z-10">
      <div className="bg-primary py-2 relative lg:h-17 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/home"
            className="top-0 left-0 flex items-start ml-4 md:mx-8"
            onClick={handleLogoClick}
          >
            <div className="relative lg:pt-0">
              <Image
                src="https://res.cloudinary.com/dxgqzu2vb/image/upload/v1748609195/nludev/product/Efigure.png_20250530194627.png"
                alt="Logo"
                width={60}
                height={30}
                className=""
              />
            </div>
          </Link>
          <div className="hidden md:block w-3/5">
            <SearchBar />
          </div>
          <div className="flex items-center justify-end">
            {isAuthenticated && (
              <>
                <Link href="/cart" className="flex items-center mx-3">
                  <div className="flex w-fit items-center">
                    <MdOutlineShoppingCart className="text-2xl mr-2" />
                    <p className="flex text-base items-center">Cart</p>
                  </div>
                </Link>

                <Link href="/chat" className="flex items-center mx-3">
                  <div className="flex w-fit items-center">
                    <BsChatDots className="text-2xl mr-2" />
                    <p className="flex text-base items-center">Chat</p>
                  </div>
                </Link>

                <button
                  className="cursor-pointer flex items-center w-full mx-3"
                  onClick={openModal}
                >
                  <div className="flex h-auto w-fit items-center justify-center">
                    <BsChatDots className="text-2xl mr-2" />
                    <p className="flex whitespace-nowrap text-base">Bài viết</p>
                  </div>
                </button>

                <Link className="flex items-center mx-3" href="/notification">
                  <div className="flex h-auto w-fit items-center">
                    <BsChatDots className="text-2xl mr-2" />
                    <p className="flex text-base whitespace-nowrap">
                      Thông báo
                    </p>
                  </div>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center mx-3 hover:text-red-700"
                >
                  <IoLogOutOutline className="text-2xl mr-2" />
                  <span className="flex text-base items-center">Logout</span>
                </button>
              </>
            )}
            {!isAuthenticated && (
              <Link href="/login" className="flex items-center mx-3 mr-5">
                <div className="flex w-fit items-center">
                  <FaRegUser className="text-2xl mr-2" />
                  <span className="flex text-base items-center">Login</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <nav
        className={`bg-primary text-white transition-transform duration-300 ease-in-out border-none relative z-10 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container h-12 md:h-8 flex md:items-center">
          <CategoryMenu />
          <div className="hidden container md:mx-auto px-2 md:flex justify-items-start items-start md:space-x-6">
            <Link
              href="/newsletter"
              className="text-sm font-medium whitespace-nowrap"
            >
              Join Our Newsletter
            </Link>
            <Link
              href="/how-to"
              className="text-sm font-medium whitespace-nowrap"
            >
              How to Use It
            </Link>
            <Link
              href="/warehouse"
              className="text-sm font-medium whitespace-nowrap"
            >
              What's Private Warehouse?
            </Link>
            <Link
              href="/help"
              className="text-sm font-medium whitespace-nowrap"
            >
              Help Center
            </Link>
            <Link
              href="/wishlist"
              className="text-sm font-medium whitespace-nowrap"
            >
              Wish List
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
