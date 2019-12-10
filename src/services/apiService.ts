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

export async function getRecommendedByOverfitting(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}api/overfittingRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}
export async function getRecommendedByCategories(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}api/categoryRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}
export async function getRecommendedByTaxonomy(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}api/taxonomyRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}
export async function getRecommendedByGeneral(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}api/generalRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}

export async function getUserById(userId: string) {
    const res = await fetch(`${URL}/api/getUserById/${userId}`);
    const user: User = await res.json();
    return user;
}

export async function getPersonaCourse(userId: string): Promise<Record<string, Course[]>> {
    const res = await fetch(`${URL}/api/getUserCourses/${userId}`);
    const courses: Course[] = await res.json();
    return { [userId]: courses };
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

export interface User {
    name: string;
    enrolledIn: string[];
    id: string;
    authId: string;
    rating: number[];
}

export interface Subject {
    _id: string;
    unique_categories: string[];
}

export interface Cause {
    CourseID: string;
    Popularity: number;
    Similarity: number;
}
export interface Recommendation {
    course: Course;
    recommendedBecause: Cause[];
}

export interface WholeRecommendation {
    courseID: string;
    recommended: Recommendation;
    overallSimilarity: number;
}
