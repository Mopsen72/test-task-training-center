import style from "./style.module.scss"
import {Avatar} from "@mui/material";

function profileInfo() {
    return (
        <>
            <div className={style.profile}>
                <Avatar>В</Avatar>
                <div>
                    <div className={style.profile__name}>Василий Пупкин</div>
                    <div className={style.profile__work}>ООО "Рога и копыта"</div>
                </div>
            </div>
        </>
    )
}

export default profileInfo