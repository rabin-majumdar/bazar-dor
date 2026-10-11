"use client";

import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { Camera, Pencil, Save, UserRound, X } from "lucide-react";
import Image from "next/image";

type ProfileFormProps = {
    name: string;
    email: string;
};

export default function ProfileForm({
    name,
    email,
}: ProfileFormProps) {

    const [currentName, setCurrentName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const { data: session } = useSession();
    const profileImage = previewImage ?? session?.user?.image ?? null;

    async function handleImageUpload(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (!file) return;

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

        if (!allowedTypes.includes(file.type)) {
            setMessage("JPG, PNG অথবা WebP ছবি নির্বাচন করুন।");
            event.target.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setMessage("ছবির সাইজ সর্বোচ্চ 2 MB হতে পারবে।");
            event.target.value = "";
            return;
        }

        setIsUploading(true);
        setMessage("");

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("/api/upload/avatar", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.error ?? "ছবি আপলোড করা যায়নি।");
                return;
            }

            const { error } = await authClient.updateUser({
                image: data.imageUrl,
            });

            if (error) {
                setMessage(
                    error.message ?? "প্রোফাইল ছবির URL সেভ করা যায়নি।"
                );
                return;
            }

            setPreviewImage(data.imageUrl);
            setMessage("প্রোফাইল ছবি সফলভাবে আপডেট হয়েছে।");
        } catch {
            setMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setIsUploading(false);
            event.target.value = "";
        }
    }

    async function handleUpdate() {
        const trimmedName = currentName.trim();

        if (!trimmedName) {
            setMessage("নাম খালি রাখা যাবে না।");
            return;
        }

        setIsSaving(true);
        setMessage("");

        try {
            const { error } = await authClient.updateUser({
                name: trimmedName,
            });

            if (error) {
                setMessage(error.message ?? "নাম আপডেট করা যায়নি।");
                return;
            }

            setCurrentName(trimmedName);
            setIsEditing(false);
            setMessage("নাম সফলভাবে আপডেট হয়েছে।");
        } catch {
            setMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করো।");
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <section className="mt-5 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-col items-center">
                <div className="relative">
                    {profileImage ? (
                        <Image
                            src={profileImage}
                            alt="প্রোফাইল ছবি"
                            width={96}
                            height={96}
                            unoptimized
                            className="h-24 w-24 rounded-full border-4 border-green-100 object-cover"
                        />
                    ) : (
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-green-100 bg-green-50 text-green-700">
                            <UserRound size={42} />
                        </div>
                    )}

                    <label
                        htmlFor="avatar-upload"
                        className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#05893E] text-white shadow hover:bg-green-700"
                        title="প্রোফাইল ছবি পরিবর্তন করুন"
                    >
                        <Camera size={17} />
                    </label>

                    <input
                        id="avatar-upload"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                        className="hidden"
                    />
                </div>

                <p className="mt-3 text-sm text-gray-500">
                    {isUploading
                        ? "ছবি আপলোড হচ্ছে..."
                        : "JPG, PNG অথবা WebP · সর্বোচ্চ 2 MB"}
                </p>
            </div>
            <h2 className="mb-6 font-semibold text-gray-900">
                ব্যক্তিগত তথ্য
            </h2>

            <div>
                <label
                    htmlFor="profile-name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    নাম
                </label>

                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3">
                    <input
                        id="profile-name"
                        value={currentName}
                        readOnly={!isEditing}
                        onChange={(event) =>
                            setCurrentName(event.target.value)
                        }
                        className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none"
                    />

                    {!isEditing ? (
                        <button
                            type="button"
                            onClick={() => {
                                setMessage("");
                                setIsEditing(true);
                            }}
                            aria-label="নাম পরিবর্তন করুন"
                            className="rounded-md p-2 text-green-700 hover:bg-green-100"
                        >
                            <Pencil size={17} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                setCurrentName(name);
                                setIsEditing(false);
                                setMessage("");
                            }}
                            aria-label="পরিবর্তন বাতিল করুন"
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-200"
                        >
                            <X size={17} />
                        </button>
                    )}
                </div>
            </div>

            <div className="mt-5">
                <label
                    htmlFor="profile-email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    ইমেইল
                </label>

                <input
                    id="profile-email"
                    type="email"
                    value={email}
                    readOnly
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-500 outline-none"
                />
            </div>

            {message && (
                <p role="status" className="mt-4 text-sm text-gray-600">
                    {message}
                </p>
            )}

            {isEditing && (
                <button
                    type="button"
                    onClick={handleUpdate}
                    disabled={isSaving}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#05893E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <Save size={17} />
                    {isSaving ? "আপডেট হচ্ছে..." : "প্রোফাইল আপডেট করুন"}
                </button>
            )}
        </section>
    );
}