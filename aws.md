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