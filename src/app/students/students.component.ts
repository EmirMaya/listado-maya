import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  showStudents = false;
  students = [
    { name: 'Armani', isApproved: true, email: 'armani@gmail.com' }, 
    { name: 'Herrera', isApproved: false, email: 'herrera@example.com' },
    { name: 'Díaz', isApproved: true, email: 'diaz@example.com' },
    { name: 'Pirez', isApproved: false, email: 'pirez@example.com' },
    { name: 'Enzo Díaz', isApproved: true, email: 'enzodiaz@gmail.com' },
    { name: 'Fernández', isApproved: false, email: 'fernandez@example.com' },
    { name: 'Villagra', isApproved: true, email: 'villagra@gmail.com' },
    { name: 'Barco', isApproved: true, email: 'barco@example.com' },
    { name: 'Echeverri', isApproved: true, email: 'echeverri@gmail.com' },
    { name: 'Colidio', isApproved: true, email: 'colidio@example.com' },
    { name: 'Borja', isApproved: true, email: 'borja@example.com' },
  ];
}
