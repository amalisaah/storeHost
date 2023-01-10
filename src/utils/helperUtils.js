function createName(Business,projName) {
    Business=Business.toLowerCase();
    projName=projName.toLowerCase();
    projName=projName.split('-');
    console.log(projName)
    if (projName[0]===Business) return projName.join('-') 
    const temp = Business + '-' + projName.join('-') +'';
    return temp
}

export function preventDuplicates(nameList,name,Business){
    name=Business['business']+'-'+name
    console.log(nameList,name)
    const temp=nameList.find(element=>element===name);
    if (temp) {
        return
    }
    else return name;
}

export function nameUtil(projName,user,projectList){
    const temp = createName(user.business,projName);
    // return preventDuplicates(projectList,temp)
    return temp;
}

export function hostedDuplicates(allHosted,hosted){
    const temp=allHosted.find(element=>element[1]===hosted[1]);
    if (temp) return 
    else return hosted
}