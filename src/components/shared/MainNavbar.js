import { Link } from 'react-router-dom';
import { UserConsumer } from '../../providers/UserProvider';

const MainNavbar = () => (
  <UserConsumer>
    { value => (
      <ul>
        <Link to='/'>
          <li>
            Home
          </li>
        </Link>
        <Link to='/profile'>
          <li>
            { value.user.username }
          </li>
        </Link>
      </ul>
    )}
  </UserConsumer>
)

export default MainNavbar;