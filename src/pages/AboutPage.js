// src/pages/AboutPage.js
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { Award, Users, Globe, Shield } from "lucide-react";
import joe from "../assets/joe.png";
import kc from "../assets/kc.png";
import oz from "../assets/oz.png";
import cellar from '../assets/others/wine cellar.jpg'

const AboutPage = () => {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Premium Quality",
      description: "Curated selection from world-class producers",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Guidance",
      description: "Personalized recommendations from our sommeliers",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Sourcing",
      description: "Direct partnerships with vineyards and distilleries",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Authenticity Guaranteed",
      description: "Certified provenance for every bottle",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="text-white"
        style={{ backgroundColor: "#0a192f", padding: "100px 0" }}
      >
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-3 fw-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="fs-4 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            From humble beginnings to becoming the premier destination for
            spirit connoisseurs
          </motion.p>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="section-py">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
                <p className="fs-5 text-muted mb-4">
                  At Vintage Spirits, we believe that every bottle tells a
                  story. Our mission is to connect discerning enthusiasts with
                  exceptional wines and whiskeys that celebrate craftsmanship,
                  tradition, and innovation.
                </p>
                <p className="fs-5 text-muted">
                  Founded in 2010 by a group of passionate collectors, we've
                  grown from a small boutique to a global destination for
                  premium spirits, always maintaining our commitment to quality,
                  authenticity, and expert curation.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="rounded-3 overflow-hidden shadow-lg">
                  <img
                    src={cellar}
                    alt="Wine cellar"
                    className="img-fluid w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-py bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Values</h2>
            <p className="text-muted fs-5">
              The principles that guide everything we do
            </p>
          </div>

          <Row className="g-4">
            {values.map((value, index) => (
              <Col lg={3} md={6} key={value.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center p-4 hover-shadow">
                    <div className="text-primary mb-4 d-flex justify-content-center">
                      {value.icon}
                    </div>
                    <Card.Title className="fw-bold mb-3">
                      {value.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {value.description}
                    </Card.Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-py">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Meet Our Experts</h2>
            <p className="text-muted fs-5">
              Passionate professionals dedicated to your experience
            </p>
          </div>

          <Row className="g-4">
            {[
              {
                name: "Osaze J. Ekhator",
                role: "Founder",
                experience: "Finance",
                image: oz,
              },
              {
                name: "Kingsley C. Otuya",
                role: "Co-Founder",
                experience: "Technology",
                image:
                  kc,
              },
              {
                name: "Amb. J.O. Idele",
                role: "Co-Founder",
                experience: "Salesman",
                image:
                  joe,
              },
            ].map((member, index) => (
              <Col lg={4} md={6} key={member.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div
                    className="mb-4 mx-auto rounded-circle overflow-hidden"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <h3 className="fw-bold mb-2">{member.name}</h3>
                  <p className="text-muted mb-2">{member.role}</p>
                  <p className="text-secondary">
                    {member.experience} 
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
