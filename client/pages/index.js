import axios from 'axios';

const LandingPage = ({currentUser}) => {
    return <h1 > Landing Page </h1>;
}

LandingPage.getInitialProps = async ({req}) => {
    console.log("req", req.headers)
    if (typeof window === 'undefined'){
        const {data} = await axios.get(
            'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', 
            {
                headers: req.headers
            }
        );
        return data
    } else {
        const {data} = await axios.get('/api/users/currentuser');
        return data
    }
};

export default LandingPage;

//internal url for getInitialProps to use KNginx to route reqests.
//http://ingress-nginx-controller-admission.ingress-nginx.svc.cluster.local