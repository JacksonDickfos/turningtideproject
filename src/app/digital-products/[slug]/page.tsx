import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { FreeResourceGallery } from "@/components/FreeResourceGallery";
import { getDigitalProduct, digitalProducts } from "@/content/catalog";

export function generateStaticParams() {
  return digitalProducts.map((p) => ({ slug: p.slug }));
}

const careFrameworkFaqs: { q: string; a: string }[] = [
  {
    q: "Is The C.A.R.E. Framework suitable if I’ve never looked at aged care before?",
    a: "Yes. The framework is designed for people navigating this process for the first time. It provides a clear structure to help you understand what to prioritise, what to ask, and how to compare options carefully.",
  },
  {
    q: "Can this be used if my loved one is involved in the decision?",
    a: "Absolutely. The framework can be used independently or collaboratively. It supports individuals exploring care for themselves, as well as carers and families working through the decision together.",
  },
  {
    q: "Is this aligned with any aged care providers or government services?",
    a: "No. The C.A.R.E. Framework is completely independent. It is not affiliated with any aged care provider, broker, or government body, and there are no incentives influencing its guidance.",
  },
  {
    q: "Does this replace an aged care broker?",
    a: "No. Aged care brokers can assist by identifying suitable homes based on your circumstances, providing feedback on facilities, and sometimes helping with administrative processes or urgent situations. In most cases, however, families still attend tours themselves and make the final decision. The C.A.R.E. Framework does not replace a broker. It provides a structured method to help you assess facilities carefully and confidently when you attend tours and compare options. Some families choose to use it independently. Others use it alongside external advice to help guide their own observations and decision-making.",
  },
  {
    q: "Is this a physical product?",
    a: "No. The C.A.R.E. Framework is an instantly downloadable digital PDF. You can print the sections you need or use it on your device.",
  },
  {
    q: "Can I print multiple copies?",
    a: "Yes. You may print copies for your own caregiving needs, including if you are supporting more than one loved one. The product is for personal use only and is not licensed for sharing or distribution.",
  },
  {
    q: "What if I purchase it and don’t use it straight away?",
    a: "That’s fine. You can download it and use it whenever you are ready. There is no expiry, subscription, or ongoing commitment.",
  },
  {
    q: "Do you offer refunds?",
    a: "Due to the digital nature of The C.A.R.E. Framework, refunds are not offered once the product has been downloaded. Please read the product description carefully before purchasing to ensure it is the right fit for your needs. If you have any questions prior to purchase, you are welcome to reach out for clarification.",
  },
];

const careCompanionFaqs: { q: string; a: string }[] = [
  {
    q: "Is this suitable if I’m new to caring?",
    a: "Yes. The Care Companion is designed to meet you where you are. You don’t need to fill everything in at once or know exactly what you’re doing. Many carers start using just one or two sections and build from there as needs change.",
  },
  {
    q: "Do I need to use every section?",
    a: "No. You only use what’s relevant to your situation. Some carers use it mainly for medical appointments and medications, others for communication and record-keeping. It’s designed to be flexible, not prescriptive.",
  },
  {
    q: "Is this a planner or a medical document?",
    a: "No. The Care Companion is a care folder, not a daily planner or a clinical resource. It’s designed to help you organise and keep track of important information, not to manage schedules or provide medical advice.",
  },
  {
    q: "Can I share this with other family members or support people?",
    a: "Yes. Many carers use The Care Companion to help others step in when needed. Having everything in one place makes it easier for someone else to understand what’s going on and provide support.",
  },
  {
    q: "Is this suitable for digital use, or do I need to print it?",
    a: "Both. You can use it digitally or print the pages you need. Some carers prefer to keep a printed folder at home or take it to appointments, while others use it on a device.",
  },
  {
    q: "Is this worth it if my caring situation changes?",
    a: "Yes. The Care Companion is designed for ongoing use. As needs change, you can update sections, add notes, or focus on different parts of the folder. It adapts with you.",
  },
  {
    q: "Will this make caring easier?",
    a: "It won’t remove the emotional weight of caring. What it can do is reduce chaos, mental load, and the constant feeling of holding everything together in your head. Many carers find that alone makes a meaningful difference.",
  },
];

