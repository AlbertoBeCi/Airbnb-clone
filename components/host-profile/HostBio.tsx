import { Languages, MessageCircleReply } from "lucide-react";

interface HostBioProps {
  languages: string[];
  responseRate?: string;
  bio?: string;
}

const HostBio = ({ languages, responseRate, bio }: HostBioProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {bio && <p className="text-sm leading-6 text-zinc-700">{bio}</p>}
      <div className="flex items-start gap-3 text-sm text-zinc-700">
        <Languages className="h-5 w-5 shrink-0" />
        <span>Habla {languages.join(", ")}</span>
      </div>
      {responseRate && (
        <div className="flex items-start gap-3 text-sm text-zinc-700">
          <MessageCircleReply className="h-5 w-5 shrink-0" />
          <span>{responseRate}</span>
        </div>
      )}
    </div>
  );
};

export default HostBio;
