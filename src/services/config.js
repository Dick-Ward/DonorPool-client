/// HIDE KEYS BEFORE PUSHING TO GITHUB
const key = process.env.REACT_APP_ACCESS_KEY;
const secretKey = process.env.REACT_APP_SECRET_ACCESS_KEY;

const config = {
  bucketName: "donorpool",
  albumName: "uploads",
  region: "us-east-1",
  accessKeyId: key,
  secretAccessKey: secretKey
};
/// HIDE KEYS BEFORE PUSHING TO GITHUB

export default config;
