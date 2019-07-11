import React, { Component } from "react";

import {
  featherAnimation,
  animationTiming,
  foregroundAnimation,
  backgroundAnimation
} from "../utils/animation";
import Feather from "./Feather";
import Sun from "./Sun";
import { Foreground, Background } from "./Landscapes";

import Actions from "./Actions";

export default class Breathe extends Component {
  constructor(props) {
    super(props);

    this.featherAnimation = null;
    this.foregroundAnimation = null;
    this.backgroundAnimation = null;

    this.featherElement = React.createRef();
    this.landscapeElement = React.createRef();
    this.backgroundElement = React.createRef();
  }

  state = {
    animating: false
  };

  componentDidMount() {
    this.featherElement = this.featherElement.current;
    this.landscapeElement = this.landscapeElement.current;
    this.backgroundElement = this.backgroundElement.current;
  }

  startAnimation = () => {
    if (this.featherAnimation && this.foregroundAnimation) {
      this.setState({ animating: true }, () => {
        this.featherAnimation.play();
        this.foregroundAnimation.play();
        this.backgroundAnimation.play();
      });
    } else {
      this.setState({ animating: true }, () => {
        this.featherAnimation = this.featherElement.animate(
          featherAnimation,
          animationTiming
        );

        this.foregroundAnimation = this.landscapeElement.animate(
          foregroundAnimation,
          animationTiming
        );

        this.backgroundAnimation = this.backgroundElement.animate(
          backgroundAnimation,
          { ...animationTiming, delay: 1000 }
        );
      });
    }
  };

  pauseAnimation = () => {
    this.setState({ animating: false }, () => {
      this.featherAnimation.pause();
      this.foregroundAnimation.pause();
      this.backgroundAnimation.pause();
    });
  };

  render() {
    const { animating } = this.state;

    return (
      <>
        <div className="container">
          <Sun />

          <Feather ref={this.featherElement} />

          <Foreground ref={this.landscapeElement} />

          <Background ref={this.backgroundElement} />
        </div>

        <Actions
          animating={animating}
          startAnimation={this.startAnimation}
          pauseAnimation={this.pauseAnimation}
        />
      </>
    );
  }
}
