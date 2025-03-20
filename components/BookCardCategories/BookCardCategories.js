"use client";

import { useRouter } from "next/navigation";
import { MdOutlineSell } from "react-icons/md";

export default function BookCardCategories() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/book-categories");
  };

  return (
    <div
      className="relative w-full max-w-[360px] overflow-hidden rounded-3xl bg-black shadow-lg cursor-pointer group"
      onClick={handleNavigation}
    >
      <div className="relative h-[500px] w-full">
        <img
          src="./bookcard.png"
          alt="BookCard"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center px-6">
            <h3 className="text-white text-3xl font-bold mb-2">View All</h3>
            <h3 className="text-white text-3xl font-bold mb-2">Available</h3>
            <h3 className="text-white text-3xl font-bold">Books</h3>
          </div>
        </div>
        <div className="absolute left-5 top-5 z-10">
          <div className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-teal-600">
            <MdOutlineSell className="h-5 w-5" />
            <span className="text-md font-semibold">Book</span>
          </div>
        </div>
      </div>
    </div>
  );
}
