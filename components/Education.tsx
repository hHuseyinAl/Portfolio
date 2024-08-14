import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'

const Education = () => {
    return (
        <div id='education' className='h-dvh flex justify-center items-center max-md:h-1/2 max-md:pt-52'>
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-base sm:text-4xl text-black mt-2 mb-4 dark:text-neutral-50">
                    Educational History
                </p>
                <p className="text-base sm:text-2xl text-black mt-2 mb-4 dark:text-neutral-300">
                    University of Yalova
                </p>
                <p className="text-md text-neutral-600 dark:text-neutral-400">
                    Bachelor's Degree | Sep 2016 - Dec 2021
                    Energy Systems Engineering (30% English)
                </p>
                <p className="text-md text-neutral-600 dark:text-neutral-400">
                    Studied at English preparatory class in 2016-2017 (Level B2)
                </p>
            </BackgroundGradient>
        </div>
    )
}

export default Education