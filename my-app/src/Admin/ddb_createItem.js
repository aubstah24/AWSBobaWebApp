const AWS= require('aws-sdk');

AWS.config.update({region: "us-west-1"});

const ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2024-04-23'});

const params = {
    TableName: 'DrinkItemList',
    Item: {
        id: {S: ""},
        Drink: {S: ""},
        caffeine: {BOOL: true},
        category: {S: ""},
        defaultAtr: {S: ""},
        description: {S: ""},
        img: {S: ""},
        includesDairy: {BOOL: true},
        price: {N: "7"}
    },
};

ddb.put(params, function(err, data) {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        console.log("SUCCESS: ", data);
    }
});

//run example: node <js file name>