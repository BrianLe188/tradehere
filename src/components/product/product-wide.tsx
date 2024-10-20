import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { type Product } from "@/lib/types/product";

type Props = {
  data: Product;
};

export default memo(function ProductWide({ data }: Props) {
  return (
    <div className="flex items-center justify-between border-b pb-4 last:border-b-0">
      <div className="flex items-center space-x-4">
        <Image
          src={require("@/assets/imgs/demo.jpg")}
          alt={data.name}
          className="w-16 h-16 object-cover rounded"
          width={64}
          height={64}
        />
        <div>
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm text-muted-foreground">
            Status: {data.publicStatus}
          </p>
          <p className="text-sm text-muted-foreground">
            Pending Exchanges: 100
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => {}}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});
