import { username, city } from '../data/user';

export default function Home() {
  return (
    <div>
      <h1>Liza is a Web Developer from {city}</h1>
      <p>Welcome to my portfolio!</p>
    </div>
  );
}