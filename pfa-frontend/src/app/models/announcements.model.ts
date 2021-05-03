export interface Announcements {
    announcementId:  string,
    ownerId: string,
    type:  string,
    availability:  boolean,
    address: string,
    price: string,
    imageUrl:  string,
    uploaded:  string,


    equippedKitchen?: boolean,
    rooms?: number,
    garden?: boolean,
    floor?: number,
    elevator?: boolean
}