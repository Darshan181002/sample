import AboutImg from "../images/about-img.62b47e7f183d4b4e9feb.webp";
import RoundedText from "../images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import WorkingEmoji from "../images/waving.1bae5fcfb51082b5c2b4.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Front-end Developer <br /> based in Mumbai, India 📍
              </h4>
              <p>
                Hey, my name is Darshan, and I'm a Frontend Developer. My passion
                is to create and develop a clean UI/UX for my users.
                <br />
                <br />
                My main stack currently is React/Next.js in combination with
                Tailwind CSS and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
