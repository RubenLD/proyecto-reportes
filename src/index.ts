import app from "config/express";

const port = process.env.PORT || 3000;
const main = () => {
    try {
        app.listen(port);
        console.log(`http://localhost:${port}`);
    } catch (error) {
        console.log(error);

    }
}

main();