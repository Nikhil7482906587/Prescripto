import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";


// app config
const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = [process.env.FRONTEND_URL, process.env.ADMIN_URL];

// middlewares
app.use(express.json())
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


// Connect to the database
connectDB();

// Connect to Cloudinary
connectCloudinary();

// // api endpoint
app.use("/api/admin", adminRouter);
// // localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hey Rounak! API is working fine.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
