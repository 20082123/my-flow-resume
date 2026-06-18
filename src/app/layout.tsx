import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://www.my-flow.top";
const title = "李赢洲 | AI 应用开发实习";
const description =
  "李赢洲的中文求职网站，记录 Python、FastAPI、RAG、LangGraph Agent 与 AI 应用开发相关项目。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | 李赢洲",
  },
  description,
  applicationName: "李赢洲求职简历",
  authors: [{ name: "李赢洲" }],
  creator: "李赢洲",
  keywords: [
    "李赢洲",
    "AI 应用开发",
    "AI 应用工程",
    "大模型应用工程",
    "RAG",
    "Agent",
    "LangGraph",
    "LangChain",
    "GraphRAG",
    "FastAPI",
    "Tool Calling",
    "Human-in-the-loop",
    "求职简历",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "李赢洲 | Resume",
    locale: "zh_CN",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "李赢洲 AI 应用开发实习简历网站",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
