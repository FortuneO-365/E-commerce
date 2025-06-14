'use client'

import React from 'react';
import Link from "next/link"

function Header () {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isBagOpen, setIsBagOpen] = React.useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false)
    }

    const toggleBag = () => {
        setIsBagOpen(!isBagOpen);
    };
    const closeBag = () => {
        setIsBagOpen(false)
    }
    
    return (
        <header className='max-h-screen '>
            <nav className="fixed top-0 w-full bg-white z-40 flex justify-between items-center border-b-2 border-b-black  py-2 px-4">
                <div className=' flex justify-center items-center gap-5 p-2'>
                    <span className=' inline-block' onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </span>
                    <Link href="/">
                        <div className="logo w-[100px]">
                            <img src="img/logo.png" alt="" className="size-full" />
                        </div>
                    </Link>
                </div>
                <ul className="hidden md:flex md:justify-center md:items-center md:gap-5 ">
                    <li>
                        <p>Shop</p>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                </ul>

                <ul className=' flex justify-center items-center gap-5'>
                    <li>
                        <span className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>

                        </span>
                    </li>
                    <li onClick={toggleBag}>
                        <span className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                        </span>
                    </li>
                </ul>
            </nav>
            {
             isNavOpen ?
                <div className="fixed h-[100vh] overflow-y-scroll w-full bg-white z-30 pt-16 pb-4">
                    <div className=' *:border-b *:border-b-black *:p-2'>
                        <Link href="/shop" className=' block' onClick={closeNav}>
                            <div className=" flex justify-start items-center gap-2 hover:gap-3 transition-all duration-200 ease-in group">
                                <span className=' inline-block py-2 group-hover:underline'>Shop All</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                        <Link href="/shop" className=' block' onClick={closeNav}>
                            <div className=" group">
                                <div className=" flex justify-start items-center gap-2 hover:gap-3 transition-all duration-200 ease-in">
                                    <span className=' inline-block py-2 group-hover:underline'>Men's Clothing</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>

                                </div>
                                <div className=" aspect-[4/3] w-[150px] overflow-hidden border-2 group-hover:border-neutral-300">
                                    <img src="img/men-clothing.jpg" alt="" className=" size-full object-cover" />
                                </div>
                            </div>
                        </Link>
                        <Link href="/shop" className=' block' onClick={closeNav}>
                            <div className=" group">
                                <div className=" flex justify-start items-center gap-2 hover:gap-3 transition-all duration-200 ease-in">
                                    <span className=' inline-block py-2 group-hover:underline'>Women's Clothing</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>

                                </div>
                                <div className=" aspect-[4/3] w-[150px] overflow-hidden border-2 group-hover:border-neutral-300">
                                    <img src="img/women-clothing.jpg" alt="" className=" size-full object-cover" />
                                </div>
                            </div>
                        </Link>
                        <Link href="/shop" className=' block' onClick={closeNav}>
                            <div className=" group">
                                <div className=" flex justify-start items-center gap-2 hover:gap-3 transition-all duration-200 ease-in">
                                    <span className=' inline-block py-2 group-hover:underline'>Accessories</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>

                                </div>
                                <div className=" aspect-[4/3] w-[150px] overflow-hidden border-2 group-hover:border-neutral-300">
                                    <img src="img/cap.jpg" alt="" className=" size-full object-cover" />
                                </div>
                            </div>
                        </Link>
                        <Link href="/about" className=' block' onClick={closeNav}>
                            <div className=" flex justify-start items-center gap-2 hover:gap-3 transition-all duration-200 ease-in group">
                                <span className=' inline-block py-2 group-hover:underline'>About Us</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
             :
                <></>
            }
            {
                isBagOpen ?
                    <div className='fixed h-[100vh] bg-white z-50 w-full'>
                        <div className='relative size-full'>
                            <div className='p-4'>
                                <div className='flex items-center justify-between pb-4'>
                                    <p className='uppercase'>Your Bag</p>
                                    <span onClick={closeBag}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                </div>
                                <p className=' text-sm'>You are $50 away from <span className='uppercase'> free Shipping</span></p>
                            </div>
                            <div className='border-y border-y-black min-h-[40vh] h-full max-h-[40vh] overflow-y-scroll bg-neutral-300'>
                                <p className='text-center py-2'>OOPS. YOUR BAG IS EMPTY.</p>
                                <div className='flex justify-center items-center'>
                                    <button className='bg-[var(--foreground)] text-white p-2 hover:bg-neutral-500'>Start Shopping</button>
                                </div>
                            </div>
                            <div className=' w-full left-0 p-4'>
                                <h4 className='p-2 font-semibold'>Quick Add</h4>
                                <div className=' flex justify-around items-center py-2 '>
                                    <div className="flex flex-col items-center w-24">
                                        <div className=' w-full aspect-square overflow-hidden'>
                                            <img src="img/cap.jpg" alt="" className=' size-full object-cover'/>
                                        </div>
                                        <p>Product Name</p>
                                        <button className='bg-[var(--foreground)] w-full text-white p-1 hover:bg-neutral-500'>Add to bag</button>
                                    </div>
                                    <div className="flex flex-col items-center w-24">
                                        <div className=' w-full aspect-square overflow-hidden'>
                                            <img src="img/cap.jpg" alt="" className=' size-full object-cover'/>
                                        </div>
                                        <p>Product Name</p>
                                        <button className='bg-[var(--foreground)] w-full text-white p-1 hover:bg-neutral-500'>Add to bag</button>
                                    </div>
                                    <div className="flex flex-col items-center w-24">
                                        <div className=' w-full aspect-square overflow-hidden'>
                                            <img src="img/cap.jpg" alt="" className=' size-full object-cover'/>
                                        </div>
                                        <p>Product Name</p>
                                        <button className='bg-[var(--foreground)] w-full text-white p-1 hover:bg-neutral-500'>Add to bag</button>
                                    </div>
                                    <div className="flex flex-col items-center w-24">
                                        <div className=' w-full aspect-square overflow-hidden'>
                                            <img src="img/cap.jpg" alt="" className=' size-full object-cover'/>
                                        </div>
                                        <p>Product Name</p>
                                        <button className='bg-[var(--foreground)] w-full text-white p-1 hover:bg-neutral-500'>Add to bag</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                :
                <></>
            }
        </header>
    )
}

export default Header;
