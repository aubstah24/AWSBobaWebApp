const AWS= require('aws-sdk');

AWS.config.update({region: "us-west-1"});

const ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2024-04-23'});

const itemID = 7;
const itemDrink = "";

const params = {
    TableName: 'DrinkItemList',
    Key: {
        id: itemID,
        Drink: itemDrink,
    },
    UpdateExpression: "set price = :p, image = :i",
    ExpressionAttributeValues: {
        ":p": "NEW_PRICE",
        ":i": "NEW_IMG_PATH",
    },
};

ddb.update(params, function(err, data) {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        console.log("SUCCESS: ", data);
    }
});

//run example: node <js file name>