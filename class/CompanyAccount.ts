import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.getStatus()) {
      this.setBalance(value)
    } else {
      console.log("Conta Inativa não pode fazer empréstimo.")      
    }
    
  }
}
