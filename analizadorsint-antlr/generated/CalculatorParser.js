// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,14,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,0,1,0,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,2,1,2,1,2,1,2,5,2,38,8,2,10,2,12,2,
41,9,2,1,2,3,2,44,8,2,1,3,1,3,3,3,48,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,6,7,58,0,15,1,0,0,0,2,21,1,
0,0,0,4,23,1,0,0,0,6,47,1,0,0,0,8,49,1,0,0,0,10,55,1,0,0,0,12,58,1,0,0,0,
14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,
19,1,0,0,0,19,20,5,0,0,1,20,1,1,0,0,0,21,22,3,4,2,0,22,3,1,0,0,0,23,24,5,
1,0,0,24,25,3,12,6,0,25,26,5,2,0,0,26,30,5,10,0,0,27,29,3,6,3,0,28,27,1,
0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,30,1,0,
0,0,33,43,5,11,0,0,34,35,5,3,0,0,35,39,5,10,0,0,36,38,3,6,3,0,37,36,1,0,
0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,39,1,0,0,
0,42,44,5,11,0,0,43,34,1,0,0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,48,3,8,4,0,
46,48,3,10,5,0,47,45,1,0,0,0,47,46,1,0,0,0,48,7,1,0,0,0,49,50,5,4,0,0,50,
51,5,8,0,0,51,52,5,13,0,0,52,53,5,9,0,0,53,54,5,12,0,0,54,9,1,0,0,0,55,56,
5,5,0,0,56,57,5,12,0,0,57,11,1,0,0,0,58,59,7,0,0,0,59,13,1,0,0,0,5,17,30,
39,43,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'si'", "'entonces'", "'sino'", "'imprimir'", 
                            "'salir'", "'verdadero'", "'falso'", "'('", 
                            "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "SI", "ENTONCES", "SINO", "IMPRIMIR", 
                             "SALIR", "VERDADERO", "FALSO", "PARIZQ", "PARDER", 
                             "LLAVEIZQ", "LLAVEDER", "PUNTOYCOMA", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "decision", "sentencia", 
                         "imprimir", "salir", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 19;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(CalculatorParser.SI);
	        this.state = 24;
	        this.condicion();
	        this.state = 25;
	        this.match(CalculatorParser.ENTONCES);
	        this.state = 26;
	        this.match(CalculatorParser.LLAVEIZQ);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 27;
	            this.sentencia();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this.match(CalculatorParser.LLAVEDER);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 34;
	            this.match(CalculatorParser.SINO);
	            this.state = 35;
	            this.match(CalculatorParser.LLAVEIZQ);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===5) {
	                this.state = 36;
	                this.sentencia();
	                this.state = 41;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 42;
	            this.match(CalculatorParser.LLAVEDER);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_sentencia);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.imprimir();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.salir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(CalculatorParser.IMPRIMIR);
	        this.state = 50;
	        this.match(CalculatorParser.PARIZQ);
	        this.state = 51;
	        this.match(CalculatorParser.CADENA);
	        this.state = 52;
	        this.match(CalculatorParser.PARDER);
	        this.state = 53;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salir() {
	    let localctx = new SalirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_salir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(CalculatorParser.SALIR);
	        this.state = 56;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.SI = 1;
CalculatorParser.ENTONCES = 2;
CalculatorParser.SINO = 3;
CalculatorParser.IMPRIMIR = 4;
CalculatorParser.SALIR = 5;
CalculatorParser.VERDADERO = 6;
CalculatorParser.FALSO = 7;
CalculatorParser.PARIZQ = 8;
CalculatorParser.PARDER = 9;
CalculatorParser.LLAVEIZQ = 10;
CalculatorParser.LLAVEDER = 11;
CalculatorParser.PUNTOYCOMA = 12;
CalculatorParser.CADENA = 13;
CalculatorParser.WS = 14;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_instruccion = 1;
CalculatorParser.RULE_decision = 2;
CalculatorParser.RULE_sentencia = 3;
CalculatorParser.RULE_imprimir = 4;
CalculatorParser.RULE_salir = 5;
CalculatorParser.RULE_condicion = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_decision;
    }

	SI() {
	    return this.getToken(CalculatorParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(CalculatorParser.ENTONCES, 0);
	};

	LLAVEIZQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.LLAVEIZQ);
	    } else {
	        return this.getToken(CalculatorParser.LLAVEIZQ, i);
	    }
	};


	LLAVEDER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.LLAVEDER);
	    } else {
	        return this.getToken(CalculatorParser.LLAVEDER, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	SINO() {
	    return this.getToken(CalculatorParser.SINO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_sentencia;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	salir() {
	    return this.getTypedRuleContext(SalirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(CalculatorParser.IMPRIMIR, 0);
	};

	PARIZQ() {
	    return this.getToken(CalculatorParser.PARIZQ, 0);
	};

	CADENA() {
	    return this.getToken(CalculatorParser.CADENA, 0);
	};

	PARDER() {
	    return this.getToken(CalculatorParser.PARDER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_salir;
    }

	SALIR() {
	    return this.getToken(CalculatorParser.SALIR, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSalir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSalir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSalir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(CalculatorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(CalculatorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.DecisionContext = DecisionContext; 
CalculatorParser.SentenciaContext = SentenciaContext; 
CalculatorParser.ImprimirContext = ImprimirContext; 
CalculatorParser.SalirContext = SalirContext; 
CalculatorParser.CondicionContext = CondicionContext; 
