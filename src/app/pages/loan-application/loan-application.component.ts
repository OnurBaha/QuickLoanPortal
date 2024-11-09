import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan } from '../../model/application.model';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();

  addLoan(){
    this.application.Loans.unshift(this.loan);
  }
}
