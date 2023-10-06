import Button from "../components/Button"

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-center flex-col max-container min-h-[30vh] w-full gap-8">
      <div className="flex justify-center flex-col items-center lg:w-[600px]">
        <h3 className="text-4xl font-robot text-white font-bold lg:max-w-lg">Contact Me</h3>
        <p className="mt-8 info-text text-center">
        <span className="wave">👋</span> If you wish to talk more about my work and interests, please say Hello! I will get back to you at my earliest convenience.
        </p>
        <div className="mt-8">
          <a href="mailto:noaherod18@gmail.com">
            <Button
              label="Hello!"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact