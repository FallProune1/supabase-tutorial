import "@/app/globals.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className=" text-blue-100 w-full mt bg-slate-950 h-24 flex items-center justify-center">
      <ol className="flex items-center min-w-96 justify-between ">
        <li className=" transition-all  hover:text-lg hover:text-white hover:font-medium hover:underline decoration-blue-500">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="transition-all  hover:text-lg hover:text-white hover:font-medium hover:underline decoration-indigo-500">
          <Link href={""}>Blog</Link>
        </li>
        <li className="transition-all  hover:text-lg hover:text-white hover:font-medium hover:underline decoration-rose-500">
          <Link href={""}>Contacto</Link>
        </li>
        <li className="transition-all  hover:text-lg hover:text-white hover:font-medium hover:underline decoration-purple-500">
          <Link href={"/SignIn"}>Sign in</Link>
        </li>
      </ol>
    </div>
  );
}
