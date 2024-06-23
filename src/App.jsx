import avatar from './assets/images/avatar-jessica.jpeg'

function App() {


  return (
    <section className="main-section">
      <div className="box">
        <img src={avatar} />
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <p>"Front-end developer and avid reader."</p>
        <div>
          <a href="#">GitHub</a>
          <a href="#">Frontend Mentor</a>
          <a href="#">Linkedin</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </section>
  )
}

export default App
