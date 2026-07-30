export class WinnerClass {
    win(prograss) {
        // prograss 배열에서 마지막 배열을 lastRound에 저장
        const lastRound = progress[progress.length-1];
        // 마지막 라운드 배열에서 distance.length만 매핑한 후 그 중에서 최대값을 뽑아서 저장
        const maxDistance = Math.max(...lastRound.map(car => car.distance.length));
        // 마지막 라운드 배열에서 distance 길이가 최대값인 자동차 객체만 뽑음
        const winner = lastRound.filter(car => car.distance.length === maxDistance);

        // 우승자 객체 반환
        return winner;
    }
}