import aboutImg from "../assets/aboutBg.png";
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-4">
        <header
          className="flow-content--m md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-6xl whitespace-no-wrap">We Love Cheesecake</h2>
          <span className="#1B0B0B text-lg inline-block">
            Discover Our Cheesecake Story
          </span>
          <p className="text-sm">
            At Cheesecake Love, quality is our cornerstone. Each cheesecake is
            crafted with the finest ingredients, meticulous attention to detail,
            and a dash of creativity. <br />
          </p>
          <p>
            We believe in delivering not just desserts but moments of sheer
            indulgence.
          </p>
          <div className="btn-wrapper">
            <a href="" className="btn--primary">
              Read More
            </a>
          </div>
        </header>
        <div
          className="hero__img-wrapper md:order-[-1] md:translate-y-[-15%]"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <img src={aboutImg} alt="cheesecake image" className="w-ful" />
        </div>
      </div>
    </section>
  );
};

export default About;
