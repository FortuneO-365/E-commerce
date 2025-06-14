
import Product1 from '@/app/assets/alexander-rotker-l8p1aWZqHvE-unsplash.jpg'
import Product2 from '@/app/assets/chitto-cancio-9urrzNhb3PU-unsplash.jpg'
import Product3 from '@/app/assets/domino-studio-164_6wVEHfI-unsplash.jpg'
import Product4 from '@/app/assets/hipkicks-HcqA34-uWo4-unsplash.jpg'
import Product5 from '@/app/assets/irene-kredenets-dwKiHoqqxk8-unsplash.jpg'
import Product6 from '@/app/assets/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import Product7 from '@/app/assets/milada-vigerova-p8Drpg_duLw-unsplash.jpg'
import Product8 from '@/app/assets/faith-yarn-Wr0TpKqf26s-unsplash.jpg'
import Product9 from '@/app/assets/ryan-stone-tLTyelFSRsY-unsplash.jpg'
import Product10 from '@/app/assets/xavier-teo-SxAXphIPWeg-unsplash.jpg'
import Product11 from '@/app/assets/usama-akram-s-gYAbQToXk-unsplash.jpg'
import Product12 from '@/app/assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg'
import { StaticImageData } from 'next/image';

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: StaticImageData | string;
    category: string;
    description?: string;
    stock?: number;
    rating?: number;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Shirt",
        price: 29.99,
        imageUrl: Product1.src,
        category: "Men",
        description: "A stylish shirt perfect for any occasion.",
        stock: 50
    },
    {
        id: "2",
        name: "Sneakers",
        price: 89.99,
        imageUrl: Product2.src,
        category: "Footwear",
        description: "Comfortable and trendy sneakers for everyday wear.",
        stock: 30
    },
    {
        id: "3",
        name: "Backpack",
        price: 49.99,
        imageUrl: Product3.src,
        category: "Accessories",
        description: "A spacious backpack for all your essentials.",
        stock: 20
    },
    {
        id: "4",
        name: "Jacket",
        price: 99.99,
        imageUrl: Product4.src,
        category: "Outerwear",
        description: "A warm jacket for chilly days.",
        stock: 15
    },
    {
        id: "5",
        name: "Watch",
        price: 199.99,
        imageUrl: Product5.src,
        category: "Accessories",
        description: "A classic watch to complement your style.",
        stock: 10
    },
    {
        id: "6",
        name: "Hat",
        price: 19.99,
        imageUrl: Product6.src,
        category: "Accessories",
        description: "A trendy hat for sunny days.",
        stock: 25
    },
    {
        id: "7",
        name: "Sunglasses",
        price: 29.99,
        imageUrl: Product7.src,
        category: "Accessories",
        description: "Stylish sunglasses to protect your eyes.",
        stock: 40
    },
    {
        id: "8",
        name: "Jeans",
        price: 59.99,
        imageUrl: Product8.src,
        category: "Bottoms",
        description: "Comfortable jeans for everyday wear.",
        stock: 35
    },
    {
        id: "9",
        name: "T-Shirt",
        price: 24.99,
        imageUrl: Product9.src,
        category: "Tops",
        description: "A casual t-shirt for relaxed days.",
        stock: 60
    },
    {
        id: "10",
        name: "Shorts",
        price: 34.99,
        imageUrl: Product10.src,
        category: "Bottoms",
        description: "Lightweight shorts for summer outings.",
        stock: 45
    },
    {
        id: "11",
        name: "Scarf",
        price: 14.99,
        imageUrl: Product11.src,
        category: "Accessories",
        description: "A cozy scarf to keep you warm in winter.",
    },
    {
        id: "12",
        name: "Boots",
        price: 79.99,
        imageUrl: Product12.src,
        category: "Footwear",
        description: "Durable boots for rugged terrains.",
        stock: 20
    }

];