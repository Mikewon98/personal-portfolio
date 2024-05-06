import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/michael-wondwossen-9837491b3/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/Mikewon98",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://twitter.com/MichaelWon15943",
      label: "X",
      Icon: BsTwitterX,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className='text-3 font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
        Michael Wondwossen 👨🏻‍💻
      </h1>
      <div className='flex items-center gap-5 '>
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all' />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
