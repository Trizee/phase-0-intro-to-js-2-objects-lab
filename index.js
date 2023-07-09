// Write your solution in this file!
const employee = {
    name:  "Joe",
    streetAddress: "11 Iowa",
}

function updateEmployeeWithKeyAndValue(employee, name, Sam){
    return {
        ...employee,
        [name]: Sam,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Sam){
    employee[name]= Sam;
    return employee;
}

function deleteFromEmployeeByKey(employee, streetAddress){
    var newEmployee = {...employee};
    delete newEmployee[streetAddress];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress){
    delete employee[streetAddress];
    return employee;
}