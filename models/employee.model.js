const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({
  name: { type: String, required: false },
  department: { type: String, required: false},
  position: {type: String, required: false },
  dateHired: {type: Date, required: false },    
},{
    timestamps: true,
   });

module.exports = {
    Employee : mongoose.model("employees", EmployeeSchema),
}