export interface Tag {
    title: string
}

export interface Task {
    title: string,
    position: number,
    tags: Tag[]
}

