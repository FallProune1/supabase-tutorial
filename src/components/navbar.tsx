import "@/app/globals.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className=" mt flex h-24 w-full items-center justify-center bg-black text-blue-100">
      <ol className="flex min-w-96 items-center justify-between ">
        <li className=" decoration-blue-500  transition-all hover:text-lg hover:font-medium hover:text-white hover:underline">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="decoration-indigo-500  transition-all hover:text-lg hover:font-medium hover:text-white hover:underline">
          <Link href={""}>Blog</Link>
        </li>
        <li className="decoration-rose-500  transition-all hover:text-lg hover:font-medium hover:text-white hover:underline">
          <Link href={""}>Contacto</Link>
        </li>
        <li className="decoration-purple-500  transition-all hover:text-lg hover:font-medium hover:text-white hover:underline">
          <Link href={"/SignUp"}>Sign Up</Link>
        </li>
      </ol>
    </div>
  );
}
