type ParfumeTypes = {
    _id: String,
    title: String,
    brand: String,
    description?: String,
    price: Number,
    otherInfo?: String,
    isActive: Boolean,
    quantity?: Number,
    fragranceNotes?: String,
    images: Array<String>,
    star?: Boolean,
    slug: String,
    campaignId: {
        description: String,
        discount: Number
    }
}

export default ParfumeTypes;