import { 
    AlignCenterIcon, 
    AlignJustifyIcon, 
    AlignLeftIcon, 
    AlignRightIcon, 
} from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEditorStore } from "@/store/use-editor-store"
import { cn } from "@/lib/utils"



export const AlignButton = () => {
    const {
        editor
    } = useEditorStore()

    const alignments = [
        {
            label: "Align Left",
            value: "left",
            icon: AlignLeftIcon
        },
        {
            label: "Align Center",
            value: "center",
            icon: AlignCenterIcon
        },
        {
            label: "Align Right",
            value: "right",
            icon: AlignRightIcon
        },
        {
            label: "Align Justify",
            value: "justify",
            icon: AlignJustifyIcon
        }
    ];

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={cn(
                            'text-sm flex flex-col items-center justify-center shrink-0 h-7 min-w-7 rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                        )}
                    >
                        <AlignLeftIcon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-1 flex flex-col gap-y-2'
                >
                    {alignments.map(({ label, value, icon: Icon }) => (
                        <button
                            key={value}
                            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
                            className={cn(
                                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                                editor?.isActive({ textAlign: value }) && "bg-neutral-200/80"
                            )}
                        >
                            <Icon className="size-4" />
                            <span className="text-sm" >{label}</span>
                        </button>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

