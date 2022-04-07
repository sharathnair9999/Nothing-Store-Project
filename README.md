
<div align="center">
  <img src="https://res.cloudinary.com/sharath-media-library/image/upload/v1647446844/nothing-store-project/Nothing_extv5p.png" width="150" title="App Logo">

   # [Nothing Store](https://nothingstore.netlify.app/)
     An e-commerce site for all your tech gadget needs at one place. 
</div>

#### Stack Used

- React
- [Nothing UI](https://nothing-ui-library.netlify.app/)- Component Library
- Javascript

#### Built With -

- Context API + useReducer
- [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)

#### Packages Used - 
 - [MockBee](https://www.npmjs.com/package/create-mock-backend) - A mock backend for getting mock APIs to build the functional logic of the application
 - [Axios](https://www.npmjs.com/package/axios) - For making API calls

#### How To Run in Local - 
Run these commands in your terminal
 ```
 git clone https://github.com/sharathnair9999/Nothing-Store-Project.git
 cd ./Nothing-Store-Project
 npm install
```

Add `.env` file to the root directory and place a JWT secret key in it like below and save it
`REACT_APP_JWT_SECRET = <your_secret_code>`

After that Run in your local with this command. 

`npm start`
secret_code can be anything of your choice. 
And now this application runs in your local machine too. 

# Features

- Landing Page
	- Categories
	- New Launches
- Authentication: 
    - User Signup 
    - User Login
    - Protected Routes
    - Public Routes
- Products Listing Page
	- Product Card with Name, Price, Rating, In stock or not
- Filter by
	- Price Range
	- Price Low to high and vice versa
	- Brand
	- Category
	- Rating
- Cart Management 
	- Add to Cart (Only if in stock)
	-  Remove from Cart
	- Increase / Decrease Cart Qty.
	- Move to Wishlist From Cart
	- Cart Summary
		- Total MRP
		- Total Discount
		- Actual Checkout Price
- Wishlist Management
	- Add to Wishlist
	-  Remove from Wishlist
	- Move to Cart From Wishlist
- Search with Product Name, Category, Brand


# Demo
![Your Note Demo](https://res.cloudinary.com/sharath-media-library/image/upload/v1649353927/nothing-store-project/ecom-demo_idpo2b.gif "Nothing Store App Demo")
