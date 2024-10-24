import Aside from "@/components/common/Aside";
import "./perfil.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white rounded-tl-[200px] rounded-br-[80px] overflow-x-hidden">
      <Aside />
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
