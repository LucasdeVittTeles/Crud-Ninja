 import axios from 'axios';

 const baseUrl = 'http://localhost:5000/'

 function getUser() {
    axios.get(`${baseUrl}/listagem`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => {
        console.log(error)
    })
 }

getUser();