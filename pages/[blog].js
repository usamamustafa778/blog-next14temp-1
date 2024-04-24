import { Container, FullContainer } from "@/components";
import Footer from "@/components/containers/Footer";
import MostRecent from "@/components/containers/MostRecent";
import NavMenu from "@/components/containers/NavMenu";
import { latestNews, mustRead } from "@/data/blogs";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog({ blog }) {
  console.log("Blog", blog);
  if (!blog) {
    return "loading...";
  }

  const {
    blogTitle,
    tagline,
    author,
    published_at,
    imageTitle,
    image,
    blogContent,
  } = blog;
  const markdownIt = new MarkdownIt();
  let content = null;
  if (blogContent) {
    content = markdownIt.render(blogContent);
  }

  return (
    <FullContainer>
      <NavMenu />
      <div className="w-full p-3 border-b text-center text-xs font-bold">
        We earn a commission for products purchased through some links in this
        article.
      </div>
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-blog gap-16">
          <div>
            {blogTitle && (
              <h1 className="text-5xl font-extrabold">{blogTitle}</h1>
            )}
            {tagline && (
              <p className="mt-5 text-2xl font-bold text-slate-500">
                {tagline}
              </p>
            )}
            {author && (
              <div className="flex items-center gap-10 text-sm mt-3 font-bold">
                <p>
                  By <span className="underline">{author}</span>
                </p>
                <p>PUBLISHED: {published_at}</p>
              </div>
            )}
            {image && (
              <>
                <div className="overflow-hidden relative h-72 lg:h-80 w-full bg-black mt-3">
                  <Image
                    title={imageTitle}
                    src={image}
                    fill={true}
                    loading="lazy"
                    alt="blog"
                    className="w-full h-full object-cover absolute top-0 scale-125"
                  />
                </div>
                <p className="text-end text-xs text-gray-500">{imageTitle}</p>
              </>
            )}
            {blogContent && (
              <div
                className="w-full text-left text-lg mt-8"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}

            <style jsx global>{`
              h2 {
                margin-bottom: 20px;
              }
              p {
                margin-bottom: 20px;
              }
            `}</style>
          </div>
          <div className="bg-black text-white hidden lg:block p-5 border-t-8 border-sky-400 h-fit sticky top-20">
            {latestNews.map((item, index) => (
              <Link
                href={item.url || "#"}
                key={index}
                className="grid grid-cols-2 gap-5 mb-5"
                title={item.imageTitle}
              >
                <div className="overflow-hidden relative h-32 w-full">
                  <Image
                    title={item.imageTitle}
                    src={item.image}
                    fill={true}
                    loading="lazy"
                    alt="blog"
                    className="w-full h-full object-cover absolute top-0 scale-125"
                  />
                </div>
                <p className="mt-3 font-bold">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <MostRecent />
      <Footer />
    </FullContainer>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { blog } = params;
  let selectedBlog = mustRead.find((item) => item.url === blog);

  if (!selectedBlog) {
    selectedBlog = latestNews.find((item) => item.url === blog);
  }

  return {
    props: {
      blogurl: blog,
      blog: selectedBlog,
    },
  };
}
