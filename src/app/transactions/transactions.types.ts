export type Transaction = {
    Amount: string;
    Description: string;
    Date:string;
    Type: string;
    SortingType?:string;
    SortingSubType?:string;
}

export enum TransactionTypes {
    Withdrawal = 'Withdrawal',
    Deposit = 'Deposit'
}

export type Finances = {
    transactions: Transaction[],
    withdrawalTotal: number,
    depositTotal: number
}