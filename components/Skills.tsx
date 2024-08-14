import React from 'react'
import { GlareCard } from './ui/glare-card'

const Skills = () => {
    return (
        <div id='skills' className='h-dvh grid grid-cols-5 max-lg:grid-cols-2 max-lg:gap-1 max-lg:pl-20 max-md:pl-10 max-sm:pl-0 grid-flow-row pt-20'>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>NEXTJS</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>FRAMER MOTION</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>TAILDWIND CSS</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>BOOTSTRAP</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>JAVASCRIPT</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>TYPESCRIPT</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>REACTJS</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>MATERIAL UI</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>ACETERNITY UI</p>
            </GlareCard>
            <GlareCard className='flex justify-center items-center'>
                <p className='text-xl font-semibold'>GIT</p>
            </GlareCard>
        </div>
    )
}

export default Skills