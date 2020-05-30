import Is from "@flk/supportive-is";

export default class Input {    
    /**
     * Input name
     * 
     * @var  {string}
     */
    name = null;

    /**
     * Input value
     * 
     * @var  {any}
     */
    value = null;

    /**
     * Input error message
     * 
     * @var  {any}
     */
    errorMessage = null;

    /**
     * Rules List
     * 
     * @var  {object}
     */
    rules = {};

    /**
     * Constructor
     * 
     * @param {string} name 
     */
    constructor(name, value) {
        this.name = name;
    }

    /**
     * Set input value
     * 
     * @param {any} value 
     * @returns {Input}
     */
    setValue(value) {
        this.value = value;

        return this;
    }

    /**
     * Set name
     * 
     * @param   {string} name 
     * @returns {Input}
     */
    setName(name) {
        this.name = name;

        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    required(errorMessage = 'This field is required') {
        this.rules.required = {
            errorMessage: errorMessage,
            execute: function (value) {
                return ! Is.empty(value);
            },
        };

        return this;
    }

    /**
     * Validate input as valid email address
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    email(errorMessage = 'Invalid Email Address') {
        this.rules.email = {
            errorMessage: errorMessage,
            execute: function (value) {                
                return Is.email(value);
            },
        };
        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    minLength(length, errorMessage) {
        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    length(length, errorMessage) {
        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    maxLength(length, errorMessage) {
        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    min(number, errorMessage) {
        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    equal(value, errorMessage) {
        return this;
    }
    
    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    max(number, errorMessage) {
        return this;
    }

    /**
     * Validate input as required
     * 
     * @param  {string} errorMessage 
     * @returns {Input}
     */
    match(input, errorMessage) {
        return this;
    }

    /**
     * Validate the input
     */
    validate() {
        for (let rule in this.rules) {
            let ruleData = this.rules[rule];
            let {errorMessage, execute} = ruleData;

            if (execute(this.value) === false) {
                this.errorMessage = errorMessage;
                break;
            }
        } 
    }
}