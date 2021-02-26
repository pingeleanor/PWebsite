import Layout from "../../components/layout";

export default function me({configs}) {
    return <Layout configs={configs}>
        <div>
            {configs&&configs.intros? <p dangerouslySetInnerHTML={{__html:configs.intros}}></p>:null}
        </div>
        <table className="infotable">
            <tbody className="infotablebody">
            <tr>
                <th className="fa fa-language"></th>
                <td className="rowheadname">Languages</td>
                <td className="rowcontent">{configs&&configs.Languages? configs.Languages:null}</td>
            </tr>
            <tr>
                <th className="fa fa-music"></th>
                <td className="rowheadname">Hobbies</td>
                <td className="rowcontent">{configs&&configs.Hobbies? configs.Hobbies:null}...</td>
            </tr>
            <tr>
                <th className="fa fa-compass"></th>
                <td className="rowheadname">Position</td>
                <td className="rowcontent">
                    <a href={configs&&configs.Position&&configs.Position.url? configs.Position.url:null} target="_blank">{configs&&configs.Position&&configs.Position.name? configs.Position.name:null}</a>
                </td>
            </tr>
            <tr>
                <th className="fa fa-globe"></th>
                <td className="rowheadname">HomeTown</td>
                <td className="rowcontent">
                    <a href={configs&&configs.HomeTown&&configs.HomeTown.url? configs.HomeTown.url:null} target="_blank">{configs&&configs.HomeTown&&configs.HomeTown.name? configs.HomeTown.name:null}</a>
                </td>
            </tr>
            <tr>
                <th className="fa fa-road"></th>
                <td className="rowheadname">Visited Countries</td>
                <td className="rowcontent">{configs&&configs.Visited_Countries? configs.Visited_Countries:null}</td>
            </tr>
            <tr>
                <th className="fa fa-headphones"></th>
                <td className="rowheadname">My Favorite Singer</td>
                <td className="rowcontent">
                    <a href={configs&&configs.My_Favorite_Singer&&configs.My_Favorite_Singer.url? configs.My_Favorite_Singer.url:null} target="_blank">{configs&&configs.My_Favorite_Singer&&configs.My_Favorite_Singer.name? configs.My_Favorite_Singer.name:null}</a>
                    {"   "}
                    <a className="fa fa-youtube" href={configs&&configs.My_Favorite_Singer&&configs.My_Favorite_Singer.musicUrl? configs.My_Favorite_Singer.musicUrl:null}
                       target="_blank"></a>
                </td>
            </tr>
            </tbody>
        </table>
    </Layout>;
}