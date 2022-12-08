import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
