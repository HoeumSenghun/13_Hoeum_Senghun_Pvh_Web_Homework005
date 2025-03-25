"use client";

import { usePathname, useRouter } from "next/navigation";

export default function FilterComponent({ category }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="mb-4">
      <div className="flex w-full flex-col">
        <select
          onChange={(e) =>
            router.replace(`${pathname}?categoryId=${e.target.value}`)
          }
          id="pricingType"
          name="pricingType"
          className="w-full h-10 border-2 border-[#087E8B] focus:outline-none focus:border-[#087E8B] text-[#087E8B] rounded-2xl md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="default">Select a Category</option> 
          {category?.map((item) => (
            <option value={item.id} key={item.id}>
              {item.book_cate_name??item.cartoon_genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
