export interface ICourse {
    id: string | number,
    avatar: string,
    status: TCourseStatus,
    title: string,
    percent: number,
    dateStart: string,
    dateEnd: string,
}

export type TCourseStatus = "success" | "error" | "warning" | "ready"