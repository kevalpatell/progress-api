const express = require("express")
const connectDB = require("./connectDB")
const Progress =require("./Progress")
const cors = require("cors")
const app = express()

app.use(express.json());
app.use(cors())

connectDB()

app.post("/updatePercent", async (req, res) => {
    try {
        let data = await Progress.findOneAndUpdate({}, {
            $set: {
                percent: req.body.percent
            }
        }, {
            new: true
        })
        if(data != null || data != undefined) {
            console.log("data: ", data);
            return res.status(200).send({ message: "success" })
        } else {
            return res.status(500).send({ message: "Something Went Wrong!" })
        }
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).send({ message: "Internal Server Error." })
    }

})

app.post("/updateParticipant", async (req, res) => {
    try {
        let data = await Progress.findOneAndUpdate({}, {
            $set: {
                participant: req.body.participant
            }
        }, {
            new: true
        })
        if(data != null || data != undefined) {
            console.log("data: ", data);
            return res.status(200).send({ message: "success" })
        } else {
            return res.status(500).send({ message: "Something Went Wrong!" })
        }
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).send({ message: "Internal Server Error." })
    }
    
})

app.post("/updateData", async (req, res) => {
    try {
        let data = await Progress.findOneAndUpdate({}, {
            $set: {
                participant: req.body.participant,
                percent: req.body.percent
            }
        }, {
            new: true
        })
        if(data != null || data != undefined) {
            console.log("data: ", data);
            return res.status(200).send({ message: "success" })
        } else {
            return res.status(500).send({ message: "Something Went Wrong!" })
        }
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).send({ message: "Internal Server Error." })
    }
})

app.get("/getData", async (req, res) => {
    try {
        let getData = await Progress.findOne({})
        if(getData != null || getData != undefined) {
            return res.status(200).send(getData)
        } else {
            return res.status(500).send({ message: "Something Went Wrong!" })
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error." })
    }
})

app.listen(5000, () => {
    console.log("server up and running at 5000");
})