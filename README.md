# YIP TASK - By KamCy Ahaka

- [YIP TASK - By KamCy Ahaka](#yip-task---by-kamcy-ahaka)
  - [Task Overview](#task-overview)
  - [About My Solution](#about-my-solution)
  - [Languages and Tools Used](#languages-and-tools-used)
  - [Live site](#live-site)


## Task Overview

```
A logistic company wants to develop a transportation Queue. On the left is a table with the list of delivery for customers, showing customer ID, Customer Name, Pick Up location, Drop off Location, on the right is a planner, showing Date, Slot 1 , Slot 2, Slot 3, Slot 4, the planner should show 7 days after the current date.


So the logistic company wants to be able to drag customers from the Logistic Queue to the planner for each slot so this needs to be saved to the database, which is in MySQL.

```
- NOTE: Following conversations with a member of staff, I was given the go-ahead to complete the task without MYSQL


## About My Solution

I have completed the task using HTML, SCSS and Firebase. My solution features a 2-column view with a list of all customers on the left and the planner on the right. I have used Firebase Cloud Firestore to serve as my database.

When a user drags a customer delivery details and places it in the planner, my program figures out exactly which customer's information was picked and in which of the four slots it was placed. It then relays that back to the database by setting an **in_plannng** property to true and saving the slots name. This way, in between reloads, the slots in planning will remain in planning.

I also leveraged Firebase's offline capabilities by enabling offline persistence to ensure the site still functions without internet connection.

## Languages and Tools Used

- HTML
- SCSS
- Javascript
- [Firebase](firebae.google.com)
- [Moment.js](momentjs.com) 

## Live site

To view the live site, click [here](https://yips-logistico.netlify.app/)
