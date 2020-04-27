import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
const IndexPage = () => (
  <Layout>


  <div className="homeheader">
      <div className="homeheadertekst">
<h3>PROJECT SMARTPHONE</h3>
        <h1>
          Maak zelf professionele video's  <span className="enter"> met je smartphone.</span>
        </h1>

      </div>

  <div className="homeheaderfoto">
  </div>
      <div className="homeheadertekst homeondertitel">
<p>Volg onze <a href="/blog"><span className="pink">blog</span></a> voor duidelijke instructies, tips en oefeningen om nu eindelijk eens aan de slag te gaan met video marketing. Niet met extra budgetten, ingewikkelde apparatuur of langdurige opleidingen. Alleen een smartphone en wat passie om erin te vliegen. Meer niet.  </p>
</div>
  </div>



    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

  </Layout>
)

export default IndexPage
