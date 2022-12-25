import axios from "axios"
import ContactList from "../components/ContactList";

const baseUrl = 'http://localhost:3001/persons';
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response=>response.data);
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const remove = deleteObject => {
  const request = axios.delete();
  request
    .then(response=> response.data)
    .catch(error => {
      console.log(error.response.data);
    })
}

export default { getAll, create, remove };
