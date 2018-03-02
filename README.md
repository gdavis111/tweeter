# Tweeter Project

Tweeter is a simple, single-page Twitter clone.
It includes HTML, CSS, JS, jQuery and AJAX for the front-end, and Node, Express and MongoDB on the back-end.

Once opened, users can type in the text area whatever they want to tweet about (140 characters max) and then submit with the 'Tweet' button.  A randomly generated name and tag are attached to the tweet and the tweets are displayed in reverse chronological order.  The list of tweets will survive a server restart as they are stored with MongoDB.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Final Product

!["Screenshot of tweets/fan feedback"](https://github.com/gdavis111/tweeter/blob/master/docs/fan-feedback.png?raw=true)
!["Screenshot of home page and tweets"](https://github.com/gdavis111/tweeter/blob/master/docs/home-page.png?raw=true)

## Dependencies

- Body-parser
- Chance
- Express
- MD5
- Mongodb
- Node 5.10.x or above

## DevDependencies

- noDemon