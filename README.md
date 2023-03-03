# Station International

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5 and [Angular Material](https://github.com/angular/material) 15.2.0.

<br>

## `Development server`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.





<br>

---

## `Description`

ISS is an application that allows us to know in real time where the international station is and at the same time shows us our position.

Click here for view the deployed application -> https://elisabethmartinezmembrado.github.io/ISS/

---
## `Requirements` 
* NodeJS
* Npm
---

## `Views`







---

## `Functions`

The application makes a call to the nasa api, from it it receives the data of the exact location of ISS. 
This passes the data to our add marker function which every 3 seconds paints the location on the map.
The browser allows us to access the customer's location and with the add position function we locate it on the map
---
## `Instalation`



1 - Download the app on GitHub. For this we clone the project and copy the url of the project.

2 - From the console we open the project folder and with comand `npm instal`, we download the packages.

3- To the open local server, we type `npm start`.

---

## `CD (Continuous Deployment)`

The CI provider is GitHub Actions.
The project inlcudes a Pipeline in .yml format.

---

## `Upgrade ideas`

* Add test and station status alerts.

* Add more NASA functionalities

---


## `Licence`

Copyright 2022 Elisabeth Martinez Membrado.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


