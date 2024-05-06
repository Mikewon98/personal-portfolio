"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiDart,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      text: "React",
      icon: SiReact,
    },
    {
      text: "Next Js",
      icon: SiNextdotjs,
    },
    {
      text: "Javascript",
      icon: SiJavascript,
    },
    {
      text: "Node Js",
      icon: SiNodedotjs,
    },
    {
      text: "Flutter",
      icon: SiFlutter,
    },
    {
      text: "Dart",
      icon: SiDart,
    },
    {
      text: "Java",
      icon: FaJava,
    },
    {
      text: "Postgres",
      icon: SiPostgresql,
    },
    {
      text: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      text: "Git",
      icon: SiGit,
    },
  ];

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title
        text='Skills 🔪'
        className='flex flex-col items-center justify-center -rotate-6'
      />
      <HoverEffect items={skills} />
    </div>
  );
}
