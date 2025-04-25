
curl 169.254.169.254

curl 169.254.169.254/latest

curl 169.254.169.254/latest/meta-data

curl 169.254.169.254/latest/meta-data/ami-id

can we connect ebs(elastic block storage) volume to multiple instances
Ans: Yes and no. there are 6 types of ebs. where 2 ebs we can connect to any number of instances. and rest four we cannot connect. 

we have 10gb of storage and 1ebs volume. if 8gb storage was filled and i know that 150gb of data needs to come. then in this case what can i do.
Ans: we can increase storage on runtime.

ebs is supported in same availability zone. if i want it in another availability zone then what should i do.
Ans: we can use ebs snapshot and then we can use it in another availability zone.

how to check volumes like elastic block storage(ebs), root volume.
Ans: lsblk (ls blk - list block storage) - it will list all block storage which are attached with machine(instance)

how to store data in ebs volume?
Ans: first convert it using sudo mkfs.ext4 /dev/xvdf [xvdf(this is name of ebs volume)] - created filesystem using this sudo mkfs.ext4 /dev/xvdf
create test folder
sudo mkdir test

cd test

mount /dev/xvdf /test

how to check it is mounted or not?
Ans: mountpoint /test

touch 1 2 3 4 5

echo "welcome to shafi's world">shafi.txt

umount /test

to check any data is stored from before or not in volume.
sudo file -s /dev/xvdf

df -h this command is used to check the size of file system

how to increase the size of file system.
resize2fs /dev/xvdf

how to increase partition part of ebs volume 
growpart /dev/xvda 1

