import HostStatsPanel from "./HostStatsPanel";
import HostBio from "./HostBio";

interface HostProfileCardProps {
  hostName: string;
  avatarUrl: string;
  isSuperhost: boolean;
  reviewsCount: number;
  rating: number;
  yearsHosting: number;
  languages: string[];
  responseRate?: string;
  bio?: string;
}

const HostProfileCard = (props: HostProfileCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 border-b border-zinc-200 py-10 sm:grid-cols-[220px_1fr]">
      <HostStatsPanel
        hostName={props.hostName}
        avatarUrl={props.avatarUrl}
        isSuperhost={props.isSuperhost}
        reviewsCount={props.reviewsCount}
        rating={props.rating}
        yearsHosting={props.yearsHosting}
      />
      <HostBio
        languages={props.languages}
        responseRate={props.responseRate}
        bio={props.bio}
      />
    </div>
  );
};

export default HostProfileCard;
