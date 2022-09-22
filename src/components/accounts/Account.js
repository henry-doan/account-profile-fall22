import { UserConsumer } from "../../providers/UserProvider";

const Account = () => (
  <UserConsumer>
    { value => (
      <>
        <h1>{value.user.username}</h1>
        <p>{value.user.date_joined}</p>
        <p>{value.user.membership}</p>
      </>
    )}
  </UserConsumer>
)

export default Account;