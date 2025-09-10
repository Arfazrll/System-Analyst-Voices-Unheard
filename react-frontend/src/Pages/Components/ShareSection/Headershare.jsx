import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Headershare = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-background py-6 px-4 md:px-12 flex flex-col gap-4 md:gap-6">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-darkText font-bold text-sm"
        >
          <ArrowLeft size={20} />
          Back to home
        </button>

        {/* Quick Exit — primary palette */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-[#C65C33] text-white text-sm font-abhaya px-4 py-1.5 rounded-[6px] hover:opacity-95"
        >
          Quick Exit
        </button>
      </div>

      {/* Title & Subtitle */}
      <div className="text-center px-2">
        <h1 className="font-aboreto text-[36px] md:text-[44px] leading-tight mb-2">
          SHARE YOUR STORY
        </h1>
        <p className="font-abhaya text-[16px] md:text-[18px] text-darkText leading-snug">
          YOUR VOICE MATTERS. SHARE YOUR EXPERIENCE ANONYMOUSLY
          <br />
          IN A SAFE, SUPPORTIVE SPACE.
        </p>
      </div>
    </header>
  );
};

export default Headershare;
