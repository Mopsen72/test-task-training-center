import style from "./style.module.scss"
import {Badge, IconButton} from "@mui/material";
import {NotificationsOutlined} from "@mui/icons-material";
import ProfileInfo from "../../shared/profileInfo";
import SearchInput from "../../shared/searchInput";

function headerLine() {
    return (
        <>
            <header className={`whiteCard ${style.headerLine}`}>
                <section>
                    <SearchInput/>
                </section>
                <section className={style.userInfoSection}>
                    <IconButton>
                        <Badge badgeContent={2} color="error">
                            <NotificationsOutlined/>
                        </Badge>
                    </IconButton>
                    <ProfileInfo/>
                </section>
            </header>
        </>
    )
}

export default headerLine