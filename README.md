# Sleeping Dragon Terrain – Milestone Project 1
### View the live project [here.](link goes in here)

The aim of this project was to create a user-friendly website for a scale modelling commission service, aimed at model railway builders, wargamers, boardgamers and roleplayers. 
With many years of experience within the tabletop hobby, I know there’s very little online presence for this service and yet it is one I am regularly asked about, 
so I wanted to create a site where users can quickly and easily gain all the information they need and arrange for projects to be commissioned. 


## Table of Contents

> -	[Overview](#Overview)
> -	[Description](#Description)
> -	[UX](#UX)
> -	[User Stories](#User-Stories)
> -	[Features](#Features)
> -	[Technologies Used](#Technologies-Used)
> -	[Testing](#Testing)
> -	[Project bugs and solutions](#project-bugs-and-solutions)
> - [Deployment](#deployment)
> -	[Credits](#credits)
> - [Acknowledgements](#Acknowledgements)

## Overview

I run a business selling scale modelling materials and hobby products aimed at wargamers, boardgamers and model railway builders,
and have been asked many times whether I’m available for commissions. From my knowledge of the industry and experience talking with fellow modellers,
although there *are* people out there who take on commission work, there is virtually no online presence for this aspect of the hobby which makes it
incredibly difficult for people to find anything regarding commission services. This project aims to provide users with a website where they can quickly
and easily find a reliable commission service for whatever scope of project they need, without having to hunt the internet for information.

## Description

This is a specialist commission service website intended to be accessible on all devices. My aim with the project was to present a clean, slick appearance 
that makes it easy for users to engage with the content, browse a gallery of previous work and book the commission service for their own projects.

## UX
## Strategy

**Business Goals**

* To engage with potential clients and present examples of past work
* To encourage users to book commission work and to buy products
* To increase exposure and customer base through positive user experiences
    
**User Stories**

* "As a busy parent with a full time job, I don't have time to build terrain for myself. I want to use what time I have playing the game, not building scenery." 

* "I wouldn't know where to start building my own scenery. I'd much rather get someone else to make whatever I need and buy it ready to game with."

* "It costs just as much money to make my own terrain as to buy it ready-made, so it's just quicker to get it made for me."

* "I'd love a full custom built gaming table, but wouldn't have a clue how to do it myself. Normally I'd buy scenery at shows but with Covid going round there are no shows happening, 
and it's really hard to find places to get custom boards made online."

    
## Scope

The website is based on a MVP (Minimum Viable Product) methodology, for several reasons:

* Keeps the website uncluttered and minimalistic, avoiding information overload for users
* Makes site easier to navigate, with only key information displayed
* In line with my current abilities
* Meets the necessary needs of the user and business owner 

## Structure

The website is split into four sections - a home (landing) page, an about page, gallery page and contact page. The fixed navbar and footer allow the user to easily navigate the site 
and get in touch, and present a consistent layout. The Home page is designed to hold a summarised version of the key information for the user, with further information accessible 
on the About page. 

## Skeleton

The website follows my initial four section plan, and loosely follows the initial wireframes with slight changes to enable better mobile-first design e.g. navbar and 
removal of the carousel feature, and removal of the planned header image.

* Home Page: <a href="assets/docs/wireframes/home.pdf" target="_blank">Home</a>
* About Page: <a href="assets/docs/wireframes/about.pdf" target="_blank" >About</a>
* Gallery Page: <a href="assets/docs/wireframes/gallery.pdf" target="_blank" >Gallery</a>
* Contact Page: <a href="assets/docs/wireframes/contact.pdf" target="_blank" >Contact</a>

## Surface

I wanted to maintain a clean and spartan presentation in order to avoid distraction for users and all the information presented to be the focus of attention. The high contrast 
of black/dark greys and white works to present a clean palette to users, while the bright blue spot colours serve to draw attention to key interactive elements (links, nav 
elements and social icons). 

### Images
### Colours

* I wanted to present a clean and minimalistic colour palette to users, to keep the site free of too much distraction and also to evoke a blank canvas for users' project ideas. 
The bright spot colour, #46cde3, was introduced to present a sharp colour contrast and act as a spot colour for interactive elements. 

* The main colours are black #000000 and an offwhite, #fafafa, with a charcoal grey, #777777, used as a third complementary colour to differentiate between some elements. 
This is consistent across all pages, and ties in with the existing colour scheme associated with the 'brand' (used on my ecommerce site).

### Typography

* I used Google Fonts to browse interesting fonts. 'Raleway' was used for headings and sub-headings, while the main content font was 'Open Sans', both with 'Sans-Serif' 
as the back-up font. 'Raleway' was chosen because of it's thin weight and elegant typeface, with 'Open Sans' recommended as a good paired font. 

### Icons
* Font Awesome was used extensively to provide appropriate icons, such as for social media icons in the footer, menu bar icons and accompanying much of the text content on pages.

## Features
#### Navbar
* I wanted users to easily be able to navigate the site from every page.
* The navbar resizes responsively to still be visible on mobile devices, with the site logo disappearing to make room as the screen size reduces.

#### Footer
* Includes social media clickable icons linking to respective social medias sites, opening in new tabs when clicked. 

## Technologies Used

#### Languages:
* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)

#### Libraries:
* [Bootstrap 4.5](https://getbootstrap.com/) - A mobile-first responsive library used to construct various parts of the project, including extensive use of the grid system for 
layout, the Nav Menu and Contact Form.
* [GoogleFonts](https://fonts.google.com/) - Raleway, Open Sans and Sans-Serif fonts.
* [FontAwesome](https://fontawesome.com/) - Used frequently for icons throughout the website.
* [Balsamiq](https://balsamiq.com/) - used for the creation of wireframes.

#### Version Control:
* [Github](https://github.com/) - Used to store the code and use of GitHub Pages to deploy the website. 
* [Gitpod](https://gitpod.io/) - Used as the primary version control IDE for development to further push and commit code to GitHub.

#### Other:
* [Code Institute Course Content](https://courses.codeinstitute.net/) - Primary source of learning code.
* [ChromeDevTools](https://developers.google.com/web/tools/chrome-devtools) - Used frequently to detect any issues/bugs or layout differences.
* [CSS-Tricks](https://css-tricks.com/) - Used as a general resource for CSS tips and questions


## Testing
* Forms testing: to ensure the website was functioning as it should, I tested each of the forms on different devices and browsers. This was done by clicking the 'Submit' 
button on the Contact Form without any text in inputs to make sure it resulted with the desired response of 'Please fill out this field'.
* Links (Internal & External): Each of the links when clicked have been checked so that the user is directed to the desired location. For a better UX experience, I made sure 
each link has either a colour change colour-changing icon when hovered (with exception of the logo when visible) and included a target="_blank" attribute so that a new 
browser tab is opened when clicked.

## Project Bugs and Solutions

* Social icons in footer would wrap onto two lines on screens between 564px and 664px. Solved by reducing padding of icons to 5px instead of 10px
 to keep icons on single line on all screen sizes

* H1 title would wrap onto two and then three lines as screen size reduced, expanding header and taking up too much screen space. 
 Changed font size to use 'vh' instead of absolute size so that text would scale better with screen size; this worked to make the font size more responsive for smaller 
 devices, but made it too small for screens with greater width than height (i.e. desktops and any device in a landscape position). Finally changed to 4vmax to use 
 the larger of vw or vh, which allowed a responsive title size across all devices. 

## Deployment
## Credits

* The ability to add partial borders to the navbar was made possible thanks to [this guide](https://dev.to/designfrontier/css-only-partial-width-borders-4lcf) from Daniel Sellers.
* 'Grow Shadow' hover effect courtesy of [Hover.CSS](https://ianlunn.github.io/Hover/) by Ian Lunn. 

## Acknowledgements
