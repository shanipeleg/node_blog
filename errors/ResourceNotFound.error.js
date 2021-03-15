const ResourceNotFound = class extends Error {
    constructor(resourceName = 'resource') {
        super(`This ${resourceName} was not found. Please check it before trying again.`);
    }
};
module.exports = ResourceNotFound;