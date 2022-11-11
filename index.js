/*
 1 1 0 0
 1 1 0 0
 0 0 1 1
 0 0 1 1

    BUSCAR SI EN UNA MATRIZ EXISTEN CUADRADOS FORMADOS POR 1S
    EN EL CASO DE ARRIBA EXISTIRIAN 2 CUADRADOS
 */
class CuadradosEnMatriz {
    constructor() {
        this.mat = this.generarMatrizRandom()
    }

    getConexiones(){
        for(let fil = 0; fil < this.mat.length; fil++){
            for(let col = 0; col < this.mat.length; col++){
                if(this.mat[fil][col] == 1)
                    this.buscarConexiones(fil,col)
            }
        }
    }
    buscarConexiones(fil, col) {
        let conexiones = {}
        if (this.tieneConexionAbajo(fil, col)) {
            conexiones.abajo = this.mat[fil][col]
        }
        if (this.tieneConexionDerecha(fil, col)){
            conexiones.derecha = this.mat[fil][col]
        }
        if(this.tieneConexionAbajo(fil,col) && this.tieneConexionDerecha(fil,col)){
            if(this.tieneConexionAbajo(fil, col + 1)){
                conexiones.diagonal = this.mat[fil][col + 1]
                console.log(`conexiones ${JSON.stringify(conexiones)} ||||||||||| fil ${fil} col ${col}`)
            }
        }
    }

    tieneConexionAbajo(fil, col) {
        if(fil < this.mat.length - 1){
            return this.mat[fil][col] == this.mat[fil + 1][col]
        }
        return null
    }

    tieneConexionDerecha(fil, col){
        if(col < this.mat.length - 1){
            return this.mat[fil][col] == this.mat[fil][col + 1]
        }
        return null
    }

    tieneConexionIzquierda(fil, col){
        if(col > 0){
            return this.mat[fil][col] == this.mat[fil][col - 1]
        }
        return null
    }

    generarMatrizRandom(){
        let mat = []
        for(let fil = 0; fil < 10; fil ++){
            mat[fil] = []
            for(let col = 0; col < 10; col ++){
                mat[fil][col] = Math.floor(Math.random() * 2)
            }
        }
        console.table(mat)
        return mat
    }

}

let obj = new CuadradosEnMatriz()
obj.getConexiones()