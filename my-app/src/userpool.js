import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    "aws_project_region": "us-west-1",
    "aws_user_pools_id": "us-west-1_e2lTDyzQM",
    "aws_user_pools_web_client_id": "6ks8eupgd186s0j89rc8umk841",
};
export default new CognitoUserPool(poolData);