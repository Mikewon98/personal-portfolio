import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import { BiBriefcaseAlt } from "react-icons/bi";
import Title from "./Title";

function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse lg:flex-row lg:gap-0 gap-16 items-center justify-between animate-move-up'>
      <div className='space-y-10'>
        <h1 className='text-4xl lg:text-7xl font-bold text-center lg:text-left'>
          Nice to meet you! 👋 <br />{" "}
          <span className='underline underline-offset-8 decoration-green-500'>
            {"I'm Michael."}
          </span>{" "}
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
          {
            "      Based in Ethiopia, I'm a FullStack developer passionate about building a modern web application and mobile app that users love. "
          }
        </p>
        <Link
          href={"mailto:mikewon98@gmail.com"}
          className='inline-block group'
        >
          <Title text='Contact Me 📬' />
        </Link>
      </div>
      <div className='relative'>
        <div className='w-52 h-52 sm:w-72 sm:h-72 space-y-3 -rotate-[30deg] relative'>
          <div className='flex gap-3 translate-x-8'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-500'></div>
            <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-indigo-500'></div>
          </div>
          <div className='flex gap-3 -translate-x-8'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-indigo-500'></div>
            <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-green-500'></div>
          </div>
          <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
          <MovingBorderBtn
            borderRadius='0.5rem'
            className='p-3 font-semibold gap-2'
          >
            <BiBriefcaseAlt className='h-6 w-6' /> <p>Available For Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
