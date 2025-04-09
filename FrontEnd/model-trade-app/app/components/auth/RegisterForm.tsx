'use client';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterForm(){
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Xử lý đăng nhập ở đây
     
    };

    return(
        <div className='  w-full  grid-rows-2' >
            <div className='text-gray-700  text-3xl font-bold w-full text-center '>
                CREATE NEW CUSTOMER ACCOUNT
            </div>
            <div className='w-full block it  mt-4 place-items-center'>
            <div className='  grid w-5/6  bg-white mb-20 place-items-center pt-4 pb-10'>
            <div className='w-3/4'>
             <h2 className="text-gray-700 text-2xl font-bold text-left border-gray-400 border-b-4 pb-2 mb-6">PERSONAL INFORMATION</h2>
            </div>
            <div className='w-3/4'>

            
            <div>
                <div className=' grid '>
                    <label> Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-700" maxLength={100} required/>
                </div>
            </div>
            <div>
                <div className=' grid '>
                    <label > Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-700" maxLength={100} required/>
                </div>
            </div>
            <div>
                <div className=' grid '>
                    <label> Confirm Email</label>
                    <input type="text" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-700" maxLength={100} required/>
                </div>
            </div>
            <div>
                <div className=' grid '> 
                    <label> Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-700" maxLength={100} required/>
                </div>
            </div>
            <div>
                <div className=' grid '>
                    <label> Confirm Password</label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600" maxLength={100} required/>
                </div>
            </div>
            <div className='w-full mt-6 flex items-center justify-between'>
            <div className='flex items-center'>
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-blue-700 underline">terms and conditions</a> and <a href="#" className="text-blue-700 underline">privacy policy</a>.
                </label>
            </div>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            Create an account
            </button>
            </div>
            </div>
            
        </div>
            </div>
            
             


        </div>
       

    );
}