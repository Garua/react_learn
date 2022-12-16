const CracoLessPlugin = require('craco-less')
module.exports = {
 plugins:[
     {
         //配图 less loader
         plugin:CracoLessPlugin,
         options:{
             lessLoaderOptions:{
                 lessOptions:{
                     modifyVars:{'@primaryColor':'#1DA57A'},
                     javascriptEnabled:true
                 }
             }
         }
     }
 ]
}