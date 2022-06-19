import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DateView from './date-view';

const styles = {
  itemContainer: 'bg-gray-100 p-3 rounded-lg mb-3 cursor-pointer',
  itemTitle: 'font-bold text-xl leading-tight',
};

function BlogList({ allPostsData }: any) {
  const router = useRouter();

  return (
    <section className='font-sans'>
      <div className='p-10'>
        <button type='button' onClick={() => router.back()}>
          ← Go Back
        </button>
        <h1 className='my-5 text-2xl md:text-3xl font-bold'>Dev Blogs</h1>
        {allPostsData.map(({ id, date, title }: any) => (
          <Link href={`/blogs/posts/${id}`} key={id} passHref>
            <div className={styles.itemContainer}>
              <h2 className={styles.itemTitle}>{title}</h2>
              <DateView className='mt-2' dateString={date} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
