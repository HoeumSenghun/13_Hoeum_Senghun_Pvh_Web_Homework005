"use client";
import Link from "next/link";
import { Home, Book, Smile, Film, Music, Camera, Dumbbell, Monitor, Plane, Pen, Settings } from "lucide-react";

const SidebarItem = ({ icon, text, href }) => (
  <li className="flex text-lg font-semibold items-center space-x-4 text-[#0B3954] hover:font-bold hover:bg-gray-100 rounded-xl cursor-pointer w-full h-12 p-2">
    <Link href={href} className="flex items-center space-x-4 w-full">
      <span className="text-red-500">{icon}</span>
      <span>{text}</span>
    </Link>
  </li>
);

const SidebarComponent = () => {
  return (
    <div>
      <aside className="w-full min-h-screen bg-white shadow-lg p-6 flex flex-col items-center">
        <img src=".././profile.png" className="w-20 h-20 rounded-full mb-3"/>
        <h2 className="text-xl text-black font-semibold">Black Monster</h2>
        <p className="text-[#087E8B] text-md font-semibold mb-6">blackmonster@gmail.com</p>
        <nav className="w-full">
          <ul className="space-y-1">
            <SidebarItem icon={<Home />} text="Home" href="/" />
            <SidebarItem icon={<Book />} text="Book Categories" href="/book-categories" />
            <SidebarItem icon={<Smile />} text="Old-School Cartoons" href="/old-school-cartoons" />
            <SidebarItem icon={<Film />} text="Movies & TV Shows" href="#" />
            <SidebarItem icon={<Music />} text="Music" href="#" />
            <SidebarItem icon={<Camera />} text="Photography" href="#" />
            <SidebarItem icon={<Dumbbell />} text="Sports & Fitness" href="#" />
            <SidebarItem icon={<Monitor />} text="Technology & Gadgets" href="#" />
            <SidebarItem icon={<Plane />} text="Travel & Exploration" href="#" />
            <SidebarItem icon={<Pen />} text="Writing & Journaling" href="#" />
          </ul>
        </nav>
        <Link href="#" className="mt-8 w-full p-3 text-lg font-semibold bg-gray-100 text-[#0B3954] hover:bg-gray-200 rounded-xl flex items-center">
          <Settings className="mr-2" />
          Settings
        </Link>
      </aside>
    </div>
  );
};

export default SidebarComponent;