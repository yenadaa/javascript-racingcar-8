import { Console } from '@woowacourse/mission-utils';


export class OutputClass {
    output(progress) {
        // 시도 횟수 다음 출력이기 때문에 공백 한 줄 출력
        Console.print('');
        // 다음에 바로 '실행 결과' 문구 출력
        Console.print('실행 결과');

        // 각 차수별로 저장된 진행상황 배열을 라운드별로 순서대로 접근
        progress.forEach(round => {
            // 매 라운드 안에 있는 자동차 객체에 순서대로 접근 
            round.forEach(car => {
                // 라운드별로 자동차 객체 안 정보를 출력 {이름} : {거리} 형식
                Console.print(`${car.name} : ${car.distance}`);
            })
            //한 라운드가 끝나면 공백 한 줄 출력 
            Console.print('');
        });
    }
    winnerOutput(winner) {
        // winner 배열에서 cars 객체에서 name만 따로 추출 
        // 공동은 ', '로 구분,  단독은 그대로
        const wins = winner.map(cars => cars.name).join(', ');
        // wins 자체에 join이 되어있어서 출력할 때 따로 신경 안 쓰고 출력 문구만 쓰면 됨!
        Console.print(`최종 우승자 : ${wins}`);        
    }
}