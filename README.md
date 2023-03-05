# MERN todos App 

root folder : run `npm run build` => create React build and move it to backend folder

- deployed on render web services

2 sub-folders:
- server: Express +  MongoDB 
  + middlewares: cors, static 
  + uuid 
- client: React
  + bootstrap, FA-icons, saas, clsx

----
# render.com

https://mern-todo-app-pjhm.onrender.com/

----
# local
- server
  + use ./env.example to fill .env w/ mongodb credentials 
  + run npm install
- client
  + run npm install
  + run npm start to start React web server => localhost:3000
- server
  + npm install
  + npm run dev to start Express server => localhost:3001
----

# deploy
- root
  + run npm run build => generate React build + move new React build to server folder
  + visit render.com to create a web service 
  
  ----
  
<img width="680" alt="image" src="https://user-images.githubusercontent.com/99029880/222978529-7b4efdb2-a752-4518-a5ba-82379f85fbaf.png">


