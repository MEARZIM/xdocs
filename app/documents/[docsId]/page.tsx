import React from 'react'

import { Editor } from './editor';
import { Toolbar } from './Toolbar';

interface SingleDocsPage {
    params: Promise<{ docsId: string }>;
}

const SingleDocsPage = async ({
    params
}: SingleDocsPage) => {
    const { docsId } = await params;

    return (
        <div className='min-h-screen bg-gray-100'>
            <Toolbar />
            <Editor />
        </div>
    )
}

export default SingleDocsPage
