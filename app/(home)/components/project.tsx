import React from "react";
import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Website",
      tech: [SiNextdotjs, SiPostgresql, SiTailwindcss],
      link: "/",
      cover: "/Ecommerce-screenshot.png",
      background: "bg-blue-500",
    },
    {
      title: "Biniyam Woodworks",
      tech: [SiNextdotjs, SiJavascript, SiTailwindcss],
      link: "https://biniyamwoodworks.com/",
      cover: "/biniyam_woodworks_screenshot.PNG",
      background: "bg-red-500",
    },

    {
      title: "Yokan Trading Mobile App",
      tech: [SiFlutter, SiDart, SiSupabase, SiPostgresql],
      link: "/",
      cover: "/yokan-trading-app.png",
      background: "bg-green-500",
    },
    {
      title: "Yokan Trading Logistics Web",
      tech: [SiReact, SiNodedotjs, SiPostgresql, SiJavascript],
      link: "https://yokantrading.com/",
      cover: "/yokan-trading.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title
        text='Projects 🎨'
        className='flex flex-col items-center justify-center rotate-6'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => {
          return (
            <Link href={project.link} target='_blank' key={index}>
              <div className={cn("p-3 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className='w-full space-y-5 cursor-pointer'
                >
                  <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => {
                        return <Icon className='w-8 h-5' key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
