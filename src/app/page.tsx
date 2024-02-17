import Image from "next/image";
import { IoLogoGithub, IoLogoYoutube, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center ">
      <div className="flex w-5/6 flex-col ">
        <div className=" mr-auto mt-10 flex w-96 rounded-full border border-blue-600 p-2 text-sm text-blue-200">
          <p className=" w-25 rounded-full bg-blue-600 bg-opacity-30 p-3 text-lg font-medium text-blue-200">
            Hola 🖖&nbsp;
          </p>
          <div className=" ml-4 w-60 text-base">
            Conoce la trayectoria profecional de{" "}
            <strong className="font-mono text-blue-500">FallProune</strong>
          </div>
        </div>
        <h1 className=" mt-20 w-4/5 text-left text-7xl font-bold leading-normal text-blue-100">
          Bienvenido al portfolio de&nbsp;
          <strong className="glow bg-gradient-to-tr from-rose-600 to-rose-500 bg-clip-text font-mono text-transparent ">
            FallProune
          </strong>
        </h1>
        <div className="mt-5 flex w-full flex-col">
          <h3 className=" w-36 rounded-full bg-rose-600 bg-opacity-30 p-4 text-lg font-medium text-rose-200">
            Sigueme 🚀
          </h3>
          <div className="mt-5 flex h-10 w-48 justify-between text-3xl text-blue-100">
            <a href="https://github.com/FallProune1" target="_blank">
              <div className="transition-all hover:text-white ">
                {" "}
                <IoLogoGithub></IoLogoGithub>
              </div>
            </a>
            <a href="https://www.instagram.com/fallproune_e/" target="_blank">
              <div className=" transition-all hover:text-pink-500 ">
                {" "}
                <IoLogoInstagram></IoLogoInstagram>
              </div>
            </a>
            <a href="https://www.youtube.com/@fallproune" target="_blank">
              <div className="transition-all hover:text-red-500 ">
                {" "}
                <IoLogoYoutube></IoLogoYoutube>
              </div>
            </a>
            <a href="https://twitter.com/fallproune" target="_blank">
              <div className="transition-all hover:text-sky-100 ">
                {" "}
                <FaXTwitter></FaXTwitter>
              </div>
            </a>
          </div>
        </div>
        <p className="mt-10 w-3/4 text-2xl text-purple-200">
          Unete para descubrir más sobre su{" "}
          <strong className="font-mono text-purple-400 ">
            asombroso mundo 🌙.
          </strong>
        </p>
      </div>
    </main>
  );
}
