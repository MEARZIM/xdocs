import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
    icon: LucideIcon;
    onClick?: () => void;
    isActive?: boolean;
}

export const ToolbarButton = ({
    icon: Icon,
    onClick,
    isActive
}: ToolbarButtonProps) => {
    return (
        <button
            className={cn(
                "text-sm min-w-7 flex items-center justify-center h-7 rounded-sm hover:bg-neutral-300/80",
                isActive && "bg-neutral-300/80"
            )}
            onClick={onClick}
        >
            <Icon className='size-4' />
        </button>
    )
};
