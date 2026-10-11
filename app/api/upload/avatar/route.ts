import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { v2 as cloudinary } from "cloudinary";
import { auth } from "@/lib/auth";

export const runtime = "nodejs";

console.log("AVATAR API ROUTE HIT");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
    try {
        // Check authentication
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return NextResponse.json(
                { error: "ছবি আপলোড করতে লগইন করুন।" },
                { status: 401 }
            );
        }

        // Read uploaded file
        const formData = await request.formData();
        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { error: "একটি ছবি নির্বাচন করুন।" },
                { status: 400 }
            );
        }

        // Validate image type
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: "JPG, PNG অথবা WebP ছবি ব্যবহার করুন।" },
                { status: 400 }
            );
        }

        // Maximum file size: 5 MB
        if (file.size > 2 * 1024 * 1024) {
            return NextResponse.json(
                { error: "ছবির সাইজ সর্বোচ্চ 2 MB হতে পারবে।" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        // Upload image to Cloudinary
        const result = await new Promise<{ secure_url: string }>(
            (resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "bazar-dor/avatars",
                        public_id: `avatar-${session.user.id}`,
                        overwrite: true,
                        resource_type: "image",
                    },
                    (error, uploadedResult) => {
                        if (error || !uploadedResult) {
                            reject(error ?? new Error("Upload failed"));
                            return;
                        }

                        resolve({
                            secure_url: uploadedResult.secure_url,
                        });
                    }
                );

                stream.end(buffer);
            }
        );

        return NextResponse.json({
            imageUrl: result.secure_url,
        });
    } catch (error) {
        console.error("Avatar upload failed:", error);

        return NextResponse.json(
            { error: "ছবি আপলোড করা যায়নি। আবার চেষ্টা করুন।" },
            { status: 500 }
        );
    }
}