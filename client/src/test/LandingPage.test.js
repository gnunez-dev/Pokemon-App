import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import LandingPage from "../components/LandingPage/LandingPage";

configure({ adapter: new Adapter() });

describe("<LandingPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it("Deberia renderizar tres <NavLink />", () => {
    expect(wrapper.find(Link)).toHaveLength(1)
  });
  it('El Link debe tener el texto "See Pokemon" y cambiar la ruta hacia "/home".', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/home");
    expect(wrapper.find(Link).at(0).text()).toEqual("See Pokemon");
  });
  
});
