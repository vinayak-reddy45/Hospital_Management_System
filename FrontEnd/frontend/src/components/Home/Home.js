 import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
          <b>SR HOSPITALS</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <div className="mx-2">
            <button
              style={{ margin: "5px" }}
              className="btn btn-danger"
              onClick={() => navigate("/doclogin")}
            >
              Login as Doctor
            </button>
            <button
              style={{ margin: "5px" }}
              className="btn btn-danger"
              onClick={() => navigate("/adlogin")}
            >
              Login as Receptionist
            </button>
            <button
              style={{ margin: "5px" }}
              className="btn btn-primary"
              onClick={() => navigate("/book-appointment")}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="btn btn-secondary btn-lg">
                <h2>Welcome to SR HOSPITALS</h2>
              </button>
              <h3
                style={{
                  color: "red",
                  backgroundColor: "yellow",
                  padding: "5px 10px",
                  display: "inline-block",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              >
                <a
                  href="tel:9515338945"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Call 9515338945 for Appointments
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="container my-4">
        <div className="row mb-2">
          <InfoCard
            title="Why Choose SR Hospitals?"
            text="Our network features top medical experts who deliver compassionate care with exceptional skill and cutting-edge technology."
            imgSrc="./assets/4.jpg"
          />
          <InfoCard
            title="Stop The Stroke!"
            text="When someone experiences a stroke, crucial brain cells that are essential for mobility, communication, and memory are lost."
            imgSrc="./assets/5.jpg"
          />
        </div>
        <div className="row mb-2">
          <InfoCard
            title="SR Heart Institute Expertise"
            text="The SR Heart Institute is renowned as one of India's premier heart hospitals, specializing in a wide range of advanced treatments and procedures in cardiology and cardiothoracic surgery."
            imgSrc="./assets/6.png"
          />
          <InfoCard
            title="SR Hospital Available 24/7"
            text="Get the most advanced emergency care anywhere in minutes. For free ambulance service, dial '108'."
            imgSrc="./assets/7.jpg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-dark text-white py-4">
        <div className="row text-center text-md-start d-flex justify-content-around">
          <div className="col-md-4">
            <h5>
              <b>SR Hospitals</b>
            </h5>
            <p>Plot No:188/7, Naga Hills Road, Raidurg, Hyderabad, 500032.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              <a href="tel:9515338945" className="text-white">
                9515338945
              </a>
            </p>
            <p>
              <a href="mailto:reception@srhospitals.com" className="text-white">
                reception&#64;srhospitals.com
              </a>
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <p>© 2024-2025 SR Hospitals, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const InfoCard = ({ title, text, imgSrc }) => (
  <div className="col-md-6">
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0">{title}</h3>
        <p className="card-text mb-auto">{text}</p>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="200" height="250" src={imgSrc} alt="" />
      </div>
    </div>
  </div>
);

export default Home;
