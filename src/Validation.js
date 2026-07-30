export class ValidationError {
    carNameError(carName, nameDistance) {
        // trim()을 붙여야 공백만 들어있어도 공백이 삭제되어 아래 에러문이 뜸 
        if(carName.trim() === '') {
            throw new Error('[ERROR] 자동차 이름이 없으므로 게임을 진행할 수 없습니다!');
        }
        if(nameDistance.length === 1){
            throw new Error('[ERROR] 자동차가 하나이므로 게임을 진행할 수 없습니다!');
        }
        const nameArr = nameDistance.map(car => car.name);
        nameArr.forEach(name => {
            if(name.length > 5) {
                throw new Error('[ERROR] 자동차 이름이 5자를 초과했습니다!');
            }
            if(name === '') {
                throw new Error('[ERROR] 자동차 이름 사이에 빈 값이 들어가거나 혹은 잘못된 쉼표 입력이 존재합니다!')
            }
        });
        const set = new Set(nameArr);
        if(nameArr.length != set.size) {
            throw new Error('[ERROR] 이름이 중복돼 게임을 진행할 수 없습니다!');
        }

    }
    attemptCountError(attemptCount) {
        if(attemptCount === '') {
            throw new Error('[ERROR] 시도횟수를 적어주세요!');
        }

        const count = Number(attemptCount);
        
        if(Number.isNaN(count)){
            throw new Error('[ERROR] 시도횟수에 숫자를 적어주세요!');
        }
        // 이 코드가 맨 위로 가버리면 만약 시도횟수가 'abc'일때라면 숫자형으로 반환할 시 NaN이 되기 때문에
        // 0 이하인걸 확인하는 코드에서 false가 나옴 순서 중요!
        // 위 코드 NaN인 걸 확인하는 코드에서 걸러야 함!
        if(count <= 0){
            throw new Error('[ERROR] 시도횟수가 0 이하입니다!');
        }
        if(count % 1 != 0){
          throw new Error('[ERROR] 시도횟수가 정수가 아닙니다!')  
        }
    }
}
