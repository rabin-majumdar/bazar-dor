import { Category } from "@/app/types/category";
import NavLinkItem from "./NavLinkItem";

interface NavLinksProps {
    categories: Category[];
}

export default function NavLinks({ categories }: NavLinksProps) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
                <NavLinkItem
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
}