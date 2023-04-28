console.clear();

class Matematika {
    static isNumber(n) {
        return typeof n === 'number' && isFinite(n);
    }
    static sudetis(a, b) {
        if (!Matematika.isNumber(a) || !Matematika.isNumber(b)) {
            return 0;
        }
        return a + b;
    }
    static atimtis(a, b) {
        if (!Matematika.isNumber(a) || !Matematika.isNumber(b)) {
            return 0;
        }
        return a - b;
    }

    demo() {
        return 'demo';
    }

    example() {
        return 'example ' + this.demo() + ' ' + Matematika.sudetis(100, 200);
    }
}

console.log(Matematika.sudetis(7, 5));
console.log(Matematika.atimtis(7, 5));

const m = new Matematika();
console.log(m.demo());
console.log(m.example());