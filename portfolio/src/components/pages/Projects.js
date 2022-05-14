



function Project(props) {
    return (
      <div>
        <div className="columns">
          {props.projects.map((project) => (
            <div className="column is-half">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <img src={project.image} alt={project.title}/>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left"></div>
                    <div className="media-content">
                      <p className="title" key={project.id}>
                        {project.title}
                      </p>
                    </div>
                  </div>
  
                  <div className="content">
                    {project.description}
                    <br />
                    <br />
                    <div className="content">
                      Languages: {project.languages}
                      <br />
                      NPM Packages: {project.packages}
                    </div>
                    <div className="card">
                      <footer className="card-footer">
                        <a
                          href={project.repo}
                          className="card-footer-item"
                          target="_blank" rel="noreferrer"
                        >
                          See the Repo!
                        </a>
                        <br />
                        <a
                          href={project.live}
                          className="card-footer-item"
                          target="_blank" rel="noreferrer"
                        >
                          See the Live Site!
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Project;