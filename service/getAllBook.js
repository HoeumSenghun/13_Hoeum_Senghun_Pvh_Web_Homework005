
export async function getAllBooks(){
    
    const respone = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const data = await respone.json();
    const books = await data.payload

    return books;
}

