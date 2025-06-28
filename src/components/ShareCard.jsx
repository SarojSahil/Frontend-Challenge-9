import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import SocialIcons from "./SocialIcons";

const ShareCard = () => {

  const [isCopied, setIsCopied] = useState(false);
  const url = "https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V";

  const handleCopyUrl = () => {
    window.navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  }

  return (
    <section className="text-black-300 w-full max-w-xl bg-beige-50 rounded-3xl p-8 sm:py-8 sm:px-12 shadow-[6px_6px_#888080] mx-auto">
      <h1 className="text-3xl mb-6 font-bold">Share this challenge</h1>

      <SocialIcons />

      <p className="mb-4 text-lg font-semibold">or copy link</p>

      <div className="flex items-center bg-gray gap-4 px-4 py-2 rounded-xl">
        <p className="overflow-x-auto horizantal-scrollbar">{url}</p>
        <button
          onClick={handleCopyUrl}
          className=" font-bold flex items-center justify-center cursor-pointer">
          {isCopied ? <>Copied <IoMdCheckmark className="ml-1 stroke-12" /></> : "Copy"}
        </button>
      </div>
    </section>
  );
}

export default ShareCard;