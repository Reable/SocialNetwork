import Server from 'bunrest';
import userRoutes from './routes/user.ts'

const app: any = Server();

app.use('/api/user', userRoutes)

const PORT = Bun.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log('Server run on port ' + PORT)
})