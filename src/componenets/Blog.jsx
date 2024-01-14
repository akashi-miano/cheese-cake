import blogImg1 from "../assets/IMAGE FOR BLOG 1.png";
import blogImg2 from "../assets/Image Blog 2.png";
import blogImg3 from "../assets/Image Blog 3.png";
const Blog = () => {
  return (
    <section className="py-16">
      <div className="container">
        <header
          className="mb-10 flow-content--m text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-6xl text-[#523728]">Our Blog</h2>
          <p className="text-[#734B33] text-2xl title__description">
            Our Recent Posts
          </p>
        </header>
        <div className="cards-wrapper mt-4 grid md:grid-cols-3 gap-8">
          <div
            className="card bg-[#FFF8E1] rounded-[41px] flow-content--sm p-6 card-shadow"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src={blogImg1}
              alt="Blueberry cheesecake"
              className="mx-auto mb-4 w-[85%] set"
            />
            <time className="inline-block mb-4 text-[#BB6939] text-xl font-md">
              23 Nov, 2023 / Cheesecake
            </time>
            <h3 className="text-2xl text-[#734B33] font-semibold poppins mb-4">
              A Peek Behind <br /> the Cheesecake Curtain
            </h3>
            <p className="description text-sm mb-4">
              Step into our cheesecake haven, where the magic unfolds behind the
              scenes, whisking dreams into reality. Our kitchen is a symphony
              and very...
            </p>
            <a href="" className="poppins font-semibold">
              Read More
            </a>
          </div>
          <div
            className="card bg-[#FFF8E1] rounded-[41px] flow-content--sm p-6 card-shadow"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={blogImg2}
              alt="Blueberry cheesecake"
              className="mx-auto mb-4 w-[85%] md:w-reset"
            />
            <time className="inline-block mb-4 text-[#BB6939] text-xl font-md">
              18 July, 2023 / Cheesecake
            </time>
            <h3 className="text-2xl text-[#734B33] font-semibold poppins mb-4">
              Low-Sugar & Gluten-Free Cheesecakes
            </h3>
            <p className="description text-sm mb-4">
              Welcome to our guilt-free indulgence zone, where we're redefining
              the art of cheesecake with our delectable low-sugar...
            </p>
            <a href="" className="poppins font-semibold">
              Read More
            </a>
          </div>
          <div
            className="card bg-[#FFF8E1] rounded-[41px] flow-content--sm p-6 card-shadow"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={blogImg3}
              alt="Blueberry cheesecake"
              className="mx-auto mb-4 w-[85%] md:w-reset"
            />
            <time className="inline-block mb-4 text-[#BB6939] text-xl font-md">
              1 January, 2024 / Cheesecake
            </time>
            <h3 className="text-2xl text-[#734B33] font-semibold poppins mb-4">
              Sweet Words - Customer Reviews of Cheesecakes
            </h3>
            <p className="description text-sm mb-4">
              Indulge in the rich tapestry of heartfelt stories within "Sweet
              Words." This curated collection of customer reviews offers a
              glimpse into the joy...
            </p>
            <a href="" className="poppins font-semibold">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
