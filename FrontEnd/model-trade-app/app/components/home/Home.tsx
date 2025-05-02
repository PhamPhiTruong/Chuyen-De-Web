import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { BsThreeDots } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'
import { FaHeart, FaRegComment } from 'react-icons/fa'
import { TbArrowsExchange } from 'react-icons/tb'
import { PiShareFat } from 'react-icons/pi'
const Home = () => {
  return (
    <div className='w-4/5 px-10 py-10'>
                <div className='border-gray-600 border-2 rounded-2xl h-fit px-5'>
                    <div className='flex items-center justify-between '>
    
                    <div className='flex items-center justify-center mr-auto gap-3 w-fit mx-3 py-3'>
                        <div  >
                            <FaCircleUser />    
    
                        </div>
                        <div >
                            <p>Tran Son</p>
                            <p>Thoi gian    </p>
    
                        </div>
    
                    </div>
                    <div className='flex'>
                        <div>
                        <BsThreeDots className='text-xl mx-3'/>
    
                        </div>
                        <div>
                        <IoMdClose className='text-xl mx-3'/>
    
                        </div>
                    </div>
                    </div>
                    <div className='px-5 my-5'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eaque quidem, quo porro illum ab dolores aperiam optio architecto, beatae minus dicta ea iure non exercitationem dignissimos alias odit voluptates.</p>
                        
                    
                    </div>   
                    <div className=' px-5 my-5 flex w-full'>
                        <div className=' w-full h-auto bg-gray-200'>
    
                        </div>
                        <div className='px-5  justify-end w-2/3'>
                            <div className='mx-2 my-1 w-9/10 h-50 bg-gray-200'></div>
                            <div className=' mx-2 my-1 w-9/10 h-50 bg-gray-200'></div>
                        </div>
                      
    
                    </div>
                    <div className='px-5 my-5'>
                        <div>
                            <div className='grid grid-cols-4 text-center py-3 border-b-1'>
                                <div className='justify-center flex items-center'>
                                    <FcLike className='text-base' />
                                    <div className='mx-3 text-base'>10</div>
                                </div>
                                <div className='justify-center flex items-center'>
                                    <div className=' text-base'>10</div>
                                    <div className='text-base mx-1'>bình luận</div>
                                </div>
                                <div className='justify-center flex items-center'>
                                    <div className=' text-base'>10</div>
                                    <div className='text-base mx-1'>yêu cầu</div>
                                </div>
                                <div className='justify-center flex items-center'>
                                <div className=' text-base'>10</div>
                                <div className='text-base mx-1'>lượt chia sẻ</div>
                                </div>
    
    
                            </div>
                            <div className='grid grid-cols-4 text-center py-2'>
                                <div className='justify-center flex items-center'>
                                    <FaHeart className='text-2xl ' />
                                   
                                </div>
                                <div className='justify-center flex items-center'>
                                    <FaRegComment className='text-2xl ' />
                                </div>
                                <div className='justify-center flex items-center'>
                                    <TbArrowsExchange className='text-2xl' />
                                </div>
                                <div className='justify-center flex items-center'>
                                    <PiShareFat className='text-2xl'/>
                                </div>
    
    
                            </div>
                        </div>
    
                    </div>
    
                </div>
    
    
                </div>
  )
}

export default Home