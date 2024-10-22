import Navbar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </>
  );
}