export default async function DigitalProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const slug = "then" in params ? (await params).slug : params.slug;
  const product = getDigitalProduct(slug);
  if (!product) return notFound();

  const isCareCompanion = product.slug === "the-care-companion";
  const isCareFramework = product.slug === "residential-aged-care-inspection-guide";

  const galleryImages =
    product.gallery?.length
      ? product.gallery.map((g) => ({ src: g.src, alt: g.alt ?? "" }))
      : product.imageSrc
        ? [{ src: product.imageSrc, alt: product.imageAlt ?? "" }]
        : [];

  return (
    <section className="section">
      <Container>
        <div className="stack detailLayout">
          <div className="buttonRow">
            <Link className="button secondary" href="/digital-products">
              Back to digital products
            </Link>
          </div>

          <header className="detailHeader">
            <h1 className="h1">{product.title}</h1>
            {product.subtitle ? (
              <p className="muted" style={{ margin: 0 }}>
                {product.subtitle}
              </p>
            ) : null}
          </header>

          <div className="detailGrid">
            <div className="detailGallery">
              {galleryImages.length ? <FreeResourceGallery images={galleryImages} /> : null}

              {isCareFramework ? (
                <div className="stack detailContent">
                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">
                      A structured decision framework
                      <br />
                      for families choosing residential aged care
                    </h2>
                    <p className="muted" style={{ margin: 0 }}>
                      Choosing residential aged care can feel overwhelming.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      You are suddenly faced with websites, brochures, and conversations that all seem
                      to say similar things.
                    </p>
                    <p style={{ margin: 0, fontWeight: 700 }}>
                      Every place presents itself well.
                      <br />
                      Every place makes reassuring promises.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      At the same time, advice starts coming from everywhere.
                      <br />
                      Someone’s friend had a good experience here.
                      <br />
                      Someone else warns you about somewhere else.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      But how do you know what truly matters for your loved one?
                      <br />
                      And how do you compare one home to another with confidence?
                    </p>
                    <p style={{ margin: 0 }}>
                      The C.A.R.E. Framework is a practical, independent guide designed to help you
                      assess aged care homes with clarity and structure.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      This is not a generic checklist.
                      <br />
                      It is a clear decision-making framework built from lived caregiving experience.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">What The C.A.R.E. Framework helps you do</h2>
                    <ul className="bullets">
                      <li>Focus on what truly matters instead of being distracted by presentation</li>
                      <li>Define your loved ones’ needs clearly before stepping into any facility</li>
                      <li>Understand how clinical care, staffing, and daily oversight really work</li>
                      <li>Clarify room options, fees, and account processes upfront</li>
                      <li>Compare homes using the same structure every time</li>
                      <li>Make an educated decision with clarity</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      It’s built for real-world visits, not ideal conditions.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">Who it’s for</h2>
                    <p style={{ margin: 0 }}>
                      The C.A.R.E. Framework is for anyone navigating aged care.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      It supports:
                    </p>
                    <ul className="bullets">
                      <li>Individuals exploring residential care for themselves</li>
                      <li>Spouses or partners facing changing health needs</li>
                      <li>Adult children supporting a parent or parents</li>
                      <li>Families working through the decision collaboratively</li>
                      <li>Carers who feel the weight of this decision largely on their own</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      If you want a clear, structured way to approach this decision, this framework is
                      designed for you.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">Why this isn’t just another checklist</h2>
                    <p style={{ margin: 0 }}>There is no shortage of information about aged care.</p>
                    <p className="muted" style={{ margin: 0 }}>
                      What’s often missing is a clear process for making the decision.
                    </p>
                    <p style={{ margin: 0 }}>
                      The C.A.R.E. Framework was created from direct experience navigating and evaluating
                      residential aged care options for family members.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      It is completely independent and not aligned with any aged care provider, broker, or
                      government body.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      There are no incentives influencing its guidance.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>It exists for one reason only:</p>
                    <p style={{ margin: 0, fontWeight: 700 }}>
                      To help you choose the best possible option available at the time for your loved one.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">What’s inside</h2>
                    <ul className="bullets">
                      <li>Pre-your research guidance to narrow options early</li>
                      <li>The What Matters Most | Pre-Tour worksheet to define needs and priorities</li>
                      <li>A detailed On-Site Tour | C.A.R.E. Checklist to take with you</li>
                      <li>Post-Tour Reflection Sheet to compare facilities</li>
                      <li>A professional follow-up email template for any additional questions post-tour</li>
                    </ul>
                    <p style={{ margin: 0 }}>
                      Detailed, experience-based guidance from someone who has walked this path.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      Everything is laid out clearly, using simple language and practical prompts.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">What this gives you</h2>
                    <p style={{ margin: 0, fontWeight: 800, letterSpacing: "0.04em", fontSize: 15 }}>
                      IT DOESN’T MAKE THE DECISION EASY.
                      <br />
                      IT MAKES IT CLEARER.
                    </p>
                    <ul className="bullets">
                      <li>More clarity during tours.</li>
                      <li>More confidence in the questions you ask.</li>
                      <li>Less second-guessing afterwards.</li>
                      <li>Greater clarity when comparing options.</li>
                      <li>Peace of mind knowing you approached it carefully.</li>
                    </ul>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">Format</h2>
                    <ul className="bullets">
                      <li>Instant digital download.</li>
                      <li>Printable and reusable PDF.</li>
                      <li>Use it on a desktop, laptop, or tablet.</li>
                      <li>Print the sections you need for tours and reflections.</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      No subscription.
                      <br />
                      No ongoing commitment.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      Download once. Use as needed.
                    </p>
                  </section>

                  <section className="panel">
                    <div className="panelInner stack" style={{ gap: 10 }}>
                      <h2 className="h2">Price</h2>
                      <p style={{ margin: 0, fontWeight: 800, fontSize: 18 }}>
                        AUD $49.95
                        <br />
                        <span style={{ fontWeight: 600, fontSize: 16 }}>One-off purchase.</span>
                      </p>
                      <p className="muted" style={{ margin: 0 }}>
                        Residential aged care is a significant financial and emotional commitment.
                      </p>
                      <p className="muted" style={{ margin: 0 }}>
                        Approaching that decision with structure and clarity matters.
                      </p>
                      {product.status === "coming_soon" || !product.stripeUrl ? (
                        <button className="button" type="button" disabled>
                          Download Now
                        </button>
                      ) : (
                        <a className="button" href={product.stripeUrl}>
                          Download Now
                        </a>
                      )}
                    </div>
                  </section>

                  <section className="faqSection">
                    <h2 className="h2">Frequently Asked Questions</h2>
                    <div className="faqList">
                      {careFrameworkFaqs.map((f) => (
                        <details key={f.q} className="faqItem">
                          <summary>{f.q}</summary>
                          <p className="muted" style={{ margin: 0 }}>
                            {f.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                </div>
              ) : null}

              {isCareCompanion ? (
                <div className="stack detailContent">
                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">A comprehensive care folder for carers who are carrying too much in their heads</h2>
                    <p style={{ margin: 0, fontWeight: 700 }}>
                      Caring for someone you love shouldn’t feel this chaotic.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      Appointments, medications, contacts, notes, instructions, paperwork, updates.
                      <br />
                      It all lives in your head, until something changes or something goes wrong.
                    </p>
                    <p style={{ margin: 0 }}>
                      The Care Companion is a calm, practical system that brings everything together in one place,
                      so you’re not constantly scrambling, remembering, or starting from scratch.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      This is not a planner. It’s not a workbook. It’s a central care folder designed specifically for unpaid family carers.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">What The Care Companion helps you do</h2>
                    <ul className="bullets">
                      <li>Reduce mental load by getting information out of your head and onto paper</li>
                      <li>Keep all essential care details organised in one clear system</li>
                      <li>Communicate more easily with doctors, hospitals, and other family members</li>
                      <li>Feel more prepared when things change suddenly</li>
                      <li>Create continuity of care if someone else needs to step in</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      It’s designed to support real caregiving life, not an ideal version of it.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">Who it’s for</h2>
                    <ul className="bullets">
                      <li>This is for carers who are managing medical appointments, medications, and information for someone else</li>
                      <li>Feel like they’re constantly holding everything together</li>
                      <li>Worry about forgetting something important</li>
                      <li>Are tired of explaining the same details over and over</li>
                      <li>Want a system that feels calm, not clinical</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      Whether you’re early in your caregiving role or years into it, The Care Companion meets you where you are.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">Why this isn’t just another organiser</h2>
                    <p style={{ margin: 0 }}>
                      Most planners and folders weren’t created for carers. They assume time, energy, and clarity you often don’t have.
                    </p>
                    <p className="muted" style={{ margin: 0 }}>
                      The Care Companion was created from lived caregiving experience. It’s designed for:
                    </p>
                    <ul className="bullets">
                      <li>Stressful appointments</li>
                      <li>Hospital admissions</li>
                      <li>Care transitions</li>
                      <li>Fatigue and overwhelm</li>
                      <li>Long-term use, not one-off planning</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>Every section exists for a reason.</p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">What’s inside</h2>
                    <ul className="bullets">
                      <li>Key contact information for family, health professionals, and services</li>
                      <li>Medical history and medication records</li>
                      <li>Appointment and communication logs</li>
                      <li>Care notes and observations</li>
                      <li>Emergency and hospital information</li>
                      <li>Space for important documents and records</li>
                      <li>Guidance to help you stay organised without overthinking it</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      Everything is laid out clearly, using simple language and practical prompts.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">How carers use The Care Companion</h2>
                    <ul className="bullets">
                      <li>Printed and kept in a folder at home</li>
                      <li>Taken to medical appointments</li>
                      <li>Used to track changes and patterns over time</li>
                      <li>Shared with other family members or support people</li>
                      <li>Referred back to during hospital stays or emergencies</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      Many carers keep it nearby because it becomes their single source of truth.
                    </p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">What carers tell us they gain</h2>
                    <ul className="bullets">
                      <li>Less mental clutter</li>
                      <li>More confidence when speaking with professionals</li>
                      <li>Fewer things falling through the cracks</li>
                      <li>A sense of control during uncertain times</li>
                      <li>Relief knowing everything is in one place</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>It doesn’t make caregiving easy. It makes it more manageable.</p>
                  </section>

                  <section className="stack" style={{ gap: 10 }}>
                    <h2 className="h2">Format</h2>
                    <ul className="bullets">
                      <li>Digital PDF</li>
                      <li>Designed for printing or digital use</li>
                      <li>Reusable and updateable</li>
                      <li>Use only the sections you need</li>
                    </ul>
                    <p className="muted" style={{ margin: 0 }}>
                      You don’t have to fill it all in at once. You build it as you go.
                    </p>
                  </section>

                  <section className="panel">
                    <div className="panelInner stack" style={{ gap: 10 }}>
                      <h2 className="h2">A gentle note</h2>
                      <p style={{ margin: 0 }}>
                        If caring feels heavy, that’s because it is.
                      </p>
                      <p className="muted" style={{ margin: 0 }}>
                        Needing help to organise, track, and manage everything does not mean you’re failing.
                        It means you’re doing your best in a role that carries a lot of responsibility.
                      </p>
                      <p className="muted" style={{ margin: 0 }}>
                        The Care Companion exists to support you, not add more to your plate.
                      </p>
                    </div>
                  </section>

                  <section className="panel">
                    <div className="panelInner stack" style={{ gap: 10 }}>
                      <h2 className="h2">Get The Care Companion</h2>
                      <p className="muted" style={{ margin: 0 }}>
                        A comprehensive care folder created to support carers through the everyday realities of caring.
                      </p>
                      {product.priceLabel ? (
                        <p style={{ margin: 0, fontWeight: 800, fontSize: 18 }}>
                          Price: {product.priceLabel}
                        </p>
                      ) : null}
                      <a className="button" href={product.stripeUrl ?? "#"}>
                        Buy now
                      </a>
                    </div>
                  </section>

                  <section className="faqSection">
                    <h2 className="h2">Frequently Asked Questions</h2>
                    <div className="faqList">
                      {careCompanionFaqs.map((f) => (
                        <details key={f.q} className="faqItem">
                          <summary>{f.q}</summary>
                          <p className="muted" style={{ margin: 0 }}>
                            {f.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                </div>
              ) : null}
            </div>

            <aside className="panel">
              <div className="panelInner stack">
                {product.sidebarTitle ? (
                  <h2 className="h3" style={{ margin: 0 }}>
                    {product.sidebarTitle}
                  </h2>
                ) : null}
                {product.sidebarSubtitle ? (
                  <p className="muted" style={{ margin: 0 }}>
                    {product.sidebarSubtitle}
                  </p>
                ) : null}
                {product.sidebarNote ? (
                  <p style={{ margin: 0 }}>{product.sidebarNote}</p>
                ) : product.description ? (
                  <p style={{ margin: 0 }}>{product.description}</p>
                ) : null}
                {product.longDescription ? (
                  <p className="muted" style={{ margin: 0 }}>
                    {product.longDescription}
                  </p>
                ) : null}

                {product.status === "coming_soon" || !product.stripeUrl ? (
                  <button className="button" type="button" disabled>
                    Download Now
                  </button>
                ) : (
                  <>
                    {product.priceLabel ? (
                      <p style={{ margin: 0, fontWeight: 800, fontSize: 18 }}>
                        {product.priceLabel}
                      </p>
                    ) : null}
                    <a className="button" href={product.stripeUrl}>
                      Buy now
                    </a>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

