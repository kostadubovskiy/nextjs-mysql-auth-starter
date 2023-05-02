"use client";
import { signOut } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignOut() {
  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all btn btn-primary"
      onClick={() => signOut()}
    >
      Goddammit, sign me out!
    </button>
  );
}
