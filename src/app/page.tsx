import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center ">
      <div className="flex flex-col w-5/6 ">
        <div className=" mr-auto w-96 flex p-2 text-blue-200 border border-blue-600 rounded-full text-sm mt-10">
          <p className=" text-lg w-25 p-3 bg-blue-600 rounded-full bg-opacity-30 text-blue-200 font-medium">
            Hola 🖖&nbsp;
          </p>
          <div className=" w-60 ml-4 text-base">
            Conoce la trayectoria profecional de{" "}
            <strong className="text-blue-500 font-mono">FallProune</strong>
          </div>
        </div>
        <h1 className=" mt-20 text-7xl font-medium text-blue-100 leading-normal text-left w-4/5">
          Bienvenido al portfolio de&nbsp;
          <strong className="glow font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-rose-600 to-rose-500 ">
            FallProune
          </strong>
        </h1>
        <div className="flex w-full flex-col">
          <h3 className=" font-medium text-rose-200 text-xl bg-rose-600 bg-opacity-30 p-4 rounded-full w-40">
            Sigueme 🚀
          </h3>
          <div className="flex text-blue-100 justify-between w-60 text-3xl mt-5 h-10">
            <a href="https://github.com/FallProune1" target="_blank">
              <div className="hover:text-white transition-all hover:text-4xl">
                {" "}
                <IoLogoGithub></IoLogoGithub>
              </div>
            </a>
            <a href="https://www.instagram.com/fallproune_e/" target="_blank">
              <div className=" hover:text-pink-500 transition-all hover:text-4xl">
                {" "}
                <IoLogoInstagram></IoLogoInstagram>
              </div>
            </a>
            <a href="https://www.youtube.com/@fallproune" target="_blank">
              <div className="hover:text-red-500 transition-all hover:text-4xl">
                {" "}
                <IoLogoYoutube></IoLogoYoutube>
              </div>
            </a>
            <a href="https://twitter.com/fallproune" target="_blank">
              <div className="hover:text-sky-100 transition-all hover:text-4xl">
                {" "}
                <FaXTwitter></FaXTwitter>
              </div>
            </a>
          </div>
        </div>
        <p className="text-2xl text-purple-200 mt-10 w-3/4">
          Unete para descubrir más sobre su{" "}
          <strong className="text-purple-400 font-mono ">
            asombroso mundo 🌙.
          </strong>
        </p>
      </div>
    </main>
  );
}
