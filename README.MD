# Star Wars Universe Manager API

- This project is a system for creating and manager galaxies, planets, characters and spaceships based on Star War universe movies, games and books.

## :pushpin: Goals

- Developer a system based in the Star Wars univers using fundamentals concepts about **API's REST, TypeScript, Clean Code and Tests**.

## Used Tecnologies

- **Node.js** : Version 21 or higher
- **TypeScript**: Version 5 or higher
- **Express** : Framework for Building API's
- **Prisma** : ORM for database
- **MariaDB** : Database Management system

## Endpoints

- **Planets**:

  - **Attributes**: Name, terrain, size, population and weather.

  - **GET :inbox_tray: /planets** : Lists all planets registered.

  - **GET :inbox_tray: /planets/name** : List a specific planet.

  - **POST :outbox_tray: /planets** : Create a new planet.

  - **DELETE :x: /planets/name**: Delete one specific planet.

  - **PATCH/PUT :arrows_counterclockwise: /planets/name:** Updates the information about a specific planet.

- **Star Systems**:

  - **Atributtes**: Name and Description

  - **GET :inbox_tray: /starsystem**: Lists all Star Systems registered.

  - **GET :inbox_tray: /starsystem/name** : List a specific Star System.

  - **POST :outbox_tray: /starsystem** : Create a new Star System.

  - **DELETE :x: /planets/name**: Delete one specific Star System.

  - **PATCH/PUT :arrows_counterclockwise: /starsystem/name:** Updates the information about a specific Star System.

- **Users**:

  - **Attributes**: name, email, password and nickname.
  - **GET :inbox_tray: /users** : Lists all users registered.
  - **GET :inbox_tray: /users/name** : List a specific user.
  - **POST :outbox_tray: /users** : Create a new user.
  - **DELETE :x: /users/name**: Delete your own user.
  - **PATCH/PUT :arrows_counterclockwise: /users/name:** Updates the information about your own user.

  **Obs:** It still wil be implemented the function to authenticate the user, so for tests purpose, the routes DELETE and PATCH/PUT are open to all users for now.
