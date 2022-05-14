
export const About = () => {
  return (
    <div className="about-content">
      <div className="pic-div">
        <img className="profile-pic" src={require ('../../assets/headshot.PNG')} alt="Brian Meenan"/>
      </div>
      <div className="content-div">
        <p className="content-text">
          Hi I'm Brian.<br></br><br></br>
          I work in finance as an equity capital markets profesisonal. 
          I believe technology will have an increasingly large role in the financial services industry, 
          so I am learning how to code.
          Thank you for visiting my webpage. Please take a look at my portfolio of things I have built.
          If you want to reach out to say hello please go to the contact tab.
          Thanks for stopping by. 
        </p>
      </div>
    </div>
  );
}
