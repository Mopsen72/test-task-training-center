import style from "./style.module.scss"
import CoursesFilters from "../../features/coursesFilters";
import {ICourse} from "../../entities/course/types";
import CourseCard from "../../entities/course/courseCard";

function coursesList() {

    const courseList: ICourse[] = [
        {
            id: 1,
            avatar: "М",
            status: "success",
            title: "Монажник-повар",
            percent: 80,
            dateStart: "2025-01-02",
            dateEnd: "2025-01-25",
        },
        {
            id: 2,
            avatar: "П",
            status: "error",
            title: "Пекарь-водолаз",
            percent: 22,
            dateStart: "2025-01-10",
            dateEnd: "2025-02-25",
        },
        {
            id: 3,
            avatar: "Т",
            status: "ready",
            title: "Тракторист-тракторов",
            percent: 17,
            dateStart: "2025-01-12",
            dateEnd: "2025-03-20",
        },
        {
            id: 4,
            avatar: "Ф",
            status: "warning",
            title: "Фотограв-сварщик",
            percent: 95,
            dateStart: "2025-01-12",
            dateEnd: "2025-04-11",
        },
        {
            id: 5,
            avatar: "М",
            status: "success",
            title: "Механик-строитель",
            percent: 80,
            dateStart: "2025-01-12",
            dateEnd: "2025-01-25",
        }
    ]

    let list
    if (courseList.length > 0) {
        list = (
            <ul className={style.courseList}>
                {
                    courseList.map((el) =>
                        <li className={style.courseList__item} key={el.id}>
                            <CourseCard course={el}/>
                        </li>
                    )
                }

            </ul>
        )
    } else {
        list = (
            <div>
                Список пуст
            </div>
        )
    }


    return (
        <>
            <div className={style.coursesWidget}>
                <CoursesFilters/>

                <div className={style.pageTitle}>
                    <h2>Ваши курсы</h2>
                </div>

                {list}

            </div>
        </>
    )
}

export default coursesList