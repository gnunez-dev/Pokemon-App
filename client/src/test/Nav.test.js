import React from "react";
import { NavLink } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Nav from "../components/Nav/Nav";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it("Deberia renderizar tres <NavLink />", () => {
    expect(wrapper.find(NavLink)).toHaveLength(3)
  });
  it('El primer Link debe tener el texto "Landing Page" y cambiar la ruta hacia "/".', () => {
    expect(wrapper.find(NavLink).at(0).prop("to")).toEqual("/");
    expect(wrapper.find(NavLink).at(0).text()).toEqual("Landing Page");
  });
  it('El segundo NavLink debe tener el texto "Home" y cambiar la ruta hacia "/home"', () => {
    expect(wrapper.find(NavLink).at(1).prop("to")).toEqual("/home");
    expect(wrapper.find(NavLink).at(1).text()).toEqual("Home");
  });
  it('El tercer NavLink debe tener el texto "Create" y cambiar la ruta hacia "/create"', () => {
    expect(wrapper.find(NavLink).at(2).prop("to")).toEqual("/create");
    expect(wrapper.find(NavLink).at(2).text()).toEqual("Create");
  });
});
