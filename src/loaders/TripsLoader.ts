import axios from "axios";

export default async function TripsLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const categoryIds = url.searchParams.getAll("category_id[]");
  const cityIds = url.searchParams.getAll("city_id[]");
  const minPrice = url.searchParams.get("min_price");
  const maxPrice = url.searchParams.get("max_price");
  const page = Number(url.searchParams.get("page") || 1);
  const params = new URLSearchParams();

  
  params.append("page", page.toString()); 
  if (search) params.append("search", search);
  categoryIds.forEach((id) => params.append("category_id[]", id));
  cityIds.forEach((id) => params.append("city_id[]", id));
  if (minPrice) params.append("min_price", minPrice);
  if (maxPrice) params.append("max_price", maxPrice);
  try {
    const res = await axios.get(`trips?${params.toString()}`);
    if (res.data.success === true) {
      return res.data.data;
    }
    return res.data;
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
