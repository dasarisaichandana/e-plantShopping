Paradise Nursery Shopping Application
Description
This is an online store application offering a variety of beautiful and beneficial houseplants. The application showcases a dynamic and interactive shopping experience where users can explore plant categories, view product details, and manage their cart efficiently. The application built using Vite and React 18. The goal of the application is to provide users with a seamless and enjoyable online shopping experience for houseplants.

Learning Objectives
By completing this project, I was able to:

Build React Components: Create functional and reusable components using proper composition and nesting to keep the structure modular and clean.
Manage State with Hooks: Use React Hooks like useState and useEffect to handle component-level state and control the visibility and behavior of UI elements.
Integrate Redux: Apply Redux concepts such as actions, reducers, and the store to manage global application state effectively.
Render Dynamic Data: Dynamically display content by mapping through arrays of plant objects to generate interactive UI components.
Handle Events & Conditional Rendering: Capture and respond to user events like button clicks, adjust UI based on state changes, and implement conditional logic to control what gets rendered.
Features
A Landing Page with a welcoming intro and a button that navigates to the product listing
A responsive navigation bar linking to the landing, product listing, and shopping cart pages
A Product Listing Page with cards for each plant displaying the image, name, description, cost, and an “Add to Cart” button
Multiple plant categories, such as Aromatic Plants and Medicinal Plants, to organize the inventory
A Shopping Cart Page that shows:
Plant cards with thumbnails, unit price, total price, and quantity controls
Buttons to increase/decrease quantity and delete an item
Continue Shopping and Checkout buttons for seamless user flow
Real-time updates to the cart quantity icon in the navbar and total cost calculations as users interact with the cart
Deployment
The application is deployed using GitHub Pages, providing a simple and reliable way to host static sites. Here's the link to the application: https://sandyavs.github.io/e-plantShopping/

Tech Stack
This project is built using React 18 with Vite for fast development and optimized builds. The application is structured using functional components, React Hooks (useState, useEffect), and Redux Toolkit for global state management.

Result
Landing Page
The landing page welcomes users to Paradise Nursery with a visually appealing layout, a brief introduction to the shop, and a "Get Started" button that leads to the product listing page. It sets the tone for a smooth and engaging plant shopping experience.

image
Product List Page
The product listing page showcases a variety of houseplants organized into sections like Aromatic Plants and Medicinal Plants. Each plant is displayed in a card with its image, name, description, price, and an Add to Cart button, allowing users to browse and shop easily.

image
Shopping Cart Page
The Shopping Cart Page displays all the selected plants in a clean, card-based layout. Each card shows the plant’s image, name, unit price, quantity controls, total price, and a Delete button. Users can easily adjust quantities or remove items, with options to Continue Shopping or proceed to Checkout.

image
Continue Shopping
When clicked, it takes to the product list page where additional items can be added to the cart

image
Checkout
When the Checkout button is clicked, the app will guide users to review their selected products before proceeding to payment. Once confirmed, the user will be directed to the payment section. This feature is planned for integration at a later stage. To handle payments securely and efficiently, Stripe should be used as the payment gateway as it is widely trusted, developer-friendly, and provides built-in security.

Screenshot 2025-07-28 at 1 05 37 AM
