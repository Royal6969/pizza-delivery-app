## To create this app run the following command
npx create-next-app pizza-delivery-app

## To serve the app in localhost
npm run dev

## First steps
Traditionally, we start with a default template that you can see in index.js.
Delete all main and footer tags.
Create your own basic components to start: Navbar - Layout - Footer,
but the Navbar and Footer will be jsx files, to rendering them better.
(jsx is an js extension very useful for develop the UI) --> https://es.reactjs.org/docs/introducing-jsx.html

## First Next.js concepts
In our Layout component, we're going to set the Navbar and Footer,
and it has a type of "prop content" called {{children}}, 
becasuse these children will be all the other components inside the other pages,
that set the whole navigation and the content of our website between the navbar at top, and the footer at bottom, 
and next, we will set this layout in the _app.js file.
_app.js is the main js file-component in our project, 
becasuse it is the join of our components
(in Next.js, all your pages are already connected between then automatlly)
Inside _app.js wi will found a super prop {...pageProps},
and we will wrap it with our Layout component.
If we serve the app in this moment, we will see in our browser that we can see the navbar at top, the footer at bottom, 
and inside them (between them), we can see the word "homepage" which we wrote before in index.js

## Create our first example page
Go ahead into pages folder, and create a new file, called "about" for example.
I recommend you to install a VS extension that provides you a React syntax snippet to start coding faster any component or page.
So I have it, and if a just write "raf" I get a snippet called "react arrow function export component".
Now, if you go to your browser, and in the URL you write a slash and "about", you will go directly into our new about component,
wow! it looks like something magic...

## For the css ...
We are going to use the css modules.
So to code the styles for one component or page,
we go into styles folder and create a new file called, for example, Navbar.module.css,
Now we back to Navbar.jsx to import this new style file:
import styles from "../styles/Navbar.module.css"
And now we can set styles in our html tags with className={styles.container}

## Lets start with the Navbar
Note for <Image> tag.
It's very common and a noob mistake that we experiment an error like this:
Server Error
Error: Image with src "/img/telephone.png" must use "width" and "height" properties or "layout='fill'" property.
This error says us we have to define a width/height for the Image

