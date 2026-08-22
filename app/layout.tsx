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
  title: 'JC Filters | Replacement filters for global sellers',
  description: 'Pool and spa filters, dryer lint screens, HEPA and appliance filters, vacuum dust bags and aquarium cartridges with seller support.',
  openGraph: {
    title: 'JC Filters | Replacement filtration, ready for replenishment',
    description: 'Replacement filters across water, air and appliances with ready-stock dispatch support, FBA service and custom packaging.',
    type: 'website',
    images: [{ url: '/jc-filters-social-card.png', width: 1200, height: 630, alt: 'JC Filters replacement filtration catalog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JC Filters | Replacement filtration, ready for replenishment',
    description: 'Pool, dryer, HEPA, appliance, vacuum and aquarium filter programs for global sellers.',
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
