import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="grid w-full max-w-xl items-center gap-1.5">
      <Input type="text" id="navbar-search" placeholder="What do you find?" />
    </div>
  );
}
