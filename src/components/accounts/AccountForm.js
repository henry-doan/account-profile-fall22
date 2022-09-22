import { useState, useEffect } from 'react';
import { UserConsumer } from '../../providers/UserProvider';

const AccountForm = ({ user, setUser }) => {
  const [auser, setaUser] = useState({ username: '', membership: '' })

  useEffect( () => {
    setaUser({...user})
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // setaUser({ ...auser, date_joined: '9-21-22' })
    setUser(auser)
    setUser({ username: '', membership: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='username'
          value={auser.username}
          onChange={(e) => setaUser({ ...user, username: e.target.value })}
          required 
          placeholder='username'
        />
        <label>Membership Level</label>
        <select
          name='membership'
          value={auser.membership}
          onChange={(e) => setaUser({ ...user, membership: e.target.value })}
          required 
        >
          <option value='Bronze'>Bronze</option>
          <option value='Silver'>Silver</option>
          <option value='Gold'>Gold</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedAccountForm = (props) => (
  <UserConsumer>
    { value => <AccountForm {...value} {...props} />}
  </UserConsumer>
)

export default ConnectedAccountForm;