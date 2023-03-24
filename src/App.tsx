import './App.css';
import Form from './components/Form';
import viteLogo from '/vite.svg';

type Inputs = {
  example: string,
  exampleRequired: string,
};

function App() {
  return (
    <div>
      <div className="header">
        <img src={viteLogo} className="profile-image" alt="Vite logo" />
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', textAlign: 'left', marginLeft: '20px' }}>
          <h1 style={{ margin: 0 }}>Hi, I'm Oscar</h1>
          <h2 style={{ margin: 0 }}>A Full Stack TypeScript Developer</h2>
        </div>
      </div>
      <div className='project project-one'>
        <img src={viteLogo} className="project-image" alt="Vite logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni fugiat accusantium, eius commodi sit earum vel distinctio dolor,
          natus sint optio nam nisi doloremque blanditiis, iusto quasi?
          Magnam, dolorum repudiandae!
        </p>
      </div>
      <div className='project project-two'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni fugiat accusantium, eius commodi sit earum vel distinctio dolor,
          natus sint optio nam nisi doloremque blanditiis, iusto quasi?
          Magnam, dolorum repudiandae!
        </p>
        <img src={viteLogo} className="project-image" alt="Vite logo" />
      </div>
      <Form />
    </div>
  )
}

export default App
