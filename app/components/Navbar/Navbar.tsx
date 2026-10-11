import { getCategories } from "@/app/services/categoryService";
import NavLinks from "./NavLinks/NavLinks";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import Image from "next/image";

export default async function Navbar() {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });

    const categories = await getCategories();

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto p-2">
                <div className="flex items-center justify-between gap-4">

                    {/* Logo & Date */}
                    <Link href={"/"}>
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
                                <Image
                                    src="/logo-icon.png"
                                    alt="বাজার দর"
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    বাজার দর
                                </h1>
                                <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                                    {date}
                                </p>
                            </div>
                        </div>
                    </Link>
                    {/* Authentication Button */}
                    <AuthButtons />
                </div>

                {/* Categories */}
                <NavLinks categories={categories} />
            </div>
        </nav>
    );
}