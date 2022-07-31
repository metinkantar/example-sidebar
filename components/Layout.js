/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaUser,
  FaSearch,
  FaHome,
  FaFolder,
  FaList,
  FaMarkdown,
  FaUserFriends,
  FaPalette,
  FaRocket,
  FaChartPie,
  FaStackExchange,
  FaSpinner,
  FaCogs,
  FaSortDown,
  FaAngleDoubleRight,
  FaBars
} from "react-icons/fa";

const Layout = ({ title, desc, children }) => {
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3 text-white" href="index.html">
          Example
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <FaBars color="gray" />
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <FaSearch />
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaUser color="white" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
               
                <Link href="/">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                      <FaHome size={20} className="me-2" />
                    </div>
                    <span className="">Dashboard</span>
                  </a>
                </Link>
                <Link href="/users">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                      <FaHome size={20} className="me-2" />
                    </div>
                    <span className="">Users</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              @MeKa
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          {children}
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Example 2022
                </div>
                <div>
                  <a>Privacy Policy</a>
                  &middot;
                  <a>Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;

