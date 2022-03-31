## 🆕 To create this app run the following command
npx create-next-app pizza-delivery-app

## 💻 To serve the app in localhost
npm run dev

## ⏱ To follow my commit changes
https://github.com/Royal6969/pizza-delivery-app/commits/main
https://pizza-delivery-app-delta.vercel.app/

## 👓 First steps
Traditionally, we start with a default template that you can see in index.js.
Delete all main and footer tags.
Create your own basic components to start: Navbar - Layout - Footer,
but the Navbar and Footer will be jsx files, to rendering them better.
(jsx is an js extension very useful for develop the UI) --> https://es.reactjs.org/docs/introducing-jsx.html

## 🔮 Best Next.js features
Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

Static Generation (Recommended): The HTML is generated at build time and will be reused on each request.
Server-side Rendering: The HTML is generated on each request.
Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option.

You can also use Client-side Rendering along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by client side JavaScript.

## 🔁 What is Server Side Rendering ?
If a page uses Server-side Rendering, the page HTML is generated on each request.

To use Server-side Rendering for a page, you need to export an async function called getServerSideProps. This function will be called by the server on every request.

For example, suppose that your page needs to pre-render frequently updated data (fetched from an external API). You can write getServerSideProps which fetches this data and passes it to Page.

getServerSideProps is similar to getStaticProps, but the difference is that getServerSideProps is run on every request instead of on build time.

## 📚 To learn more Next.js basic concepts ...
https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

https://nextjs.org/docs/basic-features/pages

## 📝 Basic structure to start
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

## 👶 Create our first example page
Go ahead into pages folder, and create a new file, called "about" for example.
I recommend you to install a VS extension that provides you a React syntax snippet to start coding faster any component or page.
So I have it, and if a just write "rafce" I get a snippet called "react arrow function export component".
Now, if you go to your browser, and in the URL you write a slash and "about", you will go directly into our new about component,
wow! it looks like something magic...
Note: Pages components has to be named with lower initial letter.

## 🎨 For the css ...
We are going to use the css modules.
So to code the styles for one component or page,
we go into styles folder and create a new file called, for example, Navbar.module.css,
Now we back to Navbar.jsx to import this new style file:
import styles from "../styles/Navbar.module.css"
And now we can set styles in our html tags with className={styles.container}

## 0️⃣ Lets start with the Navbar 🗺️
Note for <Image> tag.
It's very common and a noob mistake that we experiment an error like this:
Server Error
Error: Image with src "/img/telephone.png" must use "width" and "height" properties or "layout='fill'" property.
This error says us we have to define a width/height for the Image

## 1️⃣ Slider component 🎞️
Remember to start with the basic template provides by the snnipet "raf" React Arrow Function Export Component, and now remember to call it in de Index.js, under the <Head>.

To go next/prev image in slider, I need to define a stateHook for an index.
The useState hook lets you manage state throughout your application.

Note: Not forget to import it --> import { useState } from 'react'

The stateHook will begin in 0 --> const [index, setIndex] = useState(0)
in 0 because 0 will be the main image (first item (image) in slider)

To learn more about the useState() hook, visit...
https://www.coffeeclass.io/articles/nextjs-usestate

## 2️⃣ ProductList and ProductCard components 📋
Once again, we start creating two new component like jsx files,
and two new modules.css, connect both component between them,
(insert a few ProductCard inside the ProductList and insert the ProductList under the Slider in the index.js)
The rest is pure html and css.

## 3️⃣ Product Page Design 🍕
Now, it's time to get the product id to go into its details.
Inside pages folder, let's create a new folder called "product",
and inside it, create the id generator file (with jsx extension) with the name between squeare brackets,
because it's a traditional nomenclature for this file type.
But... attention! We are going to develop the Product,
so you have to change inside the new file, the [id] name for "Product".
Create its Product.module.css and let's go!

When the user choose a size, the price will change,
so we need to get the price for each size and pizza,
and we get it using again a stateHook, the "useState",
but this time, from a Click event !

## 4️⃣ Shopping Cart Design 🛒
I create a new jsx file in Pages folder, without its own folder,
because it would be an independent page.
Like you alredy know, let's start with the "rafce" snippet,
and create also its css module, and import it.
This page will have two parts,
first, the purchase resume info,
second, the checkout container.

## 5️⃣ Order Tracking Page Design

## 6️⃣

## 8️⃣

## 9️⃣

## 1️⃣0️⃣ 