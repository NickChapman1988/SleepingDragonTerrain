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

The website follows my initial four section plan, and closely resembles the initial wireframes (with slight changes to enable better mobile-first design e.g. navbar).

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
## Project Bugs and Solutions

* Social icons in footer would wrap onto two lines on screens between 564px and 664px. Solved by reducing padding of icons to 5px instead of 10px
 to keep icons on single line on all screen sizes

* H1 title would wrap onto two and then three lines as screen size reduced, expanding header and taking up too much screen space. 
 Changed font size to use 'vh' instead of absolute size so that text would scale better with screen size; ultimately, implementing responsive font sizes would be a better solution.

## Deployment
## Credits

* The ability to add partial borders to the navbar was made possible thanks to [this guide](https://dev.to/designfrontier/css-only-partial-width-borders-4lcf) from Daniel Sellers.

## Acknowledgements
