
export class Welcome {
	
	heading = 'Aurelia Navigation App';
	firstName = 'Daniel';
	lastName = 'Anderson';
	
	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	}
	
	submit(){
		alert(`Welcome, ${this.fullName}!`);
	}
	
}
