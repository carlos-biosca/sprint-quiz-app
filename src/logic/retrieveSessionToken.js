import fetchData from "../utils/fetchData";

const retrieveSessionToken = async () => {
  const token = await fetchData('https://opentdb.com/api_token.php?command=request')
  console.log(token.response_message);
  return token.token
}

export default retrieveSessionToken