const core = require('@actions/core');
const github = require('@actions/github');
const { TwitterApi, TwitterApiTokens } = require('twitter-api-v2');

try {
    console.log("start to prepare a tweet");

    const credentials = {
        appKey: core.getInput('consumer-key'),
        appSecret: core.getInput('consumer-secret'),
        accessToken: core.getInput('access-token'),
        accessTokenSecret: core.getInput('access-token-secret')
    }

    const client = new TwitterApi(credentials);

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