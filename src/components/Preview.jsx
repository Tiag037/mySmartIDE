import React from "react";
import { useSelector } from "react-redux";

export default function Preview() {
  const tabs = useSelector((state) => state.tabs);
  const getcode = (lang) => {
    return tabs.find((obj) => obj.lang === lang).code;
  };

  const srcDoc = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>${getcode("css")}</style>
        </head>
        <body>
        ${getcode("html")}
            <script>${getcode("js")}</script>
        </body>
    </html>
    `;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
      <iframe
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        className="block w-full h-full "
      ></iframe>
    </div>
  );
}
