import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { defaultImage } from "@/constants/default";

type Props = {
  img?: string;
  name: string;
  className?: string;
};

export default function UserAvatar({ img, name, className }: Props) {
  return (
    <Avatar className={className}>
      {img && <AvatarImage src={defaultImage} alt={name} />}
      <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
