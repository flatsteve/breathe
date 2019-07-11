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
import { INITIAL_DURATION } from "../utils/constants";
import Actions from "./Actions";

export default class Breathe extends Component {
  constructor(props) {
    super(props);

    this.animations = null;
    this.featherAnimation = null;
    this.foregroundAnimation = null;
    this.backgroundAnimation = null;

    this.featherElement = React.createRef();
    this.landscapeElement = React.createRef();
    this.backgroundElement = React.createRef();
  }

  state = {
    animating: false,
    duration: INITIAL_DURATION
  };

  componentDidMount() {
    this.featherElement = this.featherElement.current;
    this.landscapeElement = this.landscapeElement.current;
    this.backgroundElement = this.backgroundElement.current;
  }

  startAnimation = () => {
    if (this.animations) {
      this.setState({ animating: true }, () => {
        this.animations.forEach(animation => {
          animation.play();
        });
      });
    } else {
      this.setState({ animating: true }, () => {
        const { duration } = this.state;
        const timing = { ...animationTiming, duration };

        this.featherAnimation = this.featherElement.animate(
          featherAnimation,
          timing
        );

        this.foregroundAnimation = this.landscapeElement.animate(
          foregroundAnimation,
          timing
        );

        this.backgroundAnimation = this.backgroundElement.animate(
          backgroundAnimation,
          { ...timing, delay: 1000 }
        );

        this.animations = [
          this.featherAnimation,
          this.foregroundAnimation,
          this.backgroundAnimation
        ];
      });
    }
  };

  pauseAnimation = () => {
    this.setState({ animating: false }, () => {
      this.animations.forEach(animation => {
        animation.pause();
      });
    });
  };

  updateAnimationDuration = e => {
    const { value } = e.target;
    const duration = value * 1000;

    this.setState({ duration }, () => {
      if (!this.animations) {
        return;
      }

      this.animations.forEach(animation => {
        animation.effect.updateTiming({ duration });
      });
    });
  };

  render() {
    const { animating, duration } = this.state;

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
          duration={duration}
          startAnimation={this.startAnimation}
          pauseAnimation={this.pauseAnimation}
          updateAnimationDuration={this.updateAnimationDuration}
        />
      </>
    );
  }
}
