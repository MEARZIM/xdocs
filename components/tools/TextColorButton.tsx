import { type ColorResult, SketchPicker } from "react-color"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useEditorStore } from "@/store/use-editor-store"



export const TextColorButton = () => {
    const {
        editor
    } = useEditorStore()

    const value = editor?.getAttributes('textStyle').color || "#000000"


    const onChange = (color: ColorResult) => {
        editor?.chain().focus().setColor(color.hex).run()
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
                        <span
                            className='text-sm font-medium'
                        >
                            A
                        </span>
                        <div
                            className="w-full h-0.5 "
                            style={{
                                backgroundColor: value
                            }}
                        />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-1 '
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

