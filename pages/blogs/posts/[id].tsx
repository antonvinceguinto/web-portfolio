import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import DateView from '../../../components/blog-components/DateView';
import BlogLayout from '../../../components/blog-components/Layout';

export default function Post({ postData }: any) {
  const parsedHTMLContent = postData.contentHtml
    .replace(/<[^>]+>/g, '')
    .substring(0, 150);

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
        <meta name='Anton Guinto Blogs' content={postData.title} />
        <meta name='keywords' content={postData.title} />
        <meta name='title' content={postData.title} />
        <meta name='author' content='Anton Guinto' />
        <meta name='description' content={parsedHTMLContent} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://antonguinto.com/blogs' />
        <meta property='og:title' content={postData.title} />
        <meta property='og:description' content={parsedHTMLContent} />
      </Head>
      <BlogLayout>
        <article className='flex flex-col gap-2 mt-10'>
          <DateView dateString={postData.date} />
          <h1 className='blog-title'>{postData.title}</h1>
          <div
            className='unreset'
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </BlogLayout>
    </div>
  );
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
