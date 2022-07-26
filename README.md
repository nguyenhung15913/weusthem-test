# We Us Them Application
## Firstly you need to install all the packages
<code>cd frontend</code> to go to the frontend folder and <code>npm install</code> to install the packages
From the root folder, <coode>cd backend</code> to go to the backend folder and <code>npm install</code> to install the packages
Frontend and backend need to be run at the same time in order for the app to work properly
## Running the app locally
In the backend folder, run  <code>npm run dev</code>, this will run the backend in development mode with Nodemon. <code>npm start</code> will work if you want to deploy the app
In the frontend folder, run <code>npm start</code>, The app will run locally
## Frontend features
- ReactJS for frontend app
- Axios for sending and receiving data from the backend
- React router dom to navigate between the app
- useContext() for user authentication
## Backend features
- NodeJS and ExpressJS for creating the server
- The App uses MongoDB as the database
- Mongoose is used to connect the server with the database
- Images can be uploaded with Multer
## Screenshot
User needs to sign in in order to create or see their contacts
![image](https://user-images.githubusercontent.com/69558780/181108786-ac6a12ac-1e03-4051-8897-b261012619be.png)
They also can register if they have not had an account
![image](https://user-images.githubusercontent.com/69558780/181108883-e69442b9-4d94-4b3b-8337-b82f374ec802.png)
Each user will have their own contact, here is an example. Contacts can be either deleted or edited. Clicking trash can icon will delete contact.
![image](https://user-images.githubusercontent.com/69558780/181109011-7a23a2ea-78d5-4d97-94cc-bfc4324cc9f1.png)
Clicking edit icon will redirect user to the contact detail page where they can modify information
![image](https://user-images.githubusercontent.com/69558780/181109229-ea2f21ac-a877-4818-a65d-49c24832ec7e.png)
![image](https://user-images.githubusercontent.com/69558780/181109280-a67855e6-37ac-4ac7-99eb-02b5daee5e4f.png)
The account will remain until the user log out.

## Note:
- Users can search for the First Name of the contacts
- They can sort the list by First Name, Last Name and Email by just clicking the words "First Name", "Last Name", "Email" on the table
- Each user will have no contact for the first time. This is an account for testing with some available contacts <code>username: harry15913</code>, <code>password: Harry@15913</code>
- All the input need to be filled in order to create or update a contact.

For more information please contact me through <code>nguyenhung15913@gmail.com</code>

