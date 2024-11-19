import { Zoom } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <section className="about-us">
      <Zoom
      duration={2000}>
        <h2>About Us</h2>
        <p>
          At the Computer Science Student Association, we focus on fostering a vibrant community for aspiring tech professionals. Our organization is committed to bridging the gap between education and industry, providing opportunities for students to engage in meaningful discussions and skill-building activities. Join us in shaping the future of technology.
        </p>
      </Zoom>
    </section>
  )
}

export default AboutUs;
