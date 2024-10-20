import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Attractive from "./attractive";

export default function Recommend() {
  return (
    <Tabs defaultValue="attractive" className="w-full mt-2 md:mt-5">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="attractive">Attractive</TabsTrigger>
        <TabsTrigger value="near">Near You</TabsTrigger>
      </TabsList>
      <TabsContent value="attractive">
        <Attractive />
      </TabsContent>
      <TabsContent value="near"></TabsContent>
    </Tabs>
  );
}
