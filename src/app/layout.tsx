import '@/app/globals.css';
import { raleway } from '@/app/ui/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | MoneyWise Kids',
    default: 'MoneyWise Kids',
  },
  description: 'MoneyWise Kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="moneywisekids">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
