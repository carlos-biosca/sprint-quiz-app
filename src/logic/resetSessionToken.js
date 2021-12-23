import fetchData from "../utils/fetchData";

const resetSessionToken = async (sessionToken) => {
  const token = await fetchData(`https://opentdb.com/api_token.php?command=reset&token=${sessionToken}`)
  console.log('session token reset');
  return token.token
}

export default resetSessionToken