import './About.css';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ian from '../../assets/Headshots/ian.png';
import emma from '../../assets/Headshots/emma.jpeg';
import libbi from '../../assets/Headshots/libbi.jpg';
import michelle from '../../assets/Headshots/michelle.jpg';
import github from '../../assets/Github/github.png';

export default function About() {
  return (
    <FadeIn transitionDuration="1000">
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-container_desc">
          <p>
            Meet the creators of Self Care Bear! A group of budding software
            engineers who are passionate about self care. We recognize the
            importance of spending time caring for ourselves so that we can care
            for others and our code. We built this app with the goal of helping
            others establish a morning routine. We hope you love it.
          </p>
        </div>
        <div className="bio-container">
          <div className="bio-container_card">
            <h4>
              <a href="https://www.linkedin.com/in/ianchjsx/" target="_blank">
                Ian Christiansen
              </a>
            </h4>
            <a href="https://github.com/ian-ch-jsx" target="_blank">
              <img className="github" src={github} alt="ian github" />
            </a>
            <img className="bio-img" src={ian} alt="ian headshot" />

            <p>
              Ian is a Software developer transitioning from a background in
              wildlife education and business management. As lifelong learner
              with a diverse professional background, he thrives in
              collaborative environments where unique perspectives can come
              together to solve complex problems. Ian strives to continue to
              participate in socially responsible work through advocacy,
              teaching, and learning - both professionally and personally.
            </p>
          </div>
          <div className="bio-container_card">
            <h4>
              <a href="https://www.linkedin.com/in/emmaegstad/" target="_blank">
                Emma Egstad
              </a>
            </h4>
            <a href="https://github.com/emmaegstad" target="_blank">
              <img className="github" src={github} alt="emma github" />
            </a>
            <img className="bio-img" src={emma} alt="emma headshot" />
            <p>
              Emma is a web developer in Portland, OR. Her favorite self-care
              activity is reading a book under ten blankets on a rainy day. In
              addition to reading and rain, Emma loves javascript, CSS, and
              React testing (just kidding).
            </p>
          </div>
          <div className="bio-container_card">
            <h4>
              <a
                href="https://www.linkedin.com/in/libbi-dunham/"
                target="_blank"
              >
                Libbi Dunham
              </a>
            </h4>
            <a href="https://github.com/Libbi-Dunham" target="_blank">
              <img className="github" src={github} alt="libbi github" />
            </a>
            <img className="bio-img" src={libbi} alt="libbi headshot" />
            <p>
              Libbi is a detailed oriented critical thinking Software Developer.
              I have a background in customer service and administration which
              has given me the skills with team collaboration, problem solving,
              communication, and leadership. My next Software Developer role
              will allow me to use these tools. I am a passionate learner, who
              enjoys learning new technical knowledge.
            </p>
          </div>
          <div className="bio-container_card">
            <h4>
              <a
                href="https://www.linkedin.com/in/michellenygren/"
                target="_blank"
              >
                Michelle Nygren
              </a>
            </h4>
            <a href="https://github.com/michellerenehey" target="_blank">
              <img className="github" src={github} alt="michelle github" />
            </a>
            <img className="bio-img" src={michelle} alt="michelle headshot" />
            <p>
              Michelle is a software developer in Portland, OR. She tries to
              prioritize self care in all she does, and especially focuses on
              slowing down, being present, and taking weekly baths. In addition,
              Michelle loves building apps that help build community and
              connection. Oh, and React. She loves React.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
