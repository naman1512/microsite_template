"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./HeaderNavigation.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/Bcg.svg" alt="Logo" width={100} height={50} />
        <h1 className={styles.heading}>Internal Microsites</h1>
      </div>
     
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Directory"
          className={styles.searchInput}
        />
        <FaSearch className={styles.searchIcon} />
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#home">Practice Areas</a>
          </li>
          <li>
            <a href="#about">CCO & Experts</a>
          </li>
          <li>
            <a href="#services">My BCG</a>
          </li>
          <li>
            <a href="#contact">Case Team & Services</a>
          </li>
        </ul>
      </nav>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
