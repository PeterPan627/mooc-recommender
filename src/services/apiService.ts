export var URL = 'http://localhost:8080/';

export async function getCourseById(courseId: string) {
    const data = await fetch(`${URL}/api/getbyid/${courseId}`);
    return await data.json();
}
export async function getSubjects() {
    const data = await fetch(`${URL}/api/subjects`);
    return await data.json();
}
export async function getSubjectCategories(): Promise<Subject[]> {
    const data = await fetch(`${URL}/api/categories`);
    return await data.json();
}

export async function getCourses(
    subject: string,
    page: number = 0,
    category?: string,
): Promise<Course[]> {
    const query = {
        subject,
        page: page.toString(),
        category: category || undefined,
    };
    const url = buildQuery(`${URL}api/courses`, query);
    const data = await fetch(url);
    const res = await data.json();
    return res || [];
}

function buildQuery(path: string, object: Record<string, string | undefined>): string {
    return (
        path +
        '?' +
        encodeURI(
            Object.keys(object)
                .filter(key => object[key])
                .map(key => `${key}=${object[key]}`)
                .join('&'),
        )
    );
}

export interface Course {
    id: string;
    categories: string[];
    description: string;
    interested_count: number;
    link: string;
    name: string;
    overview: string;
    provider: string;
    rating: number;
    schools: string[];
    subject: string;
    syllabus: string;
    teachers: string[];
    details: Details;
}

export interface Details {
    certificate: string;
    cost: number;
    language: string;
}

export interface Subject {
    _id: string;
    unique_categories: string[];
}
