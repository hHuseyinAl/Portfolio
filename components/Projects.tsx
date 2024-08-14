import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import image from '../public/responsive 1.png'
import image2 from '../public/shopping-cart.png'

const Projects = () => {
    return (
        <div id='projects' className='h-dvh flex justify-around max-lg:block max-lg:mt-[600px]'>
            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Movie App
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="h-20 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            This web app is coded with Reactjs using TMDB API and completely responsive. Also Login and SignUp operations are performed and data is stored with Firebase Authentication and Firestore Database.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={image}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-start items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={100}
                                as={Link}
                                href="https://github.com/hHuseyinAl/Movie-App"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white"
                            >
                                Go to GitHub Repo →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Shopping Cart
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="h-20 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            A shoppingCart web app that includes Home and Store pages. Also has Cart section that you can organize the products.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={image2}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-start items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={100}
                                as={Link}
                                href="https://github.com/hHuseyinAl/shoppingCart"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white"
                            >
                                Go to GitHub Repo →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    )
}

export default Projects