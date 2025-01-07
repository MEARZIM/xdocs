"use client"

import React from 'react'
import { 
    Bold, 
    Code2Icon, 
    Italic, 
    ListTodoIcon, 
    LucideIcon, 
    MessageSquarePlusIcon, 
    PrinterIcon, 
    Redo2Icon, 
    SpellCheckIcon, 
    UnderlineIcon, 
    Undo2Icon 
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store';
import { Separator } from '@/components/ui/separator';

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

export const Toolbar = () => {
    const {
        editor
    } = useEditorStore();
    console.log(editor);
    const section: {
        lable: string
        icon: LucideIcon;
        onClick?: () => void;
        isActive: boolean;
    }[][] = [
            [
                {
                    lable: 'Undo',
                    icon: Undo2Icon,
                    onClick: () => editor?.chain().focus().undo().run(),
                    isActive: false
                },
                {
                    lable: 'Redo',
                    icon: Redo2Icon,
                    onClick: () => editor?.chain().focus().redo().run(),
                    isActive: false
                },
                {
                    lable: 'Print',
                    icon: PrinterIcon,
                    onClick: () => window.print(),
                    isActive: false
                },
                {
                    lable: 'Spell Check',
                    icon: SpellCheckIcon,
                    onClick: () => {
                        const current = editor?.view.dom.getAttribute('spellcheck');
                        editor?.view.dom.setAttribute('spellcheck', current === 'true' ? 'false' : 'true');
                    },
                    isActive: false
                },
            ],
            [
                {
                    lable: 'Bold',
                    icon: Bold,
                    onClick: () => {
                        editor?.chain().focus().toggleBold().run();
                    },
                    isActive: editor?.isActive('bold') ?? false,
                },
                {
                    lable: 'Italic',
                    icon: Italic,
                    onClick: () => {
                        editor?.chain().focus().toggleItalic().run();
                    },
                    isActive: editor?.isActive('italic') ?? false,
                },
                {
                    lable: 'Underline',
                    icon: UnderlineIcon,
                    onClick: () => {
                        editor?.chain().focus().toggleUnderline().run();
                    },
                    isActive: editor?.isActive('underline') ?? false,
                },
                {
                    lable: 'Code',
                    icon: Code2Icon,
                    onClick: () => {
                        editor?.chain().focus().toggleCode().run()
                    },
                    isActive: editor?.isActive('code') ?? false,
                }
            ],
            [
                {
                    lable: 'Comment',
                    icon: MessageSquarePlusIcon,
                    onClick: () => {console.log("This is for Comment")},
                    isActive: false
                },
                {
                    lable: 'List Todo',
                    icon: ListTodoIcon,
                    onClick: () => editor?.chain().focus().toggleTaskList().run(),
                    isActive: editor?.isActive('taskList') ?? false,
                },
            ]
        ];
return (
    <div className='bg-gray-200 px-2.5 py-0.5 rounded-sm min-h-[40px] flex items-center gap-x-2 overflow-x-auto'>
        {section[0].map((item) => (
            <ToolbarButton key={item.lable} {...item} />
        ))}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Font Family */}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Heading */}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Size */}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {section[1].map((item) => (
            <ToolbarButton key={item.lable} {...item} />
        ))}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
       
        {/* TODO: Link */}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Image*/}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Align*/}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Line Height*/}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {/* TODO: Lists*/}
        <Separator orientation='vertical' className='h-6 bg-neutral-300' />
        {section[2].map((item) => (
            <ToolbarButton key={item.lable} {...item} />
        ))}

    </div>
)
}

