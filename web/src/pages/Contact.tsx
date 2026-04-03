import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        For questions about our <strong>Hidradenitis Suppurativa SkinDeep</strong> study
        (survey, eligibility, enrollment), please use the study contact on the{' '}
        <Link to="/participate">Participate</Link> page.
      </p>

      <h2>Study team (SkinDeep)</h2>
      <ul>
        <li>
          <strong>Principal investigator:</strong> Lynn Petukhova, PhD — Ronald O. Perelman
          Department of Dermatology / Department of Population Health, NYU Langone Health
        </li>
        <li>
          <strong>Research coordinator:</strong> Jaylene Delgado —{' '}
          <a href="mailto:Jaylene.Delgado@nyulangone.org">Jaylene.Delgado@nyulangone.org</a>{' '}
          or <a href="tel:+19172442595">917-244-2595</a>
        </li>
      </ul>

      <div className="card">
        <p style={{ margin: 0 }}>
          <strong>Interested in joining the study?</strong> See{' '}
          <Link to="/participate#join">How to enroll</Link> on the Participate page, or visit{' '}
          <a href="https://skindeepsurvey.com" rel="noopener noreferrer">
            skindeepsurvey.com
          </a>
          .
        </p>
      </div>

      <h2>General lab inquiries</h2>
      <p className="muted">
        Mailing address and general lab email can be added here when available (similar to
        the format used on peer lab sites).
      </p>
    </>
  )
}
