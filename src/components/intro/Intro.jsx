import "./intro.css";
import wave from "../pictures/waving.png";
import devices from "../pictures/devices.png";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-text-div">
        <div className="intro-title-div">
          <h1>Hi, I'm Manuel</h1>
          <img src={wave} />
        </div>
        <p>
          I'm a passionate Full Stack Developer but im love Front-end Developing and coding beautifully
          simple visual things.
        </p>
      </div>
      <div className="intro-img-div">
        <img src={devices} className="computers" />
      </div>
    </section>
  );
};