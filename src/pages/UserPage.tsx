import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AuthContext } from '../auth';
import { getUserCoursesByAuth, Course } from '../services/apiService';
import PersonalPage from '../common/PersonaRecommendation';

export function User() {
    const history = useHistory();
    const { userId }: { userId?: string } = useParams();
    const { user, userData } = useContext(AuthContext);
    const [courses, setCourses] = useState<Course[]>([]);
    if (!userId && user) {
        history.push('/user/' + user.uid);
    }

    useEffect(() => {
        if (user && userData) {
            getUserCoursesByAuth(user.uid).then(res => {
                setCourses(res[user.uid]);
            });
        }
    });

    return (
        <div>
            {userData && (
                <PersonalPage name={userData.name} id={userData.id} courses={courses || []} />
            )}
        </div>
    );
}
