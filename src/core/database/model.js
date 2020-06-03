import db from 'core/db';

export default class Model {
    db = db;

    /**
     * Find all records from the given collection using the given filter
     * 
     * @param {object} filter 
     * @param {object} otherOptions 
     * @returns {Promise}
     */
    get = this.findAll;

    /**
     * Find all records from the given collection using the given filter
     * 
     * @param {object} filter 
     * @param {object} otherOptions 
     * @returns {Promise}
     */
    findAll(filter = {}, otherOptions = {}) {
        return this.db.findAll(this.collection, filter, otherOptions);
    }    

    /**
     * Find one record from the given collection using the given filter
     * 
     * @param {object} filter 
     * @param {object} otherOptions 
     * @returns {Promise}
     */
    first(filter = {}, otherOptions = {}) {
        return this.db.first(this.collection, filter, otherOptions);
    }

    /**
     * Insert one or more document
     * 
     * @param {object|array} filter  
     * @returns {Promise}
     */
    insert(docs) {
        return this.db.insert(this.collection, docs);
    }

    /**
     * Update one or more document
     * @param {object} filter  
     * @param {object} data  
     * @returns {Promise}
     */
    update(filter, data) {
        return this.db.update(this.collection, filter, data);
    }
    
    /**
     * Delete one or more document
     * 
     * @param {object} filter  
     * @returns {Promise}
     */
    delete(filter) {
        return this.db.delete(this.collection, filter);
    }
}