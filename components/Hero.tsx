import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className='pt-36 h-dvh'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
                <Spotlight className='-top-40 -right-10 md:-top-20 md:-right-32 h-screen' fill='white' />
                <Spotlight className='top-10 right-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 right-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic with NextJS
                    </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words="Imagination and Beyond" />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, It&apos;s Hüseyin</p>
                    <TextGenerateEffect className='text-center text-sm md:text-lg lg:text-2xl' words="I'm a Front-End Developer" />
                    <a href="#projects">
                        <MagicButton title="Show My Projects" icon={<FaLocationArrow />} position='right' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero