module.exports.initialize = function(mongoose){
  mongoose = mongoose.createConnection('mongodb:webbuilding:thephan12345678@ds055626.mlab.com:55626/buildingweb'):
  return mongoose;
}
