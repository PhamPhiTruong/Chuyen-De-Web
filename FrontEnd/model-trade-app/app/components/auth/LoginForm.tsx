"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ExactCustomerLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:8080/model_trade/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            password,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Đăng nhập thất bại: Vui lòng kiểm tra lại thông tin đăng nhập của bạn.`
        );
      }

      const data = await response.json();
      if (data.code === 1000) {
        const token = data.result;
        document.cookie = `token=${token}; path=/; max-age=864000`; // Lưu token vào cookie với thời gian sống 1 giờ
        router.push("/home");
      } else {
        throw new Error(data.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Đăng nhập thất bại");
    }
  };

  return (
    <div className="bg-gray-100 flex-grow">
      <div className="w-full block md:w-5/6 mx-auto">
        <div className="text-gray-700 text-2xl text-left md:text-2xl font-bold w-full bg-gray-100 md:bg-none">
          <span>CUTOMER LOGIN</span>
        </div>
        <div className="w-full block mt-4 place-items-center">
          <div className="grid md:grid-cols-2 gap-8 w-19/20 bg-white p-4">
            {/* Sign In Section */}
            <div>
              <h2 className="text-gray-700 text-xl font-bold border-b-4 border-gray-400 pb-2 mb-4">
                SIGN IN
              </h2>

              <p className="text-sm text-gray-600 mb-2">
                If you have an account, sign in with your email address.
              </p>

              <p className="text-xs text-gray-500 mb-4">
                Trouble signing in? Due to hash algorithm changes, some
                passwords created on our older website (pre-September 2018) may
                not be compatible with our newest upgrades. Please{" "}
                <Link
                  href="/request-password-reset"
                  className="text-blue-600 hover:underline"
                >
                  request a password reset link
                </Link>{" "}
                if necessary.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="userName"
                    className="block text-xs text-gray-600 mb-1"
                  >
                    Username
                  </label>
                  <input
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    placeholder="son12345"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-xs text-gray-600 mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      console.log("Password:", e.target.value);
                    }}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                  <span className="ml-1 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                  >
                    Sign In
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </form>
            </div>

            {/* New Customers Section */}
            <div>
              <h2 className="text-gray-700 text-xl border-b-4 font-bold border-gray-400 pb-2 mb-4">
                NEW CUSTOMERS
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                If you do not have a HobbyLink Japan account yet.
              </p>

              <div className="flex justify-start">
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-block"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
