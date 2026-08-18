import Image from "next/image";

interface HostInfoRowProps {
  hostName: string;
  avatarUrl: string;
  yearsHosting: number;
}

const HostInfoRow = ({
  hostName,
  avatarUrl,
  yearsHosting,
}: HostInfoRowProps) => {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-200 py-6">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-200">
        <Image src={avatarUrl} alt={hostName} fill className="object-cover" />
      </div>
      <div>
        <p className="font-semibold text-zinc-900">Anfitrión: {hostName}</p>
        <p className="text-sm text-zinc-500">{yearsHosting} años como anfitrión</p>
      </div>
    </div>
  );
};

export default HostInfoRow;
