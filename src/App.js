import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import { Helmet, HelmetProvider } from "react-helmet-async";
import imageSeoHome from "./assets/img/logo.png";
import AnimatedRoutes from "Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Roberto Bolla - Portafolio</title>
        <meta
          name="description"
          content="Portafolio - Full Stack Developer. Servicios de creación de páginas web y desarrollo de aplicaciones. "
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
          content="Portafolio - Full Stack Developer. Servicios de creación de páginas web y desarrollo de aplicaciones."
        />
        <meta property="og:url" content="https://robertobolla.tech" />
        <meta property="og:image" content={imageSeoHome} />
        <meta name="twitter:title" content="Roberto Bolla - Portafolio" />
        <meta
          name="twitter:description"
          content="Portafolio - Full Stack Developer. Servicios de creación de páginas web y desarrollo de aplicaciones."
        />
        <meta name="twitter:image" content={imageSeoHome} />
        <meta name="twitter:card" content="sumaty_large_image" />
      </Helmet>

      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;

