import CreateProduct from "@/components/create-product";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function EditProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="max-w-3xl">
        <CreateProduct />
      </DialogContent>
    </Dialog>
  );
}
