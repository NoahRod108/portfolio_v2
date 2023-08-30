const AboutMe = () => {
  return (
    <section id="aboutMe" className="max-container flex justify-center items-center max-lg:flex-col gap-10 w-full">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">
          About <span className="text-teal">Me</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda, ipsum, tempora sunt omnis iste, ab neque blanditiis laudantium expedita sit sed a at! Nihil consequatur nobis labore velit laudantium.</p>
      </div>

      <div className="flex-1">
        <img src="" alt="Coffee" />
      </div>
    </section>
  )
}

export default AboutMe