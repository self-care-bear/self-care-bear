import React from 'react';
import './About.css';
import ian from '../../assets/Headshots/ian.png';
import emma from '../../assets/Headshots/emma.jpeg';
import libbi from '../../assets/Headshots/libbi.jpg';
import michelle from '../../assets/Headshots/michelle.jpg';
import github from '../../assets/Github/github.png';

export default function About() {
  return (
    <div className="about">
      <div>dis/ meet the creators</div>
      <div>
        <h4>
          {' '}
          <a href="https://www.linkedin.com/in/ianchjsx/" target="_blank">
            Ian Christiansen
          </a>
        </h4>
        <img src={ian} alt="ian headshot" />

        <p>
          Software developer transitioning from a background in wildlife
          education and business management. As lifelong learner with a diverse
          professional background, I thrive in collaborative environments where
          unique perspectives can come together to solve complex problems. I
          strive to continue to participate in socially responsible work through
          advocacy, teaching, and learning - both professionally and personally.
        </p>
        <a href="https://github.com/ian-ch-jsx" target="_blank">
          {' '}
          <img src={github} alt="ian github" />
        </a>
      </div>
      <div>
        <h4>
          {' '}
          <a href="https://www.linkedin.com/in/emmaegstad/" target="_blank">
            {' '}
            Emma Egstad
          </a>
        </h4>
        <img src={emma} alt="emma headshot" />
        <p>
          Emma is a web developer in Portland, OR. Her favorite self-care
          activity is reading a book under ten blankets on a rainy day. In
          addition to reading and rain, Emma loves javascript, CSS, and React
          testing (just kidding).
        </p>
        <a href="https://github.com/emmaegstad" target="_blank">
          {' '}
          <img src={github} alt="emma github" />
        </a>
      </div>
      <div>
        <h4>
          {' '}
          <a href="https://www.linkedin.com/in/libbi-dunham/" target="_blank">
            Libbi Dunham
          </a>
        </h4>
        <img src={libbi} alt="libbi headshot" />
        <p>
          I am a detailed oriented critical thinking Software Developer. I have
          a background in customer service and administration which has given me
          the skills with team collaboration, problem solving, communication,
          and leadership. My next Software Developer role will allow me to use
          these tools. I am a passionate learner, who enjoys learning new
          technical knowledge.
        </p>
        <a href="https://github.com/Libbi-Dunham" target="_blank">
          <img src={github} alt="libbi github" />
        </a>
      </div>
      <div>
        <h4>
          {' '}
          <a href="https://www.linkedin.com/in/michellenygren/" target="_blank">
            Michelle Nygren
          </a>
        </h4>
        <img src={michelle} alt="michelle headshot" />
        <p>
          Michelle is a software developer in Portland, OR. She tries to
          prioritize self care in all she does, and especially focuses on
          slowing down, being present, and taking weekly baths. In addition,
          Michelle loves building apps that help build community and connection.
          Oh, and React. She loves React.
        </p>
        <a href="https://github.com/michellerenehey" target="_blank">
          <img src={github} alt="michelle github" />
        </a>
      </div>
    </div>
  );
}
