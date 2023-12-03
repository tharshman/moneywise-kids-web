import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex w-full flex-col border-opacity-50">
          <div
            className="hero min-h-screen bg-base-200 bg-cover bg-center"
            style={{
              backgroundImage: 'url(rich-kid-2.png)',
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Building Financial Brilliance, One Child at a Time
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card bg-base-200 shadow-xl lg:card-side">
            <figure>
              <Image
                src="/children-pc.png"
                alt="Children surrounding a computer looking at MoneyWise Kids"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                The Current State of Financial Education
              </h2>
              <p>
                In the 21st century, where technology has revolutionized every
                aspect of our lives, there remains a glaring gap in our
                education system. While our children are taught algebra,
                history, and the sciences, a critical subject is often
                sidelined: Financial Education.
              </p>
              <p>
                Today, many children graduate from school with little to no
                understanding of basic financial concepts. They don&apos;t know
                how to budget, the importance of saving, or the intricacies of
                investments. This lack of knowledge isn&apos;t because they
                aren&apos;t capable of understanding; it&apos;s because our
                traditional education system has overlooked it.
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card bg-base-200 shadow-xl lg:card-side">
            <figure>
              <Image
                src="/sad-parents.png"
                alt="Children surrounding a computer looking at MoneyWise Kids"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">The Parental Dilemma</h2>
              <p>
                Parents, the primary educators for many life skills, find
                themselves in a predicament. While they understand the
                importance of financial literacy, many lack the necessary tools
                or knowledge to teach their children effectively. They want to
                prepare their kids for a future where financial decisions play a
                pivotal role, but they&apos;re often ill-equipped to do so.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
