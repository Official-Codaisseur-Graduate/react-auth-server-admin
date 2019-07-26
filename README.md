# React Admin Client
This client is made to work with the [node-auth-server](https://github.com/Official-Codaisseur-Graduate/node-auth-server) to perform the following operations:

- [x] Allow user registration
- [x] Demonstrate login using implicit flow
- [x] Allow displaying a user list of available users in the auth server
- [ ] Demonstrate protected data fetching based on scopes defined in server.

## TODOS
- [ ] Limit user list view and edit components to admin users only
- [x] Implement the logo component
- [ ] Implement the nav component
- [ ] Implement the user info component
    - **If user is logged in**:
        - [ ] Needs to display user first name
        - [ ] Display logout button
    - **If user is not logged in**:
        - [ ] Display login link --> should redirect to login component. Login component should have only a 'Login with Codaisseur' button.
- [ ] Implement a user edit component
    - [ ] Should allow admin to change user information
    - [ ] Should show if account is locked (Implement account lock feature on server)
    - **Claims**: a dictionary of key-value pairs, both of type string.
    - [ ] Should allow admin to add claims to user
    - [ ] Should allow admin to remove claims from user *cannot update
- [ ] Implement protected products links
    - [ ] Implement products list component and only allow users with 'read:products' claim set to true to enter this component.
    - [ ] Implement product create component and only allow users with 'edit:products' claim set to true to enter this component.
    