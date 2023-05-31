declare interface Customer {
    name?: string
    email?: string
    tax_id: string
    phone?: Phone[]
}

declare interface Phone {
    country: 55
    area: number
    number: number
    type: "CELLPHONE"
}

declare interface Item {
    name: string
    quantity: number
    unit_amount: number
}

declare interface Address {
    street: string
    number: string
    complement: string
    locality: string
    city: string
    region_code: string
    country: "BRA"
    postal_code: string
}

declare interface Shipping {
    address: Address
}

declare interface QrCode {
    amount: { value: number }
}

declare interface Order {
    reference_id?: string
    customer: Customer
    items?: Item[]
    shipping?: Shipping
    deep_links?: { amount: string; amount_value: string }
    qr_codes?: QrCode[]
    notification_urls: string[]
}
