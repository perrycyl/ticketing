import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router'

export default () => {

    const { doRequest } = useRequest({
        url: '/api/users/signout',
        method:'post',
        body: {},
        onSuccess: () => {
            return Router.push('/')
        }
    });

    useEffect(() => {
        doRequest();
    }, []);

    return <div> Signing you out ...</div>;
}