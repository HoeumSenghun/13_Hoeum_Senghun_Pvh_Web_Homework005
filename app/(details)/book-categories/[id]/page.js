"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
export default async function BookDetails(){

    // const { query } = await
    const books = await getAllBooks();

  return (
    <>
     <div className="bg-slate-100 w-full h-screen p-10 overflow-auto relative">
            <div className="w-[80%] h-[15%] m-auto">
                <ul>
                    <li>
                        <Link href={"/home"} className="text-[30px] font-bold"><Image src={""} className="inline-block w-8 mr-2 mb-2" alt="Home Icon"/>Home</Link>
                        <Image src={ArrowRight} className="inline-block w-8 mb-3 mx-3" alt="Arrow Right Icon"/>
                        <Link href={"/book-category"} className="text-[30px] font-bold"><Image src={""} className="inline-block w-8 mr-2 mb-2" alt="Book Icon"/>Book Categories</Link>
                        <Image src={ArrowRight} className="inline-block mb-3 w-8 mx-3" alt="Arrow Right Icon"/>
                        <Link href={""} className="text-[30px] font-bold text-red-600"><Image src={""} className="inline-block w-8 mr-2 mb-2" alt="Book Open Icon"/>{""}</Link>
                    </li>
                </ul>
            </div>
            <div className="bg-white w-[80%] h-auto m-auto rounded-[30px]">
                <div className="absolute top-[50px] right-[300px]">
                    <Image width={301} height={407} src={""} className="rounded-[40px]" alt="Book Image"/>
                </div>
                <div className="p-20">
                    <h1 className="pt-44 text-[30px] font-bold">{""}</h1>
                    <p className="text-[27px] py-4">By <span className="inline-block text-[#087E8B]">{""}</span></p>
                    <p className="text-[20px]">{""}</p>
                </div>
            </div>
        </div>
    </>
  )
}