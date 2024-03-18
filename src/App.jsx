import { Fragment, useState } from "react";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import booksData from "../public/booksData.json"

export default function App() {

 

  return (
    <Fragment>

      <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">

        <Navbar />

        <main className="my-10 lg:my-14">


          <BooksContainer />


        </main >

        <Footer />


      </div>

    </Fragment>
  )
}