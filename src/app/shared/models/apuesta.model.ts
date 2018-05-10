export class ApuestaModel{

    private evento: string;
    private date: string;
    private amount: string;


	constructor($evento: string, $date: string, $amount: string) {
		this.evento = $evento;
		this.date = $date;
		this.amount = $amount;
	}


    /**
     * Getter $evento
     * @return {string}
     */
	public get $evento(): string {
		return this.evento;
	}
    

    /**
     * Getter $date
     * @return {string}
     */
	public get $date(): string {
		return this.date;
	}

    /**
     * Getter $amount
     * @return {string}
     */
	public get $amount(): string {
		return this.amount;
	}
    
    
}