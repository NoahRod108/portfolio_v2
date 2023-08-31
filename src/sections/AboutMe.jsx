import { coffee } from "../assets/images"
import { skillIcons } from "../constants"

const AboutMe = () => {
  return (
    <section id="aboutMe" className="max-container grid grid-cols-2 justify-center items-center max-lg:flex-col gap-10 w-full">
      <div className="">
        <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">
          About Me
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda, ipsum, tempora sunt omnis iste, ab neque blanditiis laudantium expedita sit sed a at! Nihil consequatur nobis labore velit laudantium.</p>
        <p className="mt-4 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, vitae dolorum. Quis facilis nulla eligendi qui odio, eos laborum itaque?</p>
      </div>

      <div className="">
        <img src={coffee} alt="Coffee" />
      </div>

      <div className="col-span-2 mt-8">
        <h2 className="text-4xl font-robot text-white font-bold lg:max-w-lg">Skills</h2>
        <ul className="flex justify-evenly mt-4">
          {skillIcons.map((icon) => (
            <li key={icon.label}>
              <img src={icon.icon} alt={icon.label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutMe