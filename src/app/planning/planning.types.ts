export type PlannedFinances = {
    expectedIncome: ExpectedIncome[];
    month: string | null;
}

export type ExpectedIncome = {
    Income: number;
    Index: number;
}