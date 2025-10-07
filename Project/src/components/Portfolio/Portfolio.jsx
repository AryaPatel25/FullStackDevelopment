import React, { useRef } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">

      {/* Portfolio Header added here */}
      <header className="portfolio-header">
        <div className="portfolio-header-content">
          <div className="header-text-container">
            <p className="header-label">My Work</p>
            <h1 className="header-title">Photography Portfolio</h1>
            <p className="header-description">
              Explore a collection of my favorite photography projects, ranging
              from portraits to commercial shoots.
            </p>
          </div>
        </div>
        <div className="header-gallery">
          <img
            src="/images/portfolio-camera.jpg"
            alt="Portfolio showcase"
            className="header-gallery-image"
          />
        </div>
      </header>

      <PortfolioSection
        title="PORTRAITS PHOTOGRAPHY"
        projects={[
          {
            title: "Faces of Resilience",
            date: "March 2022",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/2000bfff78acf991ed308b0c2feaa5c7a30a8db1",
          },
          {
            title: "Innocence Unveiled",
            date: "January 2020",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/9acf9e8c542f0ef99db94a744c487d5f28d46432",
          },
          {
            title: "Elegance in Monochrom",
            date: "January 2020",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/764fd2b9059f9e46a29bd6dd1158e5ca0d244709",
          },
          {
            title: "Golden Hour Vows",
            date: "November 2021",
            image: "/images/portrait-photography.jpg",
          },
        ]}
      />
      <PortfolioSection
        title="EVENT PHOTOGRAPHY"
        projects={[
          {
            title: "The Holi Ceremony",
            date: "March 2021",
            image: "/images/holi-photography.jpg",
          },
          {
            title: "Wedding Cermony",
            date: "November 2021",
            image: "/images/wedding-photography.jpg",
          },
          {
            title: "Concert Night",
            date: "January 2025",
            image: "https://i.pinimg.com/736x/ed/16/e6/ed16e6f3d98e4583ac56d2584dd5e7fc.jpg",
          },
          {
            title: "Nature's Embrace",
            date: "October 2024",
            image: "/images/nature-photography.jpg",
          },
          {
            title: "Nature 's Symphony",
            date: "September 2024",
            image: "/images/travel-photography.jpg",
          },
          
        ]}
      />
      <PortfolioSection
        title="COMMERCIAL PHOTOGRAPHY"
        projects={[
          
          {
            title: "Company Inaugration",
            date: "March 2024",
            image: "https://i.pinimg.com/736x/61/e4/26/61e4267351408e43a921b454f3e4f72e.jpg",
          },
          
          {
            title: "Drink Product Shoot",
            date: "March 2025",
            image: "https://i.pinimg.com/736x/24/c7/28/24c72886928b5122fa8c94abc3b2667d.jpg",
          },
          
          {
            title: "Drink Product Shoot",
            date: "March 2025",
            image: "https://i.pinimg.com/736x/6b/2f/48/6b2f489710cca71945f6e8a016b824a9.jpg",
          },
          {
            title: "Company Team Shoot",
            date: "March 2024",
            image: "https://i.pinimg.com/736x/08/1f/d2/081fd236ec8d837382e739668d6c981a.jpg",
          },
        ]}
      />
    </div>
  );
};

const PortfolioSection = ({ title, projects }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="navigation-controls">
          <button className="nav-button" onClick={scrollLeft}>
            &#8592;
          </button>
          <button className="nav-button" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>
      <div className="projects-grid" ref={scrollRef}>
        {projects.map((project, index) => (
          <div className="project-wrapper" key={index}>
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
