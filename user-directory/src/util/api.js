import axios from 'axios';

export default {
    findPeople: function() {
        return axios.get('https://randomuser.me/api/?results=20&nat=us');
    }
}