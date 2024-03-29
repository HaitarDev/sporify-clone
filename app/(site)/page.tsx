import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-scroll rounded-md bg-neutral-900  border-y-8 border-t-4 border-black ">
      <Header />
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <div>List of Songs!</div>
      </div>
    </div>
  );
}
