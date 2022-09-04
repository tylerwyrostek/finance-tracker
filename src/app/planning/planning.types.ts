export type PlannedFinances = {
    expectedIncome: ExpectedIncome[];
    month: string | null;
    needExpenses: PlannedExpense[];
    wantExpenses: PlannedExpense[];
    savingExpenses: PlannedExpense[];
}

export type ExpectedIncome = {
    Income: number;
    Index: number;
}

export type PlannedExpense ={
    expenseName: string;
    expenseTotal: number;
}


export enum ExpenseTypes{
    Need = 'Need',
    Want = 'Want',
    Saving = 'Saving'
}