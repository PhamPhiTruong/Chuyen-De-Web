'use client'
import { useSearchParams } from 'next/navigation';
import Header from '../components/layout/navigation/Header';
import Footer from '../components/layout/navigation/Footer';

export default function TestReturnPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header/>
      {status === 'Success' ? '✅ Thành công' : '❌ Thất bại'}
      <h3>Hãy trở về trang chủ bằng Logo</h3>
      <Footer/>
    </div>
  );
}