
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { Envelope, EyeSlash, Person } from "@gravity-ui/icons";
import { Eye, LockKeyhole } from "lucide-react";
import { toast } from "sonner";

export default function SignUpPage() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        const name = String(formData.get("name") ?? "");
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        try {
            const { error } = await signUp.email({
                name,
                email,
                password,
            });

            if (error) {
                const message = error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।";

                setErrorMessage(message);
                toast.error(message);
                return;
            }
            toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
            router.push("/");
            router.refresh();
        } catch {
            const message = "সমস্যা হয়েছে। আবার চেষ্টা করো।";

            setErrorMessage(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f3faf6] px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8 text-center">
                    <div className="mb-4 text-4xl">🛒</div>

                    <h1 className="text-2xl font-bold text-gray-900">
                        নতুন অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        বাজার দর-এর সঙ্গে নিত্যপণ্যের দাম জানুন
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            আপনার নাম
                        </label>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 transition focus-within:border-[#05893E] focus-within:ring-2 focus-within:ring-green-100">
                            <Person className="h-4 w-4 shrink-0 text-gray-400" />

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="আপনার পুরো নাম"
                                autoComplete="name"
                                minLength={3}
                                required
                                className="w-full border-0 bg-transparent py-3 text-sm outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            ইমেইল ঠিকানা
                        </label>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 transition focus-within:border-[#05893E] focus-within:ring-2 focus-within:ring-green-100">
                            <Envelope className="h-4 w-4 shrink-0 text-gray-400" />

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@email.com"
                                autoComplete="email"
                                required
                                className="w-full border-0 bg-transparent py-3 text-sm outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            পাসওয়ার্ড
                        </label>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 transition focus-within:border-[#05893E] focus-within:ring-2 focus-within:ring-green-100">
                            <LockKeyhole className="h-4 w-4 shrink-0 text-gray-400" />

                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                autoComplete="new-password"
                                minLength={8}
                                required
                                className="w-full border-0 bg-transparent py-3 text-sm outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="shrink-0 text-gray-400 transition hover:text-[#05893E]"
                                aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
                            >
                                {showPassword ? (
                                    <EyeSlash className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {errorMessage && (
                        <p
                            role="alert"
                            className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
                        >
                            {errorMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded-lg bg-[#05893E] px-4 py-3 font-semibold text-white transition hover:bg-[#047a37] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading
                            ? "অ্যাকাউন্ট তৈরি হচ্ছে..."
                            : "অ্যাকাউন্ট তৈরি করুন"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    আগে থেকেই অ্যাকাউন্ট আছে?{" "}
                    <Link
                        href="/sign-in"
                        className="font-semibold text-[#05893E] hover:underline"
                    >
                        সাইন ইন করুন
                    </Link>
                </p>
            </div>
        </main>
    );
}