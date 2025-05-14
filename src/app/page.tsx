"use client"
import Image from "next/image";
import Footer from "../sections/Footer";

export default function Home() {

  return (
    <>
      <header className="position-sticky top-0 z-50 w-full h-20">
        <nav className="flex md:justify-around sm:justify-between items-center p-4">
            <div className="navbarMobile flex justify-between items-center w-full xl:hidden">
                <div className="flex justify-center items-center">
                    <a href="#home">
                        <Image src={'/img/abstractly.png'} alt="home" width={112} height={32} />
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <button>
                        <Image src={'/img/menu-fill.svg'} alt="hamburger" width={24} height={24} />
                    </button>
                </div>
            </div>
            <div className="navbar_links hidden xl:flex items-center gap-20">
                <div className="flex justify-center items-center">
                    <a href="#home">
                        <Image src={'/img/abstractly.png'} alt="home" width={112} height={32} />
                    </a>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="navbar_cta_buttons xl:flex items-center gap-2.5 hidden ">
                <button className="flex justify-center items-center bg-white text-neutral-900 px-4 py-1 text-lg rounded-sm shadow-md stroke-neutral-200">
                    Learn more      
                </button>
                <button className="flex justify-center items-center bg-indigo-700 text-white px-4 py-1 text-lg rounded-sm">
                    See pricing 
                </button>
            </div>
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-xl text-center font-semibold pt-20">
          Hello world! Write your content here.
        </h1>
      </main>
      <Footer />
    </>
  );
}
