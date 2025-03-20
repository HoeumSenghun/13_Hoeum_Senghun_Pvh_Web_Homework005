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
          className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
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
