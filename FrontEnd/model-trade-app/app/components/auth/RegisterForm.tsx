// "use client";
// import React from "react";
// import { useState } from "react";
// import Link from "next/link";

// export default function RegisterForm() {
//   const [email, setEmail] = useState("");
//   const [confirmEmail, setConfirmEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Kiểm tra đầu vào
//     if (email !== confirmEmail) {
//       setError("Emails do not match");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     // Chuẩn bị dữ liệu gửi đi
//     const userData = {
//       email,
//       password,
//       name,
//     };

//     try {
//       const response = await fetch(
//         "http://localhost:8080/model_trade/user/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify(userData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(data.message || "Registration successful!");
//         // Reset form
//         setEmail("");
//         setConfirmEmail("");
//         setPassword("");
//         setConfirmPassword("");
//         setName("");
//       } else {
//         setError(data.message || "Registration failed");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="  w-full  grid-rows-2 bg-gray-100 ">
//       <div className="text-gray-700  text-2xl text-left  font-bold w-full md:text-center bg-gray-100 md:bg-none">
//         CREATE NEW CUSTOMER ACCOUNT
//       </div>
//       <div className="w-full block   mt-4 place-items-center">
//         <div className="  grid w-19/20 md:w-5/6  bg-white place-items-center pt-4 pb-10">
//           <div className="w-3/5">
//             <div className="">
//               <h2 className="text-gray-700 text-xl font-medium text-left border-gray-400 border-b-4 pb-2 mb-6">
//                 PERSONAL INFORMATION
//               </h2>
//             </div>
//             <div className="">
//               <div>
//                 <div className=" grid mb-4">
//                   <label> Name</label>
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="border border-blue-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-700"
//                     maxLength={100}
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <div className=" grid mb-4 ">
//                   <label> Email</label>
//                   <input
//                     type="text"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="border border-blue-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-700"
//                     maxLength={100}
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <div className=" grid mb-4 ">
//                   <label> Confirm Email</label>
//                   <input
//                     type="text"
//                     value={confirmEmail}
//                     onChange={(e) => setConfirmEmail(e.target.value)}
//                     className="border border-blue-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-700"
//                     maxLength={100}
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <div className=" grid mb-4 ">
//                   <label> Password</label>
//                   <input
//                     type="text"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="border border-blue-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-700"
//                     maxLength={100}
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <div className=" grid mb-4 ">
//                   <label> Confirm Password</label>
//                   <input
//                     type="text"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className="border border-blue-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-600"
//                     maxLength={100}
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
//                   maxLength={15}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   value={dateOfBirth}
//                   onChange={(e) => setDateOfBirth(e.target.value)}
//                   className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
//                   required
//                 />
//               </div>
//               <div className="w-full mt-6 grid md:grid items-center">
//                 <div className="flex top-0">
//                   <input type="checkbox" id="terms" className="mr-2" required />
//                   <label htmlFor="terms" className="text-sm text-gray-600">
//                     I agree to the{" "}
//                     <a href="#" className="text-blue-700 underline">
//                       terms and conditions
//                     </a>{" "}
//                     and{" "}
//                     <a href="#" className="text-blue-700 underline">
//                       privacy policy
//                     </a>
//                     .
//                   </label>
//                 </div>
//                 <div className="w-full h-12 flex justify-center md:justify-end mt-6">
//                   <button
//                     type="submit"
//                     className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 "
//                   >
//                     Create an account
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Xác thực đầu vào
    if (!name.trim()) {
      setError("Name is required");
      setLoading(false);
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Invalid email format");
      setLoading(false);
      return;
    }
    if (email !== confirmEmail) {
      setError("Emails do not match");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    // if (!phoneNumber.match(/^\+?[1-9]\d{1,14}$/)) {
    //   setError("Invalid phone number format");
    //   setLoading(false);
    //   return;
    // }
    if (!dateOfBirth) {
      setError("Date of birth is required");
      setLoading(false);
      return;
    }
    const termsCheckbox = document.getElementById("terms") as HTMLInputElement;
    if (!termsCheckbox || !termsCheckbox.checked) {
      setError("You must agree to the terms and conditions");
      setLoading(false);
      return;
    }

    // Chuẩn bị dữ liệu gửi đi
    const userData = {
      email,
      password,
      name,
      phoneNumber,
      dateOfBirth,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/model_trade/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Registration successful! Please login.");
        setEmail("");
        setConfirmEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
        setPhoneNumber("");
        setDateOfBirth("");
        if (termsCheckbox) termsCheckbox.checked = false;
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-gray-700 text-2xl font-bold mb-6 text-center">
        CREATE NEW CUSTOMER ACCOUNT
      </h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-gray-700 text-xl font-medium border-b-4 border-gray-400 pb-2 mb-6">
          PERSONAL INFORMATION
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-600 bg-red-100 p-3 rounded">{error}</div>
          )}
          {success && (
            <div className="text-green-600 bg-green-100 p-3 rounded">
              {success}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              maxLength={100}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              maxLength={100}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Email
            </label>
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              maxLength={100}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              maxLength={100}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              maxLength={100}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              maxLength={15}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full border border-blue-700 px-3 py-2 text-sm rounded focus:outline-none focus:border-blue-700"
              required
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="#" className="text-blue-700 underline">
                terms and conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-700 underline">
                privacy policy
              </Link>
              .
            </label>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 disabled:bg-blue-400"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create an account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
