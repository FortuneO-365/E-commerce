import Link from "next/link"
import { Card, CardFooter, CardContent } from "@/components/ui/card";
import {products} from './productlist'

export default function Shop (){
    return(
        <>
            <section className=" pt-16 border-b border-b-black">
                <div className="relative px-2 py-4 flex justify-center">
                    <input type="text" placeholder="Search by name or category" className="block border w-full max-w-[400px] border-black p-2 outline-none" />
                    <button className=" bg-[var(--foreground)] text-white flex justify-center items-center gap-2 p-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>
                        <span className="hidden">Search</span>
                    </button>
                </div>
                <div className="p-2 flex justify-center items-center gap-4 mb-4 *:min-w-16 flex-wrap ">
                    <div className="p-2 border border-black text-center">All</div>
                    <div className="p-2 border border-black text-center">Men's Clothing</div>
                    <div className="p-2 border border-black text-center">Women's Clothing</div>
                    <div className="p-2 border border-black text-center">Accessories</div>
                </div>
            </section>

            <section className="p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {products.map((product, index) => (
                    <Link href="/product" key={index} className="group relative block overflow-hidden border border-black">
                        <Card className=" cursor-pointer">
                            <CardContent>
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img src={product.imageUrl.toString()} alt={`Product ${index + 1}`} className="size-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out" />
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col justify-between items-start">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-gray-700">${product.price}</p>
                                <button className=" w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-white hover:text-black transition-colors duration-200 ease-in-out">Add to bag</button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </section>
        </>
    );
}