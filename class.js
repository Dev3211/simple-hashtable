let hash = require('string-hash')

class hashtable {

	constructor() {
		this.list = []
	}

	get(x) {
		let k = hash(x)

		if (!this.list[k]) {
			throw new Error("Value does not exist")
		}

		return this.list[k]
	}

	set(x, y) {
		let k = hash(x)

		if (x === undefined || y === undefined || x.length === 0 || y.length === 0) {
			throw new Error("Why are you trying to insert blank values?")
		} else {
			this.list[k] = y
		}

		return this;

	}

	delete(x) {
		let k = hash(x)

		if (!this.list[k]) {
			throw new Error("Value does not exist")
		}

		this.list[k] = null;

		return this;
	}

	clear() {

		for (var keys in this.list) {
			this.list[keys] = null;
		}

		return this;
	}

	overwrite(x, y) {
		let k = hash(x)

		if (x === undefined || y === undefined || x.length === 0 || y.length === 0) {
			throw new Error("Why are you trying to update blank values?")
		} else {
			this.list[k] = y
		}

		return this;

	}


}


module.exports = hashtable
