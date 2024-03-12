import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import Header from "components/services/Header";
import ServicesList from "components/services/ServicesList";
import coding_img from "assets/img/services/coding.png";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import imageSeoHome from "../../assets/img/logo.png";

const posts_software = [
  {
    title: "Boost your conversion rate",
    href: "#",
    img: coding_img,
    category: {
      name: "Article",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    img: coding_img,
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    img: coding_img,
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

const posts_design = [
  {
    title: "Boost your conversion rate",
    href: "#",
    img: coding_img,
    category: {
      name: "Article",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    img: coding_img,
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    img: coding_img,
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Roberto Bolla - Servicios</title>
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
      <div className="pt-28">
        <Header />
        <div className="py-12 bg-gray-50"></div>
        <ServicesList
          posts={posts_software}
          section_title={"Software and Product Development"}
        />
        <ServicesList posts={posts_design} section_title={"Design Services"} />
      </div>
      <Footer />
    </Layout>
  );
}

export default Services;
