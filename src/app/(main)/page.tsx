import BestForYou from "./components/best-for-you";
import { CategoryMenu } from "./components/category-menu";
import Recommend from "./components/recommend";

export default function Page() {
  return (
    <main>
      <CategoryMenu />
      <BestForYou />
      <Recommend />
    </main>
  );
}
