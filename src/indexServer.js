import app from "./appExpress.js";

app.set("port", process.env.PORT || 3003).listen(
    app.get("port"),
    () => console.log("Color Organizer running")
);

