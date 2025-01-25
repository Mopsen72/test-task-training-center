import {IconButton, InputBase} from "@mui/material";
import {Search} from "@mui/icons-material";
import style from "./style.module.scss"

function searchInput() {
    return (
        <>
            <div className={style.searchInput}>
                <InputBase placeholder="Найдется все..."/>
                <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                    <Search/>
                </IconButton>
            </div>
        </>
    )
}

export default searchInput