"use client";

import {
  IoMail,
  IoPersonSharp,
  IoLockClosed,
  IoAlertCircle,
} from "react-icons/io5";
import Link from "next/link";
import { ReactEventHandler, useState } from "react";
import { supabase } from "@/supabase/client";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSigninUp, setIsSigninUp] = useState(false);

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          userName,
        },
      },
    });
    if (!error) {
      setIsSigninUp(true);
    }
    console.log(data, error);
  }

  const signUpMessage = (
    <div className="h- mt-10 flex w-96 rounded-3xl border border-purple-300 bg-purple-600 bg-opacity-10 p-7">
      <IoAlertCircle className="text-3xl text-purple-100"></IoAlertCircle>
      <div className=" ml-5 flex w-80 flex-col ">
        <h1 className="text-xl font-extrabold text-purple-100">
          ¡Email enviado!{" "}
        </h1>
        <p className="font-regular mt-5 text-sm text-purple-100 ">
          Revisa tu bandeja para confirmar tu registro
        </p>
      </div>
    </div>
  );

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center ">
      <div className=" mt-20 flex flex-col items-center justify-center rounded-3xl bg-zinc-700 bg-opacity-10 px-20 py-24">
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" text-5xl  font-semibold">
            <strong className=" bg-gradient-to-bl from-purple-300 to-purple-100 bg-clip-text font-bold text-transparent">
              Crea tu cuenta{" "}
            </strong>
            ✨
          </h1>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <p className=" mt-10 text-lg font-semibold text-blue-100">
            Ya tienes una cuenta?{" "}
            <Link href={"/Login"}>
              <strong className=" font-extrabold text-amber-300 underline">
                Inicia Sesion
              </strong>
            </Link>
          </p>
          <form
            onSubmit={handleSignUp}
            className=" mt-10 flex flex-col items-center justify-center"
          >
            <span className="mt-5 flex items-center">
              <IoPersonSharp className="text-2xl text-blue-100"></IoPersonSharp>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className=" ml-5 h-12 w-96 rounded-xl bg-black p-5 font-semibold text-blue-100 transition-all focus:outline focus:outline-4 focus:outline-purple-400"
                placeholder="Nombre de usuario"
              />
            </span>
            <span className="mt-5 flex items-center">
              <IoMail className="text-2xl text-blue-100"></IoMail>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" ml-5 h-12 w-96 rounded-xl bg-black p-5 font-semibold text-blue-100 transition-all focus:outline focus:outline-4 focus:outline-purple-400"
                placeholder="Correo electrónico"
              />
            </span>
            <span className=" mt-5 flex items-center">
              <IoLockClosed className="text-2xl text-blue-100"></IoLockClosed>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" ml-5 h-12 w-96 rounded-xl bg-black p-5 font-semibold text-blue-100 transition-all focus:outline focus:outline-4 focus:outline-purple-400"
                placeholder="Contraseña"
              />
            </span>

            <button
              type="submit"
              className=" mt-8 h-14 w-64 rounded-xl bg-purple-500 text-xl font-semibold text-white hover:bg-purple-400 "
            >
              Registrarse
            </button>
          </form>
          {isSigninUp && signUpMessage}
        </div>
      </div>
    </main>
  );
}
