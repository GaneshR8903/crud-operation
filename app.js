const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app =express();

app.use(bodyParser.json());

app.use('/api',userRoutes);

sequelize.sync({ force:false }).then(() =>{
    console.log('Database Connected');

    const PORT =process.env.PORT || 3000;

    app.listen(PORT, () =>{
        console.log(`console is running on port http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:',error);
});

