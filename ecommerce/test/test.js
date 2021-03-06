const app = require("../app");
const logger = require("../logger");
const request = require("supertest");
let token;
const baseUrl = "http://localhost:3001/api";
// Signup;
describe("\n\n\n\nsignup ::", () => {
    it("Failed to signup \n\n", (done) => {
        request(baseUrl)
            .post("/signup")
            .send({
                name: "hi8",
                email: "chakri579@gmail.com",
                password: "rrrrrr8",
            })
            .end((err, res) => {
                if (res.body.name==="hi8" ) {
                    console.log("success");
                    //logger.error(err);
                    //throw err;
                }
                console.log(res.body);
                if (res.body.name!=="hi8") {
                    console.log("user name already exists");
                    logger.info(res.body);
                    token = res.body.token;
                }
                done();
            });
    });
});

// Login

describe("\n\n\n\nLogin test :: ", () => {
    it("should not be able log in \n\n", (done) => {
        request(baseUrl)
            .post("/signin")
            .send({
                email: "hey075@gmail.com",
                password: "rv",
            })
            .end((err, res) => {
                console.log(res.body);
                if (res.body.error == "User with that email does not exist. Please signup") {
                    logger.info(res.body.error);
                    console.log(res.body.error);
                    console.log("login failed");
                } else {
                    // console.log(res.body);
                    // logger.info(res.body);
                    console.log("logged in");
                }
                done();
            });
    });

    it("should be able to login \n\n", (done) => {
        request(baseUrl)
            .post("/signin")
            .send({
                email: "chakri@gmail.com",
                password: "rrrrrr8",
            })
            .end((err, res) => {
                // console.log(res.body);
                //console.log(res.body);
                if(res.body.user.name==="hi") {
                    logger.info("User token :" + res.body.token);
                    console.log("login success");
                }
                else {
                    logger.info("login failed");
                    console.log("login failed");
                }
                //logger.info("User token :" + res.body.token);
                token = res.body.token;
                done();
            });
    });
});

// Get all articles
// describe("\n\n\n\nGet all articles :: ", () => {
//   it("Cannot Fetch  the articles\n\n", (done) => {
//     request("http://localhost:5000/api/articles")
//       .get("/")
//       .end((err, res) => {
//         // console.log(res.body);
//         if ((res.body.msg = "No token, authorization denied")) {
//           logger.info("Authorization Error");
//         }
//         done();
//       });
//   });
// it("Fetch all the articles\n\n", (done) => {
//   request("http://localhost:5000/api/articles")
//     .get("/")
//     .set({ token })
//     .end((err, res) => {
//       // console.log(res.body);
//       if ((res.body.msg = "No token, authorization denied")) {
//         logger.info("Authorization Error");
//       } else {
//         console.log(res.body);
//       }
//       done();
//     });
// });
// });