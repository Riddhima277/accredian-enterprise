import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce',
  description:
    'Partner with Accredian to deliver world-class AI, Data Science & tech learning programs for enterprise teams. IIT & IIM certified.',
  keywords: 'enterprise learning, upskilling, AI training, data science, IIT certified',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>{children}</body>
    </html>
  );
}
