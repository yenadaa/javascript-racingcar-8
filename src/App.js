import InputClass from "./InputView.js";
import { ParsingClass } from "./Parsing.js";
import { RacingClass } from "./RacingGame.js";
import { WinnerClass } from "./Winner.js";
import { OutputClass } from "./OutputView.js";
import { ValidationError } from "./Validation.js";

class App {
  async run() {
    const {carName, attemptCount} = await new InputClass().input();
    
    const nameDistance = new ParsingClass().parse(carName);
    
    const Validation = new ValidationError();
    Validation.attemptCountError(attemptCount);
    Validation.carNameError(carName, nameDistance);

    // race() 함수에 RacingClass의 함수들이 다 연계되어 있어서 이것만 호출함
    const progress = new RacingClass().race(nameDistance, attemptCount);

    const winner = new WinnerClass().win(progress);

    const Output = new OutputClass();
    Output.output(progress);
    Output.winnerOutput(winner);
  }
}

export default App;
