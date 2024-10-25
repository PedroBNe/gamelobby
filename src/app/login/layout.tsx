import Image from "next/image";
import Imagem from "@/assets/login-image.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[80vh] bg-white rounded-tl-[200px] rounded-br-[80px] overflow-x-hidden">
        <div className="w-full flex items-center">
            <main className="w-[50%] h-full flex items-center justify-center">
                {children}
            </main>
            <hr className="h-[80%] border-[1px] border-slate-400"/>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="bg-[#D9D9D9]">
                    <Image src={Imagem} alt="image" width={600} />
                </div>
            </div>
        </div>
    </div>
  );
}
