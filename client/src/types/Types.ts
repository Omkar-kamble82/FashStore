export type dataitem = {
    id: number, name: string, price: number, category: string, images: string[]
}

export type cart = {
    imgarr: string[],
    name: string,
    price: number,
    quantity: number,
    size: string
    id: string | undefined
}

export type cartId = {
    imgarr: string[] | undefined,
    name: string,
    price: number,
    quantity: number,
    size: string,
    id: string | undefined
}

export type userCart = {
    cart: cart[],
    createdAt: string,
    email: string,
    ids: string[],
    updatedAt: string,
    username: string,
    _v: number,
    _id: string
}

export type sendCart = {
    username: string | null | undefined,
    email: string | null | undefined,
    cart: cartId,
    id: string | undefined
}