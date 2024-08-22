import React from 'react'

const EmailSubscription: React.FC = () => {
  return (
    <div className="flex flex-col mt-6 text-sm text-white">
      <h3 className="text-lg font-bold">About us</h3>
      <p className="mt-12 max-md:mt-10">
        You can contact Us to send email to us
      </p>
      <form className="flex gap-5 justify-between py-2 pr-2 pl-4 mt-5 rounded-3xl bg-neutral-100 text-neutral-400">
        <label htmlFor="emailInput" className="sr-only">
          Your email
        </label>
        <input
          type="email"
          id="emailInput"
          placeholder="Your email"
          className="bg-transparent outline-none"
          aria-label="Your email"
        />
        <button type="submit" aria-label="Submit email">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00427fff99e25a74c6f4993075d83360114a1f3e079941133e9720daa4bd2cc?apiKey=e2f2768db341417fbc7b84021ea53a05&&apiKey=e2f2768db341417fbc7b84021ea53a05"
            alt=""
            className="shrink-0 w-8 rounded-3xl aspect-square"
          />
        </button>
      </form>
    </div>
  )
}

export default EmailSubscription
