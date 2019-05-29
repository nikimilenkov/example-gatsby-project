import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="lorem10 dsfskfkjdhfksdfkuasfgashj asd ahdg adjjdgasgjg askdhgagdkad"
      >
        <Link className="btn-white" to="/tours">
          Expolre tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
