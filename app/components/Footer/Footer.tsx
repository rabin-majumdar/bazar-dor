import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-green-200 bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

                {/* Brand */}
                <div>
                    <Link
                        href="/"
                        className="mb-4 inline-flex items-center gap-2 text-2xl font-bold text-green-700"
                    >
                        <span className="relative h-10 w-10">
                            <Image
                                src="/logo-icon.png"
                                alt="বাজার দর"
                                fill
                                sizes="40px"
                                className="object-contain"
                                priority
                            />
                        </span>

                        <span>বাজার দর</span>
                    </Link>

                    <p className="max-w-sm text-sm leading-7 text-gray-600">
                        বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দৈনিক বাজারদর,
                        মূল্য পরিবর্তন এবং বিভিন্ন পণ্যের দাম সম্পর্কে জানুন।
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">
                        প্রয়োজনীয় লিংক
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>
                            <Link href="/" className="transition hover:text-green-700">
                                হোম
                            </Link>
                        </li>
                        <li>
                            <Link href="/#সব-পণ্য" className="transition hover:text-green-700">
                                সব পণ্য
                            </Link>
                        </li>
                        <li>
                            <Link href="/sign-in" className="transition hover:text-green-700">
                                সাইন ইন
                            </Link>
                        </li>
                        <li>
                            <Link href="/sign-up" className="transition hover:text-green-700">
                                সাইন আপ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">
                        যোগাযোগ
                    </h3>

                    <p className="text-sm leading-7 text-gray-600">
                        বাজারদর সম্পর্কিত কোনো প্রশ্ন বা পরামর্শ থাকলে
                        আমাদের সঙ্গে যোগাযোগ করুন।
                    </p>
                    <p className="mt-3 text-sm text-green-700">
                        বাংলাদেশের বাজারদর, এক জায়গায়।
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-green-100 bg-green-50">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-gray-600 md:flex-row lg:px-8">
                    <p className="md:text-left">
                        <span className="font-semibold text-green-700">
                            বাজার দর
                        </span>
                        {" "}— প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>

                    <p className="shrink-0">
                        © {new Date().getFullYear()} বাজার দর। সর্বস্বত্ব সংরক্ষিত।
                    </p>

                    <p className="max-w-sm md:text-right">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>
                </div>
            </div>
        </footer>
    );
}