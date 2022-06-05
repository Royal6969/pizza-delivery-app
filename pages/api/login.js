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