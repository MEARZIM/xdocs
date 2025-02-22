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
    RemoveFormattingIcon,
    SpellCheckIcon,
    UnderlineIcon,
    Undo2Icon
} from 'lucide-react';

import { useEditorStore } from '@/store/use-editor-store';
import { Separator } from '@/components/ui/separator';
import { FontFamilyButton } from '@/components/tools/FontFamilyButton';
import { ToolbarButton } from '@/components/tools/ToolbarButton';
import { HeadingLevelButton } from '@/components/tools/HeadingLevelButton';
import { TextColorButton } from '@/components/tools/TextColorButton';
import { HighlightColorButton } from '@/components/tools/HighlightColorButton';
import { LinkButton } from '@/components/tools/LinkButton';
import { ImageButton } from '@/components/tools/ImageButton';
import { AlignButton } from '@/components/tools/AlignButton';
import { ListButton } from '@/components/tools/ListButton';
import { FontSizeButton } from '@/components/tools/FontSizeButton';
import { LineHeightButton } from '@/components/tools/LineHeightButton';



export const Toolbar = () => {
    const {
        editor
    } = useEditorStore();

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
                    onClick: () => { console.log("This is for Comment") },
                    isActive: false
                },
                {
                    lable: 'List Todo',
                    icon: ListTodoIcon,
                    onClick: () => editor?.chain().focus().toggleTaskList().run(),
                    isActive: editor?.isActive('taskList') ?? false,
                },
                {
                    lable: 'Remove Formating',
                    icon: RemoveFormattingIcon,
                    onClick: () => editor?.chain().focus().unsetAllMarks().run(),
                    isActive: false,
                },
            ]
        ];
    return (
        <div className='bg-gray-200 px-2.5 py-0.5 rounded-sm min-h-[40px] flex items-center gap-x-2 overflow-x-auto'>
            {section[0].map((item) => (
                <ToolbarButton key={item.lable} {...item} />
            ))}
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <FontFamilyButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            <HeadingLevelButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/* Font Size */}
            <FontSizeButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {section[1].map((item) => (
                <ToolbarButton key={item.lable} {...item} />
            ))}
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/* Text Color */}
            <TextColorButton />
            {/* Highlight color */}
            <HighlightColorButton />
            {/*Link */}
            <LinkButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/*Image*/}
            <ImageButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/*Align*/}
            <AlignButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/*Line Height*/}
            <LineHeightButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {/*Lists*/}
            <ListButton />
            <Separator orientation='vertical' className='h-6 bg-neutral-300' />
            {section[2].map((item) => (
                <ToolbarButton key={item.lable} {...item} />
            ))}

        </div>
    )
}

