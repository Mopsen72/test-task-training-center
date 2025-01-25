import style from "./style.module.scss"
import {ICourse} from "../types";
import {DirectionsRun, Favorite, HeartBroken, HourglassBottom} from "@mui/icons-material";
import {Avatar, Chip, LinearProgress} from "@mui/material";
import dayjs from "../../../shared/utils/dayjs.ts";


interface Props {
    course: ICourse
}

function courseCard(props: Props) {

    let classNameByStatus = "";
    let chipTextByStatus = "";
    let iconByStatus;
    let colorMUIComp;
    switch (props.course.status) {
        case "success":
            classNameByStatus = `${style.colorMod_success}`
            chipTextByStatus = "Сдал"
            iconByStatus = <Favorite/>
            colorMUIComp = "success"
            break;
        case "warning":
            classNameByStatus = `${style.colorMod_warning}`
            chipTextByStatus = "Просрочен"
            iconByStatus = <HourglassBottom/>
            colorMUIComp = "warning"
            break;
        case "error":
            classNameByStatus = `${style.colorMod_error}`
            chipTextByStatus = "Не сдал"
            iconByStatus = <HeartBroken/>
            colorMUIComp = "error"
            break;
        case "ready":
            classNameByStatus = `${style.colorMod_ready}`
            chipTextByStatus = "Текущий"
            iconByStatus = <DirectionsRun/>
            colorMUIComp = "primary"
    }

    const dateSting = `${dayjs(props.course.dateStart).format("D MMMM")} - ${dayjs(props.course.dateEnd).format("D MMMM")}`

    return (
        <>
            <div className={`${style.card} ${classNameByStatus}`}>
                <div>
                    <div className={style.card__statusWithAvatar}>
                        <div className={`${style.card__status} ${classNameByStatus}`}>{iconByStatus}</div>
                        <Avatar className={style.card__avatar}>{props.course.avatar}</Avatar>
                    </div>
                    <Chip className={style.card__statusChip} label={chipTextByStatus}></Chip>
                </div>
                <div>
                    <div>
                        {props.course.title}
                    </div>
                    <div>
                        <LinearProgress value={props.course.percent} variant="determinate"
                                        color={colorMUIComp}></LinearProgress>
                        <div className={style.card__date}>
                            <div>{dateSting}</div>
                            <div>{props.course.percent}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default courseCard