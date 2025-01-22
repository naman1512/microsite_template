"use client";
import { useState } from "react";
import styles from "./SideNavigation.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function LeftSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (Visible in Mobile View) */}
      <button
        className={`${styles.menuToggle} ${sidebarOpen ? styles.open : ""}`} // Add 'open' class when sidebar is open
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`${styles.leftNav} ${sidebarOpen ? styles.open : ""}`}>
        <h2 className={styles.heading}>Microsite Name</h2>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
          <li>Page 4</li>
        </ul>
      </aside>
    </>
  );
}
