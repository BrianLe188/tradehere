import { defaultImage } from "@/constants/default";
import Image from "next/image";

export default function Related() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Related Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 5 })
          .map((e, index) => ({ id: index.toString(), name: "Related item" }))
          .map((item) => (
            <div
              key={item.id}
              className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={defaultImage}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <p className="font-semibold text-sm truncate">{item.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
