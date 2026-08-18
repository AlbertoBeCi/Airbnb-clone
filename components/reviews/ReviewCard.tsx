import Image from "next/image";
import { Star } from "lucide-react";

interface ReviewCardProps {
  author: { name: string; avatar: string; tenure: string };
  rating: number;
  date: string;
  comment: string;
}

const ReviewCard = ({ author, rating, date, comment }: ReviewCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image src={author.avatar} alt={author.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">{author.name}</p>
          <p className="text-xs text-zinc-500">{author.tenure}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-zinc-500">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="h-3 w-3 fill-zinc-900" />
        ))}
        <span>· {date}</span>
      </div>
      <p className="text-sm leading-6 text-zinc-700">{comment}</p>
    </div>
  );
};

export default ReviewCard;
