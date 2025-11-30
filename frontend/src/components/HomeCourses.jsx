import React from 'react'
import { homeCoursesStyles } from '../assets/dummyStyles'
import {coursesData} from '../assets/dummyHdata';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import {toast} from 'react-toastify'

const HomeCourses = () => {

    const navigate = useNavigate();
    const {title,course: courseFont,detail} = homeCoursesStyles.fonts;
    const visibleCourses = coursesData.slice(0,8);

     const [userRatings, setUserRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCourseRatings");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  const [hoverRatings, setHoverRatings] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem("userCourseRatings", JSON.stringify(userRatings));
    } catch {}
  }, [userRatings]);

    const showLoginToast = () => {
    toast.error("Please login to access this course", {
      position: "top-right",
      transition: Slide,
      autoClose: 3000,
      theme: "dark",
    });
  };

  const handleCourseClick = (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
        showLoginToast();
        return;
    }
    navigate(`/course/${id}`);
  }

  return (
    <div className={homeCoursesStyles.container}>
      <div className={homeCoursesStyles.mainContainer}>
        <div className={homeCoursesStyles.header}>
            <h2 className={`${title} ${homeCoursesStyles.title}`}>
                <Star className={homeCoursesStyles.titleIcon}/>
                Explore Top Courses
                <Star className={homeCoursesStyles.titleIcon}/>
            </h2>
        </div>

        <div className={homeCoursesStyles.coursesGrid}>
            {visibleCourses.map((course) => {
                const isFree = !!course.isFree || !course.price;

                return (
                    <div className={homeCoursesStyles.coursesGrid}
                    key={course.id}
                    onClick={() => handleCourseClick(course.id)}
                    ></div>
                )
            })}
        </div>


      </div>
    </div>
  )
}

export default HomeCourses
