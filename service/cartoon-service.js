
export async function getCartoonByGenreId(id) {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?genre=${id}`
    );
    const resJson = await res.json();
    const payload = await resJson.payload;
    return payload;
  }