const express = require("express");
const app = express();
const port = 3000;

const {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} = require("agora-access-token");

app.post("/token", (req, res) => {
  const appID = "facc2f66a4394574a83a612d93852cb9";
  const appCertificate = '"734be6d2bea74a9c8b9d5be7f8acf19d"';
  const channelName = "room1";
  const uid = 2882341273;
  const account = "2882341273";
  const role = RtcRole.PUBLISHER;
  const expirationTimeInSeconds = 3600;

  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  // return RtcTokenBuilder.buildTokenWithAccount(
  //   appID,
  //   appCertificate,
  //   channelName,
  //   uid,
  //   role,
  //   privilegeExpiredTs
  // ); = currentTimestamp + expirationTimeInSeconds;
  // console.log(channelName);
  const token = RtcTokenBuilder.buildTokenWithAccount(
    appID,
    appCertificate,
    channelName,
    uid,
    role,
    privilegeExpiredTs
  );

  // const token = RtcTokenBuilder.buildTokenWithAccount(
  //   appID,
  //   appCertificate,
  //   channelName,
  //   account,
  //   role,
  //   privilegeExpiredTs
  // );
  res.status(201).json({
    token,
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
