import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <section className="hero hero--dark" aria-labelledby="hero-title">
        <p className="hero__sub">Research</p>
        <h1 id="hero-title">Petukhova Lab</h1>
        <p className="hero__lead">
          Our group studies the genetics and biology of skin and complex traits, including
          hidradenitis suppurativa (HS), with the goal of improving understanding of disease
          mechanisms and supporting better care for patients.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--mint" to="/participate">
            Participate in research
          </Link>
          <Link className="btn btn--outline-light" to="/contact">
            Contact the lab
          </Link>
        </div>
      </section>
      <p>
        We work with participants, clinicians, and collaborators to advance genetic and
        translational research.         If you are living with HS and interested in our current
        SkinDeep study, visit the <Link to="/participate">Participate</Link> page for
        eligibility, what to expect, and how to enroll. For patient-focused background on HS
        and community organizations, see <Link to="/hs-resources">HS resources</Link>.
      </p>
    </>
  )
}
