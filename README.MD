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

  **Obs:** For now it's only be possible to update a planet if the user provide the full data of a planet i.e Name, terraim, size, population and weather.

- **Star Systems**:

  - **Atributtes**: Name and Description

  - **GET :inbox_tray: /starsystem**: Lists all Star Systems registered.

  - **GET :inbox_tray: /starsystem/name** : List a specific Star System.

  - **POST :outbox_tray: /starsystem** : Create a new Star System.

  - **DELETE :x: /planets/name**: Delete one specific Star System.

  - **PATCH/PUT :arrows_counterclockwise: /starsystem/name:** Updates the information about a specific Star System.

    **Obs:** For now it's only be possible to update a Star System if the user provide the full data i.e Name and Description.
