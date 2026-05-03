import { Link } from 'react-router-dom'

type PatientOrg = {
  name: string
  short: string
  href: string
  description: string
}

/** Partner resources from the NYU Grossman HS thank-you pamphlet (left panel). */
const PATIENT_ORGS: PatientOrg[] = [
  {
    name: 'HS Papaya',
    short: 'HP',
    href: 'https://hspapaya.com/',
    description:
      'The HS Papaya app is free and allows you to track symptoms and flares, find triggers, and more.',
  },
  {
    name: 'The Association of Hidradenitis Suppurativa and Inflammatory Diseases (AHSID)',
    short: 'AHSID',
    href: 'https://www.theahsid.org/',
    description:
      'A national nonprofit patient advocacy organization that empowers the HS community through awareness, education, and holistic support.',
  },
  {
    name: 'HS Connect',
    short: 'HSC',
    href: 'https://www.hsconnect.org/',
    description:
      'An online resource led by people living with HS, offering podcasts, multilingual resources, social media support groups, and clinical trial information.',
  },
  {
    name: 'HS Foundation',
    short: 'HSF',
    href: 'https://www.hs-foundation.org/',
    description:
      'A dermatologist-led nonprofit offering resources and tips to help you navigate your care. Visit the “For Patients” section for more.',
  },
]

const WASH_ITEMS = [
  'Benzoyl Peroxide 10%',
  'Hibiclens',
  'Head & Shoulders or Z-bar',
  'CLn Skincare',
]

const TOPICAL_ITEMS = [
  'Dermeleve (for itch)',
  'My Magic Healer (to calm flares)',
  'Menthol (for pain)',
  'Lidocaine (to numb painful spots)',
  'CLn Skincare (to manage flares)',
  'Cannabidiol (CBD) (for pain relief)',
]

