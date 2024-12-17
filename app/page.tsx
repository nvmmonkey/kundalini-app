
import Image from "next/image";
import DigitalRain from "@/components/digital-rain";
import { BsTelegram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import TypewriterText from "@/components/typeOut";



const keyframes = `
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const defaultFormProps = {
  displayMode: 'modal',
  initialAmount: '0',
  initialInputMint: 'So11111111111111111111111111111111111111112',
  initialOutputMint: 'A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump',
  widgetStyle: { 
    background: 'rgb(20, 20, 20)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  fixedOutputMint: true,
  swapMode: "ExactIn"
};

const RPC_URL = "https://kessiah-4ap3n4-fast-mainnet.helius-rpc.com/";

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
            />
          </div>

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

          <div className="justify-self-center mt-10 bg-black/50 p-4 rounded-3xl border border-hack-500 shadow-md shadow-hack-500/60 xs:w-[90%] lg:w-[80%] justify-center">
            <div className="space-y-2">
              <div>
                <h2 className="xs:text-sm lg:text-xl text-center font-mono mb-2 text-hack-500">
                  <span className="text-cyan-500">Contract C/A: </span>
                  <a
                    href="https://gmgn.ai/sol/token/r5D9zzSM_A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump?tab=activity"
                    className="hover:underline"
                  >
                    <TypewriterText text="A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump" delay={30} />
                  </a>
                </h2>
                <p className="font-mono text-sm break-all"></p>
              </div>
              <div>
                <h2 className="xs:text-sm lg:text-xl text-center font-mono mb-2 text-hack-500">
                  <span className="text-cyan-500">Ticker: </span>
                  <TypewriterText text="$Kundalini" delay={100} />
                </h2>
                <p className="font-mono text-sm break-all"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}