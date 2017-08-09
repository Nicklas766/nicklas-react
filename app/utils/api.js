var axios = require('axios');



function handleError(error) {
    console.warn(error);
    return null;
}


module.exports = {
    fetchProject: function (id) {
        console.log("im started");
        var encodedURI = window.encodeURI('http://nicklasenvall.se/api.php/projects?id=' + id);

        return axios.get(encodedURI)
            .then(function (users) {
                return users.data;
            });
    },
    fetchProjects: function (lang) {
        console.log("im started");
        var encodedURI = window.encodeURI('http://nicklasenvall.se/api.php/projects');

        return axios.get(encodedURI)
            .then(function (users) {
                if (lang == "Alla") {
                    return users.data;
                }
                return users.data.filter(obj => obj.language.includes(lang));

            });
    }
};


// fetchPopularRepos('Java')
//     .then()
