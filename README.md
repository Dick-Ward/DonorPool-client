## DonorPool

DonorPool was created with the idea that donating to non-profit organizations should be fun and easy. Rather than having your donations spread across a variety of sites that are difficult to track, you can choose the organizations that you'd like to support, all in one place.  This not only allows for a simple way to see where your money is going, but it makes it simple to find new causes to help out.  Influencial and celebrity users are featured, so others can see who they're supporting.  Donating to a charity or non-profit will allow users to see updates from those organizations.

Charity managers have a separate login and a unique view that allows them to edit the name, mission, and photos of their organization. They can also create updates, which users that are donating to the cause will see.

You can find a live version of the app on [Heroku](https://powerful-savannah-20154.herokuapp.com/) (app may be hibernated, so allow a few seconds for the frontend and backend to load.)

To use the app, simply sign up as a user, or as a charity manager.  Fill in the required info and get to work supporting charities or sharing the work of your organization.

Upcoming changes:

* Better mobile functionality
* Guest Login
* Routing for different views
* Success Indicator when user updates support amount
* General bug fixes and styling

### Installation

[DonorPool Frontend](https://github.com/Gonzodamus/DonorPool-client)
[DonorPool Backend](https://github.com/Gonzodamus/backend-DonorPool)

After forking and cloning down the client repo, change the api call  in services/api.js to `http://localhost:3000`, or whatever address you want to start the back-end on.  Then in the backend, under config/initializers/cors.rb set origins to `http://localhost:3001`, or wherever you want to run the client.

Start the backend with `rails s` and the front with `npm start`.  Visit the frontend address and you should be up and running.

