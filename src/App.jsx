import "./App.css"
import React, { Fragment } from "react";
import Header from "./components/header.jsx"
import MainContent from "./components/MainContent.jsx"

export default function App() {
  return (
    <Fragment>
      <Header />
      <MainContent />
    </Fragment>
  )
}