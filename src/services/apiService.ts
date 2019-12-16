import { auth } from 'firebase';
import { toast } from 'react-toastify';

export var URL = 'http://localhost:8080/api';

function req(url: string, method = 'GET') {
    return fetch(url, { method }).then(res => {
        return res.json().then(data => {
            if (res.ok) {
                return data;
            } else {
                console.error(data)
                toast.error(data);
            }
        });
    });
}
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

export async function getUserCourses(userId: string): Promise<Record<string, Course[]>> {
    const res = await fetch(`${URL}/getUserCourses/${userId}`);
    const courses: Course[] = await res.json();
    return { [userId]: courses };
}
export async function getUserCoursesByAuth(userId: string): Promise<Record<string, Course[]>> {
    const res = await fetch(`${URL}/getUserCoursesByAuth/${userId}`);
    const courses: Course[] = await res.json();
    return { [userId]: courses };
}

export async function enrollUserToCourse(userId: string, courseId: string) {
    try {
        return await req(`${URL}/enrollUser/${userId}/${courseId}`, 'POST');
    } catch (e) {
        toast.error(e.message);
    }
}

export async function removeUserEnrollment(userId: string, courseId: string) {
    try {
        return await req(`${URL}/removeUserEnrollement/${userId}/${courseId}`, 'POST');
    } catch (e) {
        toast.error(e.message);
    }
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
                toast.success('You have been successfully registered.');
            });
    }
}

export async function getCourseReviews(courseId: string): Promise<Review[]> {
    return await req(`${URL}/getReviews/${courseId}`).then(val => (val ? val : []));
}
export async function deleteReview(authId: string, reviewId: string) {
    return await req(`${URL}/deleteReview/${authId}/${reviewId}`, 'DELETE');
}

export async function postReview(review: {
    authId: string;
    courseId: string;
    text: string;
    rating: number;
}) {
    const res = await fetch(`${URL}/postReview/${review.authId}/${review.courseId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });

    return res;
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

export interface Review {
    id: string;
    text: string;
    rating: number;
    courseId: string;
    user: User;
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
