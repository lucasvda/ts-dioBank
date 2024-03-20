import { DioAccount } from "./DioAccount";

export class SharedAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    }
    
    deposit = (value: number) => {
     this.setBalance(value + 10)
    }
}