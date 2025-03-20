import { getAllCartoons } from "@/service/getAllCartoon";  // Corrected import
import { getAllCategoriesCartoon } from "@/service/getAllCategoriescartoon";
import { Eye, Clock } from "lucide-react";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import { getCartoonByGenreId } from "@/service/cartoon-service";

export default async function OldSchoolCartoons({ searchParams }) {

  const cartoons = await getAllCartoons();  // Function call works now
  const category = await getAllCategoriesCartoon();

  const categoryId = (await searchParams).categoryId;
  console.log(categoryId);

  const filteredCartoons = categoryId ? await getCartoonByGenreId(categoryId) : cartoons;

  return (
    <div className="bg-white h-[90vh] rounded-3xl ml-9 mr-9 p-10">
      <div>
        <div className="flex justify-between">
          <div className="w-60 h-10 bg-gray-200 text-lg font-semibold text-center text-[#087E8B] rounded-xl mb-2">
              Old School Cartoons
          </div>
          <FilterComponent category={category} />
        </div>
        <div className="border-b border-[#087E8B] mb-4"></div>
        <div className="max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {!categoryId ? (
            cartoons.length === 0 ? (
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
            )
          ) : filteredCartoons.length === 0? (
            <p className="text-center">No cartoons available</p>
          ) : (
            filteredCartoons.map((cartoon) => (
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
