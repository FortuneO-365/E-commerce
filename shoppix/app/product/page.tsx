import image from '@/app/assets/gavin-allanwood-ndpX28miBtE-unsplash.jpg';
import ProductImg from "@/app/assets/chitto-cancio-9urrzNhb3PU-unsplash.jpg"
import SecondImg from "@/app/assets/mediamodifier-t8HiP3e5abg-unsplash.jpg"
import ThirdImg from "@/app/assets/usama-akram-s-gYAbQToXk-unsplash.jpg"
import FourthImg from '@/app/assets/premium_photo-1718913936342-eaafff98834b.avif';
import { Card, CardFooter, CardContent } from "@/components/ui/card";
export default function Product() {
    return (
        <section className=" p-4 pt-16">
            <div className=" w-full aspect-square max-w-[600px] pt-6">
                <img src={image.src} alt=""  className='size-full object-cover'/>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <div className=' py-4'>
                        <div className='flex items-center gap-3 '>
                            <div className='flex items-center'>
                                {
                                    Array.from({ length: 5 }, (_, index) => (
                                        <span key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    ))
                                }
                            </div>
                            <span className=' text-sm'>500 reviews</span>
                        </div>
                        <h2 className='text-lg font-semibold'>Product Name</h2>
                    </div>
                    <p className="text-lg ">$99.99</p>
                </div>
                <p>Comfortable and trendy footwear for everyday wear.</p>
                <button className="w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-white hover:text-black transition-colors duration-200 ease-in-out">
                    Add to bag
                </button>
            </div>
            <div className='mt-8'>
                <h3 className=' text-lg font-semibold'>Suggested Picks</h3>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
                    <Card className=" cursor-pointer">
                    <CardContent>
                        <div className="relative aspect-square overflow-hidden">
                        <img src={ProductImg.src} alt="Product Image" className="size-full object-cover " />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between items-start">
                        <h2 className="text-xl font-semibold">Product 1</h2>
                        <p className="text-gray-700">$29.99</p>
                        <button className=" w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-white hover:text-black transition-colors duration-200 ease-in-out">Add to bag</button>
                    </CardFooter>
                    </Card>
                    <Card className=" cursor-pointer">
                    <CardContent>
                        <div className="relative aspect-square overflow-hidden">
                        <img src={FourthImg.src} alt="Product Image" className="size-full object-cover " />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between items-start">
                        <h2 className="text-xl font-semibold">Product 2</h2>
                        <p className="text-gray-700">$39.99</p>
                        <button className=" w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-white hover:text-black transition-colors duration-200 ease-in-out">Add to bag</button>
                    </CardFooter>
                    </Card>
                    <Card className=" cursor-pointer">
                    <CardContent>
                        <div className="relative aspect-square overflow-hidden">
                        <img src={SecondImg.src} alt="Product Image" className="size-full object-cover " />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between items-start">
                        <h2 className="text-xl font-semibold">Product 3</h2>
                        <p className="text-gray-700">$39.99</p>
                        <button className=" w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-white hover:text-black transition-colors duration-200 ease-in-out">Add to bag</button>
                    </CardFooter>
                    </Card>
                    <Card className=" cursor-pointer">
                    <CardContent>
                        <div className="relative aspect-square overflow-hidden">
                        <img src={ThirdImg.src} alt="Product Image" className="size-full object-cover " />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between items-start">
                        <h2 className="text-xl font-semibold">Product 4</h2>
                        <p className="text-gray-700">$59.99</p>
                        <button className=" w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-white hover:text-black transition-colors duration-200 ease-in-out">Add to bag</button>
                    </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}