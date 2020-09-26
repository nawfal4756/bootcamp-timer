import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header component renders", () => {
  let container = shallow(<Header />);

  it("should render the div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render the heading", () => {
    expect(container.text()).toEqual("Timer App");
  });
});
