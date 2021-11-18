const express = require('express');
const connectDB = require('./config/db');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('API Running'));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

const swaggerOptions = {
        swaggerDefinition: {
            info: {
                title: "API",
                description: "API Information",
                contact: {
                    name: "Duy Phuong"
                },
                server: ["http://localhost:5000"]
            }
        },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));