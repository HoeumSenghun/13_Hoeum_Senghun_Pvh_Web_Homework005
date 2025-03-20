export async function GetBookById(id){
    
    const respone = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);
    const data = await respone.json();
    const books = await data.payload

    return books;
}