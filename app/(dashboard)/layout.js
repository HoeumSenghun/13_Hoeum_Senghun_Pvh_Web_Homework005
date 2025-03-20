"use client"; // Ensure it's a client component to use hooks

import { usePathname } from "next/navigation";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import SidebarComponent from "@/components/SidebarComponent/SidebarComponent";
import FilterComponent from "@/components/FilterComponent/FilterComponent";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname.includes("book-categories")) return "All Books";
    if (pathname.includes("old-school-cartoons")) return "Old School Cartoons";
    return "Homepage";
  };

  return (
    <div className="grid grid-cols-12 h-screen">

      <aside className="col-span-3">
        <SidebarComponent />
      </aside>

      <section className="col-span-9 bg-gray-200">
        <SearchComponent />
        {/* <div className="bg-white h-[90vh] rounded-3xl ml-9 mr-9 p-10">
          <div>
            <div className="flex justify-between">
              <div className="w-60 h-10 bg-gray-200 text-lg font-semibold text-center text-[#087E8B] rounded-xl mb-2">
                {getPageTitle()}
              </div>
              <div className="mb-4"><FilterComponent /></div>
            </div>
            <div className="border-b border-[#087E8B] mb-4"></div>
            <div className="max-h-[75vh] overflow-y-auto">{children}</div>
          </div>
        </div> */}
        <div>
          {children}
        </div>
      </section>
    </div>
  );
}
