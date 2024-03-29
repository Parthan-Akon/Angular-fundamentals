export interface IEvent {

    id: number
    name: string
    date: Date
    time: string
    price : number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    },
    onlineUrl?: string
    sessions:Isessions[]
}

export interface Isessions {
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string []
}