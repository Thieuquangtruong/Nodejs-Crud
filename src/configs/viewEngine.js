import express from "express";

const conFigviewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set("view engine","ejs")
    app.set("views","./src/views/test")
    
}

export default conFigviewEngine;