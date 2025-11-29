import express from 'express'
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'
import dotenv from 'dotenv'
import mongoose, {connect} from 'mongoose'
import { errorHandler } from './middlewares/errorHandler.js'



dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)

// 404 handler
app.use((req, res, next) => {
  const error = new Error("Route Not Found");
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler)

// connect database
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('connected mongodb locally ✔'))
.catch(err => console.log(err))



app.listen(PORT, () => console.log(`server running on port ${PORT}`))