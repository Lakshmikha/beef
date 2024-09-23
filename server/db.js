const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://lakshmikharejith:mniLR2003*@beef.5fmqj.mongodb.net/BEEF?retryWrites=true&w=majority&appName=beef'

        );
        console.log("Mongodb connected");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectdb