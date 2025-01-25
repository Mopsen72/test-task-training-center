import style from "./style.module.scss"
import {Button} from "@mui/material";

function coursesFilter() {
    return (
        <>
            <div className={style.coursesFilter}>
                <Button color="primary" className={`btn btn_rounded ${style.btn_textWhite}`} variant="contained"
                        size="small">
                    Готов к прохождению
                </Button>
                <Button color="warning" className={`btn btn_rounded ${style.btn_textWhite}`} variant="contained"
                        size="small">
                    Просрочен
                </Button>
                <Button color="success" className={`btn btn_rounded ${style.btn_textWhite}`} variant="contained"
                        size="small">
                    Сдан
                </Button>
                <Button color="error" className={`btn btn_rounded ${style.btn_textWhite}`} variant="contained"
                        size="small">
                    Не сдан
                </Button>
                <Button color="secondary" className={`btn btn_rounded`}
                        size="small">
                    Очистить фильтр
                </Button>
            </div>
        </>
    )
}

export default coursesFilter