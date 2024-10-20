import Back from "@/components/back";
import Info from "./components/info";
import Related from "./components/related";

export default function Page() {
  return (
    <>
      <Back title="Back to Listings" />
      <main className="py-8">
        <Info />
        <Related />
      </main>
    </>
  );
}
