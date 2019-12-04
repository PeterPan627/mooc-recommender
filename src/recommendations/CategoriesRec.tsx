import React from 'react';
import { useParams } from 'react-router';

// imagine about page
export function CategoriesRec() {
    const { userId }: { userId?: string } = useParams();

    return <h2>Categories</h2>;
}
