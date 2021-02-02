import { shallow } from "enzyme";
import { useGame } from "./useGame";

const Mock = () => {
  const game = useGame();
  return (
    <>
      <div className="end">{game.end ? "T" : "F"}</div>
      <div className="word">{game.word}</div>
      <button onClick={game.appendLetter}>Test</button>
    </>
  );
};

describe("useGame", () => {
  it("is not ended", () => {
    const myApp = shallow(<Mock />);
    expect(myApp.find(".end")).toHaveText("F");
  });

  it("adds text when `appendLetter` is called", () => {
    const myApp = shallow(<Mock />);
    myApp.find("button").simulate("click");

    expect(myApp.find(".word").text()).toMatch(/\w/);
  });
});
