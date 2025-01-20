import Stage from "../models/Stage";

export default interface GameState {
  stage: Stage;
  done: boolean;
}
