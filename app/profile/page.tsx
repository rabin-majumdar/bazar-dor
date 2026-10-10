import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/sign-in");
    }

    return (
        <main className="min-h-screen bg-[#f3faf6] px-4 py-10">
            <div className="mx-auto max-w-2xl rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    আমার প্রোফাইল
                </h1>

                <p className="mt-2 text-gray-500">
                    স্বাগতম, {session.user.name}!
                </p>

                <div className="mt-6 space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                        <p className="text-sm text-gray-500">নাম</p>
                        <p className="mt-1 font-medium text-gray-900">
                            {session.user.name}
                        </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                        <p className="text-sm text-gray-500">ইমেইল</p>
                        <p className="mt-1 font-medium text-gray-900">
                            {session.user.email}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}