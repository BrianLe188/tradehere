import { Badge } from "@/components/ui/badge";
import { EProductStatus } from "@/lib/types";

type Props = { status: EProductStatus };

export default function Status({ status }: Props) {
  switch (status) {
    case EProductStatus.NEW:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">New</Badge>
      );
    case EProductStatus.LIKE_NEW:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">
          Like New
        </Badge>
      );
    case EProductStatus.PERCENT_10:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">10%</Badge>
      );
    case EProductStatus.PERCENT_20:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">20%</Badge>
      );
    case EProductStatus.PERCENT_30:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">30%</Badge>
      );
    case EProductStatus.PERCENT_40:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">40%</Badge>
      );
    case EProductStatus.PERCENT_50:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">50%</Badge>
      );
    case EProductStatus.PERCENT_60:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">60%</Badge>
      );
    case EProductStatus.PERCENT_70:
      return (
        <Badge className="absolute top-2 left-2 z-50 bg-green-500">70%</Badge>
      );
  }
}
