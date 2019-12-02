import axios from 'axios';
export var URL = 'http://localhost:8080/'

export async function getCourseById(courseId: string) {
    const data = await axios.get(`https://393074c5-bcdb-4829-ab4e-98fe3bb71ea9.mock.pstmn.io//api/getbyid/${courseId}`)
        .then(promise => {
            return promise.data;
        })
        .catch(e => {
            console.error(e);
        })
    return data;
}