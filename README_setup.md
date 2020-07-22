SERVERLESS-STACK

https://serverless-stack.com/

--http://tony-mysfits-tutorial-bucket.s3-website.us-east-2.amazonaws.com/

notes-app, 
App client id: 7nv7k7p6g4se8uviq7a7jjctgl


Pool Id us-east-2_mGoJJv1Kt
Pool ARN arn:aws:cognito-idp:us-east-2:843102458667:userpool/us-east-2_mGoJJv1Kt

***serverless-user-pool***
aws cognito-idp sign-up --region us-east-2 --client-id 7nv7k7p6g4se8uviq7a7jjctgl --username admin@example.com --password Passw0rd!
aws cognito-idp admin-confirm-sign-up --region us-east-2 --user-pool-id us-east-2_tBvEVGVl6 --username admin@example.com

***notes-user-pool***
Pool Id us-east-2_mGoJJv1Kt
App Client ID: 7385as25tg882o65299he7aqd2

***dev-user-pool***
aws cognito-idp sign-up --region us-east-2 --client-id 4cge9tkmcrumdpocj618g2qrck --username admin@example.com --password Passw0rd!
aws cognito-idp admin-confirm-sign-up --region us-east-2 --user-pool-id us-east-2_pcoMaccnk --username admin@example.com


noteId: 9c3baf10-c318-11ea-a259-c7083aaed022

stripe: 
pk_test_yKEFRJ40GUQqfVY1MqRAmCeO
sk_test_FdgPZQbxKFIRJIcuqHTuAsC4

API Gateway ID: yjr4848qea

"us-east-2:d99382c8-4039-4711-9722-b34936798287", // notesidentitypool Identity pool ID
"us-east-2:023fcbe7-89f4-4e43-b293-0777e4972797", // testidentitypool Identity pool ID


Unauth that I deleted...
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "mobileanalytics:PutEvents",
        "cognito-sync:*"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}

Service Information
service: notes-app-api
stage: prod
region: us-east-2
stack: notes-app-api-prod
resources: 43
api keys:
  None
endpoints:
  POST - https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod/notes
  GET - https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  GET - https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod/notes
  PUT - https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  DELETE - https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  POST - https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod/billing
functions:
  create: notes-app-api-prod-create
  get: notes-app-api-prod-get
  list: notes-app-api-prod-list
  update: notes-app-api-prod-update
  delete: notes-app-api-prod-delete
  billing: notes-app-api-prod-billing
layers:
  None
Serverless: Invoke aws:deploy:finalize
Serverless: [AWS s3 200 0.363s 0 retries] listObjectsV2({
  Bucket: 'notes-app-api-prod-serverlessdeploymentbucket-1nrw9w1qqygtu',
  Prefix: 'serverless/notes-app-api/prod'
})

npx aws-api-gateway-cli-test 
--username='admin@example.com' 
--password='Passw0rd!' 
--user-pool-id='us-east-2_tBvEVGVl6' 
--app-client-id='7nv7k7p6g4se8uviq7a7jjctgl' 
--cognito-region='us-east-2' 
--identity-pool-id='us-east-2:d99382c8-4039-4711-9722-b34936798287' 
--invoke-url='https://yjr4848qea.execute-api.us-east-2.amazonaws.com/prod' 
--api-gateway-region='us-east-2' 
--path-template='/notes' 
--method='POST' 
--body='{"content":"hello world","attachment":"hello.jpg"}'

notes-app_api (my first repo version - not working... error on auth):
npx aws-api-gateway-cli-test --username tfeferman@nabancard.com --password Passw0rd! --user-pool-id us-east-2_mGoJJv1Kt --app-client-id 7nv7k7p6g4se8uviq7a7jjctgl --cognito-region us-east-2 --identity-pool-id us-east-2:d99382c8-4039-4711-9722-b34936798287 --invoke-url https://6lf1emmm24.execute-api.us-east-2.amazonaws.com/dev/ --api-gateway-region us-east-2 --path-template notes --method POST --body '{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}'

demo repo version:
npx aws-api-gateway-cli-test --username admin@example.com --password Passw0rd! --user-pool-id us-east-2_pcoMaccnk --app-client-id 4cge9tkmcrumdpocj618g2qrck --cognito-region us-east-2 --identity-pool-id us-east-2:ae0cbc1c-910a-43e7-a4f5-5f3a5d76f939 --invoke-url https://6lf1emmm24.execute-api.us-east-2.amazonaws.com/dev/notes --api-gateway-region us-east-2 --path-template /notes --method POST --body "{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}"

notes-app-api1 (2nd attempt apparently... not sure about USER_POOL_ID, IDENTITY_POOL_ID and APP_CLIENT_ID parameters ???)
npx aws-api-gateway-cli-test --username='admin@example.com' --password='Passw0rd!' --user-pool-id='us-east-2_mGoJJv1Kt' --app-client-id='7385as25tg882o65299he7aqd2' --cognito-region='us-east-2' --identity-pool-id='us-east-2:d99382c8-4039-4711-9722-b34936798287' --invoke-url='https://6lf1emmm24.execute-api.us-east-2.amazonaws.com/dev' --api-gateway-region='us-east-2' --path-template='/notes' --method='POST' --body='{"content":"hello_aws_world","attachment":"hello.jpg"}'

This one works:
npx aws-api-gateway-cli-test --username admin@example.com --password Passw0rd! --user-pool-id us-east-2_pcoMaccnk --app-client-id 4cge9tkmcrumdpocj618g2qrck --cognito-region us-east-2 --identity-pool-id us-east-2:ae0cbc1c-910a-43e7-a4f5-5f3a5d76f939 --invoke-url https://6lf1emmm24.execute-api.us-east-2.amazonaws.com/dev/ --api-gateway-region us-east-2 --path-template notes --method POST --body '{\"content\":\"hello_aws_world\",\"attachment\":\"hello.jpg\"}'  

Logs Role ARN: arn:aws:iam::843102458667:role/APIGatewayCloudWatchLogs