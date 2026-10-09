export default function CategoryLoading() {
    return (
        <main className="min-h-screen bg-[#f3faf6] px-4 py-6">
            <div className="container mx-auto">
                {/* Category Header Skeleton */}
                <div className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 animate-pulse rounded-xl bg-gray-200" />

                        <div className="flex-1 space-y-3">
                            <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
                            <div className="h-4 w-56 max-w-full animate-pulse rounded bg-gray-100" />
                        </div>
                    </div>
                </div>

                {/* Sort Control Skeleton */}
                <div className="mb-6 flex justify-end">
                    <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-200" />
                </div>

                {/* Product Cards Skeleton */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="h-12 w-12 animate-pulse rounded-lg bg-gray-200" />

                                <div className="flex-1 space-y-2">
                                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                                    <div className="h-3 w-1/2 animate-pulse rounded bg-gray-100" />
                                </div>
                            </div>

                            <div className="mb-3 h-7 w-2/3 animate-pulse rounded bg-gray-200" />

                            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-100" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
