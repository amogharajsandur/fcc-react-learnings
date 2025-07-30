import "./App.css"
import { Fragment } from "react";
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import MainContent from "./components/Maincontent.jsx"

export default function App() {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  )
}