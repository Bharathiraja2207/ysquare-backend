import { client } from '../index.js';

export async function hashpass(email,username, hashpassword) {
  return await client
    .db("ysquare")
    .collection("ysquarepass")
    .insertOne({
      username: username,
      password: hashpassword ,
      email:email
    });
}

export async function getuserbyname(email) {
    return await client
      .db("ysquare")
      .collection("ysquarepass")
      .findOne({
        email: email
      });
  }
