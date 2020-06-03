class DataType {
    configurations = {};
    constructor(type) {
        this.type = type;
    }

    get unique() {
        this.configurations.unique = true;

        return this;
    }

    get autoIncrement() {
        this.configurations.autoIncrement = true;

        return this;
    }

    get required() {
        this.configurations.required = true;

        return this;
    }

    object(objectInfo) {
        this.configurations.objectInfo = objectInfo;

        return this;
    }

    documentOf(collection) {
        this.configurations.documentOf = collection;
        return this;
    }

    oneOf(types) {
        this.configurations.oneOf = types;

        return this;
    }

    arrayOf(data) {
        this.configurations.arrayOf = data;
        return this;
    }
}

const Type = {
    string: new DataType('string'),
    integer: new DataType('integer'),
    float: new DataType('float'),
    boolean: new DataType('boolean'),
    object: callableField('object'),
    documentOf: callableField('documentOf'),
    arrayOf: callableField('arrayOf'),
};

function callableField(fieldType) {
    return field.bind(null, fieldType);
}

function field(fieldType, options) {
    let field = new DataType(fieldType);

    return field[fieldType](options);
}

export default Type;