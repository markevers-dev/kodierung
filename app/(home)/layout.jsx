import { Header, Footer } from "components";

const Layout = async ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
