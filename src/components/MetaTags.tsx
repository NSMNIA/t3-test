import Head from 'next/head';
import { useRouter } from "next/router";
import { FC } from "react";

interface iMetaTags {
    title: string;
    description?: string;
    author?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

const MetaTags: FC<iMetaTags> = ({
    title = 'Revolved Design',
    description = '',
    author,
    ogTitle,
    ogDescription,
    ogImage = '/social/og-image.png',
    twitterCard = 'summary_large_image',
    twitterTitle,
    twitterDescription,
    twitterImage,
}) => {
    const router = useRouter();
    const host = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.host}` : '';
    const canonical = `${host}${router.route}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            {author && <meta name="author" content={author} />}
            <link rel="apple-touch-icon" sizes="180x180" href={`${host}/icons/apple-touch-icon.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${host}/icons/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${host}/icons/favicon-16x16.png`} />
            <link rel="manifest" href={`${host}/icons/site.webmanifest`} />
            <link rel="mask-icon" href={`${host}/icons/safari-pinned-tab.svg`} color="#c1f0e5" />
            <link rel="shortcut icon" href={`${host}/icons/favicon.ico`} />
            <link rel="icon" href={`${host}/icons/favicon.svg`} type="image/svg+xml" />
            <meta name="msapplication-TileColor" content={"#c1f0e5"} />
            <meta name="msapplication-config" content={`${host}/icons/browserconfig.xml`} />
            <meta name="theme-color" content={"#c1f0e5"} />
            <meta name="robots" content="index" />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={`${host}${ogImage}`} />
            <meta property="og:site_name" content="Revolved Design" />
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:site" content="@revolveddesign" />
            <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
            <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
            <meta name="twitter:image" content={`${host}${twitterImage || ogImage}`} />
            {canonical && <link rel="canonical" href={canonical} />}
        </Head>
    )
}

export default MetaTags;