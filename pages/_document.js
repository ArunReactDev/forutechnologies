import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="preload" as="image" href="/assets/images/hero-bg.svg" />
        <link
          rel="preload"
          as="image"
          href="/assets/images/hero-banner-1.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/hero-banner-2.jpg"
        />
        <link rel="preload" as="image" href="/assets/images/hero-shape-1.svg" />
        <link rel="preload" as="image" href="/assets/images/hero-shape-2.png" />

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
