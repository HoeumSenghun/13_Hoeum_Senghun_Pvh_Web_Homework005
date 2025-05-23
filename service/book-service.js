export async function getBookByCategoryId(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book?query=${id}`
  );
  const resJson = await res.json();
  const payload = await resJson.payload;
  return payload;
}

export async function searchBookByTitle (title) {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`);
  const resJson = await res.json();
  const payload = await resJson.payload;

  return payload;
}
