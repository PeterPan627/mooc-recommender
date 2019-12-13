import { auth } from 'firebase';

export var URL = 'http://localhost:8080/api';

export async function getCourseById(courseId: string) {
    const data = await fetch(`${URL}/getbyid/${courseId}`);
    return await data.json();
}
export async function getSubjects() {
    const data = await fetch(`${URL}/subjects`);
    return await data.json();
}
export async function getSubjectCategories(): Promise<Subject[]> {
    const data = await fetch(`${URL}/categories`);
    return await data.json();
}

export async function getRecommendedByOverfitting(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}/overfittingRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}
export async function getRecommendedByCategories(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}/categoryRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}
export async function getRecommendedByTaxonomy(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}/taxonomyRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}
export async function getRecommendedByGeneral(user_id: string): Promise<WholeRecommendation[]> {
    const query = {
        user_id,
    };
    const url = buildQuery(`${URL}/generalRecommending`, query);
    const data = await fetch(url);
    return await data.json();
}

export async function getUserById(userId: string) {
    const res = await fetch(`${URL}/getUserById/${userId}`);
    const user: User = await res.json();
    return user;
}
export async function getUserByAuthId(authId: string) {
    const res = await fetch(`${URL}/getUserByAuthId/${authId}`);
    const user: User = await res.json();
    return user;
}

export async function getPersonaCourse(userId: string): Promise<Record<string, Course[]>> {
    const res = await fetch(`${URL}/getUserCourses/${userId}`);
    const courses: Course[] = await res.json();
    return { [userId]: courses };
}
export async function getUserCourses(userId: string): Promise<Record<string, Course[]>> {
    const res = await fetch(`${URL}/getUserCoursesByAuth/${userId}`);
    const courses: Course[] = await res.json();
    return { [userId]: courses };
}

export async function enrollUserToCourse(userId: string, courseId: string) {
    const res = await fetch(`${URL}/enrollUser/${userId}/${courseId}`, { method: 'POST' });
    const user = await res.json();
    return user;
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
    const url = buildQuery(`${URL}/courses`, query);
    const data = await fetch(url);
    const res = await data.json();
    return res || [];
}

export function createUser({ name, user }: UserRegisterForm) {
    const u = user.user;
    if (u) {
        fetch(`${URL}/createUser/${name}/${u.uid}`, { method: 'POST' })
            .then(res => res.json())
            .then(u => {
                console.log(u);
            });
    }
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

export interface UserRegisterForm {
    name: string;
    user: auth.UserCredential;
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
