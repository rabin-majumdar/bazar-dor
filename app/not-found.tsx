import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex items-center justify-center bg-[#f3faf6] px-4 py-6">
            <div className="relative w-full container overflow-hidden mx-auto rounded-xl border border-green-100 bg-gray-100 px-6 py-7 text-center shadow-sm sm:px-10 sm:py-9">

                <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-50"
                />

                <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-green-50"
                />

                {/* Brand Logo */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-green-100 bg-[#f3faf6] shadow-sm">
                    <div className="animate-bounce motion-reduce:animate-none">
                        <Image
                            src="/logo-icon.png"
                            alt="বাজার দর"
                            width={44}
                            height={44}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <span
                        aria-hidden="true"
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-xs font-bold text-amber-700"
                    >
                        ?
                    </span>
                </div>

                <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#05893E]" />

                    <span className="text-xs font-semibold tracking-wide text-[#05893E]">
                        404 · PAGE NOT FOUND
                    </span>
                </div>

                <p className="relative mt-3 text-5xl font-black leading-none tracking-tighter text-[#05893E] sm:text-7xl">
                    404
                </p>

                <h1 className="relative mt-3 text-lg font-bold leading-relaxed text-gray-900 sm:text-xl">
                    আহা! এই পেজের কোনো খোঁজ পাওয়া গেল না!
                </h1>

                <p className="relative mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    মনে হচ্ছে আপনি ভুল ঠিকানায় চলে এসেছেন।
                    চলুন, আবার বাজার দর-এর হোম পেজে ফিরে যাই।
                </p>

                <div className="relative mt-5">
                    <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#05893E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#047a37] hover:shadow-md sm:w-auto"
                    >
                        <Home size={17} />
                        হোম পেজে ফিরে যান
                        <ArrowLeft size={17} />
                    </Link>
                </div>

                <p className="relative mt-5 text-xs font-medium text-gray-400">
                    🛍️ বাজার দর — নিত্যপণ্যের দামের বিশ্বস্ত ঠিকানা
                </p>
            </div>
        </main>
    );
}