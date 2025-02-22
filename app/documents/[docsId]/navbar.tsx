"use client"

import Image from "next/image";
import Link from "next/link";

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { DocumentInput } from "./document-input";
import { BoldIcon, FileIcon, FileJson, FilePenIcon, FilePlus, FileText, GlobeIcon, ItalicIcon, Printer, Redo2Icon, RemoveFormattingIcon, StrikethroughIcon, TextIcon, Trash, UnderlineIcon, Undo2Icon } from "lucide-react";
import { BsFilePdf } from "react-icons/bs";

export const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Link href={'/'}>
                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            width={36}
                            height={36}
                        />
                    </Link>
                    <div className="flex flex-col">
                        <DocumentInput />
                        <div className="flex">
                            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                                <MenubarMenu>
                                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">File</MenubarTrigger>
                                    <MenubarContent className="print:hidden">
                                        <MenubarSub>
                                            <MenubarSubTrigger>
                                                <FileIcon className="size-4 mr-2" />
                                                Save
                                            </MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem>
                                                    JSON
                                                    <MenubarShortcut><FileJson className="size-4" /></MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem>
                                                    HTML
                                                    <MenubarShortcut><GlobeIcon className="size-4" /></MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem>
                                                    PDF
                                                    <MenubarShortcut><BsFilePdf className="size-4" /></MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem>
                                                    TEXT
                                                    <MenubarShortcut><FileText className="size-4" /></MenubarShortcut>
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>

                                        <MenubarItem>
                                            <FilePlus className="size-4 mr-2" />
                                            New Document
                                        </MenubarItem>

                                        <MenubarSeparator />

                                        <MenubarItem>
                                            <FilePenIcon className="size-4 mr-2" />
                                            Rename
                                        </MenubarItem>

                                        <MenubarItem>
                                            <Trash className="size-4 mr-2" color="red" />
                                            <span className="text-red-600">
                                                Remove
                                            </span>
                                        </MenubarItem>

                                        <MenubarSeparator />

                                        <MenubarItem onClick={() => window.print()}>
                                            <Printer className="size-4 mr-2" />
                                            Print
                                            <MenubarShortcut>⌘P</MenubarShortcut>
                                        </MenubarItem>

                                    </MenubarContent>
                                </MenubarMenu>

                                <MenubarMenu>
                                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                        Edit
                                    </MenubarTrigger>

                                    <MenubarContent className="print:hidden">
                                        <MenubarItem>
                                            <Undo2Icon className="size-4 mr-2" />
                                            Undo
                                            <MenubarShortcut>
                                                ⌘Z
                                            </MenubarShortcut>
                                        </MenubarItem>

                                        <MenubarItem>
                                            <Redo2Icon className="size-4 mr-2" />
                                            Redo
                                            <MenubarShortcut>
                                                ⌘Y
                                            </MenubarShortcut>
                                        </MenubarItem>

                                    </MenubarContent>
                                </MenubarMenu>

                                <MenubarMenu>
                                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                        Insert
                                    </MenubarTrigger>

                                    <MenubarContent className="print:hidden">
                                        <MenubarSub>
                                            <MenubarSubTrigger>
                                                Table
                                            </MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem>
                                                    1 x 1
                                                </MenubarItem>

                                                <MenubarItem>
                                                    2 x 2
                                                </MenubarItem>

                                                <MenubarItem>
                                                    3 x 3
                                                </MenubarItem>

                                                <MenubarItem>
                                                    4 x 4
                                                </MenubarItem>

                                            </MenubarSubContent>
                                        </MenubarSub>
                                    </MenubarContent>

                                </MenubarMenu>

                                <MenubarMenu>
                                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                        Format
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarSub>
                                            <MenubarSubTrigger>
                                                <TextIcon className="size-4 mr-2" />
                                                Text
                                            </MenubarSubTrigger>

                                            <MenubarSubContent>

                                                <MenubarItem>
                                                    <BoldIcon className="size-4 mr-2" />
                                                    Bold
                                                    <MenubarShortcut>
                                                        ⌘B
                                                    </MenubarShortcut>
                                                </MenubarItem>

                                                <MenubarItem>
                                                    <ItalicIcon className="size-4 mr-2" />
                                                    Italic
                                                    <MenubarShortcut>
                                                        ⌘I
                                                    </MenubarShortcut>
                                                </MenubarItem>

                                                <MenubarItem>
                                                    <UnderlineIcon className="size-4 mr-2" />
                                                    Underline
                                                    <MenubarShortcut>
                                                        ⌘U
                                                    </MenubarShortcut>
                                                </MenubarItem>

                                                <MenubarItem>
                                                    <StrikethroughIcon className="size-4 mr-2" />
                                                    <span className="mr-2">
                                                        Strikethrough
                                                    </span>
                                                    <MenubarShortcut>
                                                        ⌘S
                                                    </MenubarShortcut>
                                                </MenubarItem>

                                            </MenubarSubContent>

                                        </MenubarSub>

                                        <MenubarItem>
                                            <RemoveFormattingIcon className="size-4 mr-2" />
                                            Clear Formatting
                                        </MenubarItem>
                                    </MenubarContent>

                                </MenubarMenu>

                            </Menubar>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}