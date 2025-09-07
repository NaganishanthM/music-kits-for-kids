export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col items-center justify-center h-[110vh]">
        <div className="flex flex-col items-start justify-center w-[60vw] h-full">
          <h1>Music kits for everyone</h1>
          <p
            className="mt-10
          "
          >
            We believe every child deserves the chance to make music. By
            collecting and refurbishing instruments, providing beginner
            materials, and connecting students with volunteer teachers, we
            remove financial barriers so kids can learn and play—completely
            free.
          </p>
        </div>
        <div className="flex overflow-x-hidden gap-1">
          <div className="bg-gray-300 w-[30vw] h-96 rounded-lg"></div>
          <div className="bg-gray-300 w-[30vw] h-96 rounded-lg"></div>
          <div className="bg-gray-300 w-[30vw] h-96 rounded-lg"></div>
          <div className="bg-gray-300 w-[30vw] h-96 rounded-lg"></div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <h2>Our Operations</h2>
        <div className="flex mt-20 w-4/5">
          <div className="rounded-lg border w-full p-10 m-4 max-w-xl bg-[var(--light-background)]">
            <h5>Instrument Collection</h5>
            <p className="mt-8 leading-relaxed">
              We source and refurbish gently used instruments from the community
              and vendors, then provide them to kids—removing financial barriers
              to learning music.
            </p>
          </div>
          <div className="rounded-lg border w-full p-10 m-4 max-w-xl bg-[var(--light-background)]">
            <h5>Partnerships</h5>
            <p className="mt-8 leading-relaxed">
              We collaborate with local businesses, schools, and community
              organizations to raise funds and awareness for our mission. So
              far, we have gathered over $300 in donations.
            </p>
          </div>
          <div className="rounded-lg border w-full p-10 m-4 max-w-xl bg-[var(--light-background)]">
            <h5>1-1 Classes</h5>
            <p className="mt-8 leading-relaxed">
              We offer personalized music lessons to children, connecting them
              with experienced volunteer teachers who provide guidance and
              support.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-4/5 flex flex-col items-center justify-center my-20">
          <h2>How to get involved</h2>
          <div className="flex flex-col mt-20 w-4/5 gap-4">
            <div className="flex justify-between items-center rounded-lg border w-full p-10 bg-[var(--light-background)]">
              <div className="w-1/2">
                <h5>Volunteer Teaching</h5>
                <p className="mt-8 leading-relaxed">
                  Share your musical skills by teaching children one-on-one. We
                  provide support and materials to help you make a meaningful
                  impact in a child&apos;s musical journey.
                </p>
              </div>
              <div className="h-64 w-64 ml-10 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="flex justify-between items-center rounded-lg border w-full p-10 bg-[var(--light-background)]">
              <div className="w-1/2">
                <h5>Donate Instruments</h5>
                <p className="mt-8 leading-relaxed">
                  Help us expand our collection by donating gently used
                  instruments. Every donation directly enables another child to
                  start their musical education.
                </p>
              </div>
              <div className="h-64 w-64 ml-10 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
