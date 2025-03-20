export async function getAllCartoons(){
    
    const respone = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
    const data = await respone.json();
    const cartoons = await data.payload

    return cartoons;
}