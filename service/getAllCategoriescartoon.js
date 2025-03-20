
export async function getAllCategoriesCartoon() {
    const response = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");
    const resJson = await response.json();
    const data = await resJson.payload;
    return data;
  }