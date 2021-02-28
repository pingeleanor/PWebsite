import Layout from "../../components/layout";
import { useContext } from 'react';
import Context from '../../components/context';

export default function myworks() {
    const { basicConfigs } = useContext(Context);

    return <Layout configs={basicConfigs}><div>myworks</div></Layout>
}