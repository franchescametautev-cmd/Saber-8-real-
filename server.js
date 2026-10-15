const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Conexión con SQL Server
const config = {
    server: "localhost",
    database: "Saber_Octavo",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// Comprobar conexión
app.get("/", async (req, res) => {
    try {
        await sql.connect(config);
        res.send("SABER 8 está conectado correctamente con SQL Server");
    } catch (error) {
        console.log(error);
        res.status(500).send("No se pudo conectar con SQL Server");
    }
});

// REGISTRAR USUARIO
app.post("/registro", async (req, res) => {
    try {
        const { nombre, usuario, email, password } = req.body;

        const pool = await sql.connect(config);

        await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("usuario", sql.VarChar, usuario)
            .input("correo", sql.VarChar, email)
            .input("contraseña", sql.VarChar, password)
            .query(`
                INSERT INTO Usuarios (nombre, usuario, correo, contraseña)
                VALUES (@nombre, @usuario, @correo, @contraseña)
            `);

        res.json({
            mensaje: "Usuario registrado correctamente"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "No se pudo registrar el usuario"
        });
    }
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
});