export function HSResources() {
  return (
    <>
      <header className="hero hero--dark hs-guide-hero" id="patient-guide" aria-labelledby="hs-guide-title">
        <p className="hero__sub">NYU Grossman School of Medicine</p>
        <h1 id="hs-guide-title">Navigating hidradenitis suppurativa</h1>
        <p className="hs-guide-badge" aria-label="Subtitle">
          A patient guide to HS
        </p>
        <p className="hero__lead">
          Made by patients, for patients, with help from AHSID and HS Connect.
        </p>
        <figure className="hs-brochure-figure hs-brochure-figure--hero">
          <img
            src="/hs-resources/brochure-outreach-and-study.png"
            alt="Pamphlet spread showing community illustration, partner organizations, and Skin Deep study information."
            width={1200}
            height={675}
            loading="eager"
            decoding="async"
          />
        </figure>
      </header>

      <nav className="participate-toc" aria-label="On this page">
        <a href="#what-is-hs">What is HS?</a>
        <a href="#your-hs-toolkit">Your HS toolkit</a>
        <a href="#hs-facts">Facts &amp; myths</a>
        <a href="#research-impact">Your impact</a>
        <a href="#skin-deep-study">Skin Deep study</a>
        <a href="#hs-resources-orgs">HS resources</a>
      </nav>

      <p className="muted">
        This guide summarizes information from our patient brochure. It does not replace care
        advice from your own clinician—please ask your team before starting new products or
        treatments.
      </p>

      <section id="what-is-hs" className="section-anchor hs-resources-section">
        <h2>What is HS?</h2>
        <figure className="hs-brochure-figure">
          <img
            src="/hs-resources/brochure-hs-guide-and-toolkit.png"
            alt="Pamphlet panels describing hidradenitis suppurativa, home care toolkit ideas, and fast facts."
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="muted">
            Brochure artwork summarizing HS basics, toolkit categories, and myths and facts.
          </figcaption>
        </figure>
        <p>
          Hidradenitis suppurativa (HS) is a chronic, auto-inflammatory skin condition (sometimes
          called <em>acne inversa</em>) that causes deep, painful, recurring lumps or boil-like
          abscesses. Lumps can burst, drain fluid or blood, and create scars. Common areas include
          the armpits, groin, buttocks, under the breasts, or other skin folds.
        </p>
        <p>
          <strong>Find an HS specialist:</strong>{' '}
          <a href="https://www.hs-foundation.org/hs-specialty-clinics" rel="noopener noreferrer">
            HS-Foundation.org/hs-specialty-clinics
          </a>
        </p>
      </section>

      <section id="your-hs-toolkit" className="section-anchor hs-resources-section">
        <h2>Your HS toolkit</h2>
        <p>These are some ways you can care for your HS at home.</p>
        <p className="muted">
          Everyone is different; use this list as a conversation starter with your dermatology team.
        </p>

        <h3>Washes</h3>
        <ul className="toolkit-pills" aria-label="Wash options mentioned in the brochure">
          {WASH_ITEMS.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>

        <h3>Topicals</h3>
        <ul className="toolkit-pills" aria-label="Topical options mentioned in the brochure">
          {TOPICAL_ITEMS.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>

        <h3>Wound care</h3>
        <div className="card toolkit-hidrawear">
          <p className="toolkit-hidrawear__title">
            <strong>HidraWear</strong>
          </p>
          <p style={{ margin: 0 }}>
            A wound dressing system made for HS that may be covered by insurance. Visit{' '}
            <a href="https://hidrawear.com/" rel="noopener noreferrer">
              HidraWear.com
            </a>{' '}
            for more information.
          </p>
        </div>
      </section>

      <section id="hs-facts" className="section-anchor brochure-panel brochure-panel--dark">
        <h2>HS is…</h2>
        <ul className="myth-list" aria-label="What HS is not">
          <li>
            <span className="myth-tag">NOT</span> your fault.
          </li>
          <li>
            <span className="myth-tag">NOT</span> contagious.
          </li>
          <li>
            <span className="myth-tag">NOT</span> due to hygiene.
          </li>
          <li>
            <span className="myth-tag">NOT</span> an infection.
          </li>
        </ul>

        <h2>You are not alone.</h2>

        <h3 className="hs-fast-facts-heading">HS fast facts</h3>
        <ul>
          <li>1 in 3 people with HS have a family member with it.</li>
          <li>It is more common in Black and biracial people.</li>
          <li>It is driven by an overactive immune system.</li>
          <li>It often co-occurs with conditions like diabetes, migraines, and PCOS.</li>
        </ul>
        <p className="brochure-panel__footer">Everyone&apos;s health is different.</p>
      </section>

      <section id="research-impact" className="section-anchor hs-resources-section">
        <h2>Your skin. Your story. Your impact.</h2>
        <p>Your saliva sample will help us:</p>
        <ul>
          <li>Find genetic differences linked to HS.</li>
          <li>Discover how HS starts and what keeps it going.</li>
          <li>Pinpoint the most promising targets for new medicines.</li>
          <li>Improve the accuracy of diagnosis by connecting genetics with real-world symptoms.</li>
        </ul>
        <p>
          <strong>Thank you for participating in HS genetics research!</strong>
        </p>
      </section>

      <aside id="skin-deep-study" className="section-anchor card skin-deep-card">
        <h2 className="skin-deep-card__title">Skin Deep survey</h2>
        <p>Questions about the study or returning your sample?</p>
        <ul className="skin-deep-card__contacts">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:SkinDeep@nyulangone.org">SkinDeep@nyulangone.org</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+19172442595">917-244-2595</a>
          </li>
          <li>
            <strong>Social:</strong> @HSGenetics on{' '}
            <a href="https://www.instagram.com/hsgenetics/" rel="noopener noreferrer">
              Instagram
            </a>{' '}
            and{' '}
            <a href="https://www.facebook.com/hsgenetics" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          More detail on enrollment is on our <Link to="/participate">Participate</Link> page.
        </p>
      </aside>

      <section id="hs-resources-orgs" className="section-anchor hs-resources-section">
        <h2>HS resources</h2>
        <p>
          Connect with tools and organizations featured in our thank-you pamphlet. Logo artwork
          appears on the printed brochure; placeholder initials are shown here until web logos are
          finalized.
        </p>

        <div className="clarity-callout">
          <p className="clarity-callout__text">
            <strong>Finding clarity, care and community</strong>
          </p>
          <p className="muted clarity-callout__qr-note" style={{ margin: 0 }}>
            Scan the QR code on your printed pamphlet for the same links, or use the websites
            below.
          </p>
        </div>

        <ul className="resource-grid" aria-label="HS tools and partner organizations">
          {PATIENT_ORGS.map((org) => (
            <li key={org.href} className="org-card">
              <div className="org-card__logo" aria-hidden="true">
                <span className="org-card__logo-fallback">{org.short}</span>
              </div>
              <div className="org-card__body">
                <h3 className="org-card__title">
                  <a href={org.href} rel="noopener noreferrer">
                    {org.name}
                  </a>
                </h3>
                <p className="org-card__desc">{org.description}</p>
                <p className="org-card__action">
                  <a className="btn btn--mint" href={org.href} rel="noopener noreferrer">
                    Visit website
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p>
          General lab and study routing is also on the <Link to="/contact">Contact Us</Link> page.
        </p>
      </section>
    </>
  )
}
