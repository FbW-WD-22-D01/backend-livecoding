const fetch = require('node-fetch');


async function getGithubPage(){
    const response = await fetch('https://github.com/');
    const body = await response.text();
    console.log(body);
}

getGithubPage();
