import React from 'react'
import './App.css'
const App = () => {
  return (
    <>
    <div className="website">

      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          LUXE<span>DRIVE.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cars">Cars</a>
          <a href="#brands">Brands</a>
          <a href="#statistics">Statistics</a>
          <a href="#about">About</a>
        </div>

        <a href="#cars" className="nav-button">
          Explore Cars
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">THE WORLD OF AUTOMOTIVE EXCELLENCE</p>

          <h1>
            DRIVE YOUR <br />
            <span>DREAM.</span>
          </h1>

          <p className="hero-description">
            Discover the world's most extraordinary luxury,
            sports and performance cars. Experience power,
            elegance and innovation in one place.
          </p>

          <a href="#cars" className="hero-button">
            EXPLORE COLLECTION →
          </a>

          <div className="hero-numbers">
            <div>
              <h3>12+</h3>
              <p>Luxury Cars</p>
            </div>

            <div>
              <h3>06+</h3>
              <p>Top Brands</p>
            </div>

            <div>
              <h3>1000+</h3>
              <p>Horsepower</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="cars-section" id="cars">

        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>FEATURED <span>VEHICLES</span></h2>
          <h4>Discover automotive perfection.</h4>
        </div>

        <div className="cars-grid">

          {/* CAR 1 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900"
              alt="Lamborghini Aventador"
            />
            <div className="car-info">
              <p className="car-brand">LAMBORGHINI</p>
              <h3>Aventador</h3>
              <div className="car-details">
                <span>2022</span>
                <span>V12 Engine</span>
                <span>769 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $500,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 2 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=900"
              alt="Ferrari SF90 Stradale"
            />
            <div className="car-info">
              <p className="car-brand">FERRARI</p>
              <h3>SF90 Stradale</h3>
              <div className="car-details">
                <span>2024</span>
                <span>V8 Hybrid</span>
                <span>986 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $528,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 3 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1621135802920-133df287f89c?w=900"
              alt="Bugatti Chiron"
            />
            <div className="car-info">
              <p className="car-brand">BUGATTI</p>
              <h3>Chiron</h3>
              <div className="car-details">
                <span>2022</span>
                <span>W16 Engine</span>
                <span>1500 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $3M</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 4 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
              alt="Porsche 911"
            />
            <div className="car-info">
              <p className="car-brand">PORSCHE</p>
              <h3>911 Carrera</h3>
              <div className="car-details">
                <span>2024</span>
                <span>Flat-6</span>
                <span>379 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $120,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 5 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900"
              alt="Mercedes AMG GT"
            />
            <div className="car-info">
              <p className="car-brand">MERCEDES-BENZ</p>
              <h3>AMG GT</h3>
              <div className="car-details">
                <span>2024</span>
                <span>V8 Engine</span>
                <span>577 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $136,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 6 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900"
              alt="BMW M4"
            />
            <div className="car-info">
              <p className="car-brand">BMW</p>
              <h3>M4 Competition</h3>
              <div className="car-details">
                <span>2024</span>
                <span>Inline-6</span>
                <span>503 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $80,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 7 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=900"
              alt="Audi R8"
            />
            <div className="car-info">
              <p className="car-brand">AUDI</p>
              <h3>R8 V10</h3>
              <div className="car-details">
                <span>2023</span>
                <span>V10 Engine</span>
                <span>602 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $158,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 8 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1626072557464-90403d788e8d?w=900"
              alt="McLaren 720S"
            />
            <div className="car-info">
              <p className="car-brand">MCLAREN</p>
              <h3>720S</h3>
              <div className="car-details">
                <span>2023</span>
                <span>V8 Engine</span>
                <span>710 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $300,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 9 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=900"
              alt="Rolls Royce Phantom"
            />
            <div className="car-info">
              <p className="car-brand">ROLLS-ROYCE</p>
              <h3>Phantom</h3>
              <div className="car-details">
                <span>2024</span>
                <span>V12 Engine</span>
                <span>563 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $500,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 10 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900"
              alt="Bentley Continental GT"
            />
            <div className="car-info">
              <p className="car-brand">BENTLEY</p>
              <h3>Continental GT</h3>
              <div className="car-details">
                <span>2024</span>
                <span>V8 Engine</span>
                <span>542 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $245,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 11 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900"
              alt="Range Rover Sport"
            />
            <div className="car-info">
              <p className="car-brand">LAND ROVER</p>
              <h3>Range Rover Sport</h3>
              <div className="car-details">
                <span>2024</span>
                <span>V8 Engine</span>
                <span>523 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $84,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

          {/* CAR 12 */}
          <div className="car-card">
            <img
              src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=900"
              alt="Aston Martin DB12"
            />
            <div className="car-info">
              <p className="car-brand">ASTON MARTIN</p>
              <h3>DB12</h3>
              <div className="car-details">
                <span>2024</span>
                <span>V8 Engine</span>
                <span>671 HP</span>
              </div>
              <div className="car-bottom">
                <h4>From $245,000</h4>
                <a href="#about">View Details ↗</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="brands-section" id="brands">
        <div className="section-heading">
          <p>WORLD-CLASS MANUFACTURERS</p>
          <h2>POPULAR <span>BRANDS</span></h2>
          <h4>Engineering excellence from legendary names.</h4>
        </div>

        <div className="brands-grid">
          <div className="brand-item">
            <div className="brand-symbol">🐎</div>
            <h3>FERRARI</h3>
          </div>

          <div className="brand-item">
            <div className="brand-symbol">🐂</div>
            <h3>LAMBORGHINI</h3>
          </div>

          <div className="brand-item">
            <div className="brand-symbol">BMW</div>
            <h3>BMW</h3>
          </div>

          <div className="brand-item">
            <div className="brand-symbol">★</div>
            <h3>MERCEDES</h3>
          </div>

          <div className="brand-item">
            <div className="brand-symbol">P</div>
            <h3>PORSCHE</h3>
          </div>

          <div className="brand-item">
            <div className="brand-symbol">AUDI</div>
            <h3>AUDI</h3>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="stats-section" id="statistics">
        <div className="section-heading">
          <p>THE NUMBERS BEHIND THE MACHINES</p>
          <h2>OUR <span>STATISTICS</span></h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>12+</h2>
            <p>Featured Vehicles</p>
          </div>

          <div className="stat-card">
            <h2>12+</h2>
            <p>Manufacturers</p>
          </div>

          <div className="stat-card">
            <h2>1500+</h2>
            <p>Maximum Horsepower</p>
          </div>

          <div className="stat-card">
            <h2>04</h2>
            <p>Vehicle Categories</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200"
            alt="Luxury sports car"
          />
        </div>

        <div className="about-content">
          <p>ABOUT LUXEDRIVE</p>
          <h2>MORE THAN JUST <span>A CAR.</span></h2>

          <p>
            LUXEDRIVE is a showcase of automotive excellence.
            From breathtaking supercars to elegant luxury
            vehicles, we celebrate the engineering, design
            and innovation behind the world's greatest cars.
          </p>

          <a href="#cars" className="hero-button">
            DISCOVER OUR COLLECTION →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-about">
            <a href="#home" className="logo">
              LUXE<span>DRIVE.</span>
            </a>

            <p>
              Discover the extraordinary world of luxury
              automobiles. Power, prestige and performance
              all in one destination.
            </p>
          </div>

          <div className="footer-links">
            <h3>QUICK LINKS</h3>
            <a href="#home">Home</a>
            <a href="#cars">Cars</a>
            <a href="#brands">Brands</a>
            <a href="#statistics">Statistics</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-links">
            <h3>OUR COLLECTION</h3>
            <a href="#cars">Supercars</a>
            <a href="#cars">Sports Cars</a>
            <a href="#cars">Luxury Cars</a>
            <a href="#cars">Performance Cars</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 LUXEDRIVE. All Rights Reserved.</p>
          <p>DESIGNED FOR AUTOMOTIVE ENTHUSIASTS.</p>
        </div>
      </footer>

    </div>
    </>
  )
}

export default App
