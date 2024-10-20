import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BestItem from "./best-item";

export default function BestForYou() {
  return (
    <Card className="mt-2 md:mt-5">
      <CardHeader>
        <CardTitle>Best For You</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {Array.from({ length: 4 })
          .map(() => ({
            id: new Date().getTime().toString(),
            name: "Product with very very long name",
          }))
          .map((item, index) => (
            <BestItem key={index} data={item} />
          ))}
      </CardContent>
    </Card>
  );
}
