import React from 'react';
import Link from 'next/link';
import DateView from './DateView';
import BlogLayout from './Layout';

const styles = {
  itemContainer:
    'bg-gray-100 py-4 px-6 rounded-lg mb-3 space-y-4 cursor-pointer',
};

function BlogList({ allPostsData }: any) {
  return (
    <section>
      <BlogLayout>
        <div className='mt-10 space-y-6'>
          {allPostsData.map(({ id, date, title, contentHtml }: any) => {
            const parsedHTMLContent = contentHtml
              ?.replace(/<[^>]+>/g, '')
              ?.substring(0, 150);

            return (
              <Link href={`/blogs/posts/${id}`} key={id} passHref>
                <div className={styles.itemContainer}>
                  <h2 className='blog-title'>{title}</h2>
                  <h2 className='html-content'>{parsedHTMLContent}...</h2>
                  <DateView dateString={date} />
                </div>
              </Link>
            );
          })}
        </div>
      </BlogLayout>
    </section>
  );
}

export default BlogList;
