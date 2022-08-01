# Project Cabbie
### Created in [NodeJS](https://nodejs.org/en/) 
#### providing you an efficient solution to all your cab needs

## What it does ?
It helps any cab booking agency to manage its everyday operation more efficiently and cost effectively
* Manage vehicle owners and their details
* Manage customers and their details
* Enable vehicle owners to update their details whenever needed
* Enable customers to book cabs on their own 

# Index 
What it looks like ?

![landing](https://user-images.githubusercontent.com/77404110/182168487-2ec6760d-14cd-4f94-8c39-d6b1d5010493.png)

# Signup Page
* This has all validations neccessary 
* Validates data from MySQL table i.e. if emailID already used, you cannot register with the same emailID again
* Once signed up, all the data goes to a MySQL table in the back-end

![signup](https://user-images.githubusercontent.com/77404110/182168580-482ce7df-25bb-4802-92c3-8bd04427beac.png)

# Login Page
* This also validates data from MySQL table and if not present, Error message appears
* There are 2 types of login 
    * For vehicle owners
    * For clients i.e. people who will book cabs
* Which loginID refers to which login type happens implicitly 

![login](https://user-images.githubusercontent.com/77404110/182171021-35a0bd67-5e28-4240-833c-b8c4bd822099.png)
