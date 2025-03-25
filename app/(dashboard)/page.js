import BookCardCategories from "@/components/BookCardCategories/BookCardCategories";
import CartoonCardCategories from "@/components/CartoonCardCategories/CartoonCardCategories";

export default function Homepage() {
  return (
    <>
      <div className="bg-white h-[90vh] rounded-3xl ml-9 mr-9 p-10">
        <div>
          <div className="flex justify-between">
            <div className="w-60 h-10 bg-gray-200 text-lg font-semibold text-center text-[#087E8B] rounded-xl mb-2">
              homepage
            </div>
          </div>
          <div className="border-b border-[#087E8B] mb-4"></div>
          <div className="max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-12 mt-20">
              <div className="col-span-6 flex justify-center">
                <BookCardCategories />
              </div>
              <div className="col-span-6 flex justify-center">
                <CartoonCardCategories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
