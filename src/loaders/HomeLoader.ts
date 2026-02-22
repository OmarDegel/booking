import axios from "axios";

export default async function HomeLoader() {
  try {
    const res = await axios.get("home");
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
