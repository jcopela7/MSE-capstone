server='mongodb://jcopela7:capstone123@ds225205.mlab.com:25205/capstone';
server='mongodb';
%uri=MongoClientURI(server);
%mc=MongoClient(uri);
%db=mc.getDatabase(database);

dbname='capstone';
user='jcopela7';
password='capestone123';
port=25205;

conn=mongo(server,port,dbname,'UserName',user,'Password',password)