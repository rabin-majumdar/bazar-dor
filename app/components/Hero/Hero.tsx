import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });
    return (
        <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
            <div className="grid items-center gap-8 overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-sm sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-12">

                {/* Left Content */}
                <div className="max-w-xl">
                    <span className="px-3 py-2 rounded-full text-sm font-semibold bg-[#05893E]/10 text-[#05893E] sm:text-base">
                        {date}
                    </span>

                    <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <a
                        href="#সব-পণ্য"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#05893E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#047a37]"
                    >
                        সব পণ্য দেখুন
                        <ArrowDown size={18} strokeWidth={2.5} />
                    </a>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজারের পণ্য"
                        width={500}
                        height={400}
                        priority
                        className="h-auto w-full max-w-sm object-contain sm:max-w-md"
                    />
                </div>
            </div>
        </section>
    );
}