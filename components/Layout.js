import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="header-height">{children}</main>
      <SiteFooter />
    </>
  );
}
