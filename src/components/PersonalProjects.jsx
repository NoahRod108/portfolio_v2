const PersonalProjects = ({ name, projectImg, desc, href, github, tags }) => {
  return (
    <div className="grid grid-cols-2 gridre gap-4">
      <div className="flex even:bg-white">
        <img src={projectImg} alt={name} />
      </div>

      <div className="flex flex-col items-end text-right">
        <h3 className="text-2xl bold text-white">{name}</h3>
        <p className="info-text mt-4 bg-secondary p-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus placeat facilis dignissimos porro, est iure, rerum a delectus illum ex nam sequi voluptatum, reprehenderit esse!
        </p>

        <div>
          <ul className="flex gap-4 mt-4 text-dark-gray">
            {tags.map((tag) => (
              <li key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonalProjects