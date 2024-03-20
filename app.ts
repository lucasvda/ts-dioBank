import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SharedAccount } from './class/SharedAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'João', 101010)
peopleAccount.deposit(500)
console.log(peopleAccount.getName()) 
peopleAccount.withdraw(100)
peopleAccount.getBalance()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('JBANK', 202020)
companyAccount.getLoan(500)
companyAccount.getLoan(500)
companyAccount.getLoan(500)
companyAccount.withdraw(200)
console.log(companyAccount)

const sharedAccount: SharedAccount = new SharedAccount("Maria", 303030)
sharedAccount.deposit(500)
sharedAccount.deposit(500)
sharedAccount.deposit(500)
sharedAccount.withdraw(200)
sharedAccount.withdraw(200)
console.log(sharedAccount)
