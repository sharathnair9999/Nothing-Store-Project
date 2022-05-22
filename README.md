
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
 - [npm-razorpay](https://www.npmjs.com/package/razorpay) : for payment integration

#### How To Run in Local - 
Run these commands in your terminal
 ```
 git clone https://github.com/sharathnair9999/Nothing-Store-Project.git
 cd ./Nothing-Store-Project
 npm install
```

Add `.env` file to the root directory and place a JWT secret key in it like below and save it
`REACT_APP_JWT_SECRET = <your_secret_code>`

To incorporate payment integration, register in [Razorpay](https://razorpay.com/links/payment-gateway-integration/?utm_adgroup=brandsearch_pg&utm_gclid=Cj0KCQjwvqeUBhCBARIsAOdt45bEG-uWIjmB03zvyCZHQY8vzcQPzJeOYIIJuqsRjUsAS3PM-BOlKiYaAlLVEALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=brandsearch_generic&utm_term=razorpay%20payment%20gateway%20integration&utm_content=text2&hsa_ad=527529475851&hsa_tgt=kwd-273035732538&hsa_acc=9786800965&hsa_grp=127457516310&hsa_src=g&hsa_ver=3&hsa_net=adwords&hsa_mt=p&hsa_kw=razorpay%20payment%20gateway%20integration&hsa_cam=1995263207&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45bEG-uWIjmB03zvyCZHQY8vzcQPzJeOYIIJuqsRjUsAS3PM-BOlKiYaAlLVEALw_wcB#developers) and add your AppID and SecretKey in `.env` file using above convention

Refer [this](https://dev.to/soumyadey/integrate-razorpay-in-your-react-app-2nib) blog to understand how to integrate Razorpay in React Application.

After that Run in your local with `npm start` command. 


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
- Address Management
	- CRUD operations for address
- Payment Integration Using Razorpay (Test Mode : Need not pay money from user side)
- Checkout View after adding products to cart
- Orders Management
	- Order Successfull Page
	- All Orders Page
