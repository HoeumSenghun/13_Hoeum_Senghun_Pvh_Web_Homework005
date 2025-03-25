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
        <div>
          {children}
        </div>
      </section>
    </div>
  );
}
