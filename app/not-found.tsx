import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f3faf6] px-4 py-12">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-green-100 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">

                <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-green-50"
                />

                <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-green-50"
                />

                {/* Shopping Basket */}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-green-100 bg-[#f3faf6] text-5xl shadow-sm">
                    <span className="animate-bounce motion-reduce:animate-none">
                        🛒
                    </span>

                    <span
                        aria-hidden="true"
                        className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-sm"
                    >
                        ?
                    </span>
                </div>

                {/* Error Label */}
                <div className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#05893E]" />

                    <span className="text-xs font-semibold tracking-wide text-[#05893E]">
                        404 · PAGE NOT FOUND
                    </span>
                </div>

                {/* Error Code */}
                <p className="relative mt-4 text-6xl font-black leading-none tracking-tighter text-[#05893E] sm:text-8xl">
                    404
                </p>

                {/* Message */}
                <h1 className="relative mt-5 text-xl font-bold leading-relaxed text-gray-900 sm:text-2xl">
                    আহা! এই পেজের কোনো খোঁজ পাওয়া গেল না!
                </h1>

                <p className="relative mx-auto mt-4 max-w-sm text-sm leading-7 text-gray-500">
                    মনে হচ্ছে আপনি ভুল ঠিকানায় চলে এসেছেন।
                    চলুন, আবার বাজার দর-এর হোম পেজে ফিরে যাই।
                </p>

                {/* Home Button */}
                <div className="relative mt-8">
                    <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#05893E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#047a37] hover:shadow-md sm:w-auto"
                    >
                        <Home size={18} />
                        হোম পেজে ফিরে যান
                        <ArrowLeft size={18} />
                    </Link>
                </div>

                {/* Footer */}
                <p className="relative mt-8 text-xs font-medium text-gray-400">
                    🛍️ বাজার দর — নিত্যপণ্যের দামের বিশ্বস্ত ঠিকানা
                </p>
            </div>
        </main>
    );
}