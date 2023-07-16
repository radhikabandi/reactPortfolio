import React from "react";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={''} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Greetings! I'm Radhika, residing in the dublin city of California. I am a software Engineer , learining react/javascript and mongoose and i did build couple of web apps like wether dashboard, techblog, reciepe site</p>
          </div>
      </div>
    </section>
  );
}

export default About;
