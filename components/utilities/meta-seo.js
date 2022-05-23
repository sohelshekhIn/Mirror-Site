import Head from 'next/head'
const Meta = ({ title, desc }) => (
    <Head>
        <title>{title} | Mirror Institue</title>
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title` | Mirror Institute`} />
        <meta name="og:description" property="og:description" content={desc} />
        <meta property="og:site_name" content="Mirror Institute" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
        <link rel="stylesheet" href="" />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="" />
        <script type="text/javascript" src="" ></script>
    </Head>
)
export default Meta