'use client'

import React, { useState } from 'react'
import { Meteors } from './ui/meteors'
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import photo from '../public/foto.jpg'
import Image from 'next/image';

const Contact = () => {

    const [copied, setcopied] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText("hasanhuseyinal@hotmail.com")

        setcopied(true)

        setTimeout(() => {
            setcopied(false)
        }, 3000);
    }

    return (
        <div id='contact' className='h-dvh flex justify-center items-center max-lg:h-1/2 max-md:mt-72 max-lg:mb-72 max-md:mb-40'>
            <div className="relative max-md:w-[500px] max-sm:w-[420px]">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start max-md:items-center">
                    <div className='flex gap-10 max-md:block max-md:p-4'>
                        <div className='w-60 max-md:w-96 border-gray-500 border-2 p-4 rounded-lg flex justify-center items-center mb-4 gap-4'>
                            <Image className='rounded-full' height={25} width={25} src={photo} alt="foto" />
                            <h1>
                                Hasan Hüseyin AL
                            </h1>
                        </div>
                        <div>
                            <a href="https://github.com/hHuseyinAl" target='_blank'>
                                <button className='w-96 border-gray-500 border-2 p-4 rounded-lg flex justify-center items-center gap-4 hover:bg-gray-600 transition'><FaGithub className='text-2xl' />Tap to View My GitHub Account</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-10 mb-4 max-md:block'>
                        <button onClick={handleClick} className='w-60 max-md:w-96 border-gray-500 border-2 p-4 rounded-lg flex justify-center items-center mb-4 gap-4 hover:bg-gray-600 transition'><IoMailOutline className='text-2xl' />{copied ? "Email Copied" : "Copy My Email"}</button>
                        <a href="https://www.linkedin.com/in/hasan-h%C3%BCseyin-al-4717a91b4/" target='_blank'>
                            <button className='w-96 border-gray-500 border-2 p-4 rounded-lg flex justify-center items-center gap-4 hover:bg-gray-600 transition'><FaLinkedin className='text-2xl' />Tap to View My Linkedin Account</button>
                        </a>
                    </div>
                    <p className="font-normal text-base text-slate-500 relative z-50">
                        I&apos;ll be waiting for you to contact with me. We&apos;ll be making great things together.
                    </p>
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    )
}

export default Contact