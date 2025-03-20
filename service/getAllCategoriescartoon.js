export async function getAllCategoriesCartoon() {
    try {
      const response = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Ensure payload exists and is an array
      const categories = data.payload || [];
  
      return categories;
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      return [];
    }
  }