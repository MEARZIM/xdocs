import React from 'react'
import { ChevronDown } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store'

export const FontFamilyButton = () => {
    const { editor } = useEditorStore();

    const fonts = [
        {
            label: 'Arial',
            value: 'Arial',
        },
        {
            label: 'Georgia',
            value: 'Georgia',
        },
        {
            label: 'Impact',
            value: 'Impact',
        },
        {
            label: 'Tahoma',
            value: 'Tahoma',
        },
        {
            label: 'Times New Roman',
            value: 'Times New Roman',
        },
        {
            label: 'Verdana',
            value: 'Verdana',
        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={cn(
                        'text-sm flex items-center justify-start shrink-0 h-7 w-[200px] rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                    )}
                >
                    <span className='truncate flex justify-between items-center w-full'>
                        {editor?.getAttributes('textStyle').fontFamily || 'Arial'}
                        <ChevronDown className='ml-2 h-4 w-4 shrink-0' />
                    </span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className='p-1 flex flex-col gap-y-2'
            >
                {
                    fonts.map((font) => (
                        <DropdownMenuItem
                            key={font.value}
                            asChild
                        >
                            <button

                                className={
                                    cn(
                                        "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-300/80",
                                        editor?.getAttributes('textStyle').fontFamily === font.value && "bg-neutral-300/80"
                                    )
                                }
                                style={{
                                    fontFamily: font.value
                                }}
                                onClick={() => editor?.chain().focus().setFontFamily(font.value).run()}
                            >
                                <span className='text-sm'>
                                    {font.label}
                                </span>
                            </button>
                        </DropdownMenuItem >
                    ))
                }

            </DropdownMenuContent>
        </DropdownMenu>

    )
}


