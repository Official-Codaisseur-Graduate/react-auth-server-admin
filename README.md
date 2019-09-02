# React Admin Client
This client is made to work with the [node-auth-server](https://github.com/Official-Codaisseur-Graduate/node-auth-server) to perform the following operations:

- [x] Allow user registration
- [x] Demonstrate login using implicit flow
- [x] Allow displaying a user list of available users in the auth server
- [ ] Demonstrate protected data fetching based on scopes defined in server.

## TODOS
- [ ] Limit user list view and edit components to admin users only
- [x] Implement the logo component
- [x] Implement the nav component
- [x] Implement the user info component
    - **If user is logged in**:
        - [ ] Needs to display user first name (right now it hardcoded, fix this by using the Redux store to get the loggin in username)
        - [x] Display logout button
    - **If user is not logged in**:
        - [x] Display login link --> should redirect to login component. Login component should have only a 'Login with Codaisseur' button.
- [ ] Implement a user edit component
    - [ ] Should allow admin to change user information
    - [ ] Should show if account is locked (Implement account lock feature on server)
    - **Claims**: a dictionary of key-value pairs, both of type string.
    - [ ] Should allow admin to add claims to user
    - [ ] Should allow admin to remove claims from user *cannot update
- [ ] Implement protected products links
    - [ ] Implement products list component and only allow users with 'read:products' claim set to true to enter this component.
    - [ ] Implement product create component and only allow users with 'edit:products' claim set to true to enter this component.

    
## Packages used

The following packages are used:
- Material UI
- OIDC - client
- React
- React-scripts
- React-dom
- React-router-dom
- React-router
- React-Redux
- Redux
- Redux-thunk
- Superagent

If u have not worked with MaterialUI before here are some usefull links to read up and see how certain things are used.


The link below is for an overal understanding of Material ui + a Github repository where u can find alot of examples:
- https://material-ui.com/
- https://github.com/mui-org/material-ui

## Running the app.

 - Clone the repository with `git clone https://github.com/Official-Codaisseur-Graduate/react-auth-server-admin.git`
 - To make the app run you will need your ip address. To find your local ip address, do   the following:
    1. Open “System Preferences” from the Apple menu.
    2. Click on “Network”
    Your IP address will be visible immediately next to “Status” with the next: “Wi-Fi is connected to Codaisseur and has the IP address 172.16.xx.xx".
    3. Copy the ip address as you will need it in the next steps.
 - Go to the `authConst.js` file located at `src/utils/authConst.js`
 - Change the ip addresses in the urls which are used for the properties redirectUri,     silentRedirectUri and postLogoutRedirectUri to the ip address you copied earlier.
 - Save 
 - `cd` into the cloned repository.
 - `npm install` to install all the packages to make the repo work.
 - `npm run https` to start up the server.

 ## How the app works

 - On the default `/` url you see a public page where everybody has acces to.
 - If u want to login u go to the `Menu` button and go to `Login`.
    - if u dont have an account yet press the link that says `If you dont have an account yet, please press this link`.
    - Here you can Sign up by giving the needed information.
    - Press the `Sign up` button and u will be redirected to the `/login` uri.
- If u already have an account then press the `Login with Codaisseur` button.
- This button will redirect you to a popup screen where u have to consent the app to use certain information from your profile. This is a reaction from our [node-auth-server](https://github.com/Official-Codaisseur-Graduate/node-auth-server) that provide you with a token to have acces to certain information. (For more information about how the Acces procedure works read the Documentation in the [node-auth-server](https://github.com/Official-Codaisseur-Graduate/node-auth-server) repository)
- If you clicked on the `Yes` button u will be redirected with the right `claims` to a private page.


## Contributers

### - Billy Vlachos
### - Yuri van Schaaik
### - Adrianus Cornet