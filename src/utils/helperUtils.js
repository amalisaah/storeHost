/* Appends name to project name*/ 
function createName(username,projName) {
    username=username.toLowerCase().trim();
    projName=projName.toLowerCase().trim();
    projName=projName.split('-');
    console.log(projName)
    if (projName.length>1) return projName.join('-') 
    const temp = username + '-' + projName.join('-') +'';
    return temp
}

/*Ensures names are distinct to prevent data being overwritten*/
export function preventDuplicates(nameList,name,user){
    let username=user['business'] || user['firstname'];
    name=username+'-'+name
    console.log(nameList,name)
    const temp=nameList.find(element=>element===name);
    if (temp) {
        return
    }
    else return name;
}

/*calls create name to ensure distinct and also increase name pool*/
export function nameUtil(projName,user){
    const username=user['business'] || user['firstname'];
    const temp = createName(username,projName);
    // return preventDuplicates(projectList,temp)
    return temp;
}

/*Prevent duplicates in Hosted sites*/
export function hostedDuplicates(allHosted,hosted){
    const temp=allHosted.find(element=>element[1]===hosted[1]);
    if (temp) return 
    else return hosted
}

/*Checks if site is Hosted*/
export function checkExistence(allHosted,name){
    const temp=allHosted.find(element=>element[1]===name);
    if (temp) return true
    return false
}