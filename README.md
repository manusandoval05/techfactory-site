# TechFactory Landing Page

Page built with only **HTML**, **SCSS** and **JavaScript** for simplicity, and with a strong focus on resusable and responsive components. 

## Design Walkthrough

The style of the webpage is a combination of glassmorphism and Google's color theme. Each section represents one color of Google's logo and is complemented with a dynamic section breaker (Triangle, book, tilt, arrow or wave effect) that matches the color theme. 

### Navigation Section

Fully responsive navigation bar that matches the glassmorphism design pattern. The full navbar transforms into a sandwich menu and/or a smaller version of the logo (such as no text logo) whilst maintaining glassmorphism when viewed on lower resolution screens. Two configurations were created for the navbar, a full bar and a halfbar (left and right alignment).

### Index Sections

There are a lot of section components created for the index page which include:

* **Big background image with centered text**: Displays an image that covers completely the device's viewport, and a centered text box.

* **Container with hoverable cards:** Cards with centered icon that shows information when hovered and reduces the size of the icon and circles the border

* **Only text section**: Only displays a powerful text (text with a lot of weight) that ensures readability.

* **Sponsors, promoter (Image Container)**:  Automatically adjusted logos for participating companies. Only a single additional container needs to be added, and any amount of logos can fit.

## Specialized sections

The specialized information is a minimalist and attractive way of displaying information  with readable text,  image gallery and bottons. As well as customization options. 

#### Text location

* **Right sided information**: Text will be displayed to the right

* **Left sided information**: Text will be displayed to the left (**default**)

#### Image orientation

* **Landscape main image**: The biggest image will be horizontal

* **Portrait main image**: The biggest image will be vertical

## Contact page

The contact page follows the glassmorphism design principle. Complemented with WhatsApp botton and email.

# Latest News API

To keep the content of the page as dynamic as possible and users interested, while maintaining a lightweight and performant page (still a landing page, not a webapp), this page connects to an API that returns the latest's news from a news webapp and displays them with the characteristic landing page theme. 

The `index.js` file contains all the dependencies to create dynamic news cards. The file is divided into two parts.

The first part stores the URL (Currently not configured, so it is advised to modify the script with the updated Webapp URL)for the news webapp (written in Django) for later use. The script know exactly where to look for the most recent news (Currently in the "/noticias/api" file path of the news site). Then, the script will extract the json file and created a nested card for each news article with the following structure:

This script is a simplified version of any nested DOM object creator, designate a parent give any number of children which can also be node objects that can have a node object, so everything becomes a linked list of objects or a tree. 
