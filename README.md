# fwd10_mini_project
## Assignment of CRUD API for merchants and products

**Mini Project**
1.	Subject: Mini Project of Backend Server Development
2.	Types: Hands-on
3.	Topics covered: Node.js, API, DB

**Scenario**
You are working in an e-commerce company and single handedly responsible with a merchant service that handles the catalog of products owned by merchants

**Objective**
You need to make from scratch according to the requirements

**Context**
- For the MVP, the requirements of merchant service are defined below
- The user is a merchant

**Requirements**

**Milestone 1**
●	A merchant service should be written with Node.js and using MySQL DB as a persistent storage
●	A merchant service will expose several APIs with these functions
○	A merchant could register itself/create an account in the merchant service
○	A merchant could remove its data/delete its account in the merchant service
○	A merchant could add products in the merchant service
○	A merchant could delete a product in the merchant service
○	A merchant could update a product in the merchant service
○	A merchant could get the list of its products from the merchant service
○	A validation is needed to validate the data based on their respective format
○	Merchant information that a merchant service needed is
■	id
■	name (required, min: 3, max 50)
■	email (required, email, min: 10)
■	password (required, min: 6)
■	address (required)
■	phone_number (required, numeric)
○	Product information that is needed is
■	id
■	merchant_id
■	name (required, min: 3, max: 50)
■	quantity (required, min:1, numeric)
■	price (required, min: 10000, numeric)
●	Commit the working code to git

**Milestone 2**
●	Add a /login api to authenticate user
●	Authentication using Basic Auth (username and password)
●	Commit the working code to git

**Milestone 3**
●	Add JWT authorization as access_token to access resources after user logged in
●	JWT is passed in Auth header as Bearer token
●	Commit the working code to git

**What and How To Submit**
●	Create a doc written with markdown (md) format that explains
○	A simple architecture diagram of the merchant service
○	An Entity Relational Diagram of the merchant service data model
●	A working code checked in in your github repo
●	Send the github repo link to <TODO>
