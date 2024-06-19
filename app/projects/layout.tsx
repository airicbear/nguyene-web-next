import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nguyene.com",
  description: "Eric Nguyen's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
