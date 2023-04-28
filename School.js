class School {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addMark(name, mark) {
        for (const student of this.students) {
            if (student.name === name) {
                student.marks.push(mark);
                break;
            }
        }
    }

    average(name) {
        let studentIndex = -1;

        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === name) {
                studentIndex = i;
                break;
            }
        }

        if (studentIndex === -1) {
            return new Error('Nepavyko rasti studento.');
        }

        const marks = this.students[studentIndex].marks;
        let sum = 0;

        for (const mark of marks) {
            sum += mark;
        }

        // return sum ? sum / marks.length : 0;
        return sum / marks.length || 0;
    }

    addStudent(name) {
        this.students.push({
            name: name,
            marks: [],
        });
        return `${this.name}: pridedu mokini "${name}".`;
    }

    description() {
        return `Sveiki, cia "${this.name}" mokykla, pas mus mokosi ${this.students.length} mokiniu.`;
    }
}

export { School };