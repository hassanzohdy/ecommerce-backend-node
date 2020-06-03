import connector from 'core/database/connector';
import env from './env';

const databaseName = env('DATABASE_NAME');

class Database {
    constructor() {
        this.client = connector.db(databaseName);
    }

    /**
     * Alias to findALl method
     */
    get = this.findAll;

    /**
     * Find all records from the given collection using the given filter
     * 
     * @param {string} collection 
     * @param {object} filter 
     * @param {object} otherOptions 
     * @returns {Promise}
     */
    findAll(collection, filter = {}, otherOptions = {}) {
        return new Promise((resolve, reject) => {
            this.client.collection(collection).find(filter, otherOptions).toArray((error, documents) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(documents);
                }
            })
        });
    }    

    /**
     * Find one record from the given collection using the given filter
     * 
     * @param {string} collection 
     * @param {object} filter 
     * @param {object} otherOptions 
     * @returns {Promise}
     */
    first(collection, filter = {}, otherOptions = {}) {
        return this.client.collection(collection).findOne(filter, otherOptions);
    }

    /**
     * Insert one or more document
     * 
     * @param {string} collection 
     * @param {object|array} filter  
     * @returns {Promise}
     */
    insert(collection, docs) {
        if (! Array.isArray(docs)) {            
            docs = [docs];
        }

        return new Promise((resolve, reject) => {
            this.client.collection(collection).insertMany(docs, (error, result) => {
                if (error) {
                    reject(error);
                }

                resolve(result.result.n); // return total inserted records 
            });
        });      
    }

    /**
     * Update one or more document
     * 
     * @param {string} collection 
     * @param {object} filter  
     * @param {object} data  
     * @returns {Promise}
     */
    update(collection, filter, data) {
        return new Promise((resolve, reject) => {
            this.client.collection(collection).updateMany(filter, {
                '$set': data,
            }, (error, result) => {
                if (error) {
                    reject(error);
                }

                resolve(result.result.nModified); // return total inserted records 
            });
        });      
    }
    

    /**
     * Delete one or more document
     * 
     * @param {string} collection 
     * @param {object} filter  
     * @returns {Promise}
     */
    delete(collection, filter) {
        return new Promise((resolve, reject) => {
            this.client.collection(collection).deleteMany(filter, (error, result) => {
                if (error) {
                    reject(error);
                }

                resolve(result.result.n); // return total inserted records 
            });
        });      
    }    
}

export default new Database;