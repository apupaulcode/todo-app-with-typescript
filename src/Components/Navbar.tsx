import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <Link to='/'>All</Link>
      <Link to='/?todos=active'>Active</Link>
      <Link to='/?todos=completed'>Completed</Link>
    </div>
  )
}

export default Navbar
