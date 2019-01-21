const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'szhm27q';

// const collection=(collectionName)=>{
//     MongoClient.connect(url,{ useNewUrlParser: true } ,function (err, client) {
//         const db = client.db(dbName);
//         //    获取mongo数据集合
//         const collection = db.collection(collectionName);
//             return collection;
//         })
// }

// const insertOne=(collectionName,data,callback)=>{

//     collection(collectionName).insertOne(data,(err,result)=>{
//         client.close();
//         callback(err,result);
//     })
// }

// // 查询多条数据
// const find=(collectionName,data,callback)=>{
//     collection(collectionName).find(data).toArray((err,docs)=>{
//         client.close();
//         callback(err,docs);
//     })
// }

// // 查询一条数据
// const findOne=(collectionName,data,callback)=>{
//     collection(collectionName).findOne(data,(err,doc)=>{
//         client.close();
//         callback(err,doc);
//     })
// }
// 增加一条数据
const insertOne=(collectionName,data,callback)=>{
    
    MongoClient.connect(url,{ useNewUrlParser: true } ,function (err, client) {
    const db = client.db(dbName);
    //    获取mongo数据集合
    const collection = db.collection(collectionName);
    collection.insertOne(data,(err,result)=>{
        client.close();
        callback(err,result);
    })
    })
}

// 查询多条数据
const find=(collectionName,data,callback)=>{
    MongoClient.connect(url,{ useNewUrlParser: true } ,function (err, client) {
        const db = client.db(dbName);
        //    获取mongo数据集合
        const collection = db.collection(collectionName);
        collection.find(data).toArray((err,docs)=>{
            client.close();
            callback(err,docs);
        })
        })
}
// 查询一条数据
const findOne=(collectionName,data,callback)=>{
    MongoClient.connect(url,{ useNewUrlParser: true } ,function (err, client) {
        const db = client.db(dbName);
        //    获取mongo数据集合
        const collection = db.collection(collectionName);
        collection.findOne(data,(err,doc)=>{
            client.close();
            callback(err,doc);
        })
        })
}



module.exports={
    insertOne,
    find,
    findOne
}
