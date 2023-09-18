const core = require('@actions/core');
const github = require('@actions/github');
const {Client, auth} = require('twitter-api-sdk');

try {
    console.log("start to prepare a tweet");

    const authClient = new auth.OAuth2User({
        client_id: core.getInput('consumer-key'),
        client_secret: core.getInput('consumer-secret'),
        token: core.getInput('access-token'),
        token_secret: core.getInput('access-token-secret')
    })
    const client = new Client(authClient);

    client.tweets.createTweet({
        text: core.getInput('message')
    }).then((tweet) => {
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