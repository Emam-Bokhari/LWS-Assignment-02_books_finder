import { Fragment } from "react";
import BooksGrid from "./components/BooksContainer/BooksGrid";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Fragment>

      <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">

        <Navbar />

        <main className="my-10 lg:my-14">

          <Header />
          <BooksGrid />
        </main >


      </div>

    </Fragment>
  )
}