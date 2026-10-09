
export default function HomeLoading() {
    return (
        <main className="min-h-screen bg-[#f3faf6] px-4 py-6">
            <div className="container mx-auto">

                {/* Hero Skeleton */}
                <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
                    <div className="max-w-xl space-y-4">
                        <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
                        <div className="h-11 w-36 animate-pulse rounded-lg bg-gray-200" />
                    </div>
                </section>

                {/* Product Sections Skeleton */}
                {[1, 2, 3].map((section) => (
                    <section key={section} className="mb-8">
                        {/* Section Title */}
                        <div className="mb-5 h-7 w-48 animate-pulse rounded bg-gray-200" />

                        {/* Product Cards */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, index) => (
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
                    </section>
                ))}

            </div>
        </main>
    );
}