import { type ColorResult, SketchPicker } from "react-color"
import { HighlighterIcon } from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEditorStore } from "@/store/use-editor-store"
import { cn } from "@/lib/utils"



export const HighlightColorButton = () => {
    const {
        editor
    } = useEditorStore()

    const value = editor?.getAttributes('highlight').color || "#FFFFFF"

    const onChange = (color: ColorResult) => {
        editor?.chain().focus().setHighlight({
            color: color.hex
        }).run()
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={cn(
                            'text-sm flex flex-col items-center justify-center shrink-0 h-7 min-w-7 rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                        )}
                    >
                        <HighlighterIcon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-1 flex flex-col gap-y-2'
                >
                    <SketchPicker 
                        color={value}
                        onChange={onChange}
                    />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

