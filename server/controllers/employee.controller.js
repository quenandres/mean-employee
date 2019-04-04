const employeeCtrl = {};

employeeCtrl.getEmployees = (req,res)=>{
    res.json({
        status:"Employees goes here !"
    });
}

employeeCtrl.createEmployee = (req,res)=>{
    res.json({
        status:"Create user"
    });
}

employeeCtrl.getEmployee = (req,res)=>{
    res.json({
        status:"Employee !"
    });
}

employeeCtrl.editEmployee = (req,res)=>{
    res.json({
        status:"edit Employee !"
    });
}

employeeCtrl.deleteEmployee = function () {
    
}



module.exports = employeeCtrl;