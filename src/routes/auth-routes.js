import AboutUs from "../pages/about";
import Branches from "../pages/branches";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";
import Login from "../pages/login";
import Pricing from "../pages/pricing";
import Services from "../pages/services";
import TrackItem from "../pages/track";

const authRoutes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/about-us',
        component: <AboutUs />
    },
    {
        path: '/contact-us',
        component: <ContactUs />
    },
    {
        path: '/services',
        component: <Services />
    },
    {
        path: '/pricing',
        component: <Pricing />
    },
    {
        path: '/branches',
        component: <Branches />
    },
    {
        path: '/track/:tracking_code',
        component: <TrackItem />
    },
    {
        path: '/login',
        component: <Login/>
    },
]

export default authRoutes;