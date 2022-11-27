# businesses-search

This React project uses Yelp API to fetch a list of restaurants, given a latitude & longitude.
Clicking on a particular restaurant navigates user to the details page of it.

Note: You can create your own Yelp auth bearer token and replace it within the `src/api/api-config.js` (https://www.yelp.com/login?return_url=%2Fdevelopers%2Fv3%2Fmanage_app).
To resolve the CORS issue Iv prepended each request url with 'https://cors-anywhere.herokuapp.com/'.

Added: StoryBook support to the app as well (https://storybook.js.org/docs/react/)
Eg: We could find several render stories of different reusable components I used in:  `src/components/***.stories.js`
