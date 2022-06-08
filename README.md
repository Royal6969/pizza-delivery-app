# Table Of Contents
<!-- TOC -->

- [Table Of Contents](#table-of-contents)
    - [To create this app run the following command 🆕](#to-create-this-app-run-the-following-command-)
    - [To serve the app in localhost 💻](#to-serve-the-app-in-localhost-)
    - [To follow my commit changes ⏱](#to-follow-my-commit-changes-⏱)
- [👓 First steps 👓](#-first-steps-)
    - [Best Next.js features 🔮](#best-nextjs-features-)
    - [What is Server Side Rendering? 🔁](#what-is-server-side-rendering-)
    - [Basic structure to start 📝](#basic-structure-to-start-)
    - [Create our first example page 👶](#create-our-first-example-page-)
    - [For the css 🎨](#for-the-css-)
- [🖌️ Let's start with frontend 🖌️](#-lets-start-with-frontend-)
    - [0 Navbar component 🗺️](#0-️⃣-navbar-component-)
    - [1 Slider component 🎞️](#1-️⃣-slider-component-)
    - [2 ProductList and ProductCard components 📋](#2-️⃣-productlist-and-productcard-components-)
    - [3 ️Product Page Design 🍕](#3-️⃣-product-page-design-)
    - [4 Shopping Cart Design 🛒](#4-️⃣-shopping-cart-design-)
    - [5 ️Order Tracking Page Design](#5-️⃣-order-tracking-page-design)
    - [6 Responsive Design](#6-️⃣-responsive-design)
    - [Frontend finished !](#frontend-finished-)
- [👨‍💻 Now it's time to backend 👨‍💻](#‍-now-its-time-to-backend-‍)
    - [MongoDB SetUp 📚](#mongodb-setup-)
    - [Create our main two models 🤖](#create-our-main-two-models-)
    - [How to use these models 🤷🏻‍♂️](#how-to-use-these-models-‍)
    - [Insert documents in database by PostMan or MongoDB Atlas 📄](#insert-documents-in-database-by-postman-or-mongodb-atlas-)
    - [Fetch data in Next.js with ServerSideRendering and Axios 🔁](#fetch-data-in-nextjs-with-serversiderendering-and-axios-)
    - [Navigation - Linking components 🔗](#navigation---linking-components-)
    - [Fetch a specific product 🔎](#fetch-a-specific-product-)
    - [Select sizes, ingredients, quantity and change price 🛍️](#select-sizes-ingredients-quantity-and-change-price-)
    - [How to pass products to cart component and how it manages them by itself 📦](#how-to-pass-products-to-cart-component-and-how-it-manages-them-by-itself-)
    - [How to use the slice and its reducer ⚙️](#how-to-use-the-slice-and-its-reducer-)
    - [How to update the badget's counter in shopping cart icon in navbar 🔢](#how-to-update-the-badgets-counter-in-shopping-cart-icon-in-navbar-)
    - [Let's use all information of products selected in cart page 🛒](#lets-use-all-information-of-products-selected-in-cart-page-)
    - [Add a payment method. PayPal button 💳](#add-a-payment-method-paypal-button-)
    - [What this payment process return us? Creating an order.](#what-this-payment-process-return-us-creating-an-order)
    - [Implementing Cash Payment Method 💸](#implementing-cash-payment-method-)
- [👔 Admin Actions - Management Functionalities 👔](#-admin-actions---management-functionalities-)
    - [Delete Product Action 🗑️](#delete-product-action-)
    - [Authentication Login Process 🛡️](#authentication-login-process-)
    - [Add Product Action ➕](#add-product-action-)
    - [Security access to Admin actions 👮](#security-access-to-admin-actions-)
- [🤔 What's next ?? 🤔](#-whats-next--)
- [🌐 Deployment in Vercel 🌐](#-deployment-in-vercel-)
- [👨‍🏫😌❤️ Agradecimientos Especiales ❤️😌👨‍🏫](#‍-agradecimientos-especiales-‍)

<!-- /TOC -->

## To create this app run the following command 🆕

- npx create-next-app pizza-delivery-app

## To serve the app in localhost 💻

- npm run dev

## To follow my commit changes ⏱

https://github.com/Royal6969/pizza-delivery-app/commits/main

https://pizza-delivery-app-delta.vercel.app/

# 👓 First steps 👓

Traditionally, we start with a default template that you can see in index.js.
Delete all main and footer tags.
Create your own basic components to start: Navbar - Layout - Footer,
but the Navbar and Footer will be jsx files, to rendering them better.
(jsx is an js extension very useful for develop the UI) --> 

https://es.reactjs.org/docs/introducing-jsx.html

## Best Next.js features 🔮

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

Static Generation (Recommended): The HTML is generated at build time and will be reused on each request.
Server-side Rendering: The HTML is generated on each request.
Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option.

You can also use Client-side Rendering along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by client side JavaScript.

## What is Server Side Rendering? 🔁

If a page uses Server-side Rendering, the page HTML is generated on each request.

To use Server-side Rendering for a page, you need to export an async function called getServerSideProps. This function will be called by the server on every request.

For example, suppose that your page needs to pre-render frequently updated data (fetched from an external API). You can write getServerSideProps which fetches this data and passes it to Page.

getServerSideProps is similar to getStaticProps, but the difference is that getServerSideProps is run on every request instead of on build time.

What is a prop??
"Props" is a special keyword in React, which stands for properties and is being used for passing data from one component to another. 
Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

👨‍🏫 To learn more about props with its official documentation:

https://es.reactjs.org/docs/components-and-props.html

👨‍🏫 To learn more about props with a video example:

https://www.youtube.com/watch?v=kHJSNFU7H4U&t=2s&ab_channel=SonnySangha

👨‍🏫 To learn more Next.js basic concepts:

https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

https://nextjs.org/docs/basic-features/pages

## Basic structure to start 📝

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

## Create our first example page 👶

Go ahead into pages folder, and create a new file, called "about" for example.
I recommend you to install a VS extension that provides you a React syntax snippet to start coding faster any component or page.
So I have it, and if a just write "rafce" I get a snippet called "react arrow function export component".
Now, if you go to your browser, and in the URL you write a slash and "about", you will go directly into our new about component,
wow! it looks like something magic...

⚠️ Note: Pages components has to be named with lower initial letter. ⚠️

## For the css 🎨

We are going to use the css modules.
So to code the styles for one component or page,
we go into styles folder and create a new file called, for example, Navbar.module.css,
Now we back to Navbar.jsx to import this new style file:
import styles from "../styles/Navbar.module.css"
And now we can set styles in our html tags with className={styles.container}

# 🖌️ Let's start with frontend 🖌️

## 0️⃣ Navbar component 🗺️

Don't use <img> tag, use better <Image> tag provides by Next.js.
It's very common and a noob mistake that we experiment an error like this:
Server Error --> Error: Image with src "/img/telephone.png" must use "width" and "height" properties or "layout='fill'" property.
This error says us we have to define a width/height for the Image

## 1️⃣ Slider component 🎞️

Remember to start with the basic template provides by the snnipet "raf" React Arrow Function Export Component, and now remember to call it in de Index.js, under the <Head>.

To go next/prev image in slider, I need to define a stateHook for an index.
The useState hook lets you manage state throughout your application.

⚠️ Note: Not forget to import it --> import { useState } from 'react' ⚠️

The stateHook will begin in 0 --> const [index, setIndex] = useState(0)
in 0 because 0 will be the main image (first item (image) in slider)

👨‍🏫 To learn more about the useState() hook, visit:

https://www.coffeeclass.io/articles/nextjs-usestate

![slider](./public/img/readme/slider.png)

## 2️⃣ ProductList and ProductCard components 📋

Once again, we start creating two new component like jsx files,
and two new modules.css, connect both component between them,
(insert a few ProductCard inside the ProductList and insert the ProductList under the Slider in the index.js)
The rest is pure html and css.

![product-list](./public/img/readme/product-list.png)

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

![product-page](./public/img/readme/product-page.png)

## 4️⃣ Shopping Cart Design 🛒

I create a new jsx file in Pages folder, without its own folder,
because it would be an independent page.
Like you alredy know, let's start with the "rafce" snippet,
and create also its css module, and import it.
This page will have two parts,
first, the purchase resume info,
second, the checkout container.

![cart-page](./public/img/readme/cart.png)

## 5️⃣ Order Tracking Page Design

I create a new folder called "orders" and inside it, 
like the productPage, we create the [id].jsx file (rename it inside the file to Order),
because we're going to fetch data according the id.
In this part, we have to create manually de different status for the order:
 - done
 - inProgress
 - unDone
It will change automatically with an index and with three simple conditions.

⚠️ Note: Pay attention to the Order.module.css ⚠️

![orders-page](./public/img/readme/orders-page.png)

## 6️⃣ Responsive Design

Let's make the design responsive, and to start,
you have to enable the "inspect view" in Chrome (or other browser),
and press the "mobile view" button at the top right screen,
and select a device mobile.

![No Responsive Design](./public/img/readme/responsive-1.png)
before...

![Responsive Design](./public/img/readme/responsive-2.png)
... and after.

👨‍🏫 To learn more about breakpoints for responsive designs:

https://www.lambdatest.com/blog/how-to-use-css-breakpoints-for-responsive-design/


## Frontend finished !

In next steps, we're going to create our own API,
we're going to set up the database in MongoDB,
we're going to add our products,
we will be able to delete them, update them, 
and a user will be able to buy any products,
and we're going to activate our checkout button,
with an official payment method... 🤯

# 👨‍💻 Now it's time to backend 👨‍💻

## MongoDB SetUp 📚

In this project I'm going to use Mongo Database to store anything,
but firstable, you need to download and install MongoDB Community and MongoDB Compass.

MongoDB Community edition is a free, 
open-source database that is a popular option for powering modern applications. 
It's a document-based and distributed database that was designed to leverage cloud technologies.
The Community version of our distributed database offers a flexible document data model along with support for ad-hoc queries, 
secondary indexing, and real-time aggregations to provide powerful ways to access and analyze your data.

To download MongoDB Community:

https://www.mongodb.com/try/download/community

For more information about how to install (MongoDB Manual):

https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

![](./public/img/readme/mongodb-community-download.png)

MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment. 
Compass is free to use and source available, and can be run on macOS, Windows, and Linux.

To download MongoDB Compass (optional):

https://www.mongodb.com/try/download/compass

For more information about Compass:

https://www.mongodb.com/es/products/compass

![](./public/img/readme/mongodb-compass-download.png)

Now follow the steps:

1. Create a project
2. Create the database
3. Create admin user
4. Create IP access
5. Connect to application

![](./public/img/readme/mongodb-create-project.png)
![](./public/img/readme/mongodb-create-database.png)
![](./public/img/readme/mongodb-create-admin-1.png)
![](./public/img/readme/mongodb-create-admin-2.png)
![](./public/img/readme/mongodb-add-ip-access.png)

Video Example:

https://www.youtube.com/watch?v=esKNjzDZItQ&t=529s

To connect the cluster to our app,
we need to create a new enviroment file in root level folder,
and paste inside it the secret key provides by MongoDB Atlas like this:

MONGO_URL = paste your secret key ...
MONGO_URL = mongodb+srv://user:password@cluster.mongodb.net/databaseName?retryWrites=true&w=majority
(and replace the example user, password and databaseName name for your admin user, his password and the database name)

⚠️ Note: you have to write same database name in .env file and in MongoDB Atlas, else it won't works. ⚠️

![](./public/img/readme/mongodb-connect-1.png)
![](./public/img/readme/mongodb-connect-2.png)
![](./public/img/readme/mongodb-connect-3.jpg)

⚠️ Note: Don't forget to restart the application when you create and add your first secret key in an env file. ⚠️

What is an .env file ??
env file contains the individual user environment variables that override the variables set in the /etc/environment file. 
You can customize your environment variables as desired by modifying your .env file.
env files allow you to put your environment variables inside a file. 
You just create a new file called .env in your project and slap your variables in there on different lines. 
To read these values, there are a couple of options, but the easiest is to use the dotenv package from npm.

👨‍🏫 To learn more about .env file:

https://www.youtube.com/watch?v=KJE4LtAxLEw&ab_channel=Bitfumes

👨‍🏫 To learn about dotenv library:

https://www.youtube.com/watch?v=hZUNMYU4Kzo&ab_channel=dcode

👨‍🏫 To learn how to hide api keys in .env when push code to github:

https://www.youtube.com/watch?v=17UVejOw3zA&ab_channel=TheCodingTrain

Now, you need to install mongoose with npm to connect our project with MongoDB Atlas:

- npm install mongoose

And finally, to connect it, we're going to use and example code provides by Next.js team:

https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js

The variable "cached" with all connections we need to do with MongoDB along the project and execution.
Remember when you're working with a db, you need to open and close connection for any object action,
and if we're alredy connected, that makes no sense we connect it again and again.
This is the most important part you need to remember to understand the example code for connection,
so let's copy that file example content, and we're going to create a new folder (in root level folder)
called util, for example, and inside it, create a new js file called mongo for example.

Anyway, I let you the code here:

```js
import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
```

## Create our main two models 🤖

First one will be the product (pizza),
and second one will be the order,
so we have to create a new folder (in root level folder)
called models for example.

Now, create a js file called "Product".

Firstable, you need to import mongoose functionalities,
and create a schema to define the Product model.

```js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true, // you can't create a product without title
            maxlength: 60
        },
        description: {
            type: String,
            required: true,
            maxlength: 200
        },
        image: {
            type: String, // the url
            required: true
        },
        prices: {
            type: [Number], // if you generalize the type by writing just "Array", that will accept any data type, and it doesn't what we want, we want a number for price
            required: true
        },
        extraOptions: {
            type: [ // remember that Options are composed by one string and one price, so the type will be an object array !!
                {
                    text: { type: String, required: true },
                    price: { type: Number, required: true }
                }
            ],
        }
    },
    { timestamps: true } // it going to give us a date and updated date, for example when we create a new pizza object, it will have a creation date (it's a common praxis)
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema); // the condition is, if there's alredy a Product model in database, use it and don't create it again, else create new one Product model
```

Let's go with our second model, the Order model.

```js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
            required: true, // you can't create a order without customer
            maxlength: 60
        },
        address: {
            type: String,
            required: true,
            maxlength: 200
        },
        total: {
            type: Number,
            required: true
        },
        status: {
            type: Number,
            default: 0 // when we create a new order, the initial status will be always 0 at first
        },
        paymentMethod: { // if it's cash, it will be 0, and if it's payable, it will be 1
            type: Number,
            required: true
        }
    },
    { timestamps: true } // it going to give us a date and updated date, for example when we create a new order object, it will have a creation date (it's a common praxis)
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema); // the condition is, if there's alredy a Order model in database, use it and don't create it again, else create new one Order model
```

## How to use these models 🤷🏻‍♂️

It's really easy because we don't have to create any "express server" and any other framework servers,
only thing we should do is going inside pages folder, and inside api folder.
As you can see there's an example (hello.js), and it's works exactly the same for pages,
remeber we can reach our pages by writing its folder and any id or index pages...
so it's going to be exactly the same thing, so for this example, whenever we go to localhost 3000 and hello.js,
we're goig to run its function and it's going to return us the asnwer (John Doe in hello.js example).
Let's check it...

![](./public/img/readme/api-helloJs-example.png)

So let's copy this function inside Hello.js api example, delete this file,
and create two new folders called Orders and Products.

Let's start with Products.
When we make a post request for the endpoint localhost:3000/api/products
we will be able to add new data, a new pizza.
Inside pages/api/products/ create a new js file called index.js,
to define a POST and GET method.

```js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../util/mongodb-connection" // to use MongoDB
import Product from "../../../models/Product"

export default async function handler(req, res) { // we make this function asynchronous because we're going to make our CRUD operations and there is no way to know how long it's going to take
    // res.status(200).json({ name: 'John Doe' }) ... the default example

    // firstly I'm going to check mu request method
    // to handle that let's structure with this:
    const { method } = req;

    if (method === "POST"){
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);

        } catch (err) {
            res.status(500).json(err); // return it directly becasuse I don't have any handler error
        }
    }
}
```

⚠️ Note: In same index.js file we made the Post method before... now Get method would be... ⚠️

```js
import dbConnect from "../../../util/mongodb-connection" // to use MongoDB
import Product from "../../../models/Product"

export default async function handler(req, res) { // we make this function asynchronous because we're going to make our CRUD operations and there is no way to know how long it's going to take
  // res.status(200).json({ name: 'John Doe' }) ... the example

  // firstly I'm going to check mu request method
  // to handle that let's structure with this:
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);

    } catch (err) {
      res.status(500).json(err); // return it directly becasuse I don't have any handler error
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err); // return it directly becasuse I don't have any handler error
    }
  }
}
```

## Insert documents in database by PostMan or MongoDB Atlas 📄

To do this, you can choose between two options to test data:

1. Insert a few documents manually by Collection section in MongoDB Atlas
2. Insert a few documents automatically by PostMan Desktop Agent

Postman is an application used for API testing. 
It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, 
through which we obtain different types of responses that need to be subsequently validated.

You can manage your API request by Postman directly its web,
but if you prefer, you can download and install in your pc:

https://www.postman.com/downloads/

To avoid CORS limitations and to use PostMan with localhost,
you need to install PostMan Desktop Agent:

https://www.postman.com/downloads/

Here you have a useful video from PostMan YouTube channel:

https://www.youtube.com/watch?v=6xlJUx2ZMy4&ab_channel=Postman

![](./public/img/readme/postman-insert-document-automatically.png)

You can create documents easier and faster using PostMan like in image before, but in this case, 
I'm going to insert three example product objects manually in MongoDB Atalas.

![](./public/img/readme/mongodb-create-database-2.png)
![](./public/img/readme/mongodb-create-collection-products.png)
![](./public/img/readme/mongodb-insert-document-manually.png)

Create two more documents till hace pizza-1, pizza-2 and pizza-3.

⚠️ Note: Be careful with fields' types ⚠️

```json
{
    "title": "pizza-1", // String
    "image": "/img/pizza.png", // String
    "description": "description-1", // String
    "prices": // Array
    [
        12, 13, 14 // Int32
    ],
    "extraOptions": // Array
    [
        { // Object
            "text": "Garlic Sauce", // String 
            "price": 2 // Int32
        }
    ],
    "createdAt": "2022-05-30T15:00:00.000+00:00", // Date without quotes
    "updatedAt": "2022-05-30T15:00:00.000+00:00", // Date without quotes
    "__v": 0 // Int32 ... VersionKey it's a automatic field in MongoDB
}
```

To see how to insert/edit documents manually in MongoDB Atlas:

https://github.com/Royal6969/pizza-delivery-app/issues/3

## Fetch data in Next.js with ServerSideRendering and Axios 🔁

If you develop a project in React before,
as you can remember, you have to go to index.js and in its Home function at begining,
you used to create a hook called "useEffect()" and you used to choose between Axios or a fetch function to do this.
But actually, the best feature of Next.js is we're able to make "Server Side Rendering",
but what we said it's mean??
It means in React we were rendering all components in Home function (index.js),
and after that, we were running our functions, we created the stateHooks, and after we were fetching data by using useEffect(),
but in Next.js, firstly we're fetching all data before rendering all those components,
and then we're showing those components with those props.
There is an absolute function that we can fetch data using Server Side Rendering!

- npm install axios

What is Axios ??
Axios is a promise-based HTTP Client for node. js and the browser. It is isomorphic 
(= it can run in the browser and nodejs with the same codebase). 
On the server-side it uses the native node. js http module, 
while on the client (browser) it uses XMLHttpRequests.

Axios is a promise based HTTP client for the browser and Node. js. 
Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. 
It can be used in plain JavaScript or with a library such as Vue or React.

👨‍🏫 To learn more about Axios, visit its official website:

https://axios-http.com/docs/intro

Now, in main index.js file in pages folder ...

```js
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({ productList }) { // <-- set props here in function will use it
  return (
    <div className={styles.container}>

      <Head>
        <title>Pizza Delivery in Seville</title>
        <meta name="description" content="Best pizza in the capital city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <ProductList productList={productList} /> {/* <-- set props here in component will use it */}

    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products"); // it's going to fetch all data, so we're going to use this response as a prop here
  
  // so, to do that, we should return our props
  return {
    props: { // <-- define props here
      productList: res.data
    }
  }
}
```

In ProductList.jsx file we have to make a change:

```js
import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({ productList }) => { // <-- props here
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST FIZZA FOR GOLFOS</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident quis laborum repudiandae explicabo dolores error, illum inventore perferendis reiciendis placeat quaerat, rem eum laudantium similique itaque earum odio corporis modi. Laudantium, sint, voluptatem quasi veniam inventore voluptas sit officiis suscipit ipsa cumque ea id beatae itaque vel voluptates natus!</p>
      
      <div className={styles.wrapper}>
          {/* <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}

          {/* now, we dont' need to repeat this ProductCard */}
          {productList.map((product) => (
            <ProductCard key={product._id} product={product} /> // for each pizza we have different ID, so you need to specify the key in component inside map() function
          ))}
      </div>
    </div>
  )
}

export default ProductList
```

And in ProductCard.jsx file we have to interpolate object's attributes (fields):

```js
import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product }) => { // <-- prop here
  return (
    <div className={styles.container}> {/* now you can "interpolate object's attributes" */}
      <Image src={product.image} alt="" width="500" height="500" />
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>{product.prices[0]}€</span>
      <p className={styles.desc}>{product.description}</p>
    </div>
  )
}

export default ProductCard
```

![](./public/img/readme/api-product-json-view.png)
![](./public/img/readme/product-list-test-1.png)

## Navigation - Linking components 🔗

To link and design the navigation in our Next project,
in component we want to make a link to another component,
we need to import Link from Next,
and wrap between Link tags the element we want the user touch to navigate.

⚠️ Note: Be careful with extra spaces inside Link tags ... Next.js will undertand it like you're defining more children and it is not allow. ⚠️

https://stackoverflow.com/questions/61651497/next-js-error-react-children-only-expected-to-receive-a-single-react-element-c

Our first Link will be in ProductCard.jsx, for the pizza image,
to navigate to its product ([id] file, remember?) with ID provide by MongoDB.

```js
import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Link from 'next/link'

const ProductCard = ({ product }) => { // <-- prop here
  return (
    <div className={styles.container}> {/* now you can "interpolate object's attributes" */}
      
      {/* a warning advice us to write passHref param to navigate with the product ID (ObjectId in MongoDB) */}
      <Link href={`/product/${product._id}`} passHref>
        <Image src={product.image} alt="" width="500" height="500" />
      </Link>

      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>{product.prices[0]}€</span>
      <p className={styles.desc}>{product.description}</p>
    
    </div>
  )
}

export default ProductCard
```

## Fetch a specific product 🔎

In [id].jsx file inside pages folder, product folder:

```js
import axios from 'axios';

const Product = ({ product }) => { functionContent } // <-- props which function will use

export const getServerSideProps = async ({ params }) => { // params it's a type of prop which takes the product ID
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`); // it's going to fetch the specific product with its ID (params)
  
  return {
    props: { // <-- props here
      product: res.data
    }
  }
}

export default Product
```

Now we have to create our api endpoint for a product.
Go to pages folder, api folder, products folder,
and create a new file called [id].js
Copy all content from the api before (index.js) and paste it here in the new file.
Let's see what's new in this [id].js file:

```js
import dbConnect from "../../../util/mongodb-connection"
import Product from "../../../models/Product"

export default async function handler(req, res) {

  const { 
      method,
      query: { id } // we'll need an ID (it's similar to params, remember?) 
    } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);

    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err);
    }
  }
}
```

## Select sizes, ingredients, quantity and change price 🛍️

We're going to make all these features inside the product component ([id].jsx)

```js
import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Product.module.css'
import { useState } from 'react'
import axios from 'axios';

const Product = ({ product }) => { // <-- props which function will use

  const [size, setSize] = useState(0); // index 0 is first possible price (7.49 in the example object)
  const [price, setPrice] = useState(product.prices[0]);
  
  // when we select an ingredient, and we press AddTocart button, to see in cart the ingredients choosen:
  const [extras, setExtras] = useState([]); // empty array for when user refresh page, any ingredients are selected

  const [quantity, setQuantity] = useState(1); // start in 1 becasuse is the minimum allowed to buy

  const changePrice = (number) => {
    setPrice(price + number);
  }

  const handleSize = (sizeIndex) => { // I'm going to take this sizeIndex and then I'm going to increase this size but before I have to change this product price... to do that I have to create a new useState() and a function to change the price before this function
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);

    // finally I have to change price
    changePrice(difference);
  }

  const handleChange = (e, option) => {
    // firstly I'm going to check whether we check the checkbox or not
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]); // ellipsis means spread values inside (prev) ... and after we add the new one ingredient choosens
    } else { // but if we uncheck...
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={product.image} alt="" layout='fill' objectFit='contain' />
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.price}>${price}</span>
          <p className={styles.description}>{product.description}</p>

          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => handleSize(0)}>
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Small</span>
            </div>

            <div className={styles.size} onClick={() => handleSize(1)}>
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Medium</span>
            </div>

            <div className={styles.size} onClick={() => handleSize(2)}>
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Large</span>
            </div>
          </div>

          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>

            {product.extraOptions.map((option) => (
              <div className={styles.option} key={option._id}>
              <input 
                type="checkbox"
                id={option.text}     // we're going to choose ingredients according to this id
                name={option.text}   // to update our state
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)} // handleChange() function receives an (e)vent and the option 
              />
              <label htmlFor="double">{option.text}</label>  {/* in htmlFor="inputId" we have to write the id in previous input */}
            </div>
            ))}

          </div>
          
          <div className={styles.add}>
            <input
              onChange={(e) => setQuantity(e.target.value)} 
              type="number" 
              defaultValue={1} 
              className={styles.quantity} 
            />
            <button className={styles.button}>Add to Cart</button>
          </div>          
        </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => { // params it's a type of prop which takes the product ID
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`); // it's going to fetch the specific product with its ID (params)
  
  return {
    props: { // <-- props here
      product: res.data
    }
  }
}

export default Product
```

Explanation of handleSize() function (with pizza-1 for example):
our initial price is 12 euros, when I click any of those sizes we're going to send our sizeIndex,
and firstly we're going to take difference product prices and sizeIndex, for example, the medium one,
it's going to be prices and one = 13 euros, but we didn't update our size yet,
so when I say product prices and size, it's going to be still 0 when is 12 euros,
but 13 euros - 12 euros = 1 euro, and after that I'm going to set my size, 
and it's going to be 1 in this example, and finally, I'm going to update my price: 12€ + 1€ = 13€

Explanation about how changePrice() function affect inside handleChange() function:
we're going to have an initial price (smallest pizza price),
and when I click any size or when I click any ingredient we're going to add an additional price to initial price.
Now I can do the same with ingredients,
for spicy sauce the difference will be 2€,
and when I uncheck we're going to substract these 2€ again,
so it's going to be: spicy sauce selected = 14€ ... spicy sauce unselected = 12€

Explanition of how to select and add ingredients in handleChange() function:
firstly if we check our item we're going to set extras,
and we're going to take (prev)ious items in our array
and we're going to add them again, and additionally,
we're going to add our option...
after in else part,
we're going to use filter method,
if this item and id is not equal to this option id,
just keep them inside if they are equal just removing using this filter

Video test selecting ingredients:

https://github.com/Royal6969/pizza-delivery-app/issues/4

## How to pass products to cart component and how it manages them by itself 📦

Whenever we click AddToCart button, shopping cart button has to update its badge (products counter in order),
to handle that, we have three ways:

1. Use "prop drilling" (not a good idea)
2. Use a context API
3. Use state management libraries (that's what we're going to do)

For the third option, we're going to use Redux Toolkit.

- npm install @reduxjs/toolkit
- npm install redux
- npm install react-redux

⚠️ Note: You need to install these three, the toolkit, the core, and compatibility with React (remember Next.js comes from React.js) ⚠️

What is Redux ??
Redux is a predictable state container designed to help you write JavaScript apps 
that behave consistently across client, server, and native environments and are easy to test. 
While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.

In simple words, Redux is a store to store and management the state of the variables in your app.

https://medium.com/swlh/what-is-redux-b16b42b33820

👨‍🏫 To learn more about Redux and how to use as framework too, visit its official website:

https://redux.js.org/introduction/installation

And the official website in collaboration with React:

https://react-redux.js.org/introduction/getting-started

Now, you have to create a new folder called redux in root level project folder,
and let's create our first slice file, called cartSlice.js

What is a slice ??
A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, 
typically defined together in a single file. 
The name comes from splitting up the root Redux state object into multiple "slices" of state.

👨‍🏫 To learn more about slices in Redux:

https://redux.js.org/tutorials/essentials/part-2-app-structure#:~:text=A%20%22slice%22%20is%20a%20collection,multiple%20%22slices%22%20of%20state.

Now in the new slice file, we have to create a cart slice, with a name, with a initial state and with its reducer...
In conclusion, we're going to pass a product to cart as a payload and we're going to take the quantity and the price.
After, when we make our payments, we're going to go to the order page and we're going to reset our cart here so it's going to be 0 again

You can understand the slice like a piece of product's state, or a component's action which change the product's state.

and ... what is a reducer ??
A reducer is a function that determines changes to an application's state. 
It uses the action it receives to determine this change (manipulates that data when it recieves an action).
The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload) // we're going to pass our pizza details as payload 
      state.total += action.payload.price * action.payload.quantity; // at beginning out total number will be 0, 
    },
    reset: (state) => {
      state = initialState;
    }
  }
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
```

## How to use the slice and its reducer ⚙️

In the redux folder we created before, now create a new file called store.js and inside it, 
create a default function to call the cart reducer before:

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer
    }
});
```

How we're going to use this store.js ??
I want to reach my cart slice and my actions everywhere inside my application,
so if I go to pages, and to _app.js file, I have to wrap my application with the redux provider:

```js
import Layout from '../components/Layout';
import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
```

All right, we're able to this data from anywhere in our app.

## How to update the badget's counter in shopping cart icon in navbar 🔢

Let's go to our slice again, and let's add one more variable called quantity.

```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // I'm going to create a slice method
  // we have to create a cart slice, with a name, with a initial state and with its reducer
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    // we're going to pass a product to cart as a payload and we're going to take the quantity and the price
    addProduct: (state, action) => {
      state.products.push(action.payload) // we're going to pass our pizza details as payload 
      state.quantity += 1; // when user add a product, it's going to increase the quantity
      state.total += action.payload.price * action.payload.quantity; // at beginning out total number will be 0, 
    },
    // when we make our payments, we're going to go to the order page and we're going to reset our cart here so it's going to be 0 again
    reset: (state) => {
      state = initialState;
    }
  }
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
```

Now we have to go to navbar component, and firtly, import a react-redux's hook called useSelector,
create a new const for the quantity and set it in the counter

```js
import Image from 'next/image'
import React from 'react'
import styles from "../styles/Navbar.module.css"
import { useSelector } from 'react-redux';


const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      {/* rest of cart's content that I've not copied */}

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt='' width="30px" height="30px" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
    </div>
  )
}
```

Now we can see, in product view ([id].jsx), the initial counter is 0, 
and we want that we click the AddToCart button, it's going to dispatch a product reducer,
and it's going to increase the number and the total order price.

To do that, we need to go to [id].jsx file (product) and in AddToCart buuton, call another function:

```js
  <button 
    className={styles.button}
    onClick={handleClick}
  >
    Add to Cart
  </button>  
```

Now we have to import another react-redux's hook called useDispatch, and import the action in slice you want to use too,

```js
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
```

declare a const called dispatch = useDispatch(); to use its actions,

```js
const dispatch = useDispatch();
```

and the handleClick would be:

```js
const handleClick = () => {
    dispatch(
      addProduct( // my action name
        {
          ...product, // ellipsis spreads what product includes inside it... it's the action.payload
          extras,
          price,
          quantity
        }
      )
    )
  }
```

⚠️ Note: don't forget, in navbar.jsx, to wrap between <Link> tags provides by Next.js, the shopping cart button ⚠️

```js
<Link href="/cart" passHref></Link>
```

👨‍🏫 To learn more about react-redux hooks:

https://react-redux.js.org/api/hooks

## Let's use all information of products selected in cart page 🛒

Go to cart.jsx and once again, we're going to use dispatch and selector from react-redux,
so import them, declare a const for both, and map the cart looking for its products:

```js
// more imports here
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (

      {/* table starts */}

        {/* tables' fields */}
          {cart.products.map((product) => (
            <tr className={styles.tr} key={product._id}>
            <td>
              <div className={styles.imgContainer}>
                <Image src={product.image} layout="fill" objectFit="cover" alt="" />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {product.extras.map((extra) => (
                  <span key={extra._id}>{extra.text}, </span>
                ))}
              </span>
            </td>
            <td>
              <span className={styles.price}>{product.price}€</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>{product.price * product.quantity}€</span>
            </td>
          </tr>
          ))} 
        {/* table ends */}

      {/* subtotal, discount, total and checkout here */}
  )
}

export default Cart
```

⚠️ Note: for extras (ingredients) we need another map()... it's a map inside a map! ⚠️

## Add a payment method. PayPal button 💳

- npm install @paypal/react-paypal-js

Let's take an example from PayPal GitHub documentation:

https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default

Basically, we're going to give our options, like amount, our currency and our button style,
and after that, we're going to create a button wrapper,
and this library uses context API inside, and it's take our options and creates a paypal button,
and we're going to use this button in our component.

See all code what I added from paypal-github web to my cart.jsx file.
link here

![](./public/img/readme/cart-paypal-1.png)

But it looks extrange, and I want to enable paypal button after user clicks checkout button,
and also we can create another payment method which is cash on delivery.
To do that, I have to create a new state hook

```js
const [open, setOpen] = useState(false);
```

And just before checkout button, let's create a condition,
if open is true, show me paypal button, else just show me checkout button

```js
{open ? (
  <div className={styles.paymentMethods}>
    <button className={styles.payButton}>CASH ON DELIVERY</button>
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          components: "buttons",
          currency: "USD",
          // "disable-funding": "credit,card,p24", // to disable any other payment methods which collaborates with paypal
        }}
      >
        <ButtonWrapper currency={currency} showSpinner={false} />
        </PayPalScriptProvider>
    </div>
) : (
  <button onClick={() => setOpen(true)} className={styles.button}>
    CHECKOUT NOW
  </button>
)}
```

![](./public/img/readme/cart-paypal-2.png)

⚠️ Note: there are new styles for the new buttons in cart.module.css ⚠️

⚠️ Note: it's possible that you can experiment an error displaying paypal button after click in checkout button ⚠️
Access to XMLHttpRequest at 'https://www.sandbox.paypal.com/xoplatform/logger/api/logger' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

To get our personal paypal client-id, you have to create an account in PayPal Developer:

https://developer.paypal.com/home

1. Create a sandbox (select business account and your country)
2. Create a second one (selecting personal account)
3. Create an application
4. Paste in your code your client-id

![](./public/img/readme/paypal-process-1.png)
![](./public/img/readme/paypal-process-2.png)
![](./public/img/readme/paypal-process-3.png)

I've tested the payment and it works! 
(if you don't change the const amount value for order.total, the default value is 2€)

https://github.com/Royal6969/pizza-delivery-app/issues/2

## What this payment process return us? Creating an order.

If we go to onApprove in <PayPalButtons /> (when the payment is accepted),
we can get the details:

```js
onApprove={function (data, actions) {
  return actions.order.capture().then(function (details) {
    // Your code here after capture the order
    console.log(details);
  })
}}
```

![](./public/img/readme/order-details-1.png)

With this information we're able yo create an order and send our details after payment,
so let's go to create our API (another index.js and [id].js) in orders folder and take care of order enpoint.
Can you remember the steps ??

0. Create an index.js and [id].js files, and go to index.js
1. Import dbConnect and Order model
2. Create handler function with (req, res)
3. Inside it create request method
4. Call dbConnect() with await before for the promise
5. Create conditions for GET and POST methods
6. Copy all that and paste it in [id].js
7. In [id].js change POST method for PUT and add DELETE
8. Also add the query:{id} method in const for req
9. Export the handler in both files
10. In index.js, inside POST condition, create try/catch like we made before for products

index.js
```js
import dbConnect from '../../../util/mongodb-connection'
import Order from '../../../models/Order'

const handler = async (req, res) => {

  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default handler;
```

Now come back to cart.jsx and in <PayPalButtons /> onApprove, we have to return an order creation, but for that, we have to create a function to create an order:

```js
const router = useRouter();
  
  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data); // what API use to create the order and the data sent
       
      // control response
      res.status === 201 && router.push("/orders/" + res.data._id); // if response load status equals to 201 just redirect customer to another page, and for redirect we have to use the hook called useRouter
      dispatch(reset());
    
    } catch (err) {
      console.log(err);
    }
  }

  onApprove={function (data, actions) {
    return actions.order.capture().then(function (details) {
      // Your code here after capture the order
      // console.log(details); // to check we're receiving customer data
            
      const shipping = details.purchase_units[0].shipping; // including customer name and address
            
      createOrder({ // go to order model file to remember the fields
        customer: shipping.name.full_name,
        address: shipping.address.address_line_1,
        total: cart.total,
        method: 1
      });
    });
  }}
```

See file commit changes to see full code in cart.jsx file.

Now we have to come back yo cartSlice.js to remodel the order reset action:

```js
// when we make our payments, we're going to go to the order page and we're going to reset our cart here so it's going to be 0 again
  reset: (state) => {
    state.products = []
    state.quantity = 0;
    state.total = 0; 
    }
```

⚠️ Note: Make sure that order fields you defined in order model match with its fields in cart.jsx to create an order ⚠️

Now we have to go to [id].jsx in orders page, to create once again the SSR function. (don't forget to import axios)
After that, set "order" as the main prop in function, and now you can interpolate order's fields.

⚠️ Note: const status value is not 0, now it's order.statuss ⚠️

![](./public/img/readme/first-order-test.png)

## Implementing Cash Payment Method 💸

When user clicks in CashOnDelivery button, it's going to open a modal and it's going to ask for name, address and other informations.
Go to cart.jsx again, to define a new state hook:

```js
const [cash, setCash] = useState(false);
...
<button className={styles.payButton} onClick={() => setCash(true)}>CASH ON DELIVERY</button>
```

Now we have to create the modal, so let's create a new jsx file called CashModal.jsx in components folder (and its module.css in styles folder).

Define two state hooks for customer(name) and his address.
Set customer state hook as a onChange event in the input.

```js
import React, { useState } from 'react'
import styles from '../styles/CashModal.module.css'

const CashModal = ({ total, createOrder }) => {

  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay 12€ after delivery.</h1>

        <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input 
            type="text" 
            placeholder="Sergio Díaz" 
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.item}> {/* optionally you can add the number field to order model */}
          <label className={styles.label}>Phone Number</label>
          <input 
            type="text"
            placeholder="651 23 45 67" 
            className={styles.input}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            type="text" 
            placeholder="Av/ de las Ciencias, n10, 1A" 
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className={styles.button} onClick={handleClick}>
          Order
        </button>

      </div>
    </div>
  )
}

export default CashModal
```

⚠️ Note: Check styles in mi GitHub ⚠️

Go back to cart.jsx to call CashModal component with a condition:

```js
{cash && ( // if cash state is true
  <CashModal total={cart.total} createOrder={createOrder} /> // call to CashModal component and pass order total to create an order ... and them would be the props in CashModal.jsx
)}
```

Now let's create the handleClick function in CashModal.jsx:

```js
const handleClick = () => {
  createOrder({
    customer,
    address,
    total, 
    paymentMethod: 0 // 0 was cash on delivery
  });
}
```

![](./public/img/readme/cash-modal.png)

# 👔 Admin Actions - Management Functionalities 👔

Let's create inside pages folder, anhother folder called admin, and inside it, a new index.jsx file (with its style file).

We're going to have a container and it's going to contain two items,
first one is going to include our ProductList, and second one will include OrderList.
(visit my styles folder to see the css)

Now it's time to our favourite step, the SSR function.

```js
export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data
    }
  }
}
```

Now we can set the orders and products props in main function, 
and create the map function which will get all products, 
and we must to interpolate its fields to display the products in the view.

```js
const index = ({ orders, products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>

          {products.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.image}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}€</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
          
        </table>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        
        <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>

            <tbody>
              <tr className={styles.trTitle}>
                <td>{"9867963764926349284".slice(0, 5)}...</td>
                <td>Sergio Díaz</td>
                <td>45€</td>
                <td>paid</td>
                <td>preparing</td>
                <td>
                  <button className={styles.button}>Next Stage</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}
```

![](./public/img/readme/admin-page-products.png)

Now we can do the same for orders. It's time to map de orderList too and interpolate fields.
The <tbody> for orders must looks like like this:

```js
const status = ["preparing", "on the way", "delivered"];
...
{orderList.map((order) => (
  <tbody key={order._id}>
    <tr className={styles.trTitle}>
      <td>{order._id.slice(0, 5)}...</td>
      <td>{order.customer}</td>
      <td>{order.total}€</td>
      <td>
        {order.paymentMethod === 0 // if paymentMethod is equal to 0, then render a span with cash word
          ? <span>cash</span>
          : <span>paid</span>
        }
      </td>
      <td>{status[order.status]}</td>
      <td>
        <button className={styles.button}>Next Stage</button>
      </td>
    </tr>
  </tbody>
))}
```

![](./public/img/readme/admin-page-orders.png)

And now, to change the status clicking NextStage button, first we create the handle function for that:

```js
...
const handleStatus = async (id) => {
  const item = orderList.filter((order) => order._id === id)[0]; // first, we have to find the order
  const currentStatus = item.status; // to save the (current) status for the order found before

  try {
    // it will return us the updated version of this order
    const res = await axios.put(
      "http://localhost:3000/api/orders/" + id,
      { // we should send here what we're going to change (status)
        status: currentStatus + 1 // order found before current status +1
      }
    );

    setOrderList([
      res.data, // the updated version of this order
      ...orderList.filter((order) => order._id !== id) // to delete the previous version of this order
    ])

  } catch (err) {
    console.log(err);
  }
}
...
<button 
  className={styles.button}
  onClick={() => handleStatus(order._id)}
>
  Next Stage
</button>
```

And in its api (pages --> api --> orders --> [id].js) check the PUT method:

```js
if (method === "PUT") {
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, // if we do this, it's not going to return to updated order, so to prevent this error...
      {
        new: true, // ... we should write here this, to return the nearest version
      }
    );
    res.status(200).json(order);
    
  } catch (err) {
    res.status(500).json(err);
  }
}
```

And now if you press the NextStage button the order status changes to its next stage. 

## Delete Product Action 🗑️

In delete button, set a onClick function calling a handleDelete function:

```js
<td>
  <button className={styles.button}>Edit</button>
  <button 
    className={styles.button}
    onClick={() => handleDelete(product._id)} // we have to pass the id because we're going to delete it with its id
  >
    Delete
  </button>
</td>
```

⚠️ Note: In map function, I've changed products for productList (to use the new useState() that you'll see below this) ⚠️

And like always, at beginning function (above the return):

```js
// we have to create here two state hooks, because when we delete any product or order, it will delete in MongoDB but we have to refresh the components to see the real changes in the view
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/products/" + id);
      setProductList(productList.filter((product) => product._id !== id)); // for each product it going to check its id, if it's equal it's going to delete the product, else it's going to let the product like it was

    } catch (err) {
      console.log(err);
    }
  }
```

In the api for products ([id].js), change delete function for this:

```js
if (method === "DELETE") {
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json("The product has been deleted!");
    
  } catch (err) {
    res.status(500).json(err);
  }
}
```

and ... delete action for products done!

## Authentication Login Process 🛡️

Let's go to pages --> api --> and create a new file called login.js
Now we have to install a library called cookie:

- npm install cookie

Also you have to know that there's a library very used to set cookies in React called react-cookies.
👨‍🏫 To learn more about this other library:

https://reactgo.com/react-set-cookie/

Basically we can create username and password in our .env file,
and why we're doing that ??
Because it's a single user application, we're not goiung to have multiple admins or any user,
so basically we can assign our username and password and we can just use it (don't forget to assign a token too):

```js
MONGO_URL = mongodb+srv:.........................................................................
ADMIN_USERNAME = ........
ADMIN_PASSWORD = ........
TOKEN = .................
```

⚠️ Note: restart the application each time you change the env file ⚠️

Comming back to login.js, we have to import the cookie library, and create a handler function for login process (with a req/res) and export it.

```js
import cookie from 'cookie'

const handler = (req, res) => {
  if (req.method === "POST") { // if request method is POST we're going to try to handle login process
    const { username, password } = req.body; // I'm going to take user name and password from request and body

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      res.setHeader( // if validations is correct, we're going to send a cookie
        "Set-Cookie", 
        cookie.serialize("token", process.env.TOKEN,
        { // some options
          maxAge: 60 * 60,    // 1 hour
          sameSite: "strict",
          path: "/",          // cookie for all app
          // secure // you must set here secure option for https in production, but in developer mode we use http only
        }
      ))

      res.status(200).json("Succesfull");
    
    } else {
      res.status(400).json("Wrong credentials!");
    }
  }
}

export default handler
```

Now let's create a login page for our client side.
In pages --> admin --> create a new jsx file called login (and its css file).
(remember you name the file begining with lower case letter, 
but the name function has to begin with upper case letter because it's a component, a page, a view)

We start to define our three state hooks that we're going to use,
first one for userName (null), second one for password (null), and third one for error (false). 
Also define the useRouter hook because when we login as Admin we're not going to stay here in login page.

```js
const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);
const [error, setError] = useState(false);
const router = useRouter();
```

⚠️ Note: It's probable that your instinct make you write username like userName, but to help to cookie library to recognize your user, username must be written with lower case letter ⚠️

Inside return, create an structure like this:

```js
return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>

        <input 
          type="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)} 
        />

        <input 
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button className={styles.button} onClick={handleClick}>
          Sign In
        </button>

        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
)
```

And to handle the button would be a function like this:

```js
const handleClick = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/login",
        {
          username,
          password
        }
      )

      router("/admin");

    } catch (err) {
      // console.log(err);
      setError(true); // we're handling the error
    }
}
```

![](./public/img/readme/login-page.png)
![](./public/img/readme/login-token-test.png)

So what about admin page we made before? I'm going to use cookies again,
and if we don't have cookie or our token is not correct, we're going to be redirecting to login page again, but ... how can we do it?

Let's go back to admin.jsx and for the server side props we can also check our cookie,
remember all this function is happening in the server side so don't worry about cookie here.

How we're going to take our request? In the getServerSideProps() function:

```js
export const getServerSideProps = async (ctx) => { // ctx = context
  const myCookie = ctx.req?.cookies || ""; // if there's a request we're going to take cookie, and if there's no cookie it's going to be empty string

  if (myCookie.token !== process.env.TOKEN) { // if myCookie doesn't equal to token...
    // ... just block this process here and don't call any api request here
    return {
      redirect: { // this is a method for Next.js that we can use redirect and inside this object we can set:
        destination: "/admin/login",
        permanent: false
      }
    }
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data
    }
  }
}
```

I made a video to show you if you delete the cookie and refresh admin page, 
you will exit from admin page being redirected to login page,
but if you don't delete the cookie, if you refresh, you will still being in admin page:

https://github.com/Royal6969/pizza-delivery-app/issues/5

## Add Product Action ➕

We have to go to index page (index.js in pages folder ... where is the home function).
Firstly we have to set cookies for admin again in SSR function:

```js
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products"); // it's going to fetch all data, so we're going to use this response as a prop here
  
  // so, to do that, we should return our props
  return {
    props: { // <-- define props here
      productList: res.data,
      admin // the new prop for admin logged
    }
  }
}
```

Don't forget to write our new prop in the function header

```js
export default function Home({ productList, admin }) {}
```

Now, we have to create a new component for add button and its css file (AddButton.jsx).

```js
import React from 'react'
import styles from '../styles/AddButton.module.css'

const AddButton = ({ setClose }) => {
  return (
    <div 
      className={styles.mainAddButton}
      onClick={() => setClose(false)}  // when I click this button I'm going to update my state to false
    >
      Add New Product
    </div>
  )
}

export default AddButton
```

When this button is pressed, it's going to show us a modal.
To set it as open/close, we need to define a state hook in Home function.

```js
export default function Home({ productList, admin }) { // <-- set props here in function will use it
  
  const [close, setClose] = useState(true); // basically if it's true we're not going to see our modal, and if it's false we're going to open it here in this home page
  
  return (
    <div className={styles.container}>

      <Head>
        <title>Pizza Delivery in Seville</title>
        <meta name="description" content="Best pizza in the capital city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />

      {admin && <AddButton setClose={setClose} />}

      <ProductList productList={productList} /> {/* <-- set props here in component will use it */}

      {!close && <Add setClose={setClose} />} {/* if it's not close call another component */}
    </div>
  );
}
```

We have to create this second one component called Add.jsx

Firstable, we have to pass the setClose prop

```js
const Add = ({ setClose }) => {} // we need the state to close/open modal as a prop
```

To wrap all content, let's make two div

```js
<div className={styles.container}>
  <div className={styles.wrapper}>
    ...
  </div>
</div>
```

For close button we make a span

```js
<span 
  onClick={() => setClose(true)} // if we click this button it's going to be true again and the modal will close
  className={styles.close}
>
  X
</span> 
```

To choose an image

```js
<div className={styles.item}>
  <label className={styles.label}>
    Choose an image
  </label>

  <input type="file" onChange={(e) => setFile(e.target.files[0])}/> {/* [0] means we can't choose multiple files */}
</div>
```

For title and description

```js
<div className={styles.item}>
  <label className={styles.label}>Title</label>
  <input
    className={styles.input}
    type="text"
    onChange={(e) => setTitle(e.target.value)}
  />
</div>

<div className={styles.item}>
  <label className={styles.label}>Description</label>
  <textarea
    rows={4}
    type="text"
    onChange={(e) => setDescription(e.target.value)}
  />
</div>
```

For prices

```js
<div className={styles.item}>
  <label className={styles.label}>Prices</label>
  <div className={styles.priceContainer}>
    <input
      className={`${styles.input} ${styles.inputSmall}`} // we're creating one input for each pizza size
      type="number"
      placeholder="Small"
      onChange={(e) => changePrice(e, 0)}
    />
    <input
      className={`${styles.input} ${styles.inputSmall}`} // using multiple styles
      type="number"
      placeholder="Medium"
      onChange={(e) => changePrice(e, 1)}
    />
    <input
      className={`${styles.input} ${styles.inputSmall}`} // each input will be a litle bit smaller
      type="number"
      placeholder="Large"
      onChange={(e) => changePrice(e, 2)}
    />
  </div>
</div>
```

⚠️ Note: To use multiple classname, open backticks and to set one style, write dollar, open code brackets and choose your style.className, and for each one more, another ${style.className} ⚠️

For extras, we're going to create two inputs and one button,
first input is going to be extra text and second one will be its price,
and that's way re're using extraOptions and extra,
basically that extra is going to hold only the inputs

```js
<div className={styles.item}>
  <label className={styles.label}>Extra</label>
  <div className={styles.extra}>
    <input
      className={`${styles.input} ${styles.inputSm}`}
      type="text"
      placeholder="Item"
      name="text"
      onChange={handleExtraInput}
    />
    <input
      className={`${styles.input} ${styles.inputSm}`}
      type="number"
      placeholder="Price"
      name="price"
      onChange={handleExtraInput}
    />

    <button className={styles.extraButton} onClick={handleExtra}>
      Add
    </button>
  </div>
          
  <div className={styles.extraItems}>
    {extraOptions.map((option) => (
      <span key={option.text} className={styles.extraItem}>
        {option.text}
      </span>
    ))}
  </div>
</div>

<button className={styles.addButton} onClick={handleCreate}>
  Create
</button>
```

![](./public/img/readme/add-modal-view.png)

All hooks that we're going to need and the functions for inputs are these

```js
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);
  // you can use just one state and change every item in one function

  const handleExtraInput = (e) => {
    setExtra({
      ...extra, // previous version of extra
      [e.target.name]: e.target.value // name and price // we can search for how to handle multiple inputs in one handler
      // when we change those items it's going to update by using their value (name option in inputs)
    })
  }

  const handleExtra = (e) => {
    setExtraOptions((prev) => [ // previous one it's going to return
      ...prev, // previous extra options // this is how to set state using previous data
      extra // additionally these extra wich we have set in handleExtraInput function
    ]);
  }

  const changePrice = (e, index) => {
    // I'm going to find my current prices first and change its value and set prices after that 
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  }

  const handleCreate = async () => {
    const data = new FormData();
    
    data.append("file", file);
    data.append("upload_preset", "uploads") // to prevent 400 error bad request

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dxyivnn3n/image/upload", // https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload
        data
      );
      // console.log(uploadRes.data);

      const { url } = uploadRes.data; // to take the url from the image uoploaded
      const newProduct = {
        title,
        description,
        prices,
        extraOptions,
        image: url
      };

      await axios.post(
        "http://localhost:3000/api/products",
        newProduct
      );

      setClose(true); // we're receiving like a prop from Home function where it was a state hook

    } catch (err) {
      console.log(err);
    }
  }
```

👨‍🏫 To learn more about FormData()

// https://devcamp.com/trails/comprehensive-react-development-tutorial/campsites/277/guides/working-form-data-react

![](./public/img/readme/cloudinary-upload-image-test-1.png)
![](./public/img/readme/cloudinary-storage-folder.png)

⚠️ Note: Our way to upload images it's going to be using Cloudinary.
You can create an account for free in teh website: https://cloudinary.com/
and if you go to your dashboard, you will see your account information.
After that, go to configuration, upload section, and add a new one upload preset called uploads.

![](./public/img/readme/cloudinary-dashboard.png)
![](./public/img/readme/cloudinary-upload-1.png)
![](./public/img/readme/cloudinary-upload-2.png)
![](./public/img/readme/cloudinary-upload-3.png)
![](./public/img/readme/cloudinary-upload-4.png)

⚠️ Note: first time you try to add a new product, you will have the following error ⚠️

Server Error
Error: Invalid src prop (http://res.cloudinary.com/dxyivnn3n/image/upload/v1654465538/uploads/ufkdfbe8xz0qkqts6xhb.png) on `next/image`, hostname "res.cloudinary.com" is not configured under images in your `next.config.js`
See more info: 

https://nextjs.org/docs/messages/next-image-unconfigured-host

To prevent this error, we have to allow the Cloudinary domain our Next.js configuration. 
In our root folder, we can find a file called next.config.js

```js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains: [ // to allow images from a domain, just include its hostname in this array
      "res.cloudinary.com"
    ]
  }
}
```

If we restart our local server and run our application again, we will see it has worked.

![](./public/img/readme/add-new-product-test.png)

⚠️ The images are public domain and have been downloaded from: https://www.freepng.es/ ⚠️

## Security access to Admin actions 👮

As a customer we can get any product but a customer can't post any of them,
so basically we can block this process for just normal users setting cookies in pages --> api --> products --> index.js

```js
export default async function handler(req, res) { 

  const { 
    method, 
    cookies 
  } = req;

  const token = cookies.token;

  await dbConnect();

  // GET method here

  if (method === "POST") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not Authenticated!");
    }

    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);

    } catch (err) {
      res.status(500).json(err); // return it directly becasuse I don't have any handler error
    }
  }
}
```

To complete this security step, we can do the same but now in pages --> api --> products --> [id].js for PUT and DELETE methods.

# 🤔 What's next ?? 🤔

At this point, I have considered that it is enough for this project (at least for the moment).
Every application can be improved and extended to infinity,
And with everything we've done to get here, you can consider yourself ready to venture into any Next.js project.
If you've managed to get here, I congratulate you, you're amazing, but... as homework, I'll leave you some ideas on how to continue developing this application.

1. To protect better admin actions from user access, you can create a middleware and you can check your authentication.
2. Integrate and adapt the other little website for menu (products) like it was another react component/page (a jsx file) ... with its SSR function to get the products, or even creating an order and redirecting to cart page from there.
3. Try to develop the Edit Product Action for Admin page.
4. Add Stripe payment method to allow customers to pay with card.
5. You can create and separate different categories of products, like pizzas, burgers, kebabs, etc... and paginate the results!

# 🌐 Deployment in Vercel 🌐

To deploy this application in Internet, the creators of Next.js also developed an application deployment platform, 
exclusively for applications made in Next.js (although of course, it also supports other frameworks).

I think it's not necessary to explain how Vercel works because it's extremely easy to deploy an application there.
Just login in Vercel with GitHub for example, create a new app inside Vercel user dashboard, and go to Deployments section to choose a repository of your GitHub and see how Vercel automatically deploys for you your project.
If there is no error while it's deploying, at the end, Vercel give you three free domains to access publicly to your application in Internet.

https://vercel.com/

# 👨‍🏫😌❤️ Agradecimientos Especiales ❤️😌👨‍🏫

Me gustaría dedicar este proyecto a mi gran profesor de Despliegue de Aplicaciones Web,
que pese a algunas diferencias sobre los métodos docentes, aplicaciones de la autoridad o creencias,
siempre debemos mantener la unidad e intentar avanzar juntos por el mismo camino para conseguir los objetivos propuestos.
Porque solemos tender, algunas veces, a fijarnos sólo en los aspectos negativos que quizás no nos gusten,
y es que la clave de la auto superación diaria se basa en valorar más los aspectos positivos,
una práctica que debemos seguir entrenando cada día, y decirnos con más frecuencia las virtudes que cada uno ve en su prójimo,
porque sólo la perfecta mezcla entre amor y autoridad pueden llegar a hacer a un verdadero líder,
un verdadero líder que consigue la mejor sinergia en su equipo, y un equipo que consigue hacer el mejor trabajo posible.

Muchas gracias por todo profesor. Reciba un cordial saludo de su alumno.
