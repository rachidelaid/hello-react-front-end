import { Link } from "react-router-dom"
const Home = () => (
  <div className="container">
    <h2>Greeting App</h2>
    <Link to="/greetings">random greetings</Link>
  </div>
)

export default Home