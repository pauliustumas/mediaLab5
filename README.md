# mediaLab5

This lab aims to build video streaming app based on WebRTC framework.

# Place all laboratory on the github.io.
  - ROOT folder should contain 5 folders (lab1, lab2, lab3, lab4 & lab5) and index.html.
  - index.html should have links to each folder.
  - Each folder should be prepared to load solution.

# Requirements for repository
  - You have to clone this repository and make two branches (master and develop).
  - The develop branch should contain commits of every new feature of the AR application.
  - When all features will be ready you have to merge the development branch to the master.

# Requirements for streaming application
There are three options to choose from. 

Option A:
  - Capture images from camera by using WebRTC API.
  - By using Websoket API send images from camera to the client and display them.
  - You can use base64 to encode image to string and decode on client side.
  
Option B:
  - Find out how WebRTC API is designed.
  - Create client and server pages.
  - Server page should capture video from browser.
  - Client page should display stream. 
  
  
The general requirements for option A & B.
  - Test application on at least two browsers and specify in README.md which version and browser it was.
  - To pass this lab, you have to fully complete an option.  

  
# Important notes
  - SSL server is needed to run this lab material.
  - You will be needed to generate self signed sertificate and set up your web server. 
You can try to use these file servers:  
  - Apache: https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md 
  - Tomcat: http://androidsrc.net/installing-tomcat8-raspberry-pi-3/ 
  - HFS: http://www.rejetto.com/hfs/ or any other server.
Proxy http to https:
  - https://technique.arscenic.org/lamp-linux-apache-mysql-php/apache-le-serveur-http/modules-complementaires/article/installer-et-configurer-le-module-ssl-pour-apache2?fbclid=IwAR1_nXNQlrMIdJ5tilVUyr45xeiA91yw21vhnMxWHnuvY01VTd2FVR_T2ao  