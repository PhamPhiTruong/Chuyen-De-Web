'use client'
import { useSearchParams } from 'next/navigation';

export default function TestReturnPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  return (
    <div>
      {status === 'Success' ? '✅ Thành công' : '❌ Thất bại'}
    </div>
  );
}