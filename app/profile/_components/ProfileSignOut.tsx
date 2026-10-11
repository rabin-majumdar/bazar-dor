"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useState } from "react";

export default function ProfileSignOut() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        setIsLoading(true);

        try {
            await signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("সফলভাবে সাইন আউট করেছেন!");
                        router.replace("/sign-in");
                        router.refresh();
                    },
                    onError: () => {
                        toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
                    },
                },
            });
        } catch {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleSignOut}
            disabled={isLoading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-60 sm:w-auto"
        >
            <LogOut size={16} />
            {isLoading ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
        </button>
    );
}