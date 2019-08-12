# fast-spa

A boilerplate for Data Skeptic projects that need a very simple but powerful Single Page App (SPA) solution to rapidly deliver an admin dashboard for an internal API / microservice.

## Project Goals

Following instructions in this `README.md`, any developer who has not worked with the team before, should be able to spin up a new Claudia.js API with many out-of-box features in under 30 minutes.  This API should have the following properties:

- [ ] A `package.json` with scripts for `init` (bootstrap a new project), `dev` (local work), `test` (following `jest` pattern seen in other repositories), and `deploy prod` and `deploy staging` which uses `claudia` to deploy the API in the respective environment.
- [ ] Has a Terraform script to create any additional cloud infrastructure required (such as the S3 bucket referenced below)
- [ ] Has a boilerplate example of cron-like scheduling.
- [ ] Has a boilerplate Data Access Object Interface similar to other projects, with an example TestDao and DynamoDao implementions.
- [ ] Has endpoints requiring authentication
- [ ] Has endpoints that proxy a static asset on S3
- [ ] Has an endpoint that accepts a file upload and places the file in S3
- [ ] Provides an example `curl` requests which consume the above endpoints correctly
- [ ] Has a `GET` endpoint with `offset` and `limit` querystring parameters
- [ ] Has a `POST` method which accepts a `json` request body and returns a `json` response
- [ ] Has an out-of-box menu system
- [ ] Uses Bootstrap 4
- [ ] Can be deployed as part of a Python Flask app, in which the Flask app simply serves the `<script>` tag to the CDN version of the API