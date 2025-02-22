import React from 'react'

import { Editor } from './editor';
import { Toolbar } from './Toolbar';
import { Navbar } from './navbar';

interface SingleDocsPage {
    params: Promise<{ docsId: string }>;
}

const SingleDocsPage = async ({
    params
}: SingleDocsPage) => {
    const { docsId } = await params;

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='flex flex-col px-2 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-gray-100 print:hidden'>
                <Navbar />
                <Toolbar />
            </div>
            <div className='pt-[114px] print:pt-0'>
                <Editor />
            </div>
        </div>
    )
}

export default SingleDocsPage
