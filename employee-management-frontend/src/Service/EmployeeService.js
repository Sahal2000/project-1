import axios from "axios";


const BASE_URL = "http://localhost:8083/employee";
class EmployeeService {

    getAllEmployee(){
        return axios.get(BASE_URL);
    }

    saveEmployee(employeeData) {
        return axios.post(BASE_URL, employeeData);
    }
    updateEmployee(id, employeeData) {
        return axios.put(`${BASE_URL}/${id}`,employeeData);
    }
    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

}

export default new EmployeeService();