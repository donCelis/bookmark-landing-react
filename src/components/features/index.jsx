import "./features.css";
import features_tab_1 from "../../assets/images/illustration-features-tab-1.svg"
import features_tab_2 from "../../assets/images/illustration-features-tab-2.svg"
import features_tab_3 from "../../assets/images/illustration-features-tab-3.svg"

function Features() {
  return (
    <section className="features py-4" id="features">
      <div className="container">
        <article className="text-center py-3">
          <h3>Features</h3>
          <p className="my-3">
            Our aim is to make it quick and easy for you to access your <br />
            favourite websites. Your bookmarks sync between your devices <br />
            so you can access them on the go.
          </p>
        </article>
        <section className="features__content">
          <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-toggle="pill"
                href="#simple"
                role="tab"
              >
                Simple Bookmarking
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-toggle="pill" href="#speedy" role="tab">
                Speedy Searching
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-toggle="pill" href="#ease" role="tab">
                Easy Sharing
              </a>
            </li>
          </ul>
          <div className="tab-content my-5">
            <div className="tab-pane fade show active" id="simple" role="tabpanel">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 mb-4">
                  <div>
                    <img
                      className="img-fluid"
                      src={features_tab_1}
                      alt="features"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mb-4">
                  <article>
                    <h3>Bookmark in one click</h3>
                    <p className="my-4">
                      Organize your bookmarks however you like. Our simple
                      drag-and-drop interface gives you complete control over
                      how you manage your favourite sites.
                    </p>
                    <button className="btn-active ease">More Info</button>
                  </article>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="speedy" role="tabpanel">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 mb-4">
                  <div>
                    <img
                      className="img-fluid"
                      src={features_tab_2}
                      alt="features"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mb-4">
                  <article>
                    <h3>Intelligent search</h3>
                    <p className="my-4">
                      Our powerful search feature will help you find saved sites
                      in no time at all. No need to trawl through all of your
                      bookmarks.
                    </p>
                    <button className="btn-active ease">More Info</button>
                  </article>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="ease" role="tabpanel">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-6 mb-4">
                  <div>
                    <img
                      className="img-fluid"
                      src={features_tab_3}
                      alt="features"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mb-4">
                  <article>
                    <h3>Share your bookmarks</h3>
                    <p className="my-4">
                      Easily share your bookmarks and collections with others.
                      Create a shareable link that you can send at the click of
                      a button.
                    </p>
                    <button className="btn-active ease">More Info</button>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Features;
