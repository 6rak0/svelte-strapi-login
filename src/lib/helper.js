import axios from 'axios'
import { setStorageUser, setUser } from './userStore'

const url = 'http://localhost:1337'

async function loginUser({ identifier, password }) {
  const response = await axios
    .post(`${url}/auth/local`, {
      identifier,
      password,
    })
    .catch((error) => console.log(error))
  if (response) {
    setupUser(response)
  }
  return response
}
function setupUser(response) {
  const { jwt } = response.data
  const { username } = response.data.user
  const user = { username, jwt }
  setStorageUser(user)
  setUser(user)
}

export default loginUser
