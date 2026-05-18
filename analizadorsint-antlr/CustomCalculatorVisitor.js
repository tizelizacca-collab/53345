import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {

    visitPrograma(ctx) {
    return this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitDecision(ctx) {

    const condicion = this.visit(ctx.condicion());

    const sentencias = ctx.sentencia();

    if (condicion) {

        // bloque THEN
        for (let i = 0; i < sentencias.length; i++) {
            this.visit(sentencias[i]);
        }

    } else {

        // bloque ELSE
        if (ctx.SINO()) {

            // si hay dos bloques, la segunda mitad pertenece al sino
            const mitad = sentencias.length / 2;

            for (let i = mitad; i < sentencias.length; i++) {
                this.visit(sentencias[i]);
            }
        }
    }
}

    visitCondicion(ctx) {

        if (ctx.VERDADERO()) {
            return true;
        }

        if (ctx.FALSO()) {
            return false;
        }
    }

    visitImprimir(ctx) {

        let texto = ctx.CADENA().getText();

        // quitar comillas
        texto = texto.slice(1, -1);

        console.log(texto);
    }

    visitSalir(ctx) {

        console.log("Programa finalizado.");
    }
}