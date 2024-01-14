import heroImg from "../assets/heroImg.png";
const Hero = () => {
  return (
    <section>
      <div className="container mx-auto grid md:grid-cols-2 items-center">
        <header
          className="flow-content--m"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h1 className="text-6xl">Bite The World of Cheesecake Wonders</h1>
          <p className="text-sm">
            We always make our customer happy by providing
            <br />
            as many choices as possible{" "}
          </p>
          <div className="btn-wrapper flex items-center">
            <a href="" className="btn--primary">
              Get Started
            </a>
            <a href="" className="btn--secondary">
              Watch demo
            </a>
          </div>
        </header>
        <div
          className="hero__img-wrapper"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={heroImg} alt="cheesecake image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
