import buildClient from "../api/build-client"

const LandingPage = ({currentUser}) => {
    console.log("current user: ", currentUser)
    return <h1 > Landing Page </h1>;
}

LandingPage.getInitialProps = async (context) => {
    const { data } = await buildClient(context).get('/api/users/currentuser')
    console.log("DATA: ", data)
    return data;
};

export default LandingPage;

//internal url for getInitialProps to use KNginx to route reqests.
//http://ingress-nginx-controller-admission.ingress-nginx.svc.cluster.local