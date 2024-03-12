import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import { useEffect } from "react";
import imageSeoHome from "../../assets/img/logo.png";
import { Helmet } from "react-helmet-async";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Roberto Bolla - Blog</title>
        <meta
          name="description"
          content="Mi Portafolio - Full Stack Developer. Servicios de creación de páginas web y desarrollo de aplicaciones. "
        />
        <meta
          name="keywords"
          content="agencia de sofware, agencia de marketing, web desing, programador full stack"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://robertobolla.tech" />
        <meta name="author" content="Roberto Bolla" />
        <meta name="publisher" content="Roberto Bolla" />
        {/* Social Media Tags */}
        <meta property="og:title" content="Roberto Bolla - Portafolio" />
        <meta
          property="og:description"
          content="Mi Portafolio - Full Stack Developer. Servicios de creación de páginas web y desarrollo de aplicaciones."
        />
        <meta property="og:url" content="https://robertobolla.tech" />
        <meta property="og:image" content={imageSeoHome} />
        <meta name="twitter:title" content="Roberto Bolla - Portafolio" />
        <meta
          name="twitter:description"
          content="Mi Portafolio - Full Stack Developer. Servicios de creación de páginas web y desarrollo de aplicaciones."
        />
        <meta name="twitter:image" content={imageSeoHome} />
        <meta name="twitter:card" content="sumaty_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-28">Blog</div>
      <Footer />
    </Layout>
  );
}

export default Blog;
