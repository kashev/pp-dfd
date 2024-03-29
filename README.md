pp-dfd
======

    pp-dfd
    'Persona Prototyping: Designing for Designers'
    or
    'Fake Apps for Fake People'

    Kashev Dalmia
    kashev.dalmia@gmail.com

    Another Project for ARTD 313 @ UIUC, Sp 2014
    proj2b - dalmia3

# README.md

## About
This project was designed and built for the Spring 2014 semester of Art & Design 313 - Digital Interaction Design @ The University of Illinois at Urbana-Champaign.

This project is high fidelity prototype of an application designed with two imaginary users, Kevin and Erin, in mind. This application is not fully functional, nor was it intended to be. Some things work as they might in a real application, but other things don't; for instance, actually taking a picture to make a color palette isn't supported. This functionality is simulated to show what a fully functional application could look like.

The resultant application is currently live at:

- http://kashevdalmia.com/soco

And is best viewed on a mobile device. Add it to your homescreen to experience it like a 'mobile web app'.

This is Kevin:

> **Kevin** is a 26 year old male who recently moved to Chicago, Illinois in October 2013 to start a new job as a designer at a design and innovation consultancy. Prior to starting his professional career, Kevin completed two graduate degrees in design—the first at one of the few universities in Canada to offer such a degree, and the second at one of the most prestigious programs in the United States. The past several years have offered Kevin the opportunity to partake in a variety of new life experiences; this is no more apparent than in the broadening of his palate, as he was previously known to be an extremely picky eater. Kevin is Canadian by birth, but also holds dual citizenship in the United States. He travels often to visit not only his own family back in Canada, but also to visit the community of his second graduate school, where he coincidentally met his long-term girlfriend. Kevin’s favorite color is red.

And this is Erin:

> **Erin** is a 27 (soon to be 28) year old female who currently lives in Boston, Massachusetts. She has worked at a strategic branding firm, where she is now an art director and second in charge, for almost two years. Prior to moving to Boston, Erin spent some time working professionally in the Atlanta, Georgia area, her hometown (although she later moved to Florida with her parents). She graduated with a degree in graphic design and illustration in 2008 from a major art school in the southeastern United States. Erin is significantly younger than her four other siblings, so much so that she is only a few years older than one of her nephews. Erin loves music, which is a good thing because her long-term boyfriend plays tuba in a band. Erin’s cat, Frankly, has his own Facebook page and has been known to Skype with other pet friends across the country. Erin’s favorite color is seafoam green.

## The App
This application, **Social Color** (or **SoCo** for short), is an application that lets designers pull color palettes from the world around them by taking pictures, extracting the dominant colors, and letting them tweak and share these palettes. It even lets them prototype setting type on the palette.
More details about the application are in `process/process.pdf`.

## Instructions
Building this code from source requires `node`, `npm`, and `ruby`.

In the project root, run `npm install` to install all Javascript dependencies. Run `gem install sass` to be able to compile Sass files. Install `bourbon` & `neat` by running `gem install bourbon neat`, then install to the project by running `bourbon install` & `neat install` inside of `src/css/`. Build by typing `grunt` for the development, unminified version or `grunt dist` for a minified version. This will compile `sass` files, `jshint` lint all Javascript files, and move deployable code to `dist/`. Run `grunt server` for live updating dev server at `http://localhost:8000`. Serving is set to be on `0.0.0.0` so that testing can be done on other devices (an Android phone) by connecting to the LAN IP of the host computer on port `8000`.

## Thanks
This project is possible thanks to the work on the following projects:
- [Node](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [jQuery](http://jquery.com/)
- [Fries](http://getfri.es/)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)
- [ColorPicker](http://www.eyecon.ro/colorpicker/)
- [ColorPicker Mobile](https://github.com/Gautier/jquery-colorpicker-mobile)
- [Simple Icons](http://simpleicons.org/)
- [Web Font Loader](https://github.com/typekit/webfontloader)
- [Slider](http://cferdinandi.github.io/slider/)

Thanks to Professor Brad Tober, and Isaac DuPree for guidance.
