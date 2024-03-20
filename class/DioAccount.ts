export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (value: number): void => {
    this.balance += value
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && value <= this.balance) {
      this.balance -= value
    } else {
      console.log("Você não possui saldo sulficiente na conta")
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
