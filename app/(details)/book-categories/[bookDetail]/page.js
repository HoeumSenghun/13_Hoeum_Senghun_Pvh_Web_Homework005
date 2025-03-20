// import GetBookById from '@/service/getBookById';
// import React from 'react'

// export default async function page({params}) {
//     const  {bookDetail} = params;
//     const book = await GetBookById(bookDetail);
//     return (
//       <div>
//         <h1>Book ID: {bookDetail}</h1>
//       </div>
//     );
//   }
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const BookDetail = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm mb-8">
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
          <Link
            href="/book-categories"
            className="text-gray-600 hover:text-gray-900"
          >
            Book Categories
          </Link>
          <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
          <span className="text-red-500 font-medium">How Do You Live?</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book Review Content */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              How Do You Live?
            </h1>

            <div className="text-sm text-gray-700 mb-6">
              <span className="font-medium">By Black Monster</span>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                
              </p>
            </div>
          </div>

          {/* Book Cover Image */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <Image
                src=""
                alt="How Do You Live? book cover"
                width={300}
                height={450}
                className="rounded-lg shadow-md mx-auto"
              />
              <div className="text-center mt-2 text-xs text-gray-500">
                Timeless masterpiece
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
