const express = require("express");
const { S3 } = require("aws-sdk");
const cors = require("cors");

const fileApi = require("./modules/fileAPI");

const s3client = new S3({
 
    params: {
        Bucket: "dss-blr"
    }
});

const app = express();

app.use(cors());
app.post(
    "/upload",
    fileApi({
        s3: s3client
    })
);

app.listen(4000, () => console.log("Example app listening on port 4000!"));
