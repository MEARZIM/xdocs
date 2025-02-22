import { 
    ListCollapseIcon, 
} from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEditorStore } from "@/store/use-editor-store"
import { cn } from "@/lib/utils"



export const LineHeightButton = () => {
    const {
        editor
    } = useEditorStore()

    const lineHeights = [
        {
            label: "Default",
            value: "normal"
        },
        {
            label: "Single",
            value: "1"
        },
        {
            label: "1.15",
            value: "1.15"
        },
        {
            label: "1.5",
            value: "1.5"
        },
        {
            label: "Double",
            value: "2"
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
                        <ListCollapseIcon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-1 flex flex-col gap-y-2'
                >
                    {lineHeights.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
                            className={cn(
                                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                                editor?.getAttributes("paragraph").lineHeight === value && "bg-neutral-200/80"
                            )}
                        >
                            <span className="text-sm" >{label}</span>
                        </button>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

