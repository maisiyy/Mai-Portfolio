import './global.css';

const siteUrl = 'https://maisiyy.github.io/Mai-Portfolio/';
const description =
  'Portfolio of Siti Nur Maisarah (Mai), a Computer Science graduate working across full-stack web development, game development, and software testing.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mai's Portfolio",
  description,
  openGraph: {
    title: "Mai's Portfolio",
    description,
    url: siteUrl,
    siteName: "Mai's Portfolio",
    type: 'website',
    images: [{ url: `${siteUrl}mai-profile.png`, alt: 'Mai' }],
  },
  twitter: {
    card: 'summary',
    title: "Mai's Portfolio",
    description,
    images: [`${siteUrl}mai-profile.png`],
  },
};

export const viewport = {
  themeColor: '#02030a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
