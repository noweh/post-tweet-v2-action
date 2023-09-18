const core = require('@actions/core');
const github = require('@actions/github');
//const {Client, auth} = require('twitter-api-sdk');
const { TwitterApi } = require('twitter-api-v2');

try {
    console.log("start to prepare a tweet");

    const client = new TwitterApi(core.getInput('bearer-token'));

    /*const authClient = new auth.OAuth2User({
        client_id: core.getInput('consumer-key'),
        client_secret: core.getInput('consumer-secret'),
        token: core.getInput('access-token'),
        callback: "http://127.0.0.1:3000/callback",
        scopes: ["tweet.write", "offline.access", "tweet.read", "users.read"],
        token_secret: core.getInput('access-token-secret')
    })
    const client = new Client(authClient);*/

    client.v2.tweet(core.getInput('message')).then((tweet) => {
        console.log(`Tweet posted with ID ${tweet.data.id}`);

        const time = (new Date()).toTimeString();
        core.setOutput("time", time);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2);
        console.log(`The event payload: ${payload}`);
    }).catch((error) => {
        console.error(`An error has occurred: ${error.message}`);
        console.error(error);
        core.setFailed(error.message);
    });
} catch (error) {
    console.log(error.message);
    console.error(error);
    core.setFailed(error.message);
}