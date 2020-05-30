import Input from './input';
import Is from '@flk/supportive-is';
import { request as requestHandler } from 'core/application';

class Validator {
    /**
     * Rules list
     * 
     * @var {object}
     */
    rulesList = {};

    /**
     * A flag to indicate the passed inputs are valid
     * 
     * @var {boolean} 
     */
    isValid = true;    

    /**
     * errors list 
     * 
     * @var {object} 
     */
    errors = {};    

    /**
     * Get new input object
     * 
     * @param   {string} name
     * @returns ValidatorInput
     */
    input(name) {
        return new Input(name);
    }

    /**
     * Set validation rules
     * 
     * @param   {object} rules 
     * @returns {Validator}
     */
    rules(rules) {
        this.rulesList = rules;

        return this;
    }

    /**
     * Validate all rules
     * 
     * @returns {Validator}
     */
    validate() {
        let request = requestHandler();

        // loop over all of our rules list
        for (let name in this.rulesList) {
            let input = this.rulesList[name]; // Input Object
            
            input.setName(name).setValue(request.body[name]);

            input.validate();

            if (input.errorMessage) {
                this.errors[name] = input.errorMessage;
            }
        }

        if (! Is.empty(this.errors)) {
            this.isValid = false;
        }

        return this;
    }

    /**
     * Add rules and validate it
     * 
     * @param  {object} rules
     * @returns {Validator}
     */
    make(rules) {
        return this.rules(rules).validate();
    }
}

export default new Validator;