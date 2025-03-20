import { FaSearch } from "react-icons/fa";

export default function SearchComponent() {
  return (
    <>
      <div className="flex justify-between items-center mr-10 ml-10 mb-4 mt-5">
        <form className="relative w-full">
          <button className="cursor-pointer">
            <FaSearch className="w-6 h-6 text-primary-text text-gray-500 absolute top-3 left-4" />
          </button>

          <input
            type="text"
            placeholder="Search book or category"
            className="w-full bg-white py-3 pl-14 pr-5 rounded-3xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
          />
        </form>
      </div>
    </>
  );
}
