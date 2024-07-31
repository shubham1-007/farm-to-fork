import axios from "axios";

const url = "http://localhost:3004/users";
// getting db users Credentials
const LoginService = {
  getDBUsers: () => axios.get(url),
};

export { LoginService };
