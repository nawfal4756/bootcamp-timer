import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";

describe("App component renders", () => {
  let container = shallow(<App />);

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("Should fing header component", () => {
    expect(container.containsMatchingElement(<Header />)).toEqual(true);
  });
});
