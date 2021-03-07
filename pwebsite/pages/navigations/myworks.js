import Layout from "../../components/layout";
import {useContext} from 'react';
import Context from '../../components/context';
import _ImageGallery from '../../components/imageGallery'

export default function myworks() {
    const {basicConfigs} = useContext(Context);

    return <Layout configs={basicConfigs}>
        <h2 style={{position:"absolute",top:"35%"}}>my works</h2>
            { basicConfigs ? <_ImageGallery items={basicConfigs.my_Works}  />  :null }
    </Layout>;
}