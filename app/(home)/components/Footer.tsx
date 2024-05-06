import React from "react";
import Navbar from "./Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className='border-t mt-10'>
      <Navbar className='flex-col gap-5' />
      <div className='flex flex-col items-center justify-center space-y-2'>
        <div className='flex items-center justify-center space-x-4'>
          <MdEmail className='text-white h-6 w-6' /> <p>mikewon98@gmail.com</p>
        </div>
        <div className='flex items-center justify-start space-x-4'>
          <FaPhoneAlt className='text-white h-6 w-6' /> <p>+251923974353</p>
        </div>
      </div>
    </div>
  );
}
