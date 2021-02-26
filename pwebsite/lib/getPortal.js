export function getPortal() {
    if(process.env["portal"]){
        return process.env["portal"];
    }
    else{
        return null;
    }
}