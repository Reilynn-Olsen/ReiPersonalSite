import Terminal from './Terminal'
import './css/Welcome.css';

function Welcome() {
 const h1Content = '> Reilynn Olsen'

  return (
    <div id='Welcome'>
      <div className='wrapper'><h1 className='typewriter' style={{width: (h1Content.length + 1) + 'ch'}}>{h1Content}</h1></div>
      <p className='welcomeDesc'>Hi, I'm Reilynn, I'm a full stack web developer avaiable for hire. I love building sleek front ends tied together with efficient back ends.</p>
      <Terminal/>
    </div>
  );
}

export default Welcome;
