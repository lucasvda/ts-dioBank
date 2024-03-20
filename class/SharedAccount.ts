import { DioAccount } from "./DioAccount";

export class SharedAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    }
    
    deposit = (valueDeposit: number) => {
     this.setBalance(valueDeposit + 10)
    }
}