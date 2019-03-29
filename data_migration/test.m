% %setting up the serial port
% s=serial('COM3');
% set(s,'BuadRate',115200);
% fopen(s);
% 
% %declare pressure variables to store data from serial port
% P1=zeros(255,1);
% P2=zeros(255,1);
% P3=zeros(255,1);
% P4=zeros(255,1);
% 
% %read 255 samples from COM port
% for i=1:256
%     [beetle, count]=fread(s);
%     
%     %deconcatonate data from beetle and store in memory
%     P1(i,1)=fix(beetle/10^9);
%     P2(i,1)=fix(beetle/10^6);
%     P3(i,1)=fix(beetle/10^3);
%     P4(i,1)=fix(beetle);
%     
% end
% 
% %disconnect and clean up
% fclose(s);
% delete(s);
% 
% %format long to keep precision of posixtime
% format long

%set User ID so data is stored with approriate account - Jon=1, Bridget =2,
%Ryan=3
userID=2;

%create zero matrix to increase efficincey and time stamp
M=zeros(3,2);

%get data of time program was ran and replace M
for i=1:3
    t=datetime('now');
    M(i,1)=userID;
    M(i,2)=(posixtime(t))*10^3;
end

%headers must match JSON data type in MLAB
Headers={'UserId','date','P1','P2','P3','P4','P5','P6','P7','P8'};
Data=zeros(3,10);

Data(:,1)=M(:,1);
Data(:,2)=M(:,2);

for i=1:3
    for j=3:10
        Data(i,j)=round(rand()*1000);
    end
end


csvwrite_with_headers('sample.csv',Data,Headers);