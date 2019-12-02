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

export async function getSubjectCourses(subject: string, page: number = 0): Promise<Course[]> {
    const data = await fetch(`${URL}/api/courses?subject=${subject}&page=${page}`);
    return await data.json();
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
