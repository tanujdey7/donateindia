import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage("./scratch");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/donateindia",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

const bloodDonorSchema = new mongoose.Schema({
  bloodGroup: String,
  address: String,
  city: String,
  dob: Date,
  gender: String,
  emergency: String,
});

const foodDonorSchema = new mongoose.Schema({
  restaurant: String,
  address: String,
  city: String,
  timeofprep: String,
  expire: String,
  quantity: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
  bloodDonor: [bloodDonorSchema],
  foodDonor: [foodDonorSchema],
});

const Login = new mongoose.model("donateindia", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Login.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password incorrect" });
      }
    } else {
      res.send({ message: "Not Found" });
    }
  });
  //   res.send("My API Login");
});

app.post("/register", (req, res) => {
  const { name, email, phone, password } = req.body;
  Login.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send("User already exist");
    } else {
      const user = new Login({
        name,
        phone,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successful" });
        }
      });
    }
  });
});

// Login.findOneAndDelete({ name: "Tanuj" }).then((record) => {
//   record.bloodDonor.delete();
//   record.save();
// });

// Login.findOne({ name: "Tanuj" }).then((record) => {
//   console.log(
//     record.bloodDonor.push({
//       bloodGroup: "AB+",
//       address: "Maninagar",
//       city: "Ahmedabad",
//       dob: "2000/08/20",
//       gender: "Male",
//       emergency: "Yes",
//     })
//   );
//   record.save();
// });

app.listen(9000, () => {
  console.log("Started at port 9000");
});
