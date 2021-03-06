import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (personObj) => {
  const request = axios.post(baseUrl, personObj);
  return request.then(response => response.data)
}

const updatePerson = (id, personObj) => {
  const request = axios.put(`${baseUrl}/${id}`, personObj)
  return request.then(response => response.data)
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => console.log(response))
}

export default { getAll, create, deletePerson, updatePerson };