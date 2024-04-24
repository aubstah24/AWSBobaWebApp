const AWS= require('aws-sdk');

AWS.config.update({region: "us-west-1"});

const ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2024-04-23'});

const params = {
    TableName: "DrinkItemList",
    Key: {
        id: { S: "" },
    },
};

// Call DynamoDB to read the item from the table
ddb.delete(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

//run example: node <js file name>