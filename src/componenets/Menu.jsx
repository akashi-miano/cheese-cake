import { FaStar } from "react-icons/fa6";
import cardImg1 from "../assets/Blueberry.png";
import cardImg2 from "../assets/biscoff.png";
import cardImg3 from "../assets/chocolate.png";

const Menu = () => {
  return (
    <section className="py-16" id="menu">
      <div className="container">
        <header data-aos="zoom-in">
          <h2 className="text-6xl text-[#523728] text-center mb-6">
            Our Menu{" "}
          </h2>
        </header>
        <div className="cards-wrapper mt-4 grid md:grid-cols-3 gap-8">
          <div
            className="card bg-[#FFF8E1] rounded-[41px] flow-content--sm p-6 card-shadow"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={cardImg1}
              alt="Blueberry cheesecake"
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold text-[#1D2729] mt-4">
              Blueberry Cheesecake
            </h3>
            <p className="mb-6 text[#555555] text-sm">
              Blueberry love, cheesecake delight!
            </p>
            <div className="price-section flex items-center justify-between">
              <span className=" inline-block text-2xl font-bold text-[#745545]">
                <span className="text-[#53A623]">$</span>9.00
              </span>
              <div className="rating-wrapper flex items-center gap-1">
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
              </div>
            </div>
          </div>{" "}
          <div
            className="card bg-[#FFF8E1] rounded-[41px] flow-content--sm p-6 card-shadow"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={cardImg2} alt="Biscoff cheesecake" className="mx-auto" />
            <h3 className="text-2xl font-bold text-[#1D2729] mt-4">
              Biscoff Cheesecake
            </h3>
            <p className="mb-6 text[#555555] text-sm">
              Biscoff adores cheesecake magic
            </p>
            <div className="price-section flex items-center justify-between">
              <span className=" inline-block text-2xl font-bold text-[#745545]">
                <span className="text-[#53A623]">$</span>11.00
              </span>
              <div className="rating-wrapper flex items-center gap-1">
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
              </div>
            </div>
          </div>{" "}
          <div
            className="card bg-[#FFF8E1] rounded-[41px] flow-content--sm p-6 card-shadow"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={cardImg3}
              alt="Chocolate cheesecake"
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold text-[#1D2729] mt-4">
              Chocolate Cheesecake
            </h3>
            <p className="mb-6 text[#555555] text-sm">
              Cherish Chocolate, relish cheesecake magic!
            </p>
            <div className="price-section flex items-center justify-between">
              <span className=" inline-block text-2xl font-bold text-[#745545]">
                <span className="text-[#53A623]">$</span>10
              </span>
              <div className="rating-wrapper flex items-center gap-1">
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
                <FaStar size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
