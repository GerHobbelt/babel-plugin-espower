'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareOpaqueType":["id","typeParameters","supertype"],"DeclareVariable":["id"],"DeclareExportDeclaration":["declaration","specifiers","source"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"OpaqueType":["id","typeParameters","impltype","supertype"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"ObjectTypeSpreadProperty":["argument"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(new Date(), 'arguments/0'), {
  content: 'assert(new Date())',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"NewExpression","callee":{"type":"Identifier","name":"Date","range":[11,15]},"arguments":[],"range":[7,17]}],"range":[0,18]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"new"},"value":"new","range":[7,10]},{"type":{"label":"name"},"value":"Date","range":[11,15]},{"type":{"label":"("},"range":[15,16]},{"type":{"label":")"},"range":[16,17]},{"type":{"label":")"},"range":[17,18]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(new (_rec2._capt(_rec2._capt(foo, 'arguments/0/callee/object/object').bar, 'arguments/0/callee/object').Baz)(), 'arguments/0'), {
  content: 'assert(new foo.bar.Baz())',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"NewExpression","callee":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[11,14]},"property":{"type":"Identifier","name":"bar","range":[15,18]},"computed":false,"range":[11,18]},"property":{"type":"Identifier","name":"Baz","range":[19,22]},"computed":false,"range":[11,22]},"arguments":[],"range":[7,24]}],"range":[0,25]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"new"},"value":"new","range":[7,10]},{"type":{"label":"name"},"value":"foo","range":[11,14]},{"type":{"label":"."},"range":[14,15]},{"type":{"label":"name"},"value":"bar","range":[15,18]},{"type":{"label":"."},"range":[18,19]},{"type":{"label":"name"},"value":"Baz","range":[19,22]},{"type":{"label":"("},"range":[22,23]},{"type":{"label":")"},"range":[23,24]},{"type":{"label":")"},"range":[24,25]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(!_rec3._capt(new Array(_rec3._capt(foo, 'arguments/0/argument/arguments/0'), _rec3._capt(bar, 'arguments/0/argument/arguments/1'), _rec3._capt(baz, 'arguments/0/argument/arguments/2')), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!new Array(foo, bar, baz))',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"UnaryExpression","operator":"!","argument":{"type":"NewExpression","callee":{"type":"Identifier","name":"Array","range":[12,17]},"arguments":[{"type":"Identifier","name":"foo","range":[18,21]},{"type":"Identifier","name":"bar","range":[23,26]},{"type":"Identifier","name":"baz","range":[28,31]}],"range":[8,32]},"prefix":true,"range":[7,32]}],"range":[0,33]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"prefix"},"value":"!","range":[7,8]},{"type":{"label":"new"},"value":"new","range":[8,11]},{"type":{"label":"name"},"value":"Array","range":[12,17]},{"type":{"label":"("},"range":[17,18]},{"type":{"label":"name"},"value":"foo","range":[18,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"bar","range":[23,26]},{"type":{"label":","},"range":[26,27]},{"type":{"label":"name"},"value":"baz","range":[28,31]},{"type":{"label":")"},"range":[31,32]},{"type":{"label":")"},"range":[32,33]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.notEqual(_rec4._expr(_rec4._capt(new Date(), 'arguments/0'), {
  content: 'assert.notEqual(new Date(), new Date(\'2013-01-12\'))',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"notEqual","range":[7,15]},"computed":false,"range":[0,15]},"arguments":[{"type":"NewExpression","callee":{"type":"Identifier","name":"Date","range":[20,24]},"arguments":[],"range":[16,26]},{"type":"NewExpression","callee":{"type":"Identifier","name":"Date","range":[32,36]},"arguments":[{"type":"StringLiteral","value":"2013-01-12","range":[37,49]}],"range":[28,50]}],"range":[0,51]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"notEqual","range":[7,15]},{"type":{"label":"("},"range":[15,16]},{"type":{"label":"new"},"value":"new","range":[16,19]},{"type":{"label":"name"},"value":"Date","range":[20,24]},{"type":{"label":"("},"range":[24,25]},{"type":{"label":")"},"range":[25,26]},{"type":{"label":","},"range":[26,27]},{"type":{"label":"new"},"value":"new","range":[28,31]},{"type":{"label":"name"},"value":"Date","range":[32,36]},{"type":{"label":"("},"range":[36,37]},{"type":{"label":"string"},"value":"2013-01-12","range":[37,49]},{"type":{"label":")"},"range":[49,50]},{"type":{"label":")"},"range":[50,51]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec5._expr(_rec5._capt(new Date('2013-01-12'), 'arguments/1'), {
  content: 'assert.notEqual(new Date(), new Date(\'2013-01-12\'))',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"notEqual","range":[7,15]},"computed":false,"range":[0,15]},"arguments":[{"type":"NewExpression","callee":{"type":"Identifier","name":"Date","range":[20,24]},"arguments":[],"range":[16,26]},{"type":"NewExpression","callee":{"type":"Identifier","name":"Date","range":[32,36]},"arguments":[{"type":"StringLiteral","value":"2013-01-12","range":[37,49]}],"range":[28,50]}],"range":[0,51]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"notEqual","range":[7,15]},{"type":{"label":"("},"range":[15,16]},{"type":{"label":"new"},"value":"new","range":[16,19]},{"type":{"label":"name"},"value":"Date","range":[20,24]},{"type":{"label":"("},"range":[24,25]},{"type":{"label":")"},"range":[25,26]},{"type":{"label":","},"range":[26,27]},{"type":{"label":"new"},"value":"new","range":[28,31]},{"type":{"label":"name"},"value":"Date","range":[32,36]},{"type":{"label":"("},"range":[36,37]},{"type":{"label":"string"},"value":"2013-01-12","range":[37,49]},{"type":{"label":")"},"range":[49,50]},{"type":{"label":")"},"range":[50,51]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
