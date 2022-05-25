import Head from "next/head";
export default function Meta({ title, desc, favicon }) {
  return (
    <Head>
      <title>{title} | Mirror Institue</title>
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta
        name="og:title"
        property="og:title"
        content={`${title} | Mirror Institute`}
      />
      <meta name="og:description" property="og:description" content={desc} />
      <meta property="og:site_name" content="Mirror Institute" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} | Mirror Institute`} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <meta property="og:image" content="" />
      <meta name="twitter:image" content="" />
      <meta name="robots" content="index, follow"></meta>
    </Head>
  );
}
