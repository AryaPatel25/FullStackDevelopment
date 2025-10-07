import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import "./About.css";

const About = ({ setActiveTab = () => {} }) => {
  return (
    <div className="about-container">
      {/* Pass setActiveTab so AboutSection can use it if preview=true */}
      <AboutSection setActiveTab={setActiveTab} />

      <div className="details">
        <div className="additional-details">
          <h2>My Biography</h2>
          <p>
            I am a passionate photographer inspired by the vibrant colors, rich
            traditions, and diverse landscapes of India. With over 15 years of
            experience in portrait, landscape, and event photography, I strive
            to capture stories that reflect the true spirit of my homeland. My
            journey began with a simple film camera gifted by my father, which
            sparked a lifelong fascination with visual storytelling. Since then,
            I’ve collaborated with a wide range of clients—from families and
            local artists to well-known brands—bringing their unique visions to
            life through powerful imagery. I believe in the power of photography
            not just as an art form, but as a means of connection, capturing
            moments that speak louder than words.
          </p>
          <p>
            When I am not behind the camera, I find joy in exploring bustling
            streets, serene temples, and the quiet elegance of nature. My
            curiosity drives me to constantly learn about art, culture, and
            technology, expanding the way I see and compose my work. Connecting
            with people and telling their stories through my lens fuels my
            creativity and professionalism. Over the years, my work has been
            featured in exhibitions and publications, and I’ve mentored aspiring
            photographers who share my passion. Each photograph I take is a
            tribute to the beauty of everyday life, and my goal is always to
            inspire emotion, curiosity, and a sense of wonder.
          </p>
        </div>

        {/* Feedback Section */}
        <div className="testimonial-section">
          <div className="testimonial-header">
            <h2>What My Clients Say</h2>
          </div>
          <div className="testimonial-carousel">
            {[
              {
                name: "Isha Sharma",
                location: "Mumbai, India",
                text: "name's photography beautifully captures the vibrant spirit and colors of our festivals.Every picture reflects the rich Indian culture and tradition.",
              },
              {
                name: "Harsh Patel",
                location: "Jaipur, India",
                text: "name skillfully captured every moment of our traditional wedding with great emotion and detail. These photos are now treasured memories.",
              },
              {
                name: "Gaurav Mehta",
                location: "Kerala, India",
                text: "In name's photographs, you can truly feel the serene beauty and lush landscapes of Kerala. His work is deeply moving and artistic.",
              },
            ].map((client, index) => (
              <div key={index} className="testimonial-card">
                <h4>{client.name}</h4>
                <p className="location">{client.location}</p>
                <div className="stars">★★★★★</div>
                <p className="feedback">{client.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
