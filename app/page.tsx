import DigitalRain from "@/components/digital-rain";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="m-2 p-2">
      <div className="">
        <DigitalRain />
      </div>
      <div className="absolute left-1/2 bottom-10 mt-20 bg-black/50 p-8 rounded-3xl border border-lime-300 w-70%">
        <div className="space-y-2">
          <div className="text-green-500">
            <h2 className="text-xl font-mono mb-2">Contract Address: 0x1234...5678</h2>
            <p className="font-mono text-sm break-all"></p>
          </div>

          <div className="text-green-500">
            <h2 className="text-xl font-mono mb-2">$BONES</h2>
            <p className="font-mono text-2xl">1,000,000</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
