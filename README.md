i# Netspice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Projection integrations

The folder structures are well thought out, we have the following main folders under the `app` folder

`Pages` : Contains all the modules and screens tht represents navigatable pages, this includes the `auth modules`, `user module` and the overiew component.

`share` : Contains all the componets that can be shared and reused across different parts and components of the app e.g `search-button` `button`, `user-item` components. It means that this components does not really belong to any of the modules in the pages folder but to a shared module.

`utils` : The utils folder contains all the `services`, `guards`, `pipes`, `directives`, `classes` and `interfaces`. All the none components or external logics are written here

## Authentication

The _Overview_ and _Edit User_ pages protected using Angular route guards, which means that only authenticated user can access this page.

For the sake of this project the login cred is
email -> ezehgvictor@gmail.com
password -> Pass123

## Overview page

The over page contains the following functionality

- Fetch all users from the public.user tables which was populated with the dummy.json content
- Authenticated user can search for a particular user. To avoid making api request everytime you type, I decided to use the onKeyEnter event listener to ensure that a request is made only when the user actually wants to search
- Authenicated user can click on the Edit user button which navigates to the edit screen

## Edit User pages

On this page, we can edit user detail.

### What Technology will I introduce and why

No state management library was used this is because the app is just a 2 pages app, as state management tools are better used in larger applications, how ever there are situations where I feel it could be helpful eg while trying to search user data.

Although, I was able to protect the second search box for editing roles, using the custom claims, just to demostrate how customs claims can be used, how ever we can even do more by implementing custom claims within feature guards(e.g overviewGuard) just to protect some pages base on the user roles gotten from the custom claims, just like I did with the Authguard, but for the Auth guard a none authenticated user does not even have access to any page other than the sign in page.

Finally, the RLS(Row level security), this can be implemented to write the rules on what an authenticated user can do on the Database level.
