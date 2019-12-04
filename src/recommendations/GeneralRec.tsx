import React from 'react';
import { useParams } from 'react-router';

// imagine about page
export function GeneralRec() {
    const { userId }: { userId?: string } = useParams();

    return <h2>General</h2>;
}
