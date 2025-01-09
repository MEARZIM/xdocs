import React from 'react'
import { ChevronDown } from 'lucide-react';
import { type Level } from '@tiptap/extension-heading'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store';

export const HeadingLevelButton = () => {
    const { editor } = useEditorStore();

    const headings = [
        {
            label: 'Normal text',
            value: 0,
            fontSize: "16px"
        },
        {
            label: 'Heading 1',
            value: 1,
            fontSize: "32px"
        },
        {
            label: 'Heading 2',
            value: 2,
            fontSize: "24px"
        },
        {
            label: 'Heading 3',
            value: 3,
            fontSize: "20px"
        },
        {
            label: 'Heading 4',
            value: 4,
            fontSize: "18px"
        },
        {
            label: 'Heading 5',
            value: 5,
            fontSize: "14px"
        }
    ];

    const getCurrentHeading = () => {
        for (let i = 1; i <= 5; i++) {
            if (editor?.isActive('heading', { level : i })) {
                return `Heading ${i}`;
            }
        }
        return "Normal text";
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={cn(
                            'text-sm flex items-center justify-start shrink-0 h-7 min-w-7 rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                        )}
                    >
                        <span className='truncate flex justify-between items-center w-full'>
                            {getCurrentHeading()}
                            <ChevronDown className='ml-2 h-4 w-4 shrink-0' />
                        </span>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-1 flex flex-col gap-y-2'
                >
                    {
                        headings.map((heading) => (
                            <DropdownMenuItem
                                key={heading.value}
                                asChild
                            >
                                <button

                                    className={
                                        cn(
                                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-300/80",
                                            (heading.value == 0 && !editor?.isActive("heading")) || editor?.isActive("heading", { level: heading.value }) && "bg-neutral-300/80"
                                        )
                                    }
                                    style={{
                                        fontSize: heading.fontSize
                                    }}
                                    onClick={() => {
                                        if (heading.value === 0) {
                                            editor?.chain().focus().setParagraph().run();
                                        } else {
                                            editor?.chain().focus().toggleHeading({ level: heading.value as Level }).run();
                                        }
                                    }}
                                >
                                    <span className='m-2'>
                                        {heading.label}
                                    </span>
                                </button>
                            </DropdownMenuItem >
                        ))
                    }

                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}


