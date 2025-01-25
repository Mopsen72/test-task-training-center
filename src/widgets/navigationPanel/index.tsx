import style from "./style.module.scss"
import {Description, Home, Input, School, Settings, SvgIconComponent} from "@mui/icons-material"
import {Button, SvgIcon} from "@mui/material";
import {NavLink} from "react-router";

interface Props {
    className: string
}


const pageList: { link: string; icon: SvgIconComponent; title: string }[] = [
    {
        title: "Главная",
        link: "/",
        icon: Home
    },
    {
        title: "Курсы",
        link: "/courses",
        icon: School
    },
    {
        title: "Документы",
        link: "/documents",
        icon: Description
    },
    {
        title: "Настройки",
        link: "/settings",
        icon: Settings
    },
    {
        title: "Выход",
        link: "/logout",
        icon: Input
    }

]

function navigationPanel(props: Props) {
    return (
        <>
            <aside className={`whiteCard ${style.navigationPanel} ${props.className}`}>
                <div className={style.navigationPanel__logo}>
                    <h1>Logo</h1>
                </div>
                <ul className={style.navigationPanel__linkList}>
                    {pageList.map(page =>
                        <li key={page.link}>
                            <NavLink to={page.link}
                                     className={({isActive}) => `${style.linkItem} ${isActive ? style.linkItem_active : ''}`}>
                                <SvgIcon component={page.icon} className={style.linkItem__icon}>
                                </SvgIcon>
                                <div className={style.linkItem__title}>{page.title}</div>

                            </NavLink>
                        </li>
                    )}
                </ul>
                <div className={style.navigationPanel__supportBtn}>
                    <Button variant="outlined" size="small" fullWidth={true} color="secondary"
                            className={style.suppBtn}>Техническая
                        поддержка</Button>
                </div>
            </aside>
        </>
    )
}

export default navigationPanel