'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io';


interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
   const [postContent, setPostContent] = useState('');
   const [lineCount, setLineCount] = useState(1);
   const textareaRef = useRef<HTMLTextAreaElement >(null);

   // Hàm đếm số dòng
  const updateLineCount = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const lines = textarea.value.split('\n').length;
      setLineCount(lines);
    }
  };

  // Cập nhật số dòng khi nội dung thay đổi
  useEffect(() => {
    updateLineCount();
  }, [postContent]);

  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Overlay mờ */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Nội dung modal */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4">
        
        <div className="flex items-center justify-between mb-4">
          <div className="w-10"></div> {/* Phần tử giả để cân bằng */}
          <p className="text-center text-2xl font-bold">Tạo tin mới</p>
          <IoIosCloseCircle className="text-4xl text-gray-500 cursor-pointer" onClick={onClose} />
        </div>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex  items-center mb-4'>
            <FaUserCircle className='text-2xl mr-2'/>
            <div>Trần Sơn</div>
          </div>
          <div className='flex items-center mx-4 bg-gray-200 p-1.5 rounded'>
            <div className='rounded-full w-6 h-6  bg-amber-300 mr-2'></div>
            <div>Trao đổi</div>
          </div>

        </div>
        <div>
          
          <textarea ref={textareaRef} placeholder='Bạn muốn trao đổi gì thế?' value={postContent} onChange={e => setPostContent(e.target.value)}  
         className={`font-medium focus:outline-none w-full resize-y break-words transition-all duration-300 ${
          postContent ? 'text-black' : 'text-gray-500'
        } ${lineCount > 4 ? 'text-base' : 'text-2xl'}`}
         // className=" text-2xl resize-y break-words transition-all duration-300  focus:outline-none w-full ${postContent ? 'text-black ':' text-gray-500'} ${lineCount > 4 ? 'text-base' : 'text-2xl'}" 
          maxLength={5000} rows={4} required/>

        </div>
        <div className='flex items-center w-fit  bg-gray-200 p-1.5 rounded'>
          <div>Chọn sản phẩm</div>
          <IoIosArrowDown className='mx-2' />
          
        </div>


      </div>
    </div>
  );
};

export default PostModal;

