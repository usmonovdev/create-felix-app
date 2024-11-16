import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Api, { URLs } from "@/api";
import { PostsType } from "@/types/api/posts";
import SEO from "@/components/common/SEO";
import WelcomeSection from "@/components/common/WelcomeSection";

interface Props {
  messages: Record<string, any>;
}

export default function Home({ getPosts }: { getPosts: PostsType[] }) {
  return (
    <>
      <SEO />
      <WelcomeSection />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  const locale = context.locale || "uz";
  const messages = (await import(`../messages/${locale}.json`)).default;

  // get new with server side rendering
  const getPosts = await Api.GET(URLs.POSTS);

  return {
    props: {
      messages,
      getPosts: getPosts.data,
    },
  };
};
