export class Console {
    static devState = process.env.NODE_ENV == 'development'

    static dev(message: string){
        if(this.devState)
            console.log(message)
    }
}
