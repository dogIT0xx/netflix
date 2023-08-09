import images from '../assets/images'

function Netflix() {
  return (
    <>
      <header>
        <img src={images.logo} alt="Netflix" />
        <select name="language" id="language">
          <option value="English">English</option>
          <option value="Tieesng Việt">Tiếng Việt</option>
        </select>
        <button>Sign In</button>
      </header>

      <div>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>

      <footer></footer>
    </>
  )
}

export default Netflix
