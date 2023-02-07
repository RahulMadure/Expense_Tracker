import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Tracker';
  expenses: {item: string, amount: number}[] = [];
  totalExpense = 0;
  newExpense = {item: '', amount: 0};

  addExpense() {
    if (this.newExpense.item && this.newExpense.amount) {
      this.expenses.push({ ...this.newExpense });
      this.totalExpense += this.newExpense.amount;
      this.newExpense = {item: '', amount:0};
    }
  }

  removeExpense(index: number) {
    this.totalExpense -= this.expenses[index].amount;
    this.expenses.splice(index, 1);
  }
}