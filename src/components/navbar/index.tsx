import { ModeToggle } from "../mode-toggle";
import UserAvatar from "../user-avatar";
import Search from "./search";

export default function Navbar() {
  return (
    <div className="container py-2 mx-auto flex justify-between">
      <div>Trade HERE</div>
      <Search />
      <ModeToggle />
      <UserAvatar img="" name="ANH" />
    </div>
  );
}
