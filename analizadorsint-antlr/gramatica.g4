grammar Calculator;

// Reglas Sintacticas

programa
    : instruccion+ EOF
    ;

instruccion
    : decision
    ;

decision
    : SI condicion ENTONCES LLAVEIZQ sentencia* LLAVEDER
      (SINO LLAVEIZQ sentencia* LLAVEDER)?
    ;

sentencia
    : imprimir
    | salir
    ;

imprimir
    : IMPRIMIR PARIZQ CADENA PARDER PUNTOYCOMA
    ;

salir
    : SALIR PUNTOYCOMA
    ;

condicion
    : VERDADERO
    | FALSO
    ;


// Tokens

SI : 'si';
ENTONCES : 'entonces';
SINO : 'sino';

IMPRIMIR : 'imprimir';
SALIR : 'salir';

VERDADERO : 'verdadero';
FALSO : 'falso';

PARIZQ : '(';
PARDER : ')';

LLAVEIZQ : '{';
LLAVEDER : '}';

PUNTOYCOMA : ';';

CADENA : '"' .*? '"';

WS : [ \t\r\n]+ -> skip;