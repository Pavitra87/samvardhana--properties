const express=require('express');
const { connectDB } = require('./db/db');
require('dotenv').config()
const path=require('path')
const bodyParser = require('body-parser');
const cors=require('cors')
const app=express()
const port=process.env.PORT || 5000;

connectDB()

app.use(cors());


//middleware
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// api.use('/api/home',require('./routes/homeRoutes'))

app.use('/adminpanel', express.static(path.join(__dirname, 'adminpanel/build')));


//projectroutes
app.use('/api/project',require('./routes/projectRoutes/projectRoutes'))
app.use('/api/featureproject',require('./routes/projectRoutes/featureProjectRoutes'))
app.use('/api/keyanimate',require('./routes/projectRoutes/keyAnimatesRoutes'))
app.use('/api/masterplan',require('./routes/projectRoutes/masterplanRoutes'))
app.use('/api/locationhigh',require('./routes/projectRoutes/locationHighlightRoutes'))

//aboutroutes
app.use('/api/about',require('./routes/aboutRoutes/aboutRoutes'))
app.use('/api/choice',require('./routes/aboutRoutes/chooseRoutes'))
app.use('/api/offer',require('./routes/aboutRoutes/offerRoutes'))
app.use('/api/journey',require('./routes/aboutRoutes/ourjourneyRoutes'))

//bannerroutes
app.use('/api/aboutbanner',require('./routes/bannerRoutes/aboutBannerRoutes'))
app.use('/api/blogbanner',require('./routes/bannerRoutes/blogBannerRoutes'))
app.use('/api/contactbanner',require('./routes/bannerRoutes/contactBannerRoutes'))
app.use('/api/homebanner',require('./routes/bannerRoutes/homeBannerRoutes'))
app.use('/api/projectbanner',require('./routes/bannerRoutes/projectBannerRoutes'))

//blogroutes
app.use('/api/blog',require('./routes/blogRoutes/blogRoutes'))

//customerroutes
app.use('/api/customer',require('./routes/customeRoutes/customerRoute'))

//feqroutes
app.use('/api/faqs',require('./routes/faqRoutes/faqRoutes'))

//serviceroutes
app.use('/api/service',require('./routes/serviceRoutes/serviceRoutes'))

app.get('/adminpanel/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'adminpanel/build', 'index.html'));
});


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})