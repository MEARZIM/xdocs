"use client"

import { useState } from "react"
import { ImageIcon, Link2Icon, Search, UploadIcon } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/use-editor-store"

export const ImageButton = () => {
    const {
        editor
    } = useEditorStore();

    const [imageURL, setImageURL] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const onChange = (href: string) => {
        editor?.chain().focus().setImage({
            src: href,
            alt: 'image'
        }).run();
    }

    const onUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const imgUrl = URL.createObjectURL(file);
                onChange(imgUrl);
            }
        }

        input.click();
    }

    const handleImageURLSubmit = () => {
        if (imageURL) {
            onChange(imageURL);
            setImageURL("");
            setIsDialogOpen(false);
        }
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger
                    asChild
                >
                    <button
                        className={cn(
                            'text-sm flex flex-col items-center justify-center shrink-0 h-7 min-w-7 rounded-sm hover:bg-neutral-300/80 px-2 overflow-hidden',
                        )}
                    >
                        <ImageIcon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className='p-2.5 flex items-center gap-x-2'
                >
                    <DropdownMenuItem onClick={onUpload}>
                        <UploadIcon className="size-4 mr-1" />
                        Upload
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
                        <Search className="size-4 mr-1" />
                        Search
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>


            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Insert Img URL</DialogTitle>
                        <DialogDescription>
                            Upload any image here. Click Insert you are done.
                        </DialogDescription>
                    </DialogHeader>
                    <Input
                        placeholder="https://www.google.com/"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleImageURLSubmit()}
                    />

                    <DialogFooter>
                        <Button
                            type="submit"
                            onClick={handleImageURLSubmit}
                        >
                            Insert
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}


