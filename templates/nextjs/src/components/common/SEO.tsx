import SiteInfo from "@/constants/siteInfo";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import DynamicFavicon from "./DynamicFavicon";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: Props) => {
  const router = useRouter();
  const { asPath } = router;
  const url = SiteInfo.url + asPath;
  const siteTitle = title ? title : SiteInfo.name
  const siteDescription = description ? description : SiteInfo.desc
  const siteImage = image ? image: SiteInfo.logo
  
  return (
    <>
      <DynamicFavicon image={image} />
      <Head>
        {/* General meta tags */}
        <title>{title ? `${title} | ${SiteInfo.name}` : SiteInfo.name}</title>
        <meta itemProp="name" content={siteTitle} />
        <meta itemProp="description" content={siteDescription} />
        <meta itemProp="image" content={siteImage} />
        <meta property="og:type" content="website" />

        {/* Open Graph meta tags for Facebook */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={SiteInfo.name} />
        {siteImage && <meta property="og:image" content={siteImage} />}

        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        {siteImage && <meta name="twitter:image" content={siteImage} />}

        {/* Google specific meta tags */}
        <meta itemProp="name" content={siteTitle} />
        <meta itemProp="description" content={description} />
        {siteImage && <meta itemProp="image" content={siteImage} />}

        <link rel="canonical" href={url} />
      </Head>
    </>
  );
};

export default SEO;
