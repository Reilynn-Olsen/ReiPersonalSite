import './css/Terminal.css';

type personalInfo = {
  contactInfo: { name: string; url: string }[];
  hobbies: string[];
  skills: string[];
  location: string;
  education: string;
};

const isString = (value: any): value is string => typeof value === 'string';
const isStringArray = (value: any): value is string[] =>
  Array.isArray(value) && value.every((el) => typeof el === 'string');
const isContactInfo = (value: any): value is { name: string; url: string }[] =>
  Array.isArray(value) && value.every((el) => el.name && el.url);

const isPersonalInfoKey = (value: any): value is keyof personalInfo =>
  ['contactInfo', 'hobbies', 'skills', 'location', 'education'].includes(value);

function Terminal() {
  const getTerminalInfo = (): JSX.Element[] => {
    const name = 'Reilynn';
    const personalInfo: personalInfo = {
      contactInfo: [
        {
          name: 'ReilynnOlsen@gmail.com',
          url: 'mailto:ReilynnOlsen@gmail.com',
        },
        { name: 'Github', url: 'https://github.com/Reilynn-Olsen' },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/reilynn-olsen/',
        },
        { name: 'Twitter', url: 'https://twitter.com/reilynnscript' },
      ],
      skills: ['TypeScript', 'React', 'Ruby', 'Node', 'Express', 'git'],
      education: 'Launch School - Full Stack Web Development',
      location: 'Salt Lake City, Ut',
      hobbies: ['table top games', 'music', 'hiking'],
    };

    return Object.keys(personalInfo).map((key, i) => {
      if (isPersonalInfoKey(key)) {
        const value = personalInfo[key];
        return (
          <div className="terminalEntry" key={i}>
            <p className="terminalKey">
              {'> ' + name}.{key}
            </p>
            {isContactInfo(value) ? (
              <div className="terminalProp">
                [
                {value.map((el, i) => (
                  <div className="contactParent">
                    <p className="contactInfo">"</p>
                    <a
                      className="contactInfo contactLink"
                      key={i}
                      href={el.url}
                    >
                      <p className="contactInfo">{el.name}</p>
                    </a>
                    <p className="contactInfo">
                      "{value.length - 1 !== i ? ',' : ''}
                    </p>
                  </div>
                ))}
                ]
              </div>
            ) : isStringArray(value) ? (
              <p className="terminalProp">
                [{value.map((el) => `"${el}"`).join(', ')}]
              </p>
            ) : isString(value) ? (
              <p className="terminalProp">"{value}"</p>
            ) : null}
          </div>
        );
      } else {
        throw Error(`Error: ${key} is not a valid ket of personalInfo`);
      }
    });
  };

  return (
    <div className="terminalParent">
      <div className="topBar">
        <span className="circle red"></span>
        <span className="circle yellow"></span>
        <span className="circle green"></span>
      </div>
      <div className="terminalInfo">
        {getTerminalInfo().map((el) => el)}
        <div className="terminalEntry">
          <p className="lastLine">{'> '}</p>
          <span className="terminalCursor"></span>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
