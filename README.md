Para iniciar la aplicación se deben realizar los siguientes pasos:
1-Dentro de la carpeta client:
    -npm install
    -npm start
2-Dentro de la carpeta server:
    -npm install -g nodemon
    -npm install sequelize-cli -g
    -npm install
    -sequelize db:create
    -sequelize db:migrate
    -sequelize db:seed:all
    -crear un archivo .env con los datos correspondientes (ejemplo en .env.Example)
    -ejecutar nodemon en la terminal