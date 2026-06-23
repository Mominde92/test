import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  reviewCount?: number;
  max?: number;
  size?: "sm" | "md";
  tone?: "dark" | "light";
};

export function RatingStars({
  rating,
  reviewCount,
  max = 5,
  size = "sm",
  tone = "dark",
}: RatingStarsProps) {
  const iconSize = size === "md" ? "h-5 w-5" : "h-4 w-4";
  const activeStars = Math.round(rating);
  const reviewColor = tone === "light" ? "text-white" : "text-muted";

  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`${rating} out of ${max} stars${reviewCount ? ` from ${reviewCount} reviews` : ""}`}
    >
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          className={iconSize}
          fill={index < activeStars ? "#FDBA74" : "none"}
          stroke={index < activeStars ? "#FDBA74" : "#D1D5DB"}
        />
      ))}
      {reviewCount ? (
        <span className={`ml-1 text-sm font-bold ${reviewColor}`}>({reviewCount})</span>
      ) : null}
    </div>
  );
}
