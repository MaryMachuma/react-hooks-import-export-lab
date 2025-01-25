import { image } from '../data/user';

export default function About() {
  return (
    <div>
      <img src={image} alt="Profile" />
      <h2>About Me</h2>
      <p>I made this.</p>
    </div>
  );
}