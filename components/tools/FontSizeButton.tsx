"use state"

import {
    MinusIcon,
    PlusIcon,
} from "lucide-react"
import { useState } from "react"


import { useEditorStore } from "@/store/use-editor-store"



export const FontSizeButton = () => {
    const {
        editor
    } = useEditorStore()

    const currentFontSize = editor?.getAttributes("textStyle").fontSize ? editor?.getAttributes("textStyle").fontSize.replace("px", "") : "16";
    const [fontSize, setFontSize] = useState(currentFontSize);
    const [inputValue, setInputValue] = useState(fontSize);
    const [editingStyle, setEditingStyle] = useState(false);


    const updateFontSize = (newSize: string) => {
        const size = parseInt(newSize);

        if (!isNaN(size) && size > 0) {
            editor?.chain().focus().setFontSize(`${size}px`).run();
            setFontSize(newSize);
            setInputValue(newSize);
            setEditingStyle(false);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleInputBlur = () => {
        updateFontSize(inputValue);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            updateFontSize(inputValue);
            editor?.commands.focus();
        }
    };

    const increment = () => {
        const newSize = parseInt(fontSize) + 1;
        updateFontSize(newSize.toString());
    }

    const decrement = () => {
        const newSize = parseInt(fontSize) - 1;
        if (newSize > 0) {
            updateFontSize(newSize.toString());
        }
    }

    return (
        <>
            <div className="flex items-center gap-x-2">
                <button
                    onClick={decrement}
                    className="flex items-center justify-center shrink-0 h-7 w-7 rounded-sm hover:bg-neutral-300/80"
                >
                    <MinusIcon className="size-4" />
                </button>

                {
                    editingStyle ? (
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyDown={handleKeyDown}
                            className="text-sm h-7 w-10 rounded-sm bg-transparent focus:outline-none focus:ring-0 border border-neutral-400 text-center"
                        />
                    ) : (
                        <button
                            className="text-sm h-7 w-10 rounded-sm bg-transparent cursor-text border border-neutral-400 hover:bg-neutral-300/80 text-center"
                            onClick={() => {
                                setEditingStyle(true);
                                setFontSize(currentFontSize);
                            }}
                        >
                            {currentFontSize}
                        </button>
                    )
                }
                <button
                    onClick={increment}
                    className="flex items-center justify-center shrink-0 h-7 w-7 rounded-sm hover:bg-neutral-300/80"
                >
                    <PlusIcon className="size-4" />
                </button>
            </div >
        </>
    )
}

