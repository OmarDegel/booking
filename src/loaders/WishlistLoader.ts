import axios from "axios";

export default async function WishlistLoader() {
  try {
    const res = await axios.get(`wishlist`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
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
