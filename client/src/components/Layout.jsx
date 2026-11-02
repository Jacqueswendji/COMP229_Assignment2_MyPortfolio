// Layout.jsx
// Provides the common layout shared by all portfolio pages.

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      {/* Navigation bar displayed on every page */}
      <Navbar />

      {/* Displays the page selected by the user */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Common footer displayed on every page */}
      <footer className="footer">
        <p>
          &copy; 2026 Jacques Honoré Wendji. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Layout;