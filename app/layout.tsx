import "./globals.css";

export const metadata = {
  title: "Blockpixel Studios",
  description: "Criando universos, histórias e experiências no Minecraft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
