import Layout from "../../components/layout";
import { useContext } from 'react';
import Context from '../../components/context';

export default function resume() {
    const { basicConfigs } = useContext(Context);
    return<Layout configs={basicConfigs}> <div>resume</div> </Layout>
}