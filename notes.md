# Learning MEAN Stack by Building Real world Application

- links
  - [Learning MEAN Stack by Building Real world Application](https://www.udemy.com/learning-mean-stack-by-building-real-world-application/learn/v4/content)

## Angular Architecture

- done

### Install Tools

- done

### Create Angular Project using Angular-cli

- done

### Edit Your First Angular Component

- done

### Project File Review

- done

### Introduction to Modules

- done

### NgModule MetaData

- done

### Introduction to Components

- done

### Create your first Angular Component

- done

### Data Bindings

- 4 ways of data binding
  - string interpolation `{{ value }}`
  - property binding `[property]="value"`
  - event binding `(event)="handler"`
  - two-way data binding `[(ng-model)]="property"`

### Pipes

- transform data

### Directives

- directives are functions
  - `structural`
    - `*ngIf`
    - `*ngFor` `let name of names`
  - `attribute`
    - `ngModel`
    - `property binding`
    - `[ngStyle]=""`
  - `components`

### Introduction to Services

- holds function or functions that component will use
- increase modularity
- handle business logic
- `do not fetch` data inside components
- validate user input or logging

### Create Your Angular Service

- done

### Introduction to Dependency Injection

- technique whereby one object provides the dependency of another object
- injector holds inside
  - LoggerService
  - HeroService
  - AuthService

```javascript
constructor(private heroService: HeroService) {
  // this also should be imported inside the component where it will be used
}
```

### Providing Services

- done

–--

## Getting Started with Real World Application

### Create Angular Project for our Real world Application

### Complete Source Code for this Module

### Important Note related to Angular Material Documentation

### Angular Material Setup

### Adding Prebuilt Material Theme

### Adding Material Fonts

### Creating Shared Module

–
Create Dashboard Layout on Frontend Angular Application
35:58
Complete Source Code for this Module
00:01
Creating Module using Angular-cli
Preview
01:53
Adding Lazy Loading
04:54
Lazy Loading Demo
01:23
Create Main Content Component
02:08
Create SideNav Component
03:39
Adding Sidenav to our Layout
03:41
Adding Toolbar in Sidebar Navigation
01:11
Adding List Items to the Side Navigation
00:58
Adding Toolbar on the top of Layout
00:41
Adding Mode to the Material Sidenav Navigation
02:06
Adding Responsiveness to Side Navigation
05:51
Debugging Side Navigation Responsiveness
01:27
Create Menu Icon
Preview
02:47
Displaying Menu Icon on Small Screen
01:30
Adding Material Card
01:48
–
Adding Routing in Angular
14:20
Complete Source Code for this Module
00:01
Refactor App Structure
04:09
Adding Nav List Items
Preview
01:54
Creating Invoices Module and Routing
05:26
Create Clients Module and Routing
02:50
–
Setup Node.js Server
12:28
Complete Source Code for this Module
00:01
Creating Express Server
01:48
Create Route in Express
00:36
ES6 Setup using Babel
02:31
Create npm script for Production
01:14
Setting up Prettier
01:44
ESlint Setup with Prettier
02:47
Configure Prettier with ESLint
01:47
–
Creating CRUD(Create, Read, Update, DELETE) API on Node.js Backend
50:43
Complete Source Code for this Module
00:01
Create Invoice Listing Endpoint
Preview
02:22
Create Custom Middleware in Express
01:34
Refactor App Structure to Controller and Routes
03:02
Refactor the config folder
01:21
Connecting to MongoDB
01:36
Creating new Model in Mongoose
Preview
02:56
Create new record in mongoose Model
04:18
Debugging Node.js App in Chrome
02:04
Debugging Node.js App in VS Code
01:45
Error Handling Middleware
01:47
Error Handling Middleware Demo
00:50
Creating Global Error Handling Middleware
03:22
Logging Http Request status using morgan middleware
01:49
Parsing the Request Body in Express
Preview
01:42
Create new record in MongoDB
Preview
01:27
Adding Validations through Joi
Preview
07:25
Find all Records from MongoDB
Preview
00:41
Handling Http status codes
02:20
Find Record by ID
02:34
Delete Record from MongoDB
01:37
Update Record by Id from MongoDB
04:10
–
Documentation for the REST APIS Using Swagger In Nodejs
29:19
Complete Source Code for this Module
00:01
Initial Setup for Documentation
02:26
Adding Meta Data for Swagger
03:14
Adding JSON Mime Types for Swagger
02:32
Create Swagger Model Definition
03:29
Documentation for the POST Endpoint
Preview
05:34
Documentation for the GET Endpoint
02:16
Documentation for FindOne Endpoint
03:40
Documentation for Delete Endpoint
01:28
Documentation for Update Endpoint
03:06
Update Build Script to add Swagger files
01:33
–
Creating CRUD with Reactive Forms and Material Data Table
01:27:57
Complete Source Code for this Module
00:01
Module Intro
01:21
Create Service in Angular
07:07
Handle CORS Issues on Backend
01:42
Adding Angular Material Data Table
03:15
Populating Records to the Data Table
03:19
Reformat the Date using Pipe
01:08
Redirect in Routing
01:43
Adding Material Menu in Data Table
03:44
Create Button to save new Invoice
03:00
Adding Routing for new Invoice
04:17
Create basic Form
03:25
Adding Material Date Picker
01:51
Adding Reactive Forms
05:21
Save and Cancel button in the Form
02:16
Sending create request to the backend server
03:52
Change the Color Scheme for Form Fields
01:39
Validations in Reactive Forms
02:08
Displaying Validation Error to User
02:57
Adding Success Notification
04:13
Error Handling Notification
01:42
Delete Invoice
03:40
Adding Notification for Delete Invoice
02:49
Refresh Data Table after deleting records
02:33
Adding Routing to update Record
02:43
Get the Route params using ActivatedRoute
03:36
Set the Object to the Reactive Forms
03:38
Send the Update Request to the backend
08:57
–
Pagination, Sorting and Filtering on Angular and Nodejs
01:04:21
Complete Source Code for this Module
00:02
Adding Pagination on Backend
05:08
Adding Documentation for Pagination
04:05
Refactor Get Invoices on Frontend
01:53
Adding Paginator Component
01:26
Bind the Length of Records in Pagination Controls
01:42
Change the Page Size using Page Event
08:24
Running Observables in Series
03:11
Adding Progress Spinner
05:17
Adding Styling for Spinner
02:12
Filtering on Backend
01:40
Adding Sorting on Backend
03:55
Adding Documentation for Sorting and Filtering
01:50
Implement ngAfterViewInit
01:25
Basic Setup for Sorting on Frontend
04:06
Adding Sorting on Fronetnd
06:20
Refactoring to Rxjs Merge
05:58
Creating Form Fields for Filter Invoices
02:11
Send Backend Request to Filter Invoices
03:36
–
Client Feature (Material Dialog and Material Data Table)
01:53:10
Complete Source Code for this Module
00:02
Module Intro
01:01
Structure a Node.js App feature by feature
06:00
Basic Setup for Client Module
03:00
Create Client Module in Mongoose
01:32
Validating Request Body Using Joi
03:39
Create Record Using Async/Await
01:33
Find All Clients
01:19
FindOne Client
01:05
Delete Client
02:05
Update Client
03:48
Adding Relationship between Client and Invoice
03:08
Populate Client with All Invoices
00:45
Add Client while Updating Invoice
00:22
Create Client Model Definition in Swagger
01:46
Adding Documentation for GET and POST Client
04:48
Adding Documentation for FindOne, Update, And Delete
03:38
Fetch Clients from the Backend
06:51
Load Clients to the Data Table
02:10
Adding Toolbar
02:42
Setup Basic Dialog
05:16
Refactor Client From Dialog to Separate File
03:19
Refactor width and height of Material Dialog
00:31
Create new Form in the Dialog
03:01
Create Reactive Forms inside Material Dialog
04:24
Validations for required Fields
02:51
Get the Data from Material Dialog
02:20
Save new Client
05:42
Handling Empty Results in Observable
02:58
Adding Spinner
02:26
Adding Edit and Delete Action Item
01:48
Passing Data to the Material Dialog
03:33
Set the Client to the Form
03:52
Update the Client
07:17
Update Title on Material Dialog
01:40
Delete Client
02:07
Refactor Save and Update to Conditionals
00:40
Add Material SelectBox
06:46
Adding Validations for Client
01:25 -
JSON Web Token Authentication with Passport
59:17
Complete Source Code for this Module
00:01
Basic Setup for User Module
03:05
Create User Model
01:13
Save new User in MongoDB
04:18
Encrypt the User Password
04:52
User Login
05:26
Register Config to development
01:44
Register global Middlewares in Separate file
04:43
Configure Passport JWT Strategy
08:05
Debugging the Passport JWT Strategy
04:01
Code Review for Passport Library
07:15
Apply Authentication on Routes
03:18
Add Documentation for Signup
03:19
Adding Documentation for Login
03:02
Adding Authentication Header in Documentation
04:55 -
JSON Web Token Authentication in Angular
01:10:00
Complete Source Code for this Module
00:01
Create Auth Module
03:12
Creating Reactive Forms
05:37
Send Login Request to the backend Server
09:23
Save Token to LocalStorage
05:33
Create HTTP Token Interceptor
05:47
Apply HTTP Token Interceptor
01:32
Adding Title Dynamically
01:41
Adding Signup Button in the Form
05:25
Send Signup Request to the Backend Server
02:29
Error Handling
00:58
Adding Loading Spinner in Auth Form
02:28
Apply Routing Guards
08:32
Apply NoAuthGuard on Public Routes
02:31
Fixing Invoice Title
01:16
Adding Resolve Guards for Edit Invoice
08:38
Logout User
04:57 -
Social Authentication(Google, Twitter, Github) with Passport in Node.js
51:25
Complete Source Code for this Module
00:01
Setup Auth Module
02:35
Setup Auth Credentials From Google
01:38
Configure Passport-google Strategy
03:38
Setup Routes for Google Authentication
01:31
Serializing and Deserializing User in Passport
03:54
Understanding Passport Google Auth Flow
03:33
Add Scope for Email and Profile in Google Strategy
01:02
Find or create the user after Authenticated from Google
05:19
Refactoring Signup
04:24
Handle Duplicate Account Validation in Signup
01:12
Refactor Login
00:27
FIx Profile Error
02:22
Send JWT Token After Authenticated with Google Strategy
02:49
Redirect to Login After Failed Authentication
00:42
Create New Twitter Application
02:13
Setup Passport Twitter Strategy
04:19
Twitter Authentication with Passport
03:07
Creating developer Application in Github
01:29
Authenticate User with Github Strategy
04:36
Wrap Up
00:34 -
Social Authentication(Google, Twitter, Github) with Passport on Frontend
42:21
Complete Source Code for this Module
00:01
CORS Access Control Error in Google Authentication
04:36
Adding Proxy for the API in Angular
04:18
Redirect User to Dashboard Router after Authenticated
03:36
Extract Query Param in AuthGuard
04:20
Authenticate User from the backend Server
03:56
Fix Authentication in AuthGuard
05:38
Github and Twitter Authentication
01:03
Styling Social Buttons
05:20
Refactor Styling for Signup Buttons
00:17
Logout User on Backend
01:37
Logout User on Frontend
02:22
Fixing Http Interceptor on Lazy Loaded Modules
03:40
Adding Error Handling in Logout
01:37 -
Invoice View
25:59
Complete Source Code for this Module
00:02
Module Intro
00:41
Creating Invoice view Component
02:10
Adding View Action Item to Table
02:48
Apply Resolve Guard on Component
01:56
Populate Client with Invoice
00:44
Display Invoice Details to the Material Card
04:01
Styling Material Card for Invoice Details
02:08
Apply Routing for Edit Invoice
08:05
Calculate the Total Value included Tax
03:24 -
Download PDF Invoice
53:23
Complete Source Code for this Module
00:02
Module Intro
00:31
Installing Plugins to generate PDF File
02:14
Generate Basic Pdf File
02:31
Adding Bootstrap to Invoice Template
01:49
Generate Dummy Invoice
00:59
Render Dynamic Content to PDF
03:31
Display Total and SubTotal in the Invoice
04:19
Refactor Template Code into Methods
04:05
Download Invoice From Frontend
03:58
Download and Save PDF from Frontend
01:43
Adding Material ProgressBar
02:38
Adding Name Attribute for Local User
08:54
Adding User name and email to the Invoice
05:54
Fix Dynamic User name and Email in the Invoice
03:46
Adding Error Handling Method
01:07
Fetch Email from the Twitter Profile
04:45
Refactor getUser method
00:37 -
Forgot Password
58:04
Complete Source Code for this Module
00:02
Add Link for Forgot Password
03:28
Create Forgot Password Component
02:09
Design the Forgot Password Component
04:59
Create Forgot Password Route on Backend
02:37
Send Forgot Password Request from Frontend
03:44
Create Reset Link to Reset password
06:19
Create new Account at Ethereal
01:05
Send Reset Password Email to User
10:09
Spinner on Forgot Password
02:30
Create Reset Password Component
01:23
Design the Reset Password Form
03:02
Implement Reset Password on backend
05:00
Adding Password Match Validation
02:15
Reset Password Request from Frontend
07:57
Refactor Documentation for Signup
01:01
Fix Color typo for Client Select Box
