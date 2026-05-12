import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eank Your Business with Easy Where Solution",
  description: "we are Easy Where Solution we provide complete digital exsistance to your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
