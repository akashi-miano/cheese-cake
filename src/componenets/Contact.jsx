import contactImg from "../assets/contactsImg.png";

const Contact = () => {
  return (
    <section className="py-16" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-3 items-center gap-6">
          <header
            className="mb-10 flow-content--m md:col-span-2"
            data-aos="zoom-in"
          >
            <h2 className="text-6xl text-[#523728]">Contact Us</h2>
            <p className="text-[#734B33] text-xl title__description">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the department phone, email you’d like to connect
              below
            </p>
            <div
              className="img-wrapper"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src={contactImg}
                alt="Contact us cheese cake image"
                className="mx-auto w-[70%] md:mx-0 md:w-reset"
              />
            </div>
          </header>
          <form
            action=""
            className="flow-content--m"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-full inline-block placeholder:text-[#757575] input-shadows"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full inline-block  placeholder:text-[#757575] input-shadows"
            />
            <textarea
              cols="30"
              rows="10"
              className="w-full px-4 py-2  placeholder:text-[#757575] textarea-shadows rounded-3xl"
              placeholder="Your Message..."
            ></textarea>
            <button className="btn btn--accent">Contact us now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
