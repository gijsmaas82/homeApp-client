# Home Project

This is an ongoing project for home use and under constant construction. I hope to implement various features that I have worked on during my studies. In this ReadMe you can read about some of the features and the different frameworks I used. Right now it has calendars, to-do-lists and games for my son Melle who is now learning to talk. 

For the latest deployed version click on the link below:
[Home App](https://competent-wiles-1fe4cc.netlify.com/)

### Features

..* Profile
..* Calendar
..* To-do List
..* Games

### Profile

In the homepage you see some information about me. I use bootstrap for the different elements on this page. You can sign up and log in and I am working on personal profile page for users of my website. When you log in you get a jsonwebtoken. For the back-end check out this repository on github. [Home App server](https://github.com/gijsmaas82/homeApp-server)

### Calendar

The Calendar is made with a Table from bootstrap and some logic to fill the days of the week in the right boxes. It uses the moment-library extensively. It knows which day it is and you can click on different days. If you click on the month you go to a new table which shows the months and if you click on the plus or minus button you go one month forth or back respectively. You can use add event to add events to the calendar and you can remove them again. When you go to the calendar it loads the events for the current day and displays them and if yoy click on a day it loads the events for that day. I want to update thet calendar so you can also edit events, add pictures more easily to the event and make the calendar private when you are a registered user by adding userId's in the back-end and requiring a json webtoken before using it.

### To-do list

Work in progress. Users can add, edit and remove todo's from the list. Todo's are only accessible if you are a registered user. 

### Games

Originally built as part of my graduation project as part of a hackathon. I built this in two days and used react-konva to make use of the canvas-element. Free to play by anyone but specifically for my son. It has a cute apple-picking game and a coloring-plate. You can access the games by dragging the baby-avatar to either the apple or the pencil on the canvas. It is recommended to use a touch screen for the games.

