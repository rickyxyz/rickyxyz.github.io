import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.tsx";
import App from "./App.tsx";
import Footer from "./Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
