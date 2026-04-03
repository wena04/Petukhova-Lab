import { Link } from 'react-router-dom'

const SURVEY_URL = 'https://skindeepsurvey.com'

export function Participate() {
  return (
    <>
      <header className="hero" style={{ marginBottom: '1rem' }}>
        <p className="hero__sub">NYU Dermatology</p>
        <h1>Hidradenitis Suppurativa SkinDeep Study</h1>
        <p className="hero__lead" style={{ color: 'var(--nyu-text)' }}>
          Hidradenitis suppurativa (HS) genetic studies help us understand HS causes and look
          for cures.
        </p>
      </header>

      <nav className="participate-toc" aria-label="On this page">
        <a href="#overview">Learn more</a>
        <a href="#join">Join this study</a>
        <a href="#contact-study">Contact</a>
        <a href="#faq">FAQ</a>
      </nav>

      <section id="overview" className="section-anchor">
        <h2>Purpose of the study</h2>
        <p>
          Some people with HS have noticed connections with other health conditions. Genetic
          studies can help us figure out why that is and how it happens, which can lead to
          better and more effective treatment options.
        </p>

        <h2>Duration</h2>
        <p>The study will be open to enrollment for at least one year.</p>

        <h2>Sites</h2>
        <p>
          The study is conducted at NYU Langone Health and overseen by NYU Langone’s Ronald
          O. Perelman Department of Dermatology and Department of Population Health.
        </p>

        <h2>Enrollment status</h2>
        <p>
          <strong>Currently recruiting participants.</strong>
        </p>
      </section>

      <section id="eligibility" className="section-anchor">
        <h2>Eligibility (who can participate)</h2>
        <h3>Inclusion criteria</h3>
        <ul>
          <li>Individuals experiencing or who have experienced painful skin boils.</li>
          <li>Individuals diagnosed with hidradenitis suppurativa.</li>
          <li>18 years or older.</li>
          <li>Lives in the US.</li>
          <li>Speaks fluent English.</li>
        </ul>

        <h3>Participation requirements</h3>
        <p>Participants will…</p>
        <ul>
          <li>
            Complete our survey to answer questions about their health (approximately{' '}
            <strong>15 minutes</strong>).
          </li>
          <li>
            Use a saliva collection kit that we mail to them to provide a sample.
          </li>
          <li>
            Mail the kit back using the included shipping materials with pre-paid postage.
          </li>
        </ul>
      </section>

      <section id="safety" className="section-anchor">
        <h2>Safety monitoring</h2>
        <p>
          All participant information will remain confidential to avoid loss of privacy. Data
          security measures are in place, and the study is carried out under strict IRB
          oversight. Full details are available in the informed consent document.
        </p>
      </section>

      <section id="benefits-risks" className="section-anchor">
        <h2>Benefits and risks</h2>
        <h3>Potential benefits</h3>
        <p>
          While participants will not receive direct benefits, the research has the
          potential to enable the development of improved, tailored treatment options for
          painful skin boils and related conditions.
        </p>
        <h3>Risks / side effects</h3>
        <p>
          The primary risk includes the possible loss of confidentiality if data is accessed
          by unauthorized persons despite secure systems and monitoring.
        </p>
      </section>

      <section id="compensation" className="section-anchor">
        <h2>Compensation</h2>
        <p>There is no compensation for participation in this study.</p>

        <h2>Confidentiality</h2>
        <p>
          Measures are in place to protect participant confidentiality, minimizing the risks
          associated with data security breaches.
        </p>
      </section>

      <section id="join" className="section-anchor">
        <h2>How to enroll</h2>
        <p>
          To join the study, visit{' '}
          <a href={SURVEY_URL} rel="noopener noreferrer">
            {SURVEY_URL.replace('https://', '')}
          </a>{' '}
          or scan the QR code provided in study materials (add image here when available).
        </p>
        <p className="hero__actions">
          <a className="btn btn--mint" href={SURVEY_URL} rel="noopener noreferrer">
            Go to survey
          </a>
        </p>
      </section>

      <section id="contact-study" className="section-anchor">
        <h2>Study team</h2>
        <h3>Principal investigator(s)</h3>
        <ul>
          <li>
            Lynn Petukhova, PhD — Ronald O. Perelman Department of Dermatology / Department
            of Population Health
          </li>
        </ul>
        <h3>Contact information</h3>
        <p>For inquiries, contact:</p>
        <ul>
          <li>
            <strong>Research coordinator:</strong> Jaylene Delgado —{' '}
            <a href="mailto:Jaylene.Delgado@nyulangone.org">Jaylene.Delgado@nyulangone.org</a>{' '}
            or <a href="tel:+19172442595">917-244-2595</a>
          </li>
        </ul>
        <p>
          General lab contact options are also on the <Link to="/contact">Contact Us</Link>{' '}
          page.
        </p>
      </section>

      <section id="ethics" className="section-anchor">
        <h2>Ethics and regulatory information</h2>
        <p>
          This study has been approved by NYU Langone Health’s Institutional Review Board
          (IRB).
        </p>
      </section>

      <section id="faq" className="section-anchor">
        <h2>Frequently asked questions</h2>

        <h3>How do I know if I’m eligible?</h3>
        <p>You are eligible if you:</p>
        <ul>
          <li>
            Experience painful skin boils or have been diagnosed with hidradenitis
            suppurativa.
          </li>
          <li>Speak fluent English.</li>
          <li>Are 18 years old or older.</li>
          <li>Live in the US.</li>
        </ul>

        <h3>What happens if I join or leave the study?</h3>
        <p>
          Participation is voluntary, and you can withdraw at any time without penalty.
        </p>

        <h3>Will I receive results of the study?</h3>
        <p>
          Individual results will not be shared, but the study’s findings may contribute to
          future research publications.
        </p>

        <h3>How is my data handled?</h3>
        <p>
          Your data is stored securely, and confidentiality is prioritized. Full details are
          outlined in the informed consent.
        </p>
      </section>
    </>
  )
}
