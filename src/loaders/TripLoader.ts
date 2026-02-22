import axios from "axios";

export default async function TripLoader({ params }: { params: any }) {
  const link = params.link;
  console.log(link);
  try {
    const res = await axios.get(`trips/${link}`);
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
