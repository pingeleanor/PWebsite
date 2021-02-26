import fs from 'fs'
import path from 'path';
import {getPortal} from "./getPortal";


export function getConfigs() {
    const portal = getPortal();
    let mainDirectory;
    if(portal){
        mainDirectory = path.join(process.cwd(), `configs/${portal}`);
        const fullPath = path.join(mainDirectory, `basic.json`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        return JSON.parse(fileContents);
    }

}