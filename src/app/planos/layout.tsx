export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center min-h-[85vh] bg-white rounded-tl-[200px] rounded-br-[80px] overflow-x-hidden">
      <main className="w-full h-[85vh] flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
