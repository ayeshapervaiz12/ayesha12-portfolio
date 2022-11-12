const Blog = require("../databaseschema/DBschema");
// const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer")
const getUsers = (req, res) => {
    res.status(200).json({ sucess: true, data: "get user" })
}
const Usercreate = async (req, res) => {
    // const genSalt = await bcrypt.genSalt();
    // const HashPassword = await bcrypt.hash(req.body.password, genSalt)
    // // res.status(201).json({ success: true, msg: "user created" })
    const Modelregister = new Blog({
        name: req.body.name,
        Email: req.body.Email,
        Message: req.body.Message
        // password: HashPassword,

    });


    let transporter = nodemailer.createTransport({

        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "ayeshapervaiz580@gmail.com",
            pass: "ctxbtppqfislwnnw"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: " ayeshapervaiz580@gmail.com",
        to: Modelregister.Email,
        subject: `hello `,
        html: `<h3>Name: ${Modelregister.name}</h3>,
         <h3> Email: ${Modelregister.Email}</h3>
         <p> is this info is correct? if yes then verify your email</p>
         <a href="/"> verify your email</a>`,
    };
    transporter.sendMail(mailOptions, function (err) {
        if (err) {
            console.log(`oops err occured in email: ${err}`);
        } else {
            console.log(`Email send to user ${Modelregister.Email}`);
        }
    });

    Modelregister.save().then((data) => {
        res.status(201).json({ success: true, msg: "user created", data: data })

    }).catch((err) => {
        res.status(500).json({ success: false, error: err })

    })
}

module.exports = { getUsers, Usercreate };
