export class ParsingClass {
    parse(carName) {
        return carName.split(',').map(name => ({name, distance: ''})); 
        // 문자열을 쉼표를 기준으로 나누어 배열로 만들고 배열 안 요소를 name으로 잡고 거리를 적을 공간까지 매핑
    }
}

