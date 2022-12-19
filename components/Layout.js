import SEO from "./SEO";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function Layout({ children, title, description, keywords, image }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <SEO title={title} description={description} keywords={keywords} image={image} />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
