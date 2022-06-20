import React from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts';
import BlogList from '../../components/blog-components/BlogList';

function Blogs({ allPostsData }: any) {
  return (
    <div>
      <Head>
        <title>Anton Guinto - Blogs</title>
        <meta name='description' content='Blogs by Anton Guinto' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <BlogList allPostsData={allPostsData} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blogs;
