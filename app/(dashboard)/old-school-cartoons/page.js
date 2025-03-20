import {GetAllCartoons} from "@/service/getAllCartoon";
import {getAllCategoriesCartoon} from "@/service/getAllCategoriescartoon";
import { Eye, Clock } from "lucide-react";

export default async function OldSchoolCartoons() {
  // Get pathname from request headers
  // const headersList = headers();
  // const referer = headersList.get("referer") || "";

  // let pageTitle = "Homepage";
  // if (referer.includes("/book-categories")) pageTitle = "All Books";
  // if (referer.includes("old-school-cartoons")) pageTitle = "Old School Cartoons";

  // Fetch cartoons data
  const cartoons = await GetAllCartoons();
  // const books = await GetAllBooks();
  const category = await getAllCategoriesCartoon();

  return (
    <div className="bg-white h-[90vh] rounded-3xl ml-9 mr-9 p-10">
      <div>
        <div className="flex justify-between">
          <div className="w-60 h-10 bg-gray-200 text-lg font-semibold text-center text-[#087E8B] rounded-xl mb-2">
              Old School Cartoons
          </div>
          <div className="mb-4">
            <div className="flex w-full flex-col">
              <select
                id="pricingType"
                name="pricingType"
                className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                {category.map((item) => (
                  <option value={item.cartoon_genre} key={item.id}>
                    {item.cartoon_genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="border-b border-[#087E8B] mb-4"></div>
        {/* Cartoon Grid */}
        <div className="max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {cartoons.length === 0 ? (
              <p className="text-center">No cartoons available</p>
            ) : (
              cartoons.map((cartoon) => (
                <div key={cartoon.id} className="max-w-xs">
                  <div className="relative">
                    <img
                      src={cartoon.image}
                      alt={cartoon.ct_title}
                      className="w-[250px] h-[350px] rounded-2xl"
                    />
                  </div>
                  <div className="px-4 py-3 bg-white">
                    <h3 className="font-bold text-xl text-gray-800">
                      {cartoon.ct_title}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-teal-600">
                      <div className="flex items-center gap-1.5">
                        <Eye className="h-4 w-4" />
                        <span className="text-md font-semibold">
                          {cartoon.view_count}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span className="text-md font-semibold">
                          {cartoon.published_year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
