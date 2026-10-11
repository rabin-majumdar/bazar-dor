import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "সাইন আপ",
};

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}