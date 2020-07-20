export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "tony-serverless-stack-tutorial"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://6lf1emmm24.execute-api.us-east-2.amazonaws.com/dev/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_mGoJJv1Kt",
    APP_CLIENT_ID: "7nv7k7p6g4se8uviq7a7jjctgl",
    IDENTITY_POOL_ID: "us-east-2:d99382c8-4039-4711-9722-b34936798287"
  }
};