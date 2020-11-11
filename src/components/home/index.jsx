import "./home.css";
import logo from "../../assets/images/logo-bookmark.svg";
import ilustration from "../../assets/images/illustration-hero.svg";

function Home() {
  return (
    <main className="home">
      <div className="container">
        <header className="py-4">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="#" className="navbar-brand">
              <img src={logo} alt="Bookmark" />
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#menu"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ml-auto main-menu">
                <li className="nav-item">
                  <a href="#features" className="nav-link ease">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#extension" className="nav-link ease">
                    Extension
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#questions" className="nav-link ease">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login"
                    className="nav-link ease active"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row py-4 home__content">
          <div className="col-md-12 col-lg-6 mb-3">
            <article className="home__content__text">
              <h1>A Simple Bookmark Manager</h1>
              <p className="my-4">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <button className="btn-active ease">Get it on Chrome</button>
              <button className="btn-default ease">Get it on Firefox</button>
            </article>
          </div>
          <div className="col-md-12 col-lg-6 mb-3">
            <div>
              <img
                className="img-fluid"
                src={ilustration}
                alt="illustration-hero"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
