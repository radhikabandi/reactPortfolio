import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Radhika's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
      
          <h2>Welcome</h2>
          <p>
            Welcome to Radhika's portfolio page built with React. Here,
            you can find a small sample of the projects that i have worked on over
            the course of the program.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
