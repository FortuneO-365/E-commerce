import Link from "next/link"
import Image from "@/app/assets/BRANDS • Instagram.jpg";
import ProductImg from "@/app/assets/chitto-cancio-9urrzNhb3PU-unsplash.jpg"
import SecondImg from "@/app/assets/mediamodifier-t8HiP3e5abg-unsplash.jpg"
import ThirdImg from "@/app/assets/usama-akram-s-gYAbQToXk-unsplash.jpg"
import FourthImg from '@/app/assets/premium_photo-1718913936342-eaafff98834b.avif';
import { Card, CardFooter, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className=" relative">
      <div className="container mx-auto pt-16">
        <section className=" w-full mb-10">
          <div className=" relative">
            <div className="w-full h-full">
              <img src={Image.src} alt="" className="size-full"/>
            </div>
            <div className=" absolute z-10 top-2.5 w-full flex justify-center items-center">
              <h1 className=" text-4xl font-serif italic">Elevate your wardrobe</h1>
            </div>
          </div>
        </section>

        <section id="categories" className=" p-4 flex flex-col items-center gap-4">
          <div className="bg-[url('./assets/chitto-cancio-9urrzNhb3PU-unsplash.jpg')] bg-center bg-cover w-11/12 flex flex-col justify-flex-start items-center aspect-square text-white">
            <h3 className="font-semibold text-xl pt-2">Best Sellers</h3>
            <p>Fan-Favourite Shoes, Clothes and Accessories</p>
          </div>

          <div className="bg-[url('./assets/md-salman-tWOz2_EK5EQ-unsplash.jpg')] bg-center bg-cover w-11/12 flex flex-col justify-flex-start items-center aspect-square text-white">
            <h3 className="font-semibold text-xl pt-2">New Arrivals</h3>
            <p>The Latest Styles & Limited-Edition Items</p>
          </div>

          <div className="bg-[url('./assets/premium_photo-1718913936342-eaafff98834b.avif')] bg-center bg-cover w-11/12 flex flex-col justify-flex-start items-center aspect-square text-white">
            <h3 className="font-semibold text-xl pt-2">Summer Essentials</h3>
            <p>Breezy clothes for Warmer Days</p>
          </div>
        </section>

        <section className=" p-4 mb-10">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 mb-4">Discover our latest and greatest products</p>
            <button className="border border-[var(--foreground)] bg-[var(--foreground)] text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200">
              <Link href='/shop'>Shop Now</Link>

            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
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
        </section>

        <section className=" bg-neutral-200 my-3">
          <div className="p-4">
            <h3 className=" text-center font-semibold text-2xl uppercase pb-2">Stay in the know</h3>
            <p className="text-center text-neutral-700 pb-2">Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates</p>
            <div className="py-4 *:block">
              <input type="email" name="" id="" placeholder="Enter Your Email Address" className="p-2 border-b border-black w-full outline-none bg-white"/>
              <button className=" w-full bg-[var(--foreground)] p-2 uppercase mt-2 text-white text-center border border-[var(--foreground)] hover:bg-transparent hover:text-black transition-colors duration-200 ease-in-out">Sign Up</button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

