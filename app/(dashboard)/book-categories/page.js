import { getAllBooks } from "@/service/getAllBook";
import { getAllCategories } from "@/service/getAllCategories";
import Link from "next/link";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import { getBookByCategoryId } from "@/service/book-service";

export default async function BookCategories({ searchParams }) {
  // const headersList = headers();
  // const referer = headersList.get("referer") || ""; // Get the referring URL

  // let pageTitle = "Homepage";
  // if (referer.includes("/book-categories")) pageTitle = "All Books";
  // if (referer.includes("old-school-cartoons")) pageTitle = "Old School Cartoons";

  const books = await getAllBooks();
  const category = await getAllCategories();

  // console.log(category)
  const categoryId = (await searchParams).categoryId;
  console.log(categoryId);

  const filteredBooks = await getBookByCategoryId(categoryId);

  return (
    <div className="bg-white h-[90vh] rounded-3xl ml-9 mr-9 p-10">
      <div>
        <div className="flex justify-between">
          <div className="w-60 h-10 bg-gray-200 text-lg font-semibold text-center text-[#087E8B] rounded-xl mb-2">
            All Books
          </div>

          <FilterComponent category={category} />
        </div>
        <div className="border-b border-[#087E8B] mb-4"></div>
        <div className="max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-24 my-10">
            {!categoryId ? (
              books.length === 0 ? (
                <p className="text-center">No books available</p>
              ) : (
                books.map((book) => (
                  <div
                    key={book.id}
                    className="relative bg-[#F5F7F8] mt-40 gap-8 shadow-lg rounded-3xl p-4 flex items-center max-w-lg hover:shadow-xl w-[600px] h-[250px] transition-shadow"
                  >
                    <div className="w-2/5 h-[200px] gap-3 flex flex-col justify-between -mt-60">
                      <img
                        src={
                          book.image || "/placeholder.svg?height=280&width=200"
                        }
                        alt={book.book_title}
                        className="w-45 h-70 object-cover rounded-3xl"
                      />
                      <Link
                        href={`/book-categories/${book.id}`}
                        className="px-4 py-2 bg-[#BFD7EA] text-[#0B3954] font-semibold rounded-3xl hover:bg-[#087E8B] hover:text-white transition-colors"
                      >
                        READ FULL ARTICLE
                      </Link>
                    </div>
                    <div className="w-3/5">
                      <h3 className="text-xl font-semibold text-[#0B3954] mb-2">
                        {book.book_title}
                      </h3>
                      <p className="text-[#0B3954] line-clamp-6">
                        {book.description}
                      </p>
                    </div>
                  </div>
                ))
              )
            ) : filteredBooks.length === 0 ? (
              <p className="text-center">No books available</p>
            ) : (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="relative bg-[#F5F7F8] mt-40 gap-8 shadow-lg rounded-3xl p-4 flex items-center max-w-lg hover:shadow-xl w-[600px] h-[250px] transition-shadow"
                >
                  <div className="w-2/5 h-[200px] gap-3 flex flex-col justify-between -mt-60">
                    <img
                      src={
                        book.image || "/placeholder.svg?height=280&width=200"
                      }
                      alt={book.book_title}
                      className="w-45 h-70 object-cover rounded-3xl"
                    />
                    <Link
                      href={`/book-categories/${book.id}`}
                      className="px-4 py-2 bg-[#BFD7EA] text-[#0B3954] font-semibold rounded-3xl hover:bg-[#087E8B] hover:text-white transition-colors"
                    >
                      READ FULL ARTICLE
                    </Link>
                  </div>
                  <div className="w-3/5">
                    <h3 className="text-xl font-semibold text-[#0B3954] mb-2">
                      {book.book_title}
                    </h3>
                    <p className="text-[#0B3954] line-clamp-6">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* {books.length === 0 ? (
              <p className="text-center">No books available</p>
            ) : (



              books.map((book) => (
                <div
                  key={book.id}
                  className="relative bg-[#F5F7F8] mt-40 gap-8 shadow-lg rounded-3xl p-4 flex items-center max-w-lg hover:shadow-xl w-[600px] h-[250px] transition-shadow"
                >
                  <div className="w-2/5 h-[200px] gap-3 flex flex-col justify-between -mt-60">
                    <img
                      src={book.image || "/placeholder.svg?height=280&width=200"}
                      alt={book.book_title}
                      className="w-45 h-70 object-cover rounded-3xl"
                    />
                    <Link
                      href={`/book-categories/${book.id}`}
                      className="px-4 py-2 bg-[#BFD7EA] text-[#0B3954] font-semibold rounded-3xl hover:bg-[#087E8B] hover:text-white transition-colors"
                    >
                      READ FULL ARTICLE
                    </Link>
                  </div>
                  <div className="w-3/5">
                    <h3 className="text-xl font-semibold text-[#0B3954] mb-2">
                      {book.book_title}
                    </h3>
                    <p className="text-[#0B3954] line-clamp-6">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
