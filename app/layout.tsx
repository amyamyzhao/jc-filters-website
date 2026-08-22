import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jc-filters-supply.glossy-pin-5885.chatgpt.site'),
  title: 'JC Filters | Replacement filter supply for online sellers',
  description: 'Pool and spa filters, appliance filters, vacuum filters and dust bags, and dryer lint filters with ready stock, FBA support and custom packing.',
  openGraph: {
    title: 'JC Filters | Replacement filtration, ready for replenishment',
    description: 'Replacement filters across pool, appliance, vacuum and dryer categories with ready-stock dispatch, FBA support and custom packing.',
    type: 'website',
    images: [{ url: '/jc-filters-social-card.png', width: 1200, height: 630, alt: 'JC Filters replacement filtration catalog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JC Filters | Replacement filtration, ready for replenishment',
    description: 'Pool, appliance, vacuum and dryer replacement filter programs for online sellers.',
    images: ['/jc-filters-social-card.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
