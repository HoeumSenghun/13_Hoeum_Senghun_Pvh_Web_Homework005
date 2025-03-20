
export async function getAllCategories() {
  const response = await fetch("https://nextjs-homework005.vercel.app/api/book_category");
  const resJson = await response.json();
  const data = await resJson.payload;
  return data;
}
