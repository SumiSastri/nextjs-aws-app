__The computing context around Serverless or code as infrastructure (FaaS - functions as a service)__

Today it is possible to write function code that doesn't require you to manage a server infrastructure. So while there are servers the management of the server infrastructure is taken care by writing code - hence the slight misnomer "serverless". 

It is called serverless as the code is written on managed machines and not directly on the server. With lamdas these are functions written inside containers that live in the virtual machine of the server service provider. The code gets executed and the interface between the code and the server is the section of server that is managed and operated by the server service provider (AWS-Azure-Google being the largest service providers of cloud computing services).

Code as infrastructure is driven by events that control the server's performance. Server management therefore only runs on events that trigger it.eg: API requests/ file uploads/ data inputs into a database, IoT and streaming of video/ audio.

This programatic way of managing servers allows businesses and developers to focus on code written to make their apps better and not to manage servers.

__Service Providers__
Amazon, Azure, Google Cloud, IBM

__Niche providers__
Cloud Flare, openFaas, iron.io

__Event driven code examples__

1. Use case File uploads - a pdf file gets sent to db it needs to be retrieved and displayed in another part of the application. Code is first written to upload the file to the relevant database with the payload details. The file is uploaded and stored on the server. 
2. Use case File retrieval - When a user wants to retrieve the pdf code is written with the payload and instructions to retrieve this file from the database that is hosted on the server. The file can be retrieved regularly - so a scheduled retrieve (cron-job) may be required to be written with a pre-configured (config). Maybe it is retrieved by an API end-point - in which case the endpoint goes into the code.
3. Processing streaming data
4. Interacting with API gateways to make easy and scalable APIs (as you can see with this repo to make an API and then host it with Heroku is one way of making an API available publically)
5. Photo file processing
6. Processing data from .csv files

Drawback is the throttling time (some offer 10-15 minutes or limits to the file size/ number of request)

__Examples of code as infrastructure__

AWS Lamdas/ Azure Functions - polyglot of code support in their VM containers - eg: node, JS, Java, Ruby, Pyhton, Go, PHP, C#

Google Cloud Functions
IBM Cloud Functions

Depending on your cloud service provider you will need developers with the skills to write the code that manages this infrastructure. Most popular languages for serverless - Node and Python

__Short history the paradigm shift from mainframe servers to serverless__

1950s-1970s - era of mainframes 
- installation, maintenance, cost - writing software to work with the hardware

1977 - era of personal computing
- distribution of compute power - on premise servers (same issues lower costs)

2005 - start of operating system (OS) Virtualisation 
- distributed virtual software - servers running multiple operating systems
- user of hypervisors (virtual machines monitors-VMM or virtualisers)
- hypervisors run one or more virtual (guest) machines as a host
- no need to write software to work with hardware (servers) as hypervisor provides gues OS with a virtual operating platform MacOS, WindowsOS and Linux run off one x86 (virtual) machine
- rent out server space no need for on-prem servers
- beginning of IaaS (infrastructure as a service)
- hypervisors type 1 (developed in 1960s) - bare metal run directly on host to control hardware and manage guest OS (used in main frames) Type-2 hypervisors abstract guest operating systems from the host operating system
- Type-2 hypervisors abstract guest operating systems from the host operating system.
- now you could run gaming software/ email software and a database on the same server even if the OS was different

2006 - paradigm shift to cloud computing 
- progressive move into containerisation or operating system virtualisation - where it it is not just a host renting out space for different OS but each container also offering compute options for the OS in question
- companies start clustering VMs and offering compute space from data centres they operate and manage 'in the cloud' using the internet to connect to local machines and offer host space
PaaS - wordpress and other such types of products emerge and thrive
A further shift to the democratisation of compute power as personal computing takes off and mobile OS start becoming a distrupting force

2014 - serverless uptake higher with end users