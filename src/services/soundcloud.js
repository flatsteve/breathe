class Soundcloud {
  constructor(ref) {
    this.widget = window.SC.Widget(ref);
  }

  play() {
    this.widget.play();
  }

  pause() {
    this.widget.pause();
  }
}

export default Soundcloud;
