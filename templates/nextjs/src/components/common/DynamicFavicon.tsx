import SiteInfo from "@/constants/siteInfo";
import Head from "next/head";
import React from "react";

interface Props {
  image?: string;
}

const DynamicFavicon = ({ image }: Props) => {
  const favicon = image || SiteInfo.logo;
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href={favicon} />
      <link rel="icon" href={favicon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
    </Head>
  );
};

export default DynamicFavicon;
