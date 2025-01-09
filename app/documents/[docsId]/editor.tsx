'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image'
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'

import { useEditorStore } from '@/store/use-editor-store'



export const Editor = () => {
    const {
        setEditor,
    } = useEditorStore();

    const editor = useEditor({
        onCreate({ editor }) {
            setEditor(editor)
        },
        onUpdate({ editor }) {
            setEditor(editor)
        },
        onSelectionUpdate({ editor }) {
            setEditor(editor)
        },
        onTransaction({ editor }) {
            setEditor(editor)
        },
        onFocus({ editor }) {
            setEditor(editor)
        },
        onBlur({ editor }) {
            setEditor(editor)
        },
        onContentError({ editor }) {
            setEditor(editor)
        },
        onDestroy() {
            setEditor(null)
        },
        editorProps: {
            attributes: {
                class: 'focus:outline-none print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-[1054px] w-[800px] py-10 px-14 cursor-text print:w-full print:min-h-0 print:py-0 print:px-0 print:cursor-auto',
            },
        },
        extensions: [
            StarterKit,
            TaskItem.configure({
                nested: true,
            }),
            TaskList,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Image,
            ImageResize,
            Underline,
            FontFamily,
            TextStyle,
        ],
        content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>

      `,
    })

    if (!editor) {
        return null
    }

    return (
        <>
            <div className='size-full overflow-x-auto bg-slate-100 px-4 print:p-0 print:bg-white print:overflow-visible'>
                <div className='min-w-max flex justify-center w-[800px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
                    <EditorContent editor={editor} />
                </div>
            </div>
        </>
    );
}
