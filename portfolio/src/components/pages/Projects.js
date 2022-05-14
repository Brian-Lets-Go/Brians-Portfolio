


function Project(props) {
    return (
      <div>
        <div className="project">
          {props.projects.map((project) => (
            <div key={project.id}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left"></div>
                    <div className="media-content">
                      <p className="title">
                        {project.title}
                      </p>
                    </div>
                  </div>
                
                  <div className="card-image">
                    <figure className="image">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <img src={project.image} alt={project.title}/>
                    </a>
                    </figure>
                  </div>

                  <div className="content">
                    {project.description}
                    <br />
                    <br />
                    <div className="content">
                      Languages: {project.languages}
                    </div>
                    <br />
                    <div className="card">
                      <footer className="card-footer">
                      <a href={project.repo} target="_blank" rel="noreferrer">Link to Repo</a>
                      <br />
                      <a href={project.live} target="_blank" rel="noreferrer">Visit the Site</a>
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