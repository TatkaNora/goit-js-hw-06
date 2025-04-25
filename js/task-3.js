class StringBuilder { 
    #value;
    constructor(initialValue) { 
        this.#value = initialValue;
    }
    getValue() { 
        return this.#value;
    }

    padEnd(str) { 
        this.#value = this.#value.toString() + str;
    }

    padStart(str) { 
        this.#value = str + this.#value.toString();
    }

    padBoth(str) { 
        this.#value = str + this.#value.toString() + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
