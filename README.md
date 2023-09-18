# Send a tweet from a GitHub Actions workflow

[![Badge Twitter](https://img.shields.io/badge/Twitter%20API-v2-828cb7.svg?style=flat-square&logo=twitter&color=1DA1F2)](https://developer.twitter.com/en/docs/twitter-api)
[![MIT Licensed](https://img.shields.io/github/license/noweh/twitter-api-v2-php)](licence.md)
[![twitter](https://img.shields.io/twitter/follow/Noweh95?style=social)](https://twitter.com/Noweh95)

Post a Tweet from a GitHub Action workflow, with Twitter REST API for Version 2 endpoint.

## Active your developer account
Before anything else, you must follow [this tutorial](https://developer.twitter.com/en/docs/tutorials/getting-started-with-r-and-v2-of-the-twitter-api).
- [Request approval for a developer account](https://developer.twitter.com/en/apply-for-access);
- Once your developer account is approved, you will need to [create a Project](https://developer.twitter.com/en/docs/projects/overview);
- Enable read/write access for your Twitter app;
- Generate Consumer Keys and Authentication Tokens;
- Retrieve your Keys and Tokens from the Twitter Developer portal.

## Secret Configuration

Configure the authentication keys and tokens for your Twitter app as secrets in your repository.  I recommend using the `TWITTER_CONSUMER_API_KEY`, `TWITTER_CONSUMER_API_SECRET`, `TWITTER_ACCESS_TOKEN`, and `TWITTER_ACCESS_TOKEN_SECRET` secrets.

## Workflow Usage

Configure your workflow to use `noweh/post-tweet-v2-action@v1`,  and provide the tweet you want to send as the `status` input.

Provide the authentication keys and tokens for your Twitter app
as the `account-id` and `bearer-token` inputs.

For example:

```yml
name: Send a Tweet
on: [push]
jobs:
  tweet:
    runs-on: ubuntu-latest
    steps:
      - uses: noweh/post-tweet-v2-action@v1
        with:
          message: "Hi, this is a test!"
          consumer-key: ${{ secrets.TWITTER_CONSUMER_KEY }}
          consumer-secret: ${{ secrets.TWITTER_CONSUMER_SECRET }}
          access-token: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          access-token-secret: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
```

Now whenever you push something to your repository, GitHub Actions will tweet on your behalf.
