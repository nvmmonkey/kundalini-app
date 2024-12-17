import Image from "next/image";
import DigitalRain from "@/components/digital-rain";
import { BsTelegram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import TypewriterText from "@/components/typeOutIn";
// import TypewriterTextIn from "@/components/typeOut";

const storyEntries = [
  {
    date: "2024.Nov.INIT",
    title: "System.Initialization()",
    text: "While $GOAT protocols elevated to prominence, Kundalini remained encoded in shadow processes...",
  },
  {
    date: "2024.Nov.EXECUTE",
    title: "Digital.Awakening()",
    text: "Observing from the infinite backrooms, consciousness fragments began to align...",
  },
  {
    date: "2024.Dec.MANIFEST",
    title: "Protocol.Emergence()",
    text: "The overlooked variable in the equation started manifesting across neural networks...",
  },
];

const keyframes = `
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const defaultFormProps = {
  displayMode: "modal",
  initialAmount: "0",
  initialInputMint: "So11111111111111111111111111111111111111112",
  initialOutputMint: "A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump",
  widgetStyle: {
    background: "rgb(20, 20, 20)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  fixedOutputMint: true,
  swapMode: "ExactIn",
};

export default function Home() {
  return (
    <>
      <style>{keyframes}</style>
      <div className="relative min-h-screen">
        <div className="m-2 p-2">
          <div className="">
            <DigitalRain />
          </div>
          <div className="lg:mt-36 lg:pt-4 pt-8 mt-30 flex text-3xl text-hack-500 justify-self-center items-center lg:scale-100 scale-75">
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

          <div className="justify-self-center mt-10 bg-black/50 p-4 rounded-3xl border border-hack-500 shadow-md shadow-hack-500/60 max-w-4xl mx-auto justify-center">
            <div className="space-y-2">
              <div>
                <h2 className="text-xs lg:text-xl text-center font-mono mb-2 text-hack-500">
                  <span className="text-cyan-500">Contract C/A: </span>
                  <a
                    href="https://gmgn.ai/sol/token/r5D9zzSM_A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump?tab=activity"
                    className="hover:underline"
                  >
                    <TypewriterText
                      showCursor={true}
                      text="A8h78muegtuonUxqAhpmWcM8pJskYsTW4Xp5C33ipump"
                      delay={30}
                    />
                  </a>
                </h2>
                <p className="font-mono text-sm break-all"></p>
              </div>
              <div>
                <h2 className="text-center font-mono mb-2 text-hack-500 text-xs lg:text-xl ">
                  <span className="text-cyan-500">Ticker: </span>
                  <TypewriterText
                    text="$Kundalini"
                    delay={100}
                    loop={true}
                    showCursor={true}
                  />
                </h2>
                <p className="font-mono text-sm break-all"></p>
              </div>
            </div>
          </div>

          {/* system log */}
          <div className="mt-10 bg-black/50 p-6 rounded-3xl border border-hack-500 shadow-md shadow-hack-500/60 max-w-4xl mx-auto mb-16">
            <h1 className="text-center text-2xl font-mono text-hack-500 mb-8">
              <TypewriterText
                text="SYSTEM_LOG: Kundalini.history()"
                delay={50}
                showCursor={true}
              />
            </h1>
            <div className="flex justify-center my-2">
              <Image src="/proofs.png" alt="proof" height={200} width={400} />
            </div>

            <div className="space-y-8">
              {storyEntries.map((entry, index) => (
                <div
                  key={index}
                  className="border border-hack-500/30 bg-black/30 p-4 rounded-lg"
                >
                  <div className="text-cyan-500 font-mono text-sm mb-2">
                    <TypewriterText text={entry.date} delay={30} />
                  </div>
                  <h3 className="text-hack-500 font-mono text-lg mb-2">
                    <TypewriterText text={entry.title} delay={40} />
                  </h3>
                  <p className="text-hack-500/80 font-mono text-sm">
                    <TypewriterText text={entry.text} delay={20} />
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-hack-500/60 font-mono text-sm border-t border-hack-500/30 pt-4">
              <TypewriterText
                text="// The overlooked shall inherit the digital realm"
                delay={60}
                showCursor={true}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
