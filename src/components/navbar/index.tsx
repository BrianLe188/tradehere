import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../user-avatar";
import Search from "./search";
import { CreditCard, LogOut, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container py-2 mx-auto flex justify-between">
      <div>Trade HERE</div>
      <Search />
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar img="" name="ANH" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={`/users/${123}`}>
            <DropdownMenuItem>
              <User />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <CreditCard /> <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
