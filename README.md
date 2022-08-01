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

# Vehicle Owner Dashboard
* This has 2 sections namely
  * Profile : This includes information about the vehicle owner. For example Adhaar Number, his photo ID, his mobile number etc.
  * Vehicle Info : This includes all the data about the vehicle owned by the partner 
* All the data is again present in MySQL table 

![VehicleOwnerDash](https://user-images.githubusercontent.com/77404110/182173617-cbc65e34-d2f4-4139-9ef2-df3cf77a21c1.png)

# Vehicle Provider
* This page is specifically created and designed for clients 
* Through this page they can choose their location, their seat requirement and the results are then showed according to the choices selected by the client
* Results can be filtered through filter tag

![vehicleProvider](https://user-images.githubusercontent.com/77404110/182174182-f2481ffe-b2e9-403f-bbfc-79e2eb245638.png)

# Admin Page
* This page is not included in the flow of the website but it can be accessed through a special URL localhost:PORT_NO/admin-vau
* This page has 2 sections
  * Vehicle Owners : This will include data table of all the vehicle owners you manage
  * Clients : This will include data table of all the clients who book through your website
  
![admin](https://user-images.githubusercontent.com/77404110/182175001-2e4b08d2-cc77-41ba-b10f-dba185011781.png)
