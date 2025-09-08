// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="flex justify-center items-start gap-[3.33vw] px-[4.16vw] pb-[8.33vw]">
      {/* Left Column */}
      <div className="flex flex-col pt-[11.45vw]">
        {/* "Contact us!" Heading */}
        <h1
          style={{ fontSize: '6.67vw', lineHeight: 1.1, width: '41.3vw' }}
          className="font-normal text-[var(--foreground)] max-w-full"
        >
          Contact us!
        </h1>

        {/* The white frame for the form */}
        <div
          style={{ width: '37.4vw', borderRadius: '1.04vw' }}
          className="mt-[4.9vw] mb-[6.25vw] max-w-full bg-[var(--light-background)] p-[2.08vw]"
        >
          <form className="flex flex-col gap-[1.67vw]">
            <div>
              <label htmlFor="email" className="text-[2.5vw] shrink-0">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{ width: '32.03vw', height: '3.54vw', borderRadius: '1.04vw' }}
                className="mt-[0.41vw] bg-[var(--background)] p-[0.625vw] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white ring-[var(--foreground)] transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-[2.5vw] shrink-0">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                style={{ width: '32.03vw', height: '3.54vw', borderRadius: '1.04vw' }}
                className="mt-[0.41vw] bg-[var(--background)] p-[0.625vw] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white ring-[var(--foreground)] transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-[2.5vw]">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                style={{ width: '32.03vw', height: '16.77vw', borderRadius: '1.04vw' }}
                className="mt-[0.41vw] block bg-[var(--background)] p-[0.625vw] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-white ring-[var(--foreground)] transition-shadow"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{ width: '32.03vw' }}
              className="mt-[0.83vw] rounded-full bg-[var(--foreground)] py-[0.83vw] text-[1.25vw] font-bold text-[var(--background)] shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-[0.78vw] pt-[4.79vw]">
        <div
          style={{ width: '22.7vw', height: '14.42vw' }}
          className="bg-[#D9D9D9]"
        ></div>
        <div
          style={{ width: '22.7vw', height: '25.15vw' }}
          className="bg-[#D9D9D9]"
        ></div>
        <div
          style={{ width: '22.7vw', height: '25.15vw' }}
          className="bg-[#D9D9D9]"
        ></div>
      </div>
    </main>
  );
}
