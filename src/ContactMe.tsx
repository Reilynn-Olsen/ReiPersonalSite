import './css/ContactMe.css';

type contactArray = { title: string; url: string }[];

function ContactMe() {
  const contactMe: contactArray = [
    { title: 'ReilynnOlsen@gmail.com', url: 'mailto:ReilynnOlsen@gmail.com' },
    { title: 'Github', url: 'https://github.com/Reilynn-Olsen' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/reilynn-olsen/' },
    { title: 'Twitter', url: 'https://twitter.com/reilynnscript' },
  ];

  const generateContactInfo = (): JSX.Element[] => contactMe.map((obj, i) => <p key={i} className='contact'><a  href={obj.url}>{obj.title}</a>{i !== contactMe.length - 1 ? ' && ' : null}</p>);

  return (
    <div id='Contact'>
      <h2 className='contactHeader'>Contact me</h2>
      {generateContactInfo()}
      <p className='footer'>Created by Reilynn Olsen</p>
    </div>
  );
}

export default ContactMe;
