import Button from "../components/Button"
import { download } from "../assets/icons"
import { socialLinks } from "../constants"

const Hero = () => {
  return (
    <section id="hero" className="w-full flex flex-1 xl:flex-row flex-col justify-center min-h-screen max-container">
      <div className="flex flex-col justify-center items-start w-full xl:w-2/4 max-xl:padding-x">
        <p className="text-xl font-mono font-bold text-teal px-1">Hello, I am</p>
        <h1 className="mt-2 font-robot text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-white">
          Noah Rodriguez <br />
          <span className="text-dark-gray">Web Developer</span>
        </h1>
        <p className="info-text my-8 px-1 text-xl">I&apos;m a devloper with a deep passion for bringing the web to life. Currently, I&apos;m focused on building <span className="text-teal">React (Next.js)</span> applications.
        </p>
        
        <div className="flex justify-center items-center gap-16">
          <Button 
            label="Download Resume"
            iconURL={download}
          />

          <ul className="flex justify-center items-center gap-8">
            {socialLinks.map((icon) => (
              <li key={icon.label}>
                <img src={icon.href} alt={icon.label} width={38} height={38}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero