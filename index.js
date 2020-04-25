console.log("patch release");
console.log("patch release 2");

console.log("minor feature");

console.log("fix");

console.log("BREAKING CHANGE");

console.log("fix");

console.log("trying with extension");
console.log("feature");

console.log("breaking");


feat: A new feature

fix: A bug fix

docs: Documentation only changes

style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

refactor: A code change that neither fixes a bug nor adds a feature

perf: A code change that improves performance

test: Adding missing or correcting existing tests

chore: Changes to the build process or auxiliary tools and libraries such as documentation generation


BREAKING CHANGE: this is going to break builds


BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.
    
    To migrate the code follow the example below:
    
    Before:
    
    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }
    
    After:
    
    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }
    
    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
