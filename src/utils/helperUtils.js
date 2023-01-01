function createName(Business,projName) {
    Business=Business.toLowerCase();
    projName=projName.toLowerCase();
    projName=projName.split('-');
    console.log(projName)
    if (projName[0]===Business) return projName.join('-') 
    const temp = Business + '-' + projName.join('-') +'';
    return temp
}

function preventDuplicates(nameList,name){
    const temp=nameList.find(element=>element===name);
    if (temp) console.log(temp) 
    else return name;
}

export function nameUtil(projName,user,projectList){
    const temp = createName(user.business,projName);
    // return preventDuplicates(projectList,temp)
    return temp;
}