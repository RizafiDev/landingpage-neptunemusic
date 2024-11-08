"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurFade from "@/components/ui/blur-fade";
import Meteors from "@/components/ui/meteors";

export function Hero() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[660px] w-full flex-col items-center justify-center overflow-hidden bg-black px-72" id="home">
      <GradualSpacing
      className=" text-center text-4xl font-bold -tracking-widest  text-white  md:text-7xl"
      text="Distribute and promote"
    />
      <GradualSpacing
      className="font-display text-center text-4xl font-bold -tracking-widest  text-white  md:text-7xl"
      text="your music globally"
    />

     <BlurIn
      word="TikTok's all-in-one platform for artists and labels"
      className="text-xs font-medium text-white "
    />

<BlurFade  inView>
<RainbowButton>Get Started</RainbowButton></BlurFade>
<Meteors number={40} />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#FAFAFA"}
        refresh
      />
    </div>
  );
}

export default Hero