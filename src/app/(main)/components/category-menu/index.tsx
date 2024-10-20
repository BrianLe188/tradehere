import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { categories } from "@/constants/categories";

export function CategoryMenu() {
  return (
    <Menubar className="overflow-x-auto no-scrollbar">
      {categories.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="text-nowrap">{item.name}</MenubarTrigger>
          <MenubarContent>
            {item.children.map((child, childIndex) => (
              <MenubarItem key={childIndex}>{child.name}</MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
