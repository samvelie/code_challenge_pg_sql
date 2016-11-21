# Code Challenge - Week 4 (SQL Databases)

## Overview

You have been provided with the HTML and JavaScript of an application to manage our treats. The client side JavaScript includes AJAX calls to a node/express server. Yet the AJAX calls are all failing.

You will need to build up the server side code and database in order to fulfill our client side requests. Add the following routes. Do them in the suggested order below.

#### Base Mode

* `GET /treats` returns a list of potential treats (e.g. cupcakes, goldfish, etc) and their image URLs.
* `POST /treats` expects a treat description and link to a url image.

#### Hard Mode
Create a route to handle the search box in the top-right of our page. Recall how we handle these optional parameters...

* `GET /treats/<search terms>` should return only treats that match the query parameter

## TODO

1. Fork and clone this repository. **It does not have all the npm modules you will need.**
2. Take some time to look at the given code. What code is needed and what will be removed once the server side code is generated?
3. Design and create the database. Be sure to commit the create table syntax in the `create_database.sql` file.
4. Build out the server routes described above.
5. Remove static HTML that will be generated via AJAX calls once the server side is hooked up and responding to our requests.

## Entity Relational Diagram
![ERD treat table](images/treat-table.png)
