import { EProductStatus } from "../types";
import { Category } from "./category";
import { User } from "./user";

export type Product = {
  id: string;
  name: string;
  images: string[];
  owner: User;
  category: Category;
  description?: string;
  status?: EProductStatus;
  publicStatus: string;
};
