const core = require('@actions/core');
const github = require('@actions/github');
const {Client} = require('twitter-api-sdk');

try {
    const client = new Client(core.getInput('bearer_token'));
    client.tweets.createTweet({
        text: core.getInput('message')
    }).then((tweet) => {
        console.log(`Tweet posted with ID ${tweet.data.id}`);

        const time = (new Date()).toTimeString();
        core.setOutput("time", time);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
    }).catch((error) => {
        core.setFailed(error.message);;
    });
} catch (error) {
    core.setFailed(error.message);
}