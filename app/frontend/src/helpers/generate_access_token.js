import {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} from "agora-access-token";

export default function generateToken(channel) {
  const appID = "facc2f66a4394574a83a612d93852cb9";
  const appCertificate = '"734be6d2bea74a9c8b9d5be7f8acf19d"';
  const channelName = channel || "room1";
  const uid = 0;
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
  console.log(channelName);
  // return RtcTokenBuilder.buildTokenWithAccount(
  //   appID,
  //   appCertificate,
  //   channelName,
  //   uid,
  //   role,
  //   privilegeExpiredTs
  // );

  return RtcTokenBuilder.buildTokenWithAccount(
    appID,
    appCertificate,
    channelName,
    account,
    role,
    privilegeExpiredTs
  );
}
