import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({
  title,
  description = "Digital Markedsføring der skaber performance! - Vi skaber succesfulde influencer marketing kampagner ved at forbinde influencers og brands",
  keywords = "influencer, influencer marketing, marketing, influency marketing agency, agency, influencer agency, digital markedsføring, markedsføring, brands, kampagner, influencer kampagner",
  image = "https://piliagency.com/logo.jpg",
}) {
  const router = useRouter();

  return (
    <Head>
      <title>{title ? `${title} — Pili Agency` : "Pili Agency"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={`https://piliagency.com${router.pathname}`} />
      <link rel="shortlink" href={`https://piliagency.com${router.pathname}`} />
      <link rel="icon" type="image/jpg" href="/logo.jpg" />
      <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
      <meta name="MobileOptimized" content="width" />
      <meta name="HandheldFriendly" content="true" />

      <meta property="og:url" content={`https://piliagency.com${router.pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} — Pili Agency` : "Pili Agency"} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="https://piliagency.com/" />
      <meta property="twitter:url" content={`https://piliagency.com${router.pathname}`} />
      <meta name="twitter:title" content={title ? `${title} — Pili Agency` : "Pili Agency"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
