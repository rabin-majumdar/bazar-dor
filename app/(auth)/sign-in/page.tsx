"use client";

import { useState } from "react";
import Link from "next/link";
import { Envelope, EyeSlash } from "@gravity-ui/icons";
import { Eye, LockKeyhole } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Social from "@/app/components/Auth/Social";
import { Spinner } from "@heroui/react";

export default function SignInPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");



    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const { error } = await signIn.social({
                provider: "google",
                callbackURL: "/",
            });

            if (error) {
                const message = error.message || "Google দিয়ে সাইন ইন করা যায়নি।";
                setErrorMessage(message);
                toast.error(message);
            }
        } catch {
            const message = "সমস্যা হয়েছে। আবার চেষ্টা করুন।";
            setErrorMessage(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };



    const handleGitHubSignIn = async () => {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const { error } = await signIn.social({
                provider: "github",
                callbackURL: "/",
            });

            if (error) {
                const message =
                    error.message || "GitHub দিয়ে সাইন ইন করা যায়নি।";

                setErrorMessage(message);
                toast.error(message);
            }
        } catch {
            const message = "সমস্যা হয়েছে। আবার চেষ্টা করুন।";

            setErrorMessage(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };



    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        try {
            const { error } = await signIn.email({
                email,
                password,
            });

            if (error) {
                const message =
                    error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।";

                setErrorMessage(message);
                toast.error(message);
                return;
            }

            toast.success("সফলভাবে সাইন ইন করেছেন!");
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
                        স্বাগতম ফিরে আসায়
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টে সাইন ইন করুন
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            ইমেইল অ্যাড্রেস
                        </label>

                        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 transition focus-within:border-[#05893E] focus-within:ring-2 focus-within:ring-green-100">
                            <Envelope className="h-4 w-4 shrink-0 text-gray-400" />

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                autoComplete="email"
                                required
                                className="w-full bg-transparent py-3 text-sm outline-none"
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

                        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 transition focus-within:border-[#05893E] focus-within:ring-2 focus-within:ring-green-100">
                            <LockKeyhole className="h-4 w-4 shrink-0 text-gray-400" />

                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="আপনার পাসওয়ার্ড লিখুন"
                                autoComplete="current-password"
                                required
                                className="w-full bg-transparent py-3 text-sm outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                aria-label={
                                    showPassword
                                        ? "পাসওয়ার্ড লুকান"
                                        : "পাসওয়ার্ড দেখুন"
                                }
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <Eye className="size-4" />
                                ) : (
                                    <EyeSlash className="size-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {errorMessage && (
                        <p
                            role="alert"
                            className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600"
                        >
                            {errorMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#05893E] px-4 py-3 font-semibold text-white transition hover:bg-[#047a37] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isLoading ? (
                            <>
                                <Spinner color="current" size="sm" />
                                অপেক্ষা করুন, সাইন ইন হচ্ছে...
                            </>
                        ) : (
                            "সাইন ইন করুন"
                        )}
                    </button>
                </form>


                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-400">অথবা</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <Social
                    onGoogleSignIn={handleGoogleSignIn}
                    onGitHubSignIn={handleGitHubSignIn}
                    isLoading={isLoading}
                />

                <p className="mt-6 text-center text-sm text-gray-600">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/sign-up"
                        className="font-semibold text-[#05893E] hover:underline"
                    >
                        সাইন আপ করুন
                    </Link>
                </p>
            </div>
        </main>
    );
}