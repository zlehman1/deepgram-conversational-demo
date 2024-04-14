"use client";
export const runtime = "edge";
import { useEffect } from "react";
import Conversation from "./components/Conversation";

export default function Home() {
  useEffect(() => {
  }, []);

  return (
    <>
      <div className="h-full overflow-hidden">
        {/* height 4rem */}
        <div className="bg-gradient-to-b from-black/50 to-black/10 backdrop-blur-[2px] h-[4rem] flex items-center">
          <header className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between">
            <div>
            <span className="gradient-shadow bg-gradient-to-r to-[#13EF93]/50 from-[#149AFB]/80 rounded">
            <a className="flex items-center" href="/">
                <span className=" text-3xl">AI Voice</span>
              </a>
              </span>
            </div>
          </header>
        </div>

        {/* height 100% minus 8rem */}
        <main className="mx-auto max-w-7xl  px-4 md:px-6 lg:px-8 h-[calc(100%-8rem)]">
          <Conversation />
        </main>

        {/* height 4rem */}
      </div>
    </>
  );
}
