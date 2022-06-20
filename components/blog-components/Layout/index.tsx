import Link from 'next/link';
import React from 'react';
import Footer from '../../Footer';

function BlogLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className={`${className} p-8 blog-container flex-1`}>
        <Link href='/blogs' passHref>
          <h1 className='mb-5 text-2xl md:text-3xl font-bold cursor-pointer'>
            <span className='text-green-500'>Anton</span> | Tech Blogs
          </h1>
        </Link>
        <div>{children}</div>
      </div>
      <div className='flex'>
        <Footer />
      </div>
    </div>
  );
}

export default BlogLayout;
