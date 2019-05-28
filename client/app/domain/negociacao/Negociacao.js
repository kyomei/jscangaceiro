class Negociacao {

	
	
	
	constructor(data, quantidade, valor) {
		
		// Copia os dados passado no construtor para o objeto instanciado
		Object.assign(this, { _data: new Date(date.getTime()), _quantidade: quantidade, _valor: valor});

		Object.freeze(this);
	}

	get volume() {
		return this._quantidade * this._valor;
	}

	get data() {
		return new Date(this._data.getTime());
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}
}