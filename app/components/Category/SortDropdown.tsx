"use client";

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SortDropdown({
    value,
    onChange,
}: SortDropdownProps) {
    return (
        <div className="flex items-center justify-end gap-3">
            <p className="text-sm font-medium text-gray-600">
                সাজান
            </p>

            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm outline-none transition focus:border-[#05893E]"
            >
                <option value="default">ডিফল্ট</option>
                <option value="low-to-high">
                    দাম: কম থেকে বেশি
                </option>
                <option value="high-to-low">
                    দাম: বেশি থেকে কম
                </option>
            </select>
        </div>
    );
}