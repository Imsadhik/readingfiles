What is cloud?
"Cloud" in tech usually refers to cloud computing, which means using the internet to access computing resources like servers, storage, databases, software, and more—instead of running them on your local computer or physical servers.

Here's a simple way to think about it:
Imagine you used to store all your photos, documents, and apps on your own computer. But now, services like Google Drive, Dropbox, or iCloud let you store and access your stuff online from any device. That’s the cloud in action.

🔹 Key Features of Cloud Computing:
On-demand access: Use what you need, when you need it.

Scalability: Easily scale resources up or down.

Cost-efficient: Pay only for what you use (no need to buy physical hardware).

Remote access: Access from anywhere with an internet connection.

🔹 Types of Cloud Services (the "cloud stack"):
IaaS (Infrastructure as a Service):
You get raw computing resources (like servers or storage).
E.g., AWS EC2, Microsoft Azure, Google Cloud Compute Engine.

PaaS (Platform as a Service):
You get a platform to develop and deploy apps.
E.g., Heroku, Firebase, AWS Elastic Beanstalk.

SaaS (Software as a Service):
Ready-to-use software over the internet.
E.g., Gmail, Google Docs, Netflix.

🔹 Types of Cloud Deployment:
Public Cloud: Services offered over the internet to everyone (like AWS, Azure).

Private Cloud: Used by one organization, more control and security.

Hybrid Cloud: Combines both public and private for flexibility.

which account do you use in your company? iam or root user?
we use iam user because if we use root user and delete something then we don't who deleted it and what happened.

which type of ec2 instance you are going to use?
general cloud -

compute optimized cloud - 

memory optimized cloud -

storage optimized cloud - 

accelerated cloud - 

how to switch to root user?
sudo su -

how to switch to root user to normal user?
logout.

how to access key pair in ec2 instance?
ssh -i keyname.pem ubuntu@public ip address of ec2 instance.

how to change permission for .pem file.
chmod 600 keyname.pem

Application loadbalancer?
it will create target groups of several instances and 


how vpc works and explanation?
vpc has ip address range.
first when user hits on website using the internet gateway and pass through public subnet and elastic load balancer will send requests to different application based on the traffic using the route table.

what is public subnet?
public subnet is the subnet that is connected to internet gateway and it is used for public ip address.
or
public subnet is one that is access outside the vpc(virtual private cloud).

what is load balancer?
load balancer is one that forwards requests based on the load.  

how to define vpc size?
vpc size is defined by cidr block.

vpc has ip address range.

what is the fullform of nacl?
Network access control list.

Network ACLs (NACLs) are stateless.

Stateless means that NACLs do not keep track of request/response pairs.
If you allow incoming traffic on a certain port, you must also explicitly allow the outgoing response traffic for that port — and vice versa.

NACLs are stateless, while Security Groups are stateful.

where we use security groups and nacls?
we use security group at ec2 instance level. we use nacl at subnet level.

what is autoscaling groups?

example :- if we are having 2 servers and getting 200requests at a time. but only 100 requests are handled by 2 servers then autoscaling groups will immediately increase the servers to 4.

what is loadbalancer?

example:- if we have 100 requests then loadbalancer handles sending 50requests to 1 server and another 50requests to another server. if there is some problem in one server then loadbalancer will 40requests to this server. and it will send 60 requests to the server which is working fine. this is how loadbalancer works. 

What is elastic ip address
It is static ip address. It doesn’t changes instance will go down and comeback.
What is nat gateway
It will mask the ip address of a ec2 instance or application with the public ip address of the nat gateway

what is bastion host or jump server? 
the ec2 instances are created in private subnet. they don't have public ip address or we cannot directly ssh into it. so to keep them secure. we will not create public ip addresses rather we will create bastion host or jump host. through bastion host we will connect to ec2 instance in private subnet. 

if we do like this then there will be a proper logging mechanism, auditing who is doing what. 

<!-- we cannot connect to private subnets directly because they don't have ip addresses or we cannot directly ssh into it. so we will  -->

What the following in the Deployment configuration file mean?

Deployment Configuration File
The deployment configuration file defines the artifacts to be downloaded to the instance and the location where the artifacts must be copied. The configuration file also specifies the sequence of commands for deployment.

The configuration file is written in YAML. The file can be defined inline or provided as a generic artifact reference during instance group deployment.

DevOps admins can use the deployment configuration file for the following actions:

Specify application packages and their locations for storing in the target compute instance.
Specify the steps required to deploy an application.
Specify user-defined or built-in environment variables required for deployment.

what is 11'9s in s3?
the s3 will store data in multiple copies in multiple regions and multiple data centers. so the data doesn't go anywhere. data is secure and reliable.

how s3 is scalable?
store almost unlimited data in a single bucket. however one object should not be more than 5tb.

tip: choose multi part uploads to upload huge object.