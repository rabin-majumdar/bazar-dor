"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/app/types/category";

interface NavLinkItemProps {
    category: Category;
}

export default function NavLinkItem({ category }: NavLinkItemProps) {
    const pathname = usePathname();

    const isActive = pathname === `/${category.slug}`;

    return (
        <Link
            href={`/${category.slug}`}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive
                    ? "bg-[#05893E] text-white"
                    : "text-gray-700 hover:bg-green-50 hover:text-[#05893E]"
            }`}
        >
            <span>{category.icon}</span>
            <span className="ml-1">{category.nameBn}</span>
        </Link>
    );
}