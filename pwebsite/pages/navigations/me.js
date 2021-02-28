import { useContext } from 'react';
import Context from '../../components/context';

import Layout from "../../components/layout";

export default function me() {
    const { basicConfigs } = useContext(Context);

    return <Layout configs={ basicConfigs? basicConfigs:null}>
        <div>
            {basicConfigs&&basicConfigs.intros? <p dangerouslySetInnerHTML={{__html:basicConfigs.intros}}></p>:null}
        </div>
        <table className="infotable">
            <tbody className="infotablebody">
            <tr>
                <th className="fa fa-language"></th>
                <td className="rowheadname">Languages</td>
                <td className="rowcontent">{basicConfigs&&basicConfigs.Languages? basicConfigs.Languages:null}</td>
            </tr>
            <tr>
                <th className="fa fa-music"></th>
                <td className="rowheadname">Hobbies</td>
                <td className="rowcontent">{basicConfigs&&basicConfigs.Hobbies? basicConfigs.Hobbies:null}...</td>
            </tr>
            <tr>
                <th className="fa fa-compass"></th>
                <td className="rowheadname">Position</td>
                <td className="rowcontent">
                    <a href={basicConfigs&&basicConfigs.Position&&basicConfigs.Position.url? basicConfigs.Position.url:null} target="_blank">{basicConfigs&&basicConfigs.Position&&basicConfigs.Position.name? basicConfigs.Position.name:null}</a>
                </td>
            </tr>
            <tr>
                <th className="fa fa-globe"></th>
                <td className="rowheadname">HomeTown</td>
                <td className="rowcontent">
                    <a href={basicConfigs&&basicConfigs.HomeTown&&basicConfigs.HomeTown.url? basicConfigs.HomeTown.url:null} target="_blank">{basicConfigs&&basicConfigs.HomeTown&&basicConfigs.HomeTown.name? basicConfigs.HomeTown.name:null}</a>
                </td>
            </tr>
            <tr>
                <th className="fa fa-road"></th>
                <td className="rowheadname">Visited Countries</td>
                <td className="rowcontent">{basicConfigs&&basicConfigs.Visited_Countries? basicConfigs.Visited_Countries:null}</td>
            </tr>
            <tr>
                <th className="fa fa-headphones"></th>
                <td className="rowheadname">My Favorite Singer</td>
                <td className="rowcontent">
                    <a href={basicConfigs&&basicConfigs.My_Favorite_Singer&&basicConfigs.My_Favorite_Singer.url? basicConfigs.My_Favorite_Singer.url:null} target="_blank">{basicConfigs&&basicConfigs.My_Favorite_Singer&&basicConfigs.My_Favorite_Singer.name? basicConfigs.My_Favorite_Singer.name:null}</a>
                    {"   "}
                    <a className="fa fa-youtube" href={basicConfigs&&basicConfigs.My_Favorite_Singer&&basicConfigs.My_Favorite_Singer.musicUrl? basicConfigs.My_Favorite_Singer.musicUrl:null}
                       target="_blank"></a>
                </td>
            </tr>
            </tbody>
        </table>
    </Layout>;
}