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

  setVolume(level) {
    this.widget.setVolume(level);
  }
}

export default Soundcloud;
