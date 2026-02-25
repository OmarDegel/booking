import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import CreateReview from "./CreateReview";
function Reviews({ data }: any) {
  const { t } = useTranslation("common");
  const [reviews, setReviews] = useState(data.reviews);

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground my-4 ">
        {t("trip.reviews_ratings")}
      </h2>

      <div className="space-y-4">
        {reviews.map((r: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {r.user.image ? (
                    <img
                      src={r.user.image}
                      alt={r.user.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span>{r.user.name[0].toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {r.user.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(r.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: r.rate }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600  py-5 px-4 rounded">
              {r.comment}
            </p>
          </motion.div>
        ))}
      </div>
      <CreateReview
        setReviews={setReviews}
        reviews={reviews}
        trip_id={data.id}
      />
    </div>
  );
}

export default Reviews;
