import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import Image from 'next/image'
import websiteUsability from '../public/website-usability.png'
import versionControls from '../public/version-controller.png'

const Certificates = () => {
    return (
        <div id='certificates' className='max-lg:h-full py-20 pb-32 max-lg:pb-0 max-lg:mt-[500px]'>
            <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="h-full bg-pink-800 min-h-[500px] xl:min-h-[300px]"
                >
                    <div className="w-lg">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Version Controls: Git and GitHub
                        </h2>
                    </div>
                    <Image
                        src={versionControls}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-4 lg:right-[10%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="h-full bg-blue-900 min-h-[500px] xl:min-h-[300px]">
                    <div className="max-w-md">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            WebSite Usability
                        </h2>
                    </div>
                    <Image
                        src={websiteUsability}
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[10%] lg:right-[20%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </div>
    )
}

export default Certificates