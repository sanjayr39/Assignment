var app = angular.module('crudApp', []);

app.controller('CrudController', [function() {
    var ctrl = this;
    ctrl.items = []; // Holds the list of items
    ctrl.newItem = {}; // The new item to be added
    ctrl.isEditing = false;
    ctrl.editIndex = -1;

    ctrl.addItem = function() {
        if (!ctrl.newItem.name || !ctrl.newItem.designation || !ctrl.newItem.salary) {
            alert("All fields are required!");
            return;
        }
        if (ctrl.isEditing) {
            ctrl.items[ctrl.editIndex] = angular.copy(ctrl.newItem);
            ctrl.isEditing = false;
        } else {
            ctrl.items.push(angular.copy(ctrl.newItem));
        }
        ctrl.resetForm(); // Clear the form after adding or updating item
    };

    ctrl.editItem = function(index) {
        ctrl.newItem = angular.copy(ctrl.items[index]);
        ctrl.isEditing = true;
        ctrl.editIndex = index;
    };

    ctrl.deleteItem = function(index) {
        ctrl.items.splice(index, 1); // Remove the item
        if (ctrl.isEditing && ctrl.editIndex === index) {
            ctrl.resetForm();
        }
    };

    ctrl.resetForm = function() {
        ctrl.newItem = {}; // Clear the form
        ctrl.isEditing = false;
        ctrl.editIndex = -1;
    };
}]);




















// var app = angular.module('employeeApp', ['ngRoute']);

// app.config(function ($routeProvider) {
//     $routeProvider
//         .when('/', {
//             template: '<employee-form></employee-form><employee-table></employee-table>'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// });

// app.component('employeeForm', {
//     template: `
//         <div class="form-container">
//             <h2>Employee Form</h2>
//             <div class="form-group">
//                 <label>Name:</label>
//                 <input type="text" ng-model="$ctrl.newItem.name" placeholder="John Smith">
//             </div>
//             <div class="form-group">
//                 <label>Designation:</label>
//                 <select ng-model="$ctrl.newItem.designation">
//                     <option value="" disabled selected>Select designation</option>
//                     <option value="Manager">Manager</option>
//                     <option value="Developer">Developer</option>
//                     <option value="IT Manager">IT Manager</option>
//                     <option value="Clerk">Clerk</option>
//                 </select>
//             </div>
//             <div class="form-group">
//                 <label>Salary:</label>
//                 <input type="number" ng-model="$ctrl.newItem.salary" placeholder="10000">
//             </div>
//             <button ng-click="$ctrl.addItem()">Add Employee</button>
//         </div>
//     `,
//     controller: function () {
//         this.newItem = {};

//         this.addItem = function () {
//             // Add your logic to save the item (e.g., push it into an array)
//             console.log('Item added:', this.newItem);
//             // Reset the form
//             this.newItem = {};
//         };
//     }
// });

// app.component('employeeTable', {
//     template: `
//         <div class="table-container">
//             <h2>Employee Table</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Designation</th>
//                         <th>Salary</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr ng-repeat="item in $ctrl.items">
//                         <td>{{ item.name }}</td>
//                         <td>{{ item.designation }}</td>
//                         <td>{{ item.salary }}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     `,
//     controller: function () {
//         // Mock data for demonstration
//         this.items = [
//             { name: 'John Smith', designation: 'Manager', salary: 80000 },
//             { name: 'Jane Doe', designation: 'Developer', salary: 60000 },
//             { name: 'Bob Johnson', designation: 'Clerk', salary: 40000 }
//         ];
//     }
// });
