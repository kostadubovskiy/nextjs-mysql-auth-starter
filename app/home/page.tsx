import SignOut from "@/components/sign-out";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <p className="text-slate-400 hover:text-sky-400 text-2xl font-mono"> Welcome to the home page! </p>
        <SignOut />
      </div>
    </div>
  );
}
