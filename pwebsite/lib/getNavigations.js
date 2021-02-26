import fs from 'fs'
import path from 'path'

const navigationDirectory = path.join(process.cwd(), 'pages/navigations')

export function getNavigations() {
    const fileNames = fs.readdirSync(navigationDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.js$/, '')
            }
        }
    })
}