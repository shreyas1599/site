import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React from "react";

const AnimatedExperience: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [techScope, animateTech] = useAnimate();

  React.useEffect(() => {
    if (isInView) {
      animateTech(
        ".tech-item",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, delay: stagger(0.1, { startDelay: 0.5 }) },
      );
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      id="experience"
      className="flex flex-col w-full py-20 bg-primaryGreenDark items-center px-6 md:px-10 lg:px-20 gap-10 relative"
    >
      <motion.h2
        className="text-4xl font-lobster text-primaryDark text-center w-full mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="w-full max-w-4xl mx-auto space-y-12">
        {/* Glide Systems */}
        <motion.div
          className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-300 via-lightGreen to-teaGreen rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>

          <div className="relative bg-teaGreen rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <span className="bg-primaryDark text-teaGreen px-3 py-1 rounded-full text-xs font-kodeMono tracking-wider">
                  SENIOR SOFTWARE ENGINEER
                </span>
                <h3 className="font-kodeMono font-extrabold text-2xl text-primaryDark mt-3">
                  Glide Systems
                </h3>
              </div>
              <span className="text-primaryDark/70 italic text-xs font-kodeMono">
                2023 - present
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-kodeMono text-primaryDark/80 text-sm mb-2">
                  OVERVIEW
                </h4>
                <p className="font-montserrat text-primaryDark/90 text-sm md:text-base leading-relaxed">
                  Working on the backend and frontend services of a Product
                  Lifecycle Management Software.
                </p>
              </div>

              <div>
                <h4 className="font-kodeMono text-primaryDark/80 text-sm mb-2">
                  KEY CONTRIBUTIONS
                </h4>
                <ul className="list-disc pl-5 space-y-2 font-montserrat text-primaryDark/90 text-sm md:text-base">
                  <li>
                    Architected and implemented a proof-of-concept
                    Bill-of-Material (BOM) Management Solution using TypeDB, a
                    polymorphic database
                  </li>
                  <li>
                    Developed a Jira Plugin using{" "}
                    <a
                      href="https://developer.atlassian.com/platform/forge/getting-started/"
                      className="italic font-semibold"
                    >
                      Atlassian Forge
                    </a>{" "}
                    that integrates with the PLM system for seamless issue
                    tracking
                  </li>
                  <li>
                    Contributing to the backend microservices of a{" "}
                    <a
                      href="https://neo4j.com/"
                      className="italic font-semibold"
                    >
                      Neo4J
                    </a>
                    -based Product Data Management Platform using Quarkus and
                    Reactive Programming.
                  </li>
                  <li>
                    Redesigned the company's{" "}
                    <a
                      className="border-b-2 hover:cursor-pointer border-red-500 font-bold hover:border-lightGreen transition-all"
                      href="https://www.glidesystemsinc.com"
                      target="_blank"
                    >
                      landing page
                    </a>{" "}
                    using TailwindCSS, NextJS
                  </li>
                  <li>
                    Refactored the Microfrontends-oriented UI codebase to have
                    stricter Typescript checks and supported cross microfrontend
                    type safety
                  </li>
                  <li>
                    Worked on integrating a CAD Viewer within the UI using{" "}
                    <a
                      href="https://www.techsoft3d.com/"
                      className="italic font-semibold"
                    >
                      Techsoft3D
                    </a>
                    .
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primaryDark/70 text-xs font-kodeMono mb-2">
                  TECHNOLOGIES
                </h4>
                <div ref={techScope} className="flex flex-wrap gap-2">
                  {[
                    "TypeDB",
                    "Neo4J",
                    "Quarkus",
                    "SpringBoot",
                    "SingleSpa",
                    "React",
                    "TypeScript",
                    "Docker",
                    "Kubernetes",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="tech-item bg-lightGreen/50 text-primaryDark rounded-md text-center p-1 px-3 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Goldman Sachs - Software Analyst */}
        <motion.div
          className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-lightGreen to-yellow-300 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>

          <div className="relative bg-lightGreen rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <span className="bg-primaryDark text-lightGreen px-3 py-1 rounded-full text-xs font-kodeMono tracking-wider">
                  SOFTWARE ANALYST
                </span>
                <h3 className="font-kodeMono font-extrabold text-2xl text-primaryDark mt-3">
                  Goldman Sachs
                </h3>
              </div>
              <span className="text-primaryDark/70 italic text-xs font-kodeMono">
                2021 - 2023
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-kodeMono text-primaryDark/80 text-sm mb-2">
                  OVERVIEW
                </h4>
                <p className="font-montserrat text-primaryDark/90 text-sm md:text-base leading-relaxed">
                  Worked on a large-scale inventory management platform that is
                  responsible for optimal handling of the firm’s financial
                  inventory. The platform consists of a linear optimizer
                  (written in Mosek) supported by various microservices written
                  in Java. Involved in the migration of a legacy platform to a
                  newer platform written in Java
                </p>
              </div>

              <div>
                <h4 className="font-kodeMono text-primaryDark/80 text-sm mb-2">
                  KEY CONTRIBUTIONS
                </h4>
                <ul className="list-disc pl-5 space-y-2 font-montserrat text-primaryDark/90 text-sm md:text-base">
                  <li>
                    Worked on the development of streaming applications with
                    capability to compute real-time aggregations from various
                    data sources using Apache Kafka
                  </li>
                  <li>
                    Responsible for the development and productionization of an
                    ETL pipeline (using Apache Kafka) to improve operational
                    efficiency with annual transaction cost savings upwards of
                    2.5 Million USD. Project entailed interaction with external
                    vendor and multiple internal teams
                  </li>
                  <li>
                    Worked on multiple calculators to expose data to the
                    frontend through a pre-existing REST Service. Queries were
                    written in SQL and Apache Spark
                  </li>
                  <li>
                    Worked on multiple UI dashboards for the platform using
                    React, Javascript, AG-Grid
                  </li>
                  <li>
                    Improved ease of blue-green deployment by eliminating manual
                    reconciliation actions needed to transfer traffic from one
                    deployment to the other. Wrote extensive MySQL queries for
                    reconciling data between environments
                  </li>
                  <li>
                    Collaborated with cross-functional teams to define and
                    implement business requirements
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primaryDark/70 text-xs font-kodeMono mb-2">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "React",
                    "Kafka",
                    "Spark",
                    "SingleStore",
                    "Fitnesse",
                    "Javascript",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="tech-item bg-teaGreen text-primaryDark rounded-md text-center p-1 px-3 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Goldman Sachs - Summer Analyst */}
        <motion.div
          className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-300 to-green-300 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>

          <div className="relative bg-lightGreen/90 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <span className="bg-primaryDark text-lightGreen px-3 py-1 rounded-full text-xs font-kodeMono tracking-wider">
                  SUMMER ANALYST
                </span>
                <h3 className="font-kodeMono font-extrabold text-2xl text-primaryDark mt-3">
                  Goldman Sachs
                </h3>
              </div>
              <span className="text-primaryDark/70 italic text-xs font-kodeMono">
                Summer 2020
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-kodeMono text-primaryDark/80 text-sm mb-2">
                  OVERVIEW
                </h4>
                <p className="font-montserrat text-primaryDark/90 text-sm md:text-base leading-relaxed">
                  Worked on a dashboard for the Liquidity Risk team during a
                  10-week summer internship.
                </p>
              </div>

              <div>
                <h4 className="font-kodeMono text-primaryDark/80 text-sm mb-2">
                  KEY CONTRIBUTIONS
                </h4>
                <ul className="list-disc pl-5 space-y-2 font-montserrat text-primaryDark/90 text-sm md:text-base">
                  <li>
                    Developed an interactive network diagram using React and
                    D3.js for an inventory management optimization platform to
                    visualize movements across nodes within a graph
                  </li>
                  <li>
                    The graph comprised of a series of locations (nodes) and a
                    series of permissible movements (flows) generated by a Mosek
                    optimizer
                  </li>
                  <li>
                    Each location consisted of a balance that could move across
                    the locations across complex paths
                  </li>
                  <li>
                    The project utilized GraphQL as a middleware layered on an
                    existing REST API
                  </li>
                  <li>
                    Presented the completed project to senior management at the
                    end of the internship
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primaryDark/70 text-xs font-kodeMono mb-2">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "D3.js",
                    "GraphQL",
                    "Jest",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="tech-item bg-teaGreen text-primaryDark rounded-md text-center p-1 px-3 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedExperience;
