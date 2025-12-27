import "./App.css"
import { Fragment } from "react";
import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"

export default function App() {
  return (
    <Fragment>
      <Header />
      <MainContent />
    </Fragment>
  )
}