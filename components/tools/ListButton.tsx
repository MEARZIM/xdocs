import { 
    ListIcon,
    ListOrderedIcon, 
} from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEditorStore } from "@/store/use-editor-store"
import { cn } from "@/lib/utils"



export const ListButton = () => {
    const {
        editor
    } = useEditorStore()

    const lists = [
        {
            label: "Bullet List",
            icon: ListIcon,
            isActive: () => editor?.isActive("bulletList"),
            onClick: () => editor?.chain().focus().toggleBulletList().run(),
        },
        {
            label: "Ordered List",
            icon: ListOrderedIcon,
            isActive: () => editor?.isActive("orderedList"),
            onClick: () => editor?.chain().focus().toggleOrderedList().run(),
        }
    ]

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={cn(
                            'text-sm flex flex-col items-center justify-center shrink-0 h-7 min-w-7 rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                        )}
                    >
                        <ListIcon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-1 flex flex-col gap-y-2'
                >
                    {lists.map(({ label, icon: Icon, isActive, onClick }) => (
                        <button
                            key={label}
                            onClick={onClick}
                            className={cn(
                                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                                isActive() && "bg-neutral-200/80"
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

