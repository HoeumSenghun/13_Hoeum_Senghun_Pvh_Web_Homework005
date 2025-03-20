// export async function getAllCategories() {
//   try {
//     const response = await fetch("https://nextjs-homework005.vercel.app/api/book_category");

//     const data = await response.json();

//     // Ensure payload exists and is an array
//     const categories = await data.payload;

//     return categories;
//   } catch (error) {
//     console.error("Failed to fetch categories:", error);
//     return [];
//   }
// }

export async function getAllCategories() {
  const response = await fetch("https://nextjs-homework005.vercel.app/api/book_category");
  const resJson = await response.json();
  const data = await resJson.payload;
  return data;
}
