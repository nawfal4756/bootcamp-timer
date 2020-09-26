import React from "react";
import { shallow, mount } from "enzyme";
import TimerBody from "./TimerBody";

describe("Timer component renders", () => {
  let container = shallow(<TimerBody />);

  it("should render the div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render Hours heading", () => {
    expect(container.text()).toMatch(/Hours/);
  });

  it("should render Minutes heading", () => {
    expect(container.text()).toMatch(/Minutes/);
  });

  it("should render Seconds heading", () => {
    expect(container.text()).toMatch(/Seconds/);
  });

  it("should render time", () => {
    expect(container.text()).toMatch(/0/);
  });

  it("should render all headings", () => {
    expect(container.find("#heading").length).toEqual(3);
  });

  it("should render hours buttons for adjusting time", () => {
    expect(container.find("#plusHours").length).toEqual(1);
    expect(container.find("#minusHours").length).toEqual(1);
  });

  it("should render minutes buttons for adjusting time", () => {
    expect(container.find("#plusMinutes").length).toEqual(1);
    expect(container.find("#minusMinutes").length).toEqual(1);
  });

  it("should render seconds buttons for adjusting time", () => {
    expect(container.find("#plusSeconds").length).toEqual(1);
    expect(container.find("#minusSeconds").length).toEqual(1);
  });

  it("should render time correctly", () => {
    expect(container.find("#hours").text()).toMatch("00");
  });

  it("should increase time on hours plus click", () => {
    container.find("#plusHours").simulate("click");
    expect(container.find("#hours").text()).toMatch("01");
  });

  it("should not decrease time on hours minus click wehn on 0", () => {
    let container2 = mount(<TimerBody />);
    container2.find("#minusHours").at(1).simulate("click");
    expect(container2.find("#hours").at(1).text()).toMatch("00");
  });

  it("should increase time on minutes plus click", () => {
    container.find("#plusMinutes").simulate("click");
    expect(container.find("#minutes").text()).toMatch("01");
  });

  it("should not decrease time on minutes minus click when on 0", () => {
    let container2 = mount(<TimerBody />);
    container2.find("#minusMinutes").at(1).simulate("click");
    expect(container2.find("#minutes").at(1).text()).toMatch("00");
  });

  it("should increase time on seconds plus click", () => {
    container.find("#plusSeconds").simulate("click");
    expect(container.find("#seconds").text()).toMatch("01");
  });

  it("should not decrease time on seconds minus click when on 0", () => {
    let container2 = mount(<TimerBody />);
    container2.find("#minusSeconds").at(1).simulate("click");
    expect(container2.find("#seconds").at(1).text()).toMatch("00");
  });

  it("should render start button", () => {
    expect(container.find("#startBtn").text()).toEqual("Start");
  });

  it("should render stop button", () => {
    expect(container.find("#stopBtn").text()).toEqual("Stop");
  });

  it("should render reset button", () => {
    expect(container.find("#resetBtn").text()).toEqual("Reset");
  });

  it("checking reset button", () => {
    let container2 = mount(<TimerBody />);
    container2.find("#plusMinutes").at(1).simulate("click");
    container2.find("#plusMinutes").at(1).simulate("click");
    container2.find("#resetBtn").at(1).simulate("click");
    expect(container2.find("#minutes").at(1).text()).toMatch("00");
  });
});
