const router = require("express").Router();
const {Employee} = require("../models/employee.model");


router.post("/add", (req, res) => {
    const employee = new Employee(req.body);
    employee.save((err) => {
        if (err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true})
    });
});

router.get("/", (req, res) => {
    Employee.find().exec((err, employees)=>{
        if (err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true, employees:employees}, );
    });
});

router.route("/:id").get((req, res) => {
    Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Employee.findById(req.params.id)
    .then(employee => {
        employee.name = req.body.name;
        employee.department = req.body.department;
        employee.position = req.body.position;
        employee.dateHired = Date.parse(req.body.dateHired);

        employee.save()
        .then(() => res.json("Employee updated!"))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// router.put("/update/:id", (req, res) => {
//     Employee.findByIdAndUpdate(
//         req.params.id,{
//             $set:req.body
//         },
//         (err, post)=>{
//             if (err) return res.status(400).json({success:false, err});
//         return res.status(200).json({success:true});

//         });
// });

router.delete("/delete/:id", (req, res)=>{
    Employee.findByIdAndRemove(req.params.id).exec((err, deleteItem)=>{
        if(err){
            res.send(err);
        }
        return res.json(deleteItem);
    });
});

module.exports = router;