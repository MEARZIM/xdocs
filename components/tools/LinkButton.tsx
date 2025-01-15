"use client"

import { useState } from "react"
import { Link2Icon } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/use-editor-store"

export const LinkButton = () => {
    const {
        editor
    } = useEditorStore();

    const [value, setValue] = useState('');

    const onChange = (href: string) => {
        editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
        setValue("");
    }

    return (
        <>
            <DropdownMenu
                onOpenChange={(open) => {
                    if (open) {
                        setValue(editor?.getAttributes("link").href || "");
                    }
                }}
            >
                <DropdownMenuTrigger
                    asChild
                >
                    <button
                        className={cn(
                            'text-sm flex flex-col items-center justify-center shrink-0 h-7 min-w-7 rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                        )}
                    >
                        <Link2Icon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-2.5 flex items-center gap-x-2'
                >
                    <Input
                        placeholder="https://www.google.com/"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button
                        onClick={() => onChange(value)}
                    >
                        Apply
                    </Button>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}


