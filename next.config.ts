import type { NextConfig } from "next";

const config: NextConfig = {
  // Old WordPress URLs → new pages, so existing links and Google results keep working.
  async redirects() {
    return [
      { source: "/about/:path*", destination: "/nosotros", permanent: true },
      { source: "/services", destination: "/servicios", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/careers", destination: "/nosotros#empleo", permanent: true },
      { source: "/formularios-administrativos", destination: "/formularios", permanent: true },
      { source: "/formularios-de-proyectos", destination: "/formularios", permanent: true },
    ];
  },
};

export default config;
