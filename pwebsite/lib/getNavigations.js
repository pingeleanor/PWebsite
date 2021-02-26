import fs from 'fs'
import path from 'path'

const navigationDirectory = path.join(process.cwd(), 'pages\\navigations')

export function getNavigations() {
    const fileNames = fs.readdirSync(navigationDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.js$/, '')
            }
        }
    })
}