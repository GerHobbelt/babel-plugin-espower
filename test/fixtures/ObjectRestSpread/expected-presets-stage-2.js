'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareOpaqueType":["id","typeParameters","supertype"],"DeclareVariable":["id"],"DeclareExportDeclaration":["declaration","specifiers","source"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"OpaqueType":["id","typeParameters","impltype","supertype"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"ObjectTypeSpreadProperty":["argument"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(_rec._capt(obj, 'arguments/0/left') == _rec._capt(_extends({}, obj), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(obj == { ...obj })',
  filepath: 'test/fixtures/ObjectRestSpread/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"==","left":{"type":"Identifier","name":"obj","range":[7,10]},"right":{"type":"ObjectExpression","properties":[{"type":"SpreadProperty","argument":{"type":"Identifier","name":"obj","range":[19,22]},"range":[16,22]}],"range":[14,24]},"range":[7,24]}],"range":[0,25]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"obj","range":[7,10]},{"type":{"label":"==/!="},"value":"==","range":[11,13]},{"type":{"label":"{"},"range":[14,15]},{"type":{"label":"..."},"range":[16,19]},{"type":{"label":"name"},"value":"obj","range":[19,22]},{"type":{"label":"}"},"range":[23,24]},{"type":{"label":")"},"range":[24,25]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
