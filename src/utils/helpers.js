import axios from 'axios';

function searchGit (add) {
  let address = `https://api.github.com/users/${add}`
  return axios.get(address)
    .then( (res) => (
      { getDate:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
export { searchGit };

function getJson (add) {
  let address = `https://raw.githubusercontent.com/sunzorro/demodata/master/card.json?$(Math.random())`
  return axios.get(address)
    .then( (res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
export { getJson };
