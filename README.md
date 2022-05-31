## 🆕 To create this app run the following command
- npx create-next-app pizza-delivery-app

## 💻 To serve the app in localhost
- npm run dev

## ⏱ To follow my commit changes
https://github.com/Royal6969/pizza-delivery-app/commits/main

https://pizza-delivery-app-delta.vercel.app/

# 👓 First steps
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

# Let's start with frontend

## 0️⃣ Navbar component 🗺️
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
Note: Pay attention to the Order.module.css

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

Note: you can find lot of useful information in next link:

https://www.lambdatest.com/blog/how-to-use-css-breakpoints-for-responsive-design/


## Frontend finished !
In next steps, we're going to create our own API,
we're going to set up the database in MongoDB,
we're going to add our products,
we will be able to delete them, update them, 
and a user will be able to buy any products,
and we're going to activate our checkout button,
with an official payment method... 🤯

# Now it's time to backend 👨‍💻

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

To download MongoDB Compass:
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

Note: you have the 

![](./public/img/readme/mongodb-connect-1.png)
![](./public/img/readme/mongodb-connect-2.png)
![](./public/img/readme/mongodb-connect-3.jpg)

Note: Don't forget to restart the application when you create and add your first secret key in an env file.

Now you need to install mongoose with npm:

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

Note: In same index.js file we made the Post method before... now Get method would be...

```js
import dbConnect from "../../../util/mongodb-connection" // to use MongoDB
import Product from "../../../models/Product"

export default async function handler(req, res) { // we make this function asynchronous because we're going to make our CRUD operations and there is no way to know how long it's going to take
  // res.status(200).json({ name: 'John Doe' }) ... the example

  // firstly I'm going to check mu request method
  // to handle that let's structure with this:
  const { method } = req;

  dbConnect();

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

### Insert documents in database by PostMan or MongoDB Atlas 📄

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
Note: Be careful with fields' types

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

Axios is a promise-based HTTP Client for node. js and the browser. It is isomorphic 
(= it can run in the browser and nodejs with the same codebase). 
On the server-side it uses the native node. js http module, 
while on the client (browser) it uses XMLHttpRequests.

Axios is a promise based HTTP client for the browser and Node. js. 
Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. 
It can be used in plain JavaScript or with a library such as Vue or React.

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

Note: Be careful with extra spaces inside Link tags ... Next.js will undertand it like you're defining more children and it is not allow.
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

  dbConnect();

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

