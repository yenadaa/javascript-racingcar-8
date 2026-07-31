import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 - 유효한 이름 뒤에 쉼표 무더기 입력 (dfdf,,,,,,,)", async () => {
    // given
    const inputs = ["dfdf,,,,,,,"];
    mockQuestions(inputs);

    // when & then
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 이름 없이 공백과 쉼표만 연속 입력 (,,,)", async () => {
    // given
    const inputs = [",,,"];
    mockQuestions(inputs);

    // when & then
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 이름 자리에 스페이스 공백만 입력한 경우", async () => {
    // given
    const inputs = ["pobi,   ,woni"];
    mockQuestions(inputs);

    // when & then
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 시도 횟수에 숫자가 아닌 문자를 입력한 경우", async () => {
    // given
    const inputs = ["pobi,woni", "two"];
    mockQuestions(inputs);

    // when & then
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 시도 횟수에 음수나 0을 입력한 경우", async () => {
    // given
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    // when & then
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 시도 횟수에 소수점을 입력한 경우", async () => {
    // given
    const inputs = ["pobi,woni", "2.5"];
    mockQuestions(inputs);

    // when & then
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 이름 5자 초과한 경우", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
