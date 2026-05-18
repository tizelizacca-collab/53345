// Generated from c:/Users/Usuario/ejemplo-antlr/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(CalculatorParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(CalculatorParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#decision}.
	 * @param ctx the parse tree
	 */
	void enterDecision(CalculatorParser.DecisionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#decision}.
	 * @param ctx the parse tree
	 */
	void exitDecision(CalculatorParser.DecisionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(CalculatorParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(CalculatorParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void enterImprimir(CalculatorParser.ImprimirContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void exitImprimir(CalculatorParser.ImprimirContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#salir}.
	 * @param ctx the parse tree
	 */
	void enterSalir(CalculatorParser.SalirContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#salir}.
	 * @param ctx the parse tree
	 */
	void exitSalir(CalculatorParser.SalirContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(CalculatorParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(CalculatorParser.CondicionContext ctx);
}