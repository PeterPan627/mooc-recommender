export var URL = 'http://localhost:8080/';

export async function getCourseById(courseId: string) {
    const data = await fetch(`${URL}/api/getbyid/${courseId}`);
    return await data.json();
}
