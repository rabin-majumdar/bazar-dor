import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { UserRound } from "lucide-react";
import ProfileForm from "./_components/ProfileForm";
import ProfileSignOut from "./_components/ProfileSignOut";
import Image from "next/image";

export const metadata: Metadata = {
    title: "প্রোফাইল",
};

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/sign-in");
    }

    return (
        <main className="min-h-screen bg-[#f3faf6] px-4 py-8 sm:py-10">
            <div className="mx-auto max-w-5xl">
                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Header */}
                <section className="flex flex-col gap-5 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-50 text-green-700">
                            {session.user.image ? (
                                <Image
                                    src={session.user.image}
                                    alt="প্রোফাইল ছবি"
                                    width={64}
                                    height={64}
                                    unoptimized
                                    loading="eager"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <UserRound size={32} />
                            )}
                        </div>

                        <div className="min-w-0">
                            <h2 className="truncate text-lg font-semibold text-gray-900">
                                {session.user.name}
                            </h2>

                            <p className="mt-1 break-all text-sm text-gray-500">
                                {session.user.email}
                            </p>
                        </div>
                    </div>

                    <ProfileSignOut />
                </section>

                {/* Editable Profile Information */}
                <ProfileForm
                    name={session.user.name ?? ""}
                    email={session.user.email}
                />
            </div>
        </main>
    );
}