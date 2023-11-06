import React from "react";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-spen-sans",
  weight: "600",
});

const SignUpBanner = () => {
  return (
    <div className="bg-[url('/assets/images/sign-shape.png')] w-full min-h-[300px] bg-cover bg-no-repeat bg-bottom p-4">
      <p
        className={cn(
          "mb-2 text-white font-semibold text-lg",
          fontSans.variable
        )}
      >
        KlikCuan
      </p>
      <img
        src="/assets/images/wallet.svg"
        alt="wallet"
        className="mx-auto mb-3 w-[200px] max-w-full"
      />
    </div>
  );
};

export default SignUpBanner;
