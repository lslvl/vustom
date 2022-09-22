class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {}
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */
    has(field) {
        return this.errors.hasOwnProperty(field)
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0]
        }
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors) {
        this.errors = errors
    }

    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        if (field) {
            delete this.errors[field]

            return
        }

        this.errors = {}
    }
}

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        // is it loading ?
        this.loading = false
        // is it disabled ?
        this.disabled = false
        //
        this.success = false

        this.errors = new Errors()
    }

    /**
     * Set loading value, true or false
     */
    setLoading(value) {
        this.loading = value
    }

    /**
     * Enable form inputs
     */
    enable() {
        this.disabled = false
    }

    /**
     * Disable form inputs
     */
    disable() {
        this.disabled = true
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {}

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data
    }

    /**
     * Create and return a FormData object
     */
    formData() {
        var formData = new FormData

        for (let property in this.originalData) {
            formData.append(property, this[property])
        }

        return formData
    }

    /**
     * 
     */
    isDirty() {
        for (let field in this.originalData) {
            if(this.field != field) {
                return true
            }
        }
        return false
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = ''
        }

        this.loading = false

        this.errors.clear()
    }

    succeed() {
        this.success = true
    }

    failed() {
        this.success = false
    }

    /**
     *
     */
    recordErrors(errors) {
        this.loading = false
        if (errors.hasOwnProperty('response') && errors.response.data.hasOwnProperty('errors')) {
            this.errors.record(errors.response.data.errors)
        } else {
            this.errors.record(errors)
        }
    }
}

export default Form
