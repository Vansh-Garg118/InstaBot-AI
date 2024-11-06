import Header from '@/components/Header';
import React from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>

    <div>
        {/* header  */}
        <Header/>
    </div>
    <div>
        {/* sidebar */}
        <div>{children}</div>
    </div>

    </>
  )
}

export default AdminLayout