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
  
![image](https://user-images.githubusercontent.com/99029880/222922380-7a4a6e1e-fed7-4f50-ac14-1795161be7cd.png)


