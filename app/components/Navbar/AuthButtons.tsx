"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function AuthButtons() {
    const { data: session, isPending } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const handleSignOut = async () => {
        setIsOpen(false);

        try {
            await signOut();
            toast.success("সফলভাবে সাইন আউট করেছেন!");
            router.refresh();
        } catch {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
        }
    };



    if (isPending) {
        return <div className="h-9 w-32" />;
    }
    if (session?.user) {
        return (
            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-100"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-[#05893E]">
                        <UserRound size={20} />
                    </div>

                    <span className="hidden text-sm font-medium text-gray-800 sm:block">
                        {session.user.name}
                    </span>

                    <ChevronDown
                        size={16}
                        className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {isOpen && (
                    <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                        <div className="border-b border-gray-100 px-3 py-3">
                            <p className="font-semibold text-gray-900">
                                {session.user.name}
                            </p>
                            <p className="mt-1 truncate text-sm text-gray-500">
                                {session.user.email}
                            </p>
                        </div>

                        <Link
                            href="/profile"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-green-50 hover:text-[#05893E]"
                        >
                            <UserRound size={18} />
                            <span>আমার প্রোফাইল</span>
                        </Link>

                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50"
                        >
                            <LogOut size={18} />
                            <span>সাইন আউট</span>
                        </button>

                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <Link
                href="/sign-in"
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-[#05893E] hover:text-[#05893E] sm:px-4"
            >
                সাইন ইন
            </Link>

            <Link
                href="/sign-up"
                className="rounded-lg bg-[#05893E] px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#047a37] hover:shadow-md sm:px-4"
            >
                সাইন আপ
            </Link>
        </div>
    );
}