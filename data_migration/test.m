format long

userID=1;

M=zeros(3,2);

for i=1:3
    t=datetime('now');
    M(i,1)=userID;
    M(i,2)=(posixtime(t))*10^3;
end

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