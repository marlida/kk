import { FC } from "react";
import {
    TagIcon,
    BuildingStorefrontIcon,
    ClockIcon,
    ArrowPathIcon,
    CogIcon,
} from "@heroicons/react/24/outline";
import { TableHead, TableRow } from "@/components/ui/table";

const CategoryTableHeader: FC = () => {
    return (
        <TableRow>
            <TableHead className="text-center w-[100px] border-r">
                <div className="flex items-center justify-center">
                    <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 text-xs font-bold">
                        #
                    </span>
                    รหัส
                </div>
            </TableHead>
            <TableHead className="text-center border-r">
                <div className="flex items-center justify-center">
                    <TagIcon className="w-5 h-5 mr-2 text-blue-500" />
                    ชื่อหมวดหมู่
                </div>
            </TableHead>
            <TableHead className="text-center border-r">
                <div className="flex items-center justify-center">
                    <BuildingStorefrontIcon className="w-5 h-5 mr-2 text-green-500" />
                    แบรนด์
                </div>
            </TableHead>
            <TableHead className="text-center border-r">
                <div className="flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 mr-2 text-purple-500" />
                    วันที่สร้าง
                </div>
            </TableHead>
            <TableHead className="text-center border-r">
                <div className="flex items-center justify-center">
                    <ArrowPathIcon className="w-5 h-5 mr-2 text-orange-500" />
                    วันที่อัปเดต
                </div>
            </TableHead>
            <TableHead className="text-center w-[120px]">
                <div className="flex items-center justify-center">
                    <CogIcon className="w-5 h-5 mr-2 text-orange-500" />
                    จัดการ
                </div>
            </TableHead>
        </TableRow>
    );
};

export default CategoryTableHeader;
