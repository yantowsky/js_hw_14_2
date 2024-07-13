class Coach {
    constructor(fullName, special, rating) {
        this.fullName = fullName;
        this.special = special;
        this.rating = rating;
        this.numArguments = arguments.length;
    }

    displayInfo() {
        console.log(this.numArguments !== 3 ? 'Please add all three arguments (fullName, special, rating)' :
            !isNaN(this.fullName) ? 'Please add the correct value: fullName (string)' :
                !isNaN(this.special) ? 'Please add the correct value: special (string)' :
                    typeof (this.rating) !== 'number' ? 'Please add the correct value: rating (number)' :
                        `Coach: ${this.fullName}, Specialization: ${this.special}, Rating: ${this.rating}`);
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"