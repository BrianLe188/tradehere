import Manage from "./components/manage";
import Review from "./components/review";
import UserInfo from "./components/user-info";

export default function Page() {
  return (
    <main>
      <UserInfo />
      <Manage />
      <Review />
    </main>
  );
}
