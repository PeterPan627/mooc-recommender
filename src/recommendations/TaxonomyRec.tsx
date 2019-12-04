import React from 'react';
import { useParams } from 'react-router';

// imagine about page
export function TaxonomyRec() {
    const { userId }: { userId?: string } = useParams();

    return <h2>Taxonomy</h2>;
}