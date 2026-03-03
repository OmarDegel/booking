import axios from "axios";
import { Star } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../store/hook";
import { useTranslation } from "react-i18next";

function CreateReview({ reviews, setReviews, trip_id }: any) {
  const [rate, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ rate?: string; comment?: string }>({});
  const {t}=useTranslation("common");
  const token=useAppSelector(state=>state.user.token)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); 
    axios
      .post(
        "/reviews",
        { trip_id, rate, comment },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setReviews([...reviews, res.data.data]);
        toast.success(res.data.message);
        setRating(0);
        setComment("");
        setLoading(false);
      })
      .catch((error) => {
        const errorData = error.response?.data;
        if (errorData?.errors) {
          setErrors(errorData.errors);
        }
        toast.error(errorData?.message || "Failed to submit review");
        setLoading(false);
      });
  };

  return (
    <div className="space-y-4 mt-4 bg-white p-6 rounded-2xl shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center w-full">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1;
                return (
                  <Star
                    key={i}
                    className={`h-6 w-6 cursor-pointer transition-colors ${
                      starValue <= (hover || rate)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                );
              })}
            </div>
            {errors.rate && (
              <p className="text-xs text-red-500 mt-1">{errors.rate}</p>
            )}
          </div>

          <div className="w-full flex flex-col">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t("review.write_review")}
              className="w-full h-24 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-gray-400 text-gray-800 resize-none"
            />
            {errors.comment && (
              <p className="text-xs text-red-500 mt-1">{errors.comment}</p>
            )}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full h-12 rounded-xl bg-primary text-white font-semibold text-sm shadow hover:bg-primary/90 transition-colors"
          >
            {loading ? t("review.loading") : t("review.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateReview;