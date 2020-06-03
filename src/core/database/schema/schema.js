class CollectionSchema {
    constructor(model, fields) {
        this.model = model;
        this.fields = fields;
    }
}

export default function Schema(model, fields) {
    return new CollectionSchema(model, fields);
}