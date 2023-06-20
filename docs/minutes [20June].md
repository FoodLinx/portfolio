Tuesday, June 20

sbnkwanyana   10:01 AM
has started the Live Share session


SemMathe   10:05 AM
has joined the Live Share session


sbnkwanyana   10:05 AM
you ready


SemMathe   10:06 AM
yep


sbnkwanyana   10:06 AM
lets discuss the app. how do you understand it to work. summary


SemMathe   10:08 AM
I'll start with the users, Users should be able to search for meals and restaurants, create orders then await confirmation of order. The meals should be categorized for easier finding.

Restaurants, should be able to add meals to the catalog, should be able to confirm orders and change the status of orders from approved for new orders to ready after a given set of time to ready to be picked up.

delievery, delivery man should only be able to see which orders are ready for collection.

So delivery man only interacts with the restaurant, the user only interacts with the restaurant. the restaurant interacts with both these two services.

admin is able to watch orders, number of users, number of restaurants and delivery drivers

thats a brief summary on my understanding


sbnkwanyana   10:19 AM
From the human perspective: users should be able to view menus from different resturants. They add a meal off of the menu to their cart. They checkout by placing the order from the cart and confirm payment. The resturnat recieves a message that a new order has arrived. After some time the meal is prepared and is ready to be delivered. When it is ready to be collected a driver is notified to collect the order and deliver it. When the order is delivered its status changes to delivered.


SemMathe   10:21 AM
yes.


sbnkwanyana   10:26 AM
From the system perspective: Resturants are registered by the system admin after a notification to sign up has been recieved. Once the account has been set up the resturant can add meals to their menu. Once meals have been added to to menues they can be displayed to the user to be ordered. The resturnant recieves notifications to make a meal and ready it for collection. The system will simulate payment and a meal being prepared by changing the status of the order form preparing, ready for collection, out on delivery and delivered. after a certian number of minutes in each phase. The resturant will be able to see past and current orders with the statuses.

A driver will be selected to collect an order adn have it delivered. They will recieve the address for collection, the distance from the resturant to the delivery address and the amount in commission they will recieve for the delivery. The driver will update the status of the order from ready to be collected to out for delivery and then from out for delivery to delivered when it has been delivered.


SemMathe   10:30 AM
yes, to make it simpler users should see the restuarants and be able to click on the restaurant then they get shown all the availbale meals that the restaurant has to offer, from there they can order a meal.

yes driver should also have to update restaurant that the package has been delivered.

so from my understanding displaying all the meals will require a form.

not displaying but adding


sbnkwanyana   10:34 AM
lets start from the top first sem

first we need to add a resturnat


SemMathe   10:35 AM
yes we add a restaurant


sbnkwanyana   10:35 AM
we should use a link in the footer to redirect to a page where the resturant sends in information like the name, owner, address, phone number etc


SemMathe   10:35 AM
then it should be visible on the users dashboard


sbnkwanyana   10:37 AM
The system admin should get a notification that a resturant want to be added. Maybe via email

the admin creates the account and send an email back with the login details


SemMathe   10:39 AM
okay, that can work,

once logged in they should be able to start adding food items only

to make it simple this is how im thinking we will populate the data. we will only have 5 restuarnts. Burgers, SeaFoods, Steaks, Drinks, Pastas.

then before we add any meals, we should be able to see them on the users side dashboard


sbnkwanyana   10:42 AM
we need to let the resturant add the meals

lets not make too much work for ourselves by adding sea food etc

think kfc

kfc has a menu

on the menu they have meals street wise2, family bucket etc

they add the meals

we just display what they add

meal shoudl be title, picture, price only


SemMathe   10:44 AM
meal should also have description.


sbnkwanyana   10:45 AM
yeah

when a user goes through a menu they see these details

they place an order.

thats it

so the resturant needs a form to add meals


SemMathe   10:46 AM
lets not use real restaurant names


sbnkwanyana   10:46 AM
yeah everything is fake


SemMathe   10:48 AM
yes, so the meals should have a button that adds to basket

so the nect thing to discuss here is the meals right?


sbnkwanyana   10:51 AM
once meals have been added to the menu. users can order them by placing them into their cart/basket. thats all there is to meals

we will not implement the update or delete becuase it is unncessary for this project


SemMathe   10:52 AM
yeah n


sbnkwanyana   10:52 AM
and it reduces our work


SemMathe   10:52 AM
but if a restuarant decides to add a new meal, they should be able to the new meal.


sbnkwanyana   10:53 AM
they do that on the add meals page. whenever they want. once they have an account

lets move on to orders


SemMathe   10:54 AM
yes,


sbnkwanyana   10:55 AM
from the basket the user will checkout by placing an order. that will send a notification to the resturant that an order has arrived. The resturnat should see this on their orders page with a status of payment recieved

payment will be faked with all orders


SemMathe   10:55 AM
yep,


sbnkwanyana   10:56 AM
resturant then needs to change the sttus of the order to preparing by clicking a button


SemMathe   10:56 AM
yes fam


sbnkwanyana   10:56 AM
this will be visible to the user as well. when they go to their orders page (just a status update next to the order)


SemMathe   10:57 AM
the user order history page?


sbnkwanyana   10:58 AM
just call it orders. not order history, becuase you are now creating too many pages (order history, current orders, etc)

just one order page with the details of each order


SemMathe   10:59 AM
the users have a page called order, it only displays the order history. but then we make an [id].js file for displaying a specific order


sbnkwanyana   11:00 AM
no need for [id] page. just display the order and the status on the orders page. its unncesssary work to display data on a separate page

try to reduce the amount of work and pages you create

each order on the page shows order number, date place, meal  picture amount payed, thats it

no reason to display simple data on a different page


SemMathe   11:02 AM
yes on the user side it will show those things


sbnkwanyana   11:03 AM
on the resturant side it should be the same thing with different data


SemMathe   11:04 AM
yes


sbnkwanyana   11:05 AM
the resturnat should show who ordered the meal, the address, the meal ordered, payment status, and button to update the status and status labels

we can add more info but it should show a list of orders

when a resturant updates an order from ready to be collected it should show on the drivers deliveries page that an order needs to be collected

shows the meal, the address, name of the person to deliver to, order number, etc

with buttons to update the status of the order from out for delivery to delivered


SemMathe   11:09 AM
yes the delivery guy must be notified


sbnkwanyana   11:09 AM
and thats it

done


SemMathe   11:09 AM
yep thats it fam


sbnkwanyana   11:10 AM
admin we can discuss later if there is time to implement his stuff. we dont really need it

he just needs to add a resturant and a driver account


SemMathe   11:11 AM
admin will only have to manage the signin up of restaurants and drivers


sbnkwanyana   11:11 AM
drivers dont add anything just collect and update order statuses and view their commission


SemMathe   11:11 AM
yes


sbnkwanyana   11:11 AM
lets write everything down in the md file and push

lets start with the route

routes


SemMathe   11:12 AM
do we have to write them all down?

we can start with the simpler routes


sbnkwanyana   11:13 AM
yes all of them. all pages

all api routes

everything sem


SemMathe   11:15 AM
okay im editing the app.md file


sbnkwanyana   11:15 AM
yes i see

sem stop

you creating too many pages age

again


SemMathe   11:17 AM
bro what do you mean too many pages


sbnkwanyana   11:17 AM
put orders in one page. we will chage the status of the order in the orders page


SemMathe   11:17 AM
those are the endpoints


sbnkwanyana   11:17 AM
nooooo

you dont need them. you just need to update the status of an order nad it will show up on the orders page. you dont need pages for that


SemMathe   11:19 AM
okay sims mina i don't know how we will display all the orders but with separate statuses on the same page when you want to view only orders with a specific status

those are the endpoints then.


sbnkwanyana   11:20 AM
you do a loop over all the orders and display the same html foreach order

resturant needs to add meals

to their menu

so they need a route

route/page

we need profile route/page

for each user


SemMathe   11:22 AM
theres already a meal dir will move it to the restaurant dir

who also needs a profile route


sbnkwanyana   11:25 AM
profile will need to have a form to add address, phone, name etc for the user. this data will need to be filled in before they can place an order. ill will use it with auth0


SemMathe   11:25 AM
yes the profile page will require a form


sbnkwanyana   11:26 AM
i dont think we need to do a profile page for resturant or driver but the driver needs to be able to see their commission from the orders

deliveries


SemMathe   11:26 AM
so the delivery needs a commission route

imma start updating the other parts of the md file


sbnkwanyana   11:28 AM
we dont have to implement it. we change show commission next to the order when they do a delivery and put it as a summary on their index page


SemMathe   11:37 AM
i think i've added according to my understanding

you can double check if thats all

for adding storing pictures i'll use firebase

on mongodb we will only store the string link

so will have to modify the next.config file

so make sure you create the models for all the things we will require, orders needs a model, meals need a model, users need a model


sbnkwanyana   11:44 AM
yes ill do the models. mongodb and redis backend api's

please do the pages and styling.


SemMathe   11:44 AM
are you happy with the endpoints we currently have?


sbnkwanyana   11:45 AM
ifiok and elijah will have to do the readme file and the video presentations so that they contribute also


SemMathe   11:45 AM
so i will delete the other files on the restaurant dir


sbnkwanyana   11:46 AM
lets go over them

how will you display the meals to users, both logged in and those not logged in


SemMathe   11:47 AM
will use a catalog component

that its puprpose is only to diplay meals

restaurants will have  button to add  a meal on the navbar aswell

so the restaurant files, which ones must i delete?


sbnkwanyana   11:52 AM
the ones we dont need


SemMathe   11:52 AM
name them bro


sbnkwanyana   11:53 AM
i dont know. you created them. just delete the ones we havet specified here today


SemMathe   11:53 AM
newOrder.js? ordersInProgress? orderPickUP?


sbnkwanyana   11:54 AM
yes

that will be displayed on orders using a status label


SemMathe   11:55 AM
okay done bruv

i think thats all

for user ive added the profile page


sbnkwanyana   11:56 AM
okay. im going to copy and save this chat so we can remember. ill put it in an md file as well as minutes for the day

lets choose what we will start working on now. maybe take a 30 minute break then we start

coding


SemMathe   11:57 AM
okay.

save everything


sbnkwanyana   11:57 AM
think maybe adding a new resturant first


SemMathe   11:58 AM
yes i'm thinking the same aswell


sbnkwanyana   11:58 AM
meet up at 12:30

closing this session. will push the mds

SemMathe   11:58 AM
once restaurant is up and running, the rest should be quicker.