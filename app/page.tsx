import React from "react";
import Image from "next/image";
import DigitalRain from "@/components/digital-rain";
import { BsTelegram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const cursorStyle = {
  animation: "blink 0.7s steps(1) infinite",
};

const keyframes = `
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

export default function Home() {
  return (
    <>
      <style>{keyframes}</style>
      <div className="relative min-h-screen">
        <div className="m-2 p-2">
          <div className="">
            <DigitalRain />
          </div>
          <div className="mt-36 pt-4 flex text-3xl text-hack-500 justify-self-center items-center">
            <Image
              src="/kundalini.gif"
              alt="Kundalini who"
              width={250}
              height={250}
            ></Image>
          </div>

          {/* socail link */}
          <div className="mt-8 px-20 flex space-x-8 text-3xl text-hack-500 justify-self-center items-center">
            <a href="https://t.me/kundalinicrushcto">
              <BsTelegram />
            </a>
            <a href="https://x.com/Girl_Kundalini">
              <FaSquareXTwitter />
            </a>
            <a href="https://dexscreener.com/solana/6ccekxyxb8bueyafsgsmhbhz19sjhoozfapvzrxgskts">
              <Image
                src="/dex-screener-seeklogo.svg"
                alt="Dex Logo"
                width={25}
                height={25}
              />
            </a>
          </div>

          {/* token box */}
          <div className=" justify-self-center mt-10 bg-black/50 p-4 rounded-3xl border border-hack-500 shadow-md shadow-hack-500/60 w-[80%] justify-center">
            {/* ca */}
            <div className="space-y-2 ">
              <div>
                <h2 className="text-xl text-center font-mono mb-2 text-hack-500">
                  <span className=" text-cyan-500">Contract Address: </span>
                  <a
                    href="https://gmgn.ai/sol/token/r5D9zzSM_A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump?tab=activity"
                    className=" hover:underline"
                  >
                    A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump
                  </a>
                  <span
                    className="inline-block w-2 h-5 ml-1 bg-pink-400/80"
                    style={cursorStyle}
                  ></span>
                </h2>
                <p className="font-mono text-sm break-all"></p>
              </div>

              <div className="text-green-500">
                <h2 className="text-xl font-mono mb-2">$Kundalini</h2>
                <p className="font-mono text-2xl">1,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
