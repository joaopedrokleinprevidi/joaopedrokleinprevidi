import "./globals.css";

export const metadata = {
  title: "João Pedro Klein Previdi | Desenvolvedor Frontend",
  description:
    "Desenvolvedor Frontend especializado em Next.js, TypeScript e integração com APIs. Criando soluções escaláveis e eficientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark-950 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
