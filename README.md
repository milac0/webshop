#   My own webshop - Interview task (Advanced)

## Task description

The goal of this task is to create a simple webshop application. The application has several screen which are listed and exaplained below.

### Category page

Path: `/`

On this screen users can browse through a list of available products. Products must  be fetched from BestBuy's API. The category page has a search input for filtering products by name. The category page container displays products with pagination with a fixed amount of items per page.

####    Best buys api
You can register and get the free API key at (https://www.bestbuy.com/identity/newAccount)[https://www.bestbuy.com/identity/newAccount].

The documentation can be found (here)[https://bestbuyapis.github.io/api-documentation/#overview].

Every product item in the category page, contains: 
1. Name
2. Category
3. Price
4. Image
5. *Add to cart* button

Clicking on *Add to cart* adds the item to the cart and updates the cart item count in the navigation bar. Clicking the *Add to cart* button multiple times increases the quantity every time by 1.

### Product detail page

Path: `/products/:productIdentifier`

On the product detail page users are displayed full product details with additional information, like description, dimensions, customer review  and color.


### Cart page


Path: `/cart`

Renders all items currently added to the cart. Support function for increasing and decrasing item count and completely removing items from cart.

Cart item component display is up to you.

Cart item should have a checkout button which display an alert when clicked and clears the current cart.

Cart information should be persisted when the browser reloads.


## Libraries

You can use any library you want for the solving of the task regarding UI (ex. MaterialUI), routing (ex. React-Router) and data fetching (ex. fetch, axios ), storing (redux, context, localStorage).

