namespace empresa {
    export class Cliente extends Pessoa{
        private _codigo: number;
        private _saldo: number = 0;
    
        constructor(codigo:number){
            super();
            this._codigo = codigo;
        }

        get codigo(){
        return this._codigo;
        }
    
        get saldo(){
        return this._saldo;
        }
   
        public deposita (valor:number){
            this._saldo += valor;
        }

        public comprar (valorComprar:number):boolean{
            if(this._saldo >= valorComprar){
                this._saldo = this._saldo - valorComprar;
                return true;
            }else{
                return false;
            }
        }

    }
}