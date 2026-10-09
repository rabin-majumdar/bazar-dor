import Link from "next/link";

interface ProductBreadcrumbProps {
    category: string;
    categoryNameBn: string;
    productNameBn: string;
}

export default function ProductBreadcrumb({
    category,
    categoryNameBn,
    productNameBn,
}: ProductBreadcrumbProps) {
    return (
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition hover:text-[#05893E]">
                হোম
            </Link>

            <span>›</span>

            <Link
                href={`/category/${category}`}
                className="transition hover:text-[#05893E]"
            >
                {categoryNameBn}
            </Link>

            <span>›</span>

            <span className="text-gray-700">
                {productNameBn}
            </span>
        </div>
    );
}