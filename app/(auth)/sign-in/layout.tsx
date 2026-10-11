import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "সাইন ইন",
};

export default function SignInLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}