export class RacingClass {
    constructor(attemptCount) {
        this.attemptCount = attemptCount;
    }
    randomNumber() {
        const number = MissionUtils.Random.pickNumberInRange(0, 9);
        return number;
    }
    goStop(number) {
        return number >= 4;
    }
    moveCar(nameDistance) {
        nameDistance.forEach(element => {
            if(this.goStop(this.randomNumber())){
                element.distance += 1;
            }
        });
    }
    race(nameDistance) {
        let prograss = [];
        for(let i = 0; i < this.attemptCount; i++) {
            this.moveCar(nameDistance);
            prograss.push([...nameDistance]);
        }
        return prograss;
    }

}