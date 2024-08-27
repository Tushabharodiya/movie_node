const { createToken } = require("../middleware/auth")
const { userServices } = require("../services")



let getUser = async (req, res) => {

    try {

        let user = await userServices.fetchUser()

        res.status(200).json({
            message: "user get success",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}


let createUser = async (req, res) => {
    try {

        let body = req.body;

        let findEmail = await userServices.findBy_Email(body.email)

        if (findEmail) {
            throw new Error("rou are alredy register")
        }

        let user = await userServices.postUser(body)

        // let token = createToken({ user });
        // res.cookie("token", token, {
        //     withCrdentials: true,
        // });
        res.status(201).json({
            message: "user register success",
            user,
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteUser = async (req, res) => {
    try {

        let { id } = req.params;

        let findId = await userServices.findBy_Id(id)
        if (!findId) {
            throw new Error("user are not found");
        }

        let user = await userServices.delete_user(id)

        res.status(200).json({
            message: "user delete Success",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let updateUser = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let user = await userServices.update_user(id, body)

        res.status(200).json({
            message: "user update sucess",
            user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



let userLogin = async (req, res) => {
    try {

        let { email, password } = req.body;

        let user = await userServices.findBy_Email(email)
        if (!user) {
            throw new Error("user are not found");
        }

        if (user.password != password) {
            throw new Error("password invalid !")
        }

        let token = createToken({ user });
        res.cookie("token", token, {
            withCrdentials: true,
        });

        // console.log(token);

        res.status(201).json({
            message: "user login success",
            token
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let UserProfile = async (req, res) => {
    try {
        let user = req.user;
        console.log(user,"jbjchbshb");
        res.status(200).json({
            message: "profile get success",
            user:user.user,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = { getUser, createUser, deleteUser, updateUser, userLogin, UserProfile }