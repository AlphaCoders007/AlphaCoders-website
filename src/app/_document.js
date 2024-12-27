import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          {`
            /* Hide the content until theme is applied */
            body {
              visibility: hidden;
            }
          `}
        </style>
        {/* This script ensures that the correct theme is set before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem("theme") || "light";
                if (savedTheme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                document.body.style.visibility = "visible"; // Make the content visible once theme is applied
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}