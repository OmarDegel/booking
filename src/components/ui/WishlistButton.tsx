import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  actLikeToggle,
} from "../../store/wishlists/wishlistsSlice";
import { useEffect } from "react";

function WishlistButton({ tripId }: any) {
  const dispatch = useAppDispatch();
  const itemsId = useAppSelector((state) => state.wishlist.itemsId);
  const loading = useAppSelector((state) => state.wishlist.loading);
  const isLiked = itemsId.includes(tripId);
  const handleClick = () => {
    if (loading === "pending") return;
    dispatch(actLikeToggle(tripId));
  };
  useEffect(() => {
    console.log(tripId);

  }, [tripId]);
  return (
    <button
      onClick={handleClick}
      disabled={loading === "pending"}
      className="flex-1 px-4 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-primary/90 disabled:cursor-not-allowed
      bg-primary text-white"
    >
      <Heart
        className={`h-5 w-5 ${isLiked ? "text-red-500" : "text-gray-400"} ${
          loading === "pending" ? "animate-spin" : ""
        }`}
        fill={isLiked ? "red" : "none"}
      />
      {isLiked ? "Liked" : "Add to wishlist"}
    </button>
  );
}

export default WishlistButton;
