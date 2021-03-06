# Design Patterns In Angular

- Run `ng serve` for a dev server. Navigate to `http://localhost:4201/`
- Run `ng generate module singleton --route singleton --module app.module` to create a feature module with routing

## Creational Pattern

### Abstract Factory

- short description: create a related object family
- applicability: system is capsulated of the creation & composition of its models
- visual resource: https://refactoring.guru/design-patterns/abstract-factory
- expandability: concrete factories as singletons, factory method for creation of concrete objects, for too much objects you can use the Prototype Patterm 

##### UML

![Abstract Factory](./readme/images/01.%20Abstract%20Factory.jpg)

##### UML for this repo example

![Abstract Factory Example](./readme/images/01.%20Abstract%20Factory%20example.jpg)

### Singleton

- short description: hold one instance globally
- visual resource: https://refactoring.guru/design-patterns/singleton

##### UML

![Singleton](./readme/images/02.%20Singleton.jpg)

##### UML for this repo example

![Singleton Example](./readme/images/02.%20Singleton%20example.jpg)

### Prototype

- short description: clone/copy a component 
- applicability: runtime specification of objects (dynamic loading), to many different objects for factories
- visual resource: https://refactoring.guru/design-patterns/prototype
- expandability: implementation of prototype manager (hold all prototype instances), deep-cloinig, 

##### UML

![Prototype](./readme/images/03.%20Prototype.jpg)

##### UML for this repo example

![Prototype Example](./readme/images/03.%20Prototype%20example.jpg)

### Builder

- short description: blueprint for different products with different features
- visual resource: https://refactoring.guru/design-patterns/builder
- expandability: abstract class or interface isn't needed for "product"-objects

##### UML

![Builder](./readme/images/04.%20Builder.jpg)

##### UML for this repo example

![Example](./readme/images/04.%20Builder%20example.jpg)

### Factory Method

- short description: provide an interface for creating objects in superclass
- visual resource: https://refactoring.guru/design-patterns/factory-method
- expandability: parameterized contructor for universal factory method (like abstract factory)

##### UML

![Factory Method](./readme/images/05.%20Factory%20Method.jpg)

##### UML for this repo example

![Factory Method Example](./readme/images/05.%20Factory%20Method%20example.jpg)

### Adapter (Wrapper)

- short description: allows objects with incompatible interfaces to collaborate
- visual resource: https://refactoring.guru/design-patterns/adapter
- expandability: 2-way-adapter for aptee and target (multiple inheritance)

### Facade

- short description: provides a simplified interface to a library
- visual resource: https://refactoring.guru/design-patterns/facade

### Bridge

- short description: separate the abstraction from the implementation
- visual resource: https://refactoring.guru/design-patterns/bridge


## Resources

- Design Pattern by GoF
- https://refactoring.guru/
- https://www.geeksforgeeks.org/

