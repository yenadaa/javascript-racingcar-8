import { Random } from '@woowacourse/mission-utils';

export class RacingClass {
    randomNumber() {
        // 0~9 사이 무작위 값을 생성하여 반환
        const number = Random.pickNumberInRange(0, 9);
        return number;
    }
    goStop(number) {
        // 무작위 값이 4 이상이면 true 반환
        return number >= 4; 
    }
    moveCar(nameDistance) {
        // 배열 안에 있는 각 자동차 객체에 순서대로 접근 => n대의 자동차를 경주시켜야 하기 때문
        nameDistance.forEach(car => {
            // 무작위 값이 4이상이면 전진!
            if(this.goStop(this.randomNumber())){
                // 전진 시 객체 안에 있는 distance에 '-' 추가
                car.distance += '-';
            }
        });
    }
    race(nameDistance, attemptCount) {
        // 각 차수별 경기상황을 저장할 배열 생성
        let progress = [];

        // 시도횟수만큼 moveCar를 반복할 for문
        for(let i = 0; i < attemptCount; i++) {
            // moveCar - 경주 실행
            this.moveCar(nameDistance);
            // 경주가 끝난 후 그 회차의 경기상황이 저장돼있는 nameDistance배열을 progress라는 배열에 넣는다.
            progress.push(nameDistance.map(car => ({ ...car })));
        }
        
        // 각 차수별로 저장돼있는 실행결과 모음 배열 반환
        return progress;
    }

}