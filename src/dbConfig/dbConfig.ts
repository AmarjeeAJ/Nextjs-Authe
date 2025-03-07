import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

    } catch (error) {
        console.error("Database connection failed:", error);
    }
}
