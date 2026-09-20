import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteUrl } from './site-data';
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
  metadataBase: new URL(siteUrl),
  title: 'JC Filters | Replacement filter supply for ecommerce sellers',
  description: 'Pool and spa filters, appliance filters, vacuum filters and dust bags, and dryer lint filters with ready stock, FBA services, OEM and ODM support.',
  openGraph: {
    title: 'JC Filters | Replacement filtration, ready for replenishment',
    description: 'Filters across pool, appliance, vacuum and dryer categories with ready-stock dispatch, FBA services, OEM and ODM support.',
    type: 'website',
    images: [{ url: '/jc-filters-social-card.png', width: 1200, height: 630, alt: 'JC Filters replacement filtration catalog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JC Filters | Replacement filtration, ready for replenishment',
    description: 'Pool, appliance, vacuum and dryer replacement filter programs for ecommerce sellers, importers and distributors.',
    images: ['/jc-filters-social-card.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tongxiang Jiacheng Environmental Protection Technology Co., Ltd.',
    alternateName: 'JC Filters',
    url: siteUrl,
    email: 'filter02@txjiacheng.com',
    telephone: '+86 158 5838 1863',
    foundingDate: '2012',
    description: 'Replacement-filter manufacturer for pool and spa, appliance, vacuum and dryer filtration programs.',
    address: { '@type': 'PostalAddress', addressRegion: 'Zhejiang', addressCountry: 'CN' },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
