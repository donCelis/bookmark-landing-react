import "./homeContent.css";
import illustration_hero from "../../assets/images/illustration-hero.svg";

function HomeContent() {
  return (
    <section className="row py-4 home__content">
      <div className="col-md-12 col-lg-6 mb-3">
        <article className="home__content__text">
          <h1>A Simple Bookmark Manager</h1>
          <p className="my-4">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button className="btn-active ease">Get it on Chrome</button>
          <button className="btn-default ease">Get it on Firefox</button>
        </article>
      </div>
      <div className="col-md-12 col-lg-6 mb-3">
        <div>
          <img
            className="img-fluid"
            src={illustration_hero}
            alt="illustration-hero"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
