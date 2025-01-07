import React from 'react'

import { Editor } from './editor';

interface SingleDocsPage {
    params: Promise<{ docsId: string }>;
}

const SingleDocsPage = async ({
    params
}: SingleDocsPage) => {
    const { docsId } = await params;

    return (
        <div className='min-h-screen bg-gray-100'>
            <Editor />
        </div>
    )
}

export default SingleDocsPage
