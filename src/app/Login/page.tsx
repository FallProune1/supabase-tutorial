import { IoMail, IoPersonSharp, IoLockClosed } from "react-icons/io5";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center ">
      <div className=" mt-20 flex flex-col items-center justify-center rounded-3xl bg-zinc-700 bg-opacity-10 px-20 py-24">
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" text-5xl  font-semibold">
            <strong className=" bg-gradient-to-bl from-amber-300 to-amber-100 bg-clip-text font-bold text-transparent">
              Inicia Sesion{" "}
            </strong>
            👾
          </h1>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <p className=" mt-10 text-lg font-semibold text-blue-100">
            No tienes una cuenta?{" "}
            <Link href={"/SignUp"}>
              <strong className=" font-extrabold text-purple-300 underline">
                Registrate
              </strong>
            </Link>
          </p>
          <span className="mt-5 flex items-center">
            <IoPersonSharp className="text-2xl text-blue-100"></IoPersonSharp>
            <input
              type="text"
              className=" ml-5 h-12 w-96 rounded-xl bg-black p-5 font-semibold text-blue-100 transition-all focus:outline focus:outline-4 focus:outline-amber-400"
              placeholder="Username"
            />
          </span>
          <span className="mt-5 flex items-center">
            <IoMail className="text-2xl text-blue-100"></IoMail>
            <input
              type="email"
              className=" ml-5 h-12 w-96 rounded-xl bg-black p-5 font-semibold text-blue-100 transition-all focus:outline focus:outline-4 focus:outline-amber-400"
              placeholder="Correo electrónico"
            />
          </span>
          <span className=" mt-5 flex items-center">
            <IoLockClosed className="text-2xl text-blue-100"></IoLockClosed>
            <input
              type="text"
              className=" ml-5 h-12 w-96 rounded-xl bg-black p-5 font-semibold text-blue-100 transition-all focus:outline focus:outline-4 focus:outline-amber-400"
              placeholder="Contraseña"
            />
          </span>

          <button className=" mt-8 h-14 w-64 rounded-xl bg-amber-500 text-xl font-semibold text-white hover:bg-amber-400 ">
            Iniciar
          </button>
        </div>
      </div>
    </main>
  );
}
