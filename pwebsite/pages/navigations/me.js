import Layout from "../../components/layout";

export default function me() {
    return <Layout>
        <div>Hello! I am KePing Zang,born in GuiYang GuiZhou province in china.
            I was graduated from Guizhou Medical University. my major is nursing.
            and I got my bachelor degree after my graduation in the year of 2012.I spend most of my time on study.
            And I have acquired basic knowledge of my major during my school time.Since 2013 I live in germany.
            I learned german in germany,since 2016 I start to learn programming.I have learned C# in 2017,
            in 2018 I have completed the Front-End-Development course in Udacity,
            in 2019 I have completed the Full Stack Web Development course in Udacity.
            Since 2019.08, I have been working at <a href={"https://www.vonaffenfels.de/"} target={"_blank"}>Vonaffenfels</a> in Stuttgart.
            Programming has changed my life.
            I have a lot of fun with it.I will keep learning programming.
        </div>
        <table className="infotable">
            <tbody className="infotablebody">
            <tr>
                <th className="fa fa-language"></th>
                <td className="rowheadname">Languages</td>
                <td className="rowcontent">Chinese,German,English</td>
            </tr>
            <tr>
                <th className="fa fa-music"></th>
                <td className="rowheadname">Hobbies</td>
                <td className="rowcontent">Painting,photography,Programming,travel by walking,cooking...</td>
            </tr>
            <tr>
                <th className="fa fa-compass"></th>
                <td className="rowheadname">Position</td>
                <td className="rowcontent">
                    <a href="https://en.wikipedia.org/wiki/Esslingen_am_Neckar" target="_blank">Esslingen am Neckar,Germany</a>
                </td>
            </tr>
            <tr>
                <th className="fa fa-globe"></th>
                <td className="rowheadname">HomeTown</td>
                <td className="rowcontent">
                    <a href="https://en.wikipedia.org/wiki/Guiyang" target="_blank">GuiYang,GuiZhou,China</a>
                </td>
            </tr>
            <tr>
                <th className="fa fa-road"></th>
                <td className="rowheadname">Visited Countries</td>
                <td className="rowcontent">10</td>
            </tr>
            <tr>
                <th className="fa fa-headphones"></th>
                <td className="rowheadname">My Favorite Singer</td>
                <td className="rowcontent">
                    <a href="https://en.wikipedia.org/wiki/Jay_Chou" target="_blank">Jay Chou</a>
                    {"   "}
                    <a className="fa fa-youtube" href="https://www.youtube.com/watch?v=-7r6VqSllNg&amp;list=RDEMiTjubl5ivyhGx9AXBRWj6A&amp;index=25"
                       target="_blank"></a>
                </td>
            </tr>
            </tbody>
        </table>
    </Layout>;
}