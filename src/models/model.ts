export interface User {
    userId: string,
    userName: string,
    email: string,
    contact: number,
    address: {
        address: string,
        city: string
    }
}

export interface Mess {
    messId: string,
    ownerName: string,
    messName: string,
    email: string,
    contact: number,
    address: {
        address: string,
        city: string
    }
}

export interface Menu {
    menuId: string,
    menuType: string,
    menuCategory: string,
    menuName: string,
    timeFrom: Date,
    timeTo: Date,
    description: string,
    rate: number
}