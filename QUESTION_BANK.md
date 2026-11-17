# CS2103/T question bank — draft for review

Draft MCQ and MRQ questions for the Questions tab (`site/questions.html`). After editing, run `python3 tools/build_questions.py` to regenerate `site/questions-data.js`; it refuses to write if a question is malformed or the counts below are out of step. The design is in `QUESTIONS_TAB_PLAN.md`.

- **540 questions**: 422 MCQ (four options, one correct) and 118 MRQ (three to five options, two or more correct).
- **84 questions apply a topic to the AddressBook-Level3 (AB3) code base** (`se-edu/addressbook-level3` at commit `56d1ffb`); each names the files it relies on.
- Content snapshot: course Topics pages, 11 November 2026 (the same snapshot as the Guide). Weeks 12–13 have no topics.
- **Basis** says what the answer rests on: `bold` = bold/highlighted core theory, `body` = non-bold main text, `panel` = example, exercise or supplementary panel.
  Of the 540 questions, 454 rest on bold text, 69 on body text and 17 on panels.
- **Source** lists the Guide topic IDs that back the answer.
- Correct options are marked ✅ and repeated on the **Answer** line. Explanations never refer to option letters, so options can be shuffled when shown.
- These are study questions written for this guide, not official exam questions.

## Summary by topic

| Week | Topic | MCQ | MRQ | of which AB3 | Total |
|---|---|---:|---:|---:|---:|
| 1 | [W1.1] OOP: Classes & Objects | 12 | 6 | 2 | 18 |
| 1 | [W1.2] OOP Inheritance | 7 | 2 | 2 | 9 |
| 1 | [W1.3] OOP: Polymorphism | 10 | 3 | 3 | 13 |
| 1 | [W1.4] Java: Collections | 7 | 1 | 2 | 8 |
| 1 | [W1.5] Exception Handling | 8 | 2 | 2 | 10 |
| 1 | [W1.6] SE: Intro | 6 | 1 | 0 | 7 |
| 1 | [W1.7] RCS: Getting Started with Git | – | – | – | none |
| 2 | [W2.1] SDLC Process Models: Basics | 6 | 2 | 0 | 8 |
| 2 | [W2.2] RCS: Getting Started with GitHub | – | – | – | none |
| 2 | [W2.3] RCS: Doing More with Revision History | – | – | – | none |
| 2 | [W2.4] IDEs: Basic Features | 1 | 1 | 0 | 2 |
| 2 | [W2.5] Intro to Automated Testing | 6 | 1 | 0 | 7 |
| 3 | [W3.1] RCS: Branching | – | – | – | none |
| 3 | [W3.2] RCS: Creating Pull Requests | – | – | – | none |
| 3 | [W3.3] Automating the Build Process | 4 | 1 | 2 | 5 |
| 3 | [W3.4] Java: JavaDoc, file I/O, packages, JARs | 9 | 2 | 2 | 11 |
| 3 | [W3.5] Code Quality: Coding Standards | 3 | 0 | 1 | 3 |
| 3 | [W3.6] Developer Testing | 2 | 1 | 0 | 3 |
| 3 | [W3.7] Unit Testing | 8 | 1 | 2 | 9 |
| 4 | [W4.1] Design: Models | 4 | 2 | 1 | 6 |
| 4 | [W4.2] Class/Object Diagrams: Basics | 6 | 2 | 2 | 8 |
| 4 | [W4.3] Class Diagrams: Beyond Basics | 6 | 2 | 2 | 8 |
| 4 | [W4.4] Java: JavaFX | 2 | 0 | 1 | 2 |
| 4 | [W4.5] Java: varargs | 2 | 0 | 1 | 2 |
| 4 | [W4.6] Code Quality: Naming | 6 | 1 | 1 | 7 |
| 4 | [W4.7] Static Analysis | 3 | 1 | 1 | 4 |
| 4 | [W4.8] Code Reviews | 2 | 2 | 0 | 4 |
| 4 | [W4.9] RCS: Managing Pull Requests I | – | – | – | none |
| 5 | [W5.1] Requirements: Intro | 6 | 3 | 1 | 9 |
| 5 | [W5.2] Requirements: Gathering | 7 | 2 | 0 | 9 |
| 5 | [W5.3] Requirements: Specifying | 7 | 3 | 1 | 10 |
| 5 | [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments | 16 | 5 | 3 | 21 |
| 5 | [W5.5] Refactoring | 6 | 1 | 1 | 7 |
| 5 | [W5.6] Assertions | 7 | 2 | 2 | 9 |
| 5 | [W5.7] Java: Streams | – | – | – | none |
| 5 | [W5.8] RCS: Managing Pull Requests II | – | – | – | none |
| 6 | [W6.1] Modeling: Sequence Diagrams | 3 | 1 | 1 | 4 |
| 6 | [W6.2] Architecture Diagrams | 10 | 3 | 2 | 13 |
| 6 | [W6.3] Logging | 4 | 0 | 1 | 4 |
| 6 | [W6.4] Debugging | 17 | 5 | 0 | 22 |
| 6 | [W6.5] IDEs: Intermediate Features | – | – | – | none |
| 7 | [W7.1] Requirements: Use Cases | 11 | 3 | 2 | 14 |
| 7 | [W7.2] Requirements Documents | 4 | 1 | 1 | 5 |
| 7 | [W7.3] Design: High-Level View | 3 | 1 | 1 | 4 |
| 7 | [W7.4] Design: Fundamentals | 11 | 3 | 4 | 14 |
| 7 | [W7.5] IDEs: Advanced Features : OPTIONAL | – | – | – | none |
| 7 | [W7.6] Integration Approaches | 6 | 0 | 1 | 6 |
| 7 | [W7.7] Project Mgt: Scheduling and Tracking | 8 | 1 | 0 | 9 |
| 7 | [W7.8] Project Mgt: Workflows for Git-Based Projects | – | – | – | none |
| 8 | [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics | 5 | 0 | 1 | 5 |
| 8 | [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate | 5 | 1 | 1 | 6 |
| 8 | [W8.3] [Revisiting] Drawing Sequence Diagrams | 4 | 0 | 1 | 4 |
| 8 | [W8.4] Testing: Types | 12 | 4 | 2 | 16 |
| 8 | [W8.5] Testing: Intermediate Concepts | 9 | 2 | 2 | 11 |
| 9 | [W9.1] Conceptual Class Diagrams (aka OODMs) | 3 | 1 | 1 | 4 |
| 9 | [W9.2] Activity Diagrams | 3 | 0 | 1 | 3 |
| 9 | [W9.3] Conceptualizing a Design | 3 | 0 | 0 | 3 |
| 9 | [W9.4] Architecture Diagrams: Drawing | 3 | 1 | 1 | 4 |
| 9 | [W9.5] Design Principles | 14 | 2 | 4 | 16 |
| 9 | [W9.6] [Revisiting] SDLC Process Models | 4 | 1 | 0 | 5 |
| 9 | [W9.7] SDLC Process Models (continued) | 10 | 6 | 1 | 16 |
| 9 | [W9.8] Writing Developer Documents | 5 | 3 | 2 | 8 |
| 10 | [W10.1] Design Patterns | 9 | 4 | 3 | 13 |
| 10 | [W10.2] Defensive Programming | 8 | 2 | 3 | 10 |
| 10 | [W10.3] Test Cases: Intro | 7 | 1 | 1 | 8 |
| 10 | [W10.4] Test Cases: Equivalence Partitioning | 5 | 2 | 1 | 7 |
| 10 | [W10.5] Test Cases: Boundary Value Analysis | 5 | 0 | 1 | 5 |
| 11 | [W11.1] More Design Patterns | 8 | 3 | 1 | 11 |
| 11 | [W11.2] Architectural Styles | 13 | 4 | 3 | 17 |
| 11 | [W11.3] Test Cases: Combining Multiple Inputs | 9 | 1 | 1 | 10 |
| 11 | [W11.4] Other QA Techniques | 3 | 2 | 1 | 5 |
| 11 | [W11.5] Secure Software Engineering | 18 | 7 | 2 | 25 |
| 11 | [W11.6] Reuse | 8 | 2 | 2 | 10 |
| 11 | [W11.7] Cloud Computing : OPTIONAL | 2 | 0 | 0 | 2 |
| 11 | [W11.8] Other UML Models : OPTIONAL | 1 | 1 | 0 | 2 |
| | **Total** | **422** | **118** | **84** | **540** |

## Topics without questions

These topics are only links to external lessons (Git-Mastery tours, IDE guides, Java tutorials) with no theory text in the snapshot, so no source-backed question can be written for them:

- [W1.7] RCS: Getting Started with Git
- [W2.2] RCS: Getting Started with GitHub
- [W2.3] RCS: Doing More with Revision History
- [W3.1] RCS: Branching
- [W3.2] RCS: Creating Pull Requests
- [W4.9] RCS: Managing Pull Requests I
- [W5.7] Java: Streams
- [W5.8] RCS: Managing Pull Requests II
- [W6.5] IDEs: Intermediate Features
- [W7.5] IDEs: Advanced Features : OPTIONAL
- [W7.8] Project Mgt: Workflows for Git-Based Projects

---

# Week 1

## [W1.1] OOP: Classes & Objects

### W1.1-01 · MRQ

**Type:** MRQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** OOP as a paradigm · **Source:** W1.1a · **Basis:** bold

**Question:** Which statements about Object-Oriented Programming are correct? (Select all that apply.)

- A. It is a programming paradigm ✅
- B. It guides how programmers structure a solution ✅
- C. It is a programming language
- D. Some languages support it alongside other paradigms ✅

**Answer:** A, B, D

**Explanation:** OOP is a programming paradigm — a way of analysing problems and structuring solutions — not a language. Languages such as Java, Python and JavaScript support multiple paradigms.

### W1.1-02 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Paradigms and languages · **Source:** W1.1a · **Basis:** body

**Question:** Which pairing of language and paradigm matches the course material?

- A. Haskell — functional programming ✅
- B. Prolog — procedural programming
- C. C — functional programming
- D. Java — logic programming

**Answer:** A

**Explanation:** The course lists C as procedural, Haskell (with F# and Scala) as functional and Prolog as logic programming. Java is primarily an OOP language.

### W1.1-03 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** State and behavior · **Source:** W1.1b · **Basis:** bold

**Question:** In a program that computes the average age of a group of people, a `Calculator` object stores the numbers entered and can sum and divide them. Which description is correct?

- A. The numbers entered are its behavior; summing is its state
- B. The numbers entered are its state; summing and dividing are its behavior ✅
- C. Both are part of its interface only
- D. Neither is state nor behavior, because a calculator is not a real-world person

**Answer:** B

**Explanation:** Every object has both state (data) and behavior (operations on data). The stored numbers are data; sum and divide are operations on that data.

### W1.1-04 · MRQ

**Type:** MRQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Object networks · **Source:** W1.1b · **Basis:** bold

**Question:** Which statements reflect how OOP views a problem and its solution? (Select all that apply.)

- A. The world is viewed as a network of interacting objects ✅
- B. An OOP solution tries to create a similar object network in the computer's memory ✅
- C. The virtual object network must match the real-world one exactly
- D. Objects interact by sending messages ✅

**Answer:** A, B, D

**Explanation:** OOP solutions simulate the real-world scenario with a network of objects that interact by sending messages, but OOP does not demand that the virtual network follow the real world exactly (e.g. Pen and Paper might become a single `AgeList`).

### W1.1-05 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Interface vs implementation · **Source:** W1.1b · **Basis:** bold

**Question:** For a physical calculator, the buttons and display are to the internal circuits as, for a software object, …

- A. its state is to its behavior
- B. its class is to its instances
- C. its interface is to its implementation ✅
- D. its messages are to its responses

**Answer:** C

**Explanation:** Every object has an interface (how other objects interact with it) and an implementation (the internals that support the interface, which may not be accessible to others).

### W1.1-06 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Abstraction vs encapsulation · **Source:** W1.1c, W1.1d · **Basis:** bold

**Question:** "Objects let us think in terms of higher-level concepts such as Students, instead of dealing with student-related data and functions separately." Which OOP idea does this sentence describe?

- A. Encapsulation — the packaging aspect
- B. Encapsulation — the information hiding aspect
- C. Polymorphism
- D. Abstraction ✅

**Answer:** D

**Explanation:** Objects are an abstraction mechanism because they let us abstract away lower-level details and work with larger units. Encapsulation is about packaging data with behavior and hiding the data behind the interface.

### W1.1-07 · MRQ

**Type:** MRQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Encapsulation · **Source:** W1.1d · **Basis:** bold

**Question:** An object is an encapsulation of data and related behavior. Which of these are the two aspects of encapsulation? (Select all that apply.)

- A. Packaging: data and related behavior are bundled into one self-contained unit ✅
- B. Information hiding: the data is hidden from the outside and accessible only through the object's interface ✅
- C. Generalisation: common parts are extracted into a more general class
- D. Substitution: one object can stand in for another of a parent type

**Answer:** A, B

**Explanation:** The two aspects are packaging and information hiding. Generalisation relates to inheritance and substitution to polymorphism.

### W1.1-08 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Classes · **Source:** W1.1e · **Basis:** bold

**Question:** What is a class, in the course's words?

- A. Instructions for creating a specific kind of object ✅
- B. A group of objects that are stored together in memory
- C. An object that has been created but not yet used
- D. A message that one object sends to another

**Answer:** A

**Explanation:** Objects of the same kind hold the same type of data and have the same behavior, so the instructions for that kind are written once as a class and used to instantiate objects.

### W1.1-09 · MRQ

**Type:** MRQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Java constructors · **Source:** W1.1f · **Basis:** body

**Question:** Which statements about Java constructors are correct? (Select all that apply.)

- A. A constructor has the same name as its class ✅
- B. A constructor does not declare a return type ✅
- C. A constructor must be declared `static`
- D. A class can have more than one constructor (overloading) ✅

**Answer:** A, B, D

**Explanation:** Constructors share the class name, omit `static` and have no return type; they can be overloaded, e.g. `Time()` and `Time(int, int, int)`.

### W1.1-10 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** The this keyword · **Source:** W1.1f · **Basis:** bold

**Question:** What does `this(0, 0, 0);` do when it is the first statement of the constructor `public Time() { … }`?

- A. It creates a second `Time` object and discards it
- B. It calls another constructor of the same class, `Time(int, int, int)` ✅
- C. It calls the constructor of the superclass
- D. It assigns 0 to three local variables

**Answer:** B

**Explanation:** `this` refers to the current object, and `this(...)` can be used to call another constructor of the same class. Calling a superclass constructor uses `super(...)`.

### W1.1-11 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Shadowing · **Source:** W1.1f · **Basis:** bold

**Question:** Why is `this.hour = hour;` needed in the constructor `Time(int hour, int minute, int second)`?

- A. Because instance variables can only be assigned through `this`
- B. Because `hour` is a class-level variable
- C. Because the parameter `hour` shadows the instance variable of the same name ✅
- D. Because constructors cannot access parameters directly

**Answer:** C

**Explanation:** When a parameter has the same name as an instance variable it hides (shadows) it, so `this.hour` is used to refer to the instance variable of the current object.

### W1.1-12 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Class-level members · **Source:** W1.1h · **Basis:** bold

**Question:** Which variable is most suitable as a class-level variable?

- A. `Player.totalScore` — the score of a player
- B. `Course.totalStudents` — the students in a course
- C. `ArrayList.total` — the number of items in a list
- D. `Task.totalPendingTasks` — the number of pending tasks across all Task objects ✅

**Answer:** D

**Explanation:** Class-level attributes hold a value shared by all instances. The total of pending tasks is not something an individual `Task` should manage, whereas the others differ per instance.

### W1.1-13 · MRQ

**Type:** MRQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Static members in Java · **Source:** W1.1h, W1.1i · **Basis:** bold

**Question:** Which statements about class-level (static) members in Java are correct? (Select all that apply.)

- A. A static variable is shared by all instances of the class ✅
- B. Class-level members should be accessed using the class name rather than an instance ✅
- C. `static` combined with `final` is used to define constants ✅
- D. A static method can be called only after an object of the class has been created

**Answer:** A, B, C

**Explanation:** Static fields are associated with the class, with one shared copy; they are referenced by the class name (e.g. `Bicycle.numberOfBicycles`), and `static final` defines constants. Static members can be used without creating any instance.

### W1.1-14 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** System.out.println · **Source:** W1.1i · **Basis:** bold

**Question:** In `System.out.println("hi")`, which description is correct?

- A. `out` is a class-level attribute of `System` and `println` is an instance-level method of the `out` object ✅
- B. `out` is an instance-level attribute and `println` is a class-level method
- C. Both `out` and `println` are class-level members of `System`
- D. `System` is an object and `out` is its method

**Answer:** A

**Explanation:** `out` is a public class-level attribute of the `System` class, accessed through the class name; `println` is an instance method called on the object `out` refers to.

### W1.1-15 · MCQ

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Enumerations · **Source:** W1.1j · **Basis:** bold

**Question:** A task's priority is stored as an `int` where 2, 1 and 0 mean high, medium and low. What is the main benefit of replacing it with an enumeration `Priority { HIGH, MEDIUM, LOW }`?

- A. Enumerations use less memory than integers
- B. The variable can no longer be assigned an invalid value, because the compiler catches it ✅
- C. Enumerations can be compared faster than integers
- D. The priority can then be changed at run time by the user

**Answer:** B

**Explanation:** An enumeration is a fixed set of values that can be considered a data type. With `int`, an invalid value such as 9 could be assigned; with an enum the compiler rejects anything outside the set.

### W1.1-16 · MRQ

**Type:** MRQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** Java enums · **Source:** W1.1k · **Basis:** bold

**Question:** Which statements about Java enumerations are correct? (Select all that apply.)

- A. They are defined using the `enum` keyword ✅
- B. By convention, their constant names are written in uppercase ✅
- C. They can have behaviors (methods) too ✅
- D. Their set of values can be extended while the program is running

**Answer:** A, B, C

**Explanation:** An enum type is defined with `enum`, its fields are constants named in uppercase, and Java enums can also have behaviors. The set of values is fixed.

### W1.1-17 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** AB3 static constants · **Source:** W1.1i · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/person/Name.java`, `src/main/java/seedu/address/logic/parser/ParserUtil.java`

**Question:** AB3's `Name` class declares `public static boolean isValidName(String test)`, which `ParserUtil` calls as `Name.isValidName(trimmedName)` before constructing a `Name`. Why is it appropriate for this to be a class-level method?

- A. Because static methods run faster than instance methods
- B. Because `Name` objects are immutable
- C. Because validity is a question about the class of names in general, asked before any specific `Name` object exists ✅
- D. Because Java requires validation methods to be static

**Answer:** C

**Explanation:** Class-level methods are for behavior related to the class but not suited to being a message to a specific object. Here there is no `Name` instance yet to send a message to, and the method is accessed via the class name.

### W1.1-18 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.1] OOP: Classes & Objects · **Subtopic:** AB3 encapsulation · **Source:** W1.1d, W1.1g · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/person/Person.java`

**Question:** In AB3, `Person` keeps its fields `private` and offers methods such as `getName()`; `getTags()` returns `Collections.unmodifiableSet(tags)`. Which aspect of encapsulation does this mainly demonstrate?

- A. The packaging aspect only
- B. Multiple inheritance
- C. Abstraction over control flow
- D. The information hiding aspect: the data is reachable only through the object's interface ✅

**Answer:** D

**Explanation:** Private fields with getters hide the data behind the interface, and returning an unmodifiable view stops callers from changing the internal set directly.

## [W1.2] OOP Inheritance

### W1.2-01 · MCQ

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** Superclass and subclass · **Source:** W1.2a · **Basis:** bold

**Question:** `Parrot` inherits from `Bird`, which inherits from `Animal`. Which statement is correct?

- A. A `Parrot` is a `Bird` and also an `Animal` ✅
- B. `Animal` is a subtype of `Bird`
- C. `Parrot` is more general than `Bird`
- D. A change to `Animal` cannot affect `Parrot`

**Answer:** A

**Explanation:** A superclass is more general than its subclass, inheritance gives an is-a relationship, and chains of inheritance form hierarchies — so a Parrot is a Bird and an Animal. Changes to a superclass can affect its subclasses.

### W1.2-02 · MCQ

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** Multiple inheritance · **Source:** W1.2a · **Basis:** bold

**Question:** Which statement about multiple inheritance is correct?

- A. It means a class has several subclasses
- B. It is when a class inherits directly from multiple classes, which Java does not allow among classes ✅
- C. It is allowed among classes in Java and C#
- D. It is another name for an inheritance hierarchy

**Answer:** B

**Explanation:** Multiple inheritance is when a class inherits directly from multiple classes; Python and C++ allow it, Java and C# do not. Having several subclasses, or a chain of ancestors, is not multiple inheritance.

### W1.2-03 · MRQ

**Type:** MRQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** Overloading and type signatures · **Source:** W1.2b · **Basis:** bold

**Question:** Given `void m(int x, double y)`, which of these methods in the same class would be a valid overload of it? (Select all that apply.)

- A. `void m(double x, int y)` ✅
- B. `int m(int a, double b)`
- C. `void m(int x)` ✅
- D. `void m(int p, double q)`

**Answer:** A, C

**Explanation:** Overloading needs the same name but a different type signature. The signature is the sequence of parameter types — order matters, but return type and parameter names are not part of it, so changing only those does not create an overload.

### W1.2-04 · MCQ

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** Overriding · **Source:** W1.2c · **Basis:** bold

**Question:** `Report` has `read(): String`. Its subclass `EvaluationReport` declares `read(int): String`. What is this?

- A. Overriding, because the method name and return type match
- B. Overriding, because it is declared in a subclass
- C. Overloading, because the type signatures differ ✅
- D. Neither, because it is a compile error

**Answer:** C

**Explanation:** Overriding requires the same name and the same type signature as the inherited method (with the same or a subtype return type). A different parameter list makes it an overload.

### W1.2-05 · MRQ

**Type:** MRQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** Java inheritance rules · **Source:** W1.2d · **Basis:** bold

**Question:** Which statements about inheritance in Java are correct? (Select all that apply.)

- A. Every class except `Object` has exactly one direct superclass ✅
- B. The keyword `extends` indicates that one class inherits from another ✅
- C. Constructors are inherited by subclasses
- D. A subclass constructor can invoke a superclass constructor using `super(...)` ✅
- E. A class with no explicit superclass is implicitly a subclass of `Object` ✅

**Answer:** A, B, D, E

**Explanation:** Java has single inheritance among classes, rooted at `Object`. Constructors are not members and so are not inherited, but they can be invoked from the subclass with `super`.

### W1.2-06 · MCQ

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** The super keyword · **Source:** W1.2d · **Basis:** bold

**Question:** `Subclass` overrides `printMethod()` from `Superclass`. Inside `Subclass`, how can the inherited (overridden) version be invoked?

- A. `this.printMethod()`
- B. `Superclass.printMethod()`
- C. It cannot be invoked once overridden
- D. `super.printMethod()` ✅

**Answer:** D

**Explanation:** If a method overrides one of its superclass's methods, the overridden method can be invoked using the keyword `super`. The simple name or `this.` refers to the subclass's own version.

### W1.2-07 · MCQ

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** Implicit super call · **Source:** W1.2d · **Basis:** body

**Question:** `Bicycle` declares only the constructor `Bicycle(int speed, int gear)`. `MountainBike extends Bicycle` has a constructor that does not call `super(...)` explicitly. What happens?

- A. A compile-time error, because the compiler inserts a call to a no-argument superclass constructor that does not exist ✅
- B. The `Bicycle` part of the object is left uninitialised at run time
- C. The compiler inserts a call to `Bicycle(0, 0)`
- D. Nothing; superclass constructors are optional

**Answer:** A

**Explanation:** If a constructor does not explicitly invoke a superclass constructor, the compiler inserts a call to the superclass's no-argument constructor; if there is none, compilation fails.

### W1.2-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** AB3 command hierarchy · **Source:** W1.2a, W1.2d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/Command.java`, `src/main/java/seedu/address/logic/commands/DeleteCommand.java`

**Question:** In AB3, `DeleteCommand`, `AddCommand`, `ListCommand` and the other command classes are each declared with `extends Command`. Which statement about this design is correct?

- A. `Command` is more specialized than `DeleteCommand`
- B. Each of them is-a `Command`, and `Command` is the more general class ✅
- C. Each command class has several direct superclasses
- D. `Command` inherits the `execute` method from its subclasses

**Answer:** B

**Explanation:** Inheritance defines a new class based on an existing one and yields an is-a relationship; the superclass (`Command`) is more general, and each subclass has it as its single direct superclass.

### W1.2-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.2] OOP Inheritance · **Subtopic:** AB3 super constructor · **Source:** W1.2d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/exceptions/ParseException.java`

**Question:** AB3's `ParseException extends IllegalValueException` and its constructor body is `super(message);`. Why does it have to declare its own constructor and call `super`?

- A. Because exception classes cannot have fields
- B. Because `super` is required in every Java method
- C. Because constructors are not inherited, so the subclass declares one and passes the message up to the superclass constructor ✅
- D. Because `IllegalValueException` is abstract

**Answer:** C

**Explanation:** A subclass inherits fields and methods but not constructors; it can invoke a superclass constructor with `super(parameters)`.

## [W1.3] OOP: Polymorphism

### W1.3-01 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Polymorphism · **Source:** W1.3a · **Basis:** bold

**Question:** Which statement best captures what polymorphism lets you do?

- A. Give several methods in one class the same name
- B. Hide an object's data behind its interface
- C. Create several objects from the same class
- D. Write code targeting superclass objects, use it on subclass objects, and get possibly different results depending on the actual class ✅

**Answer:** D

**Explanation:** Polymorphism is the ability of different objects to respond, each in its own way, to identical messages. Same-named methods in one class is overloading; hiding data is encapsulation.

### W1.3-02 · MRQ

**Type:** MRQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Benefits of polymorphic code · **Source:** W1.3b · **Basis:** bold

**Question:** A `PetShelter` program is changed from separate `Cat[]` and `Dog[]` arrays with two loops to a single `Animal[]` array with one loop calling `speak()`. According to the course, in which ways is the polymorphic version better? (Select all that apply.)

- A. It is shorter ✅
- B. It is simpler ✅
- C. It is more flexible: it keeps working when more animal types are added ✅
- D. It no longer needs `Cat` and `Dog` to override `speak()`

**Answer:** A, B, C

**Explanation:** Polymorphic code targeting the superclass is shorter, simpler and more flexible. It relies on the subclasses overriding `speak()` to give different results.

### W1.3-03 · MRQ

**Type:** MRQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Abstract classes · **Source:** W1.3c, W1.3d · **Basis:** bold

**Question:** Which statements about abstract classes in Java are correct? (Select all that apply.)

- A. An abstract class cannot be instantiated ✅
- B. An abstract class can be used as a reference type ✅
- C. A class with no abstract methods can still be declared abstract ✅
- D. A concrete class can contain an abstract method
- E. An abstract class can contain concrete methods ✅

**Answer:** A, B, C, E

**Explanation:** Abstract classes cannot be instantiated but can be subclassed and used as types; they may contain concrete methods or none, and need not have abstract methods. A class containing an abstract method must itself be abstract.

### W1.3-04 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Subclassing an abstract class · **Source:** W1.3d · **Basis:** bold

**Question:** `Animal` is abstract with abstract method `speak()`. `Feline extends Animal` does not implement `speak()`; `DomesticCat extends Feline` does. Which line compiles?

- A. `Animal a = new DomesticCat("Mittens");` ✅
- B. `Animal a = new Feline("Mittens");`
- C. `Animal a = new Animal("Rex");`
- D. `DomesticCat c = new Feline("Mittens");`

**Answer:** A

**Explanation:** A subclass that does not implement all inherited abstract methods must itself be abstract, so `Feline` cannot be instantiated. `DomesticCat` is concrete and can be assigned to an `Animal` reference.

### W1.3-05 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Interfaces · **Source:** W1.3e · **Basis:** bold

**Question:** What is an interface, conceptually?

- A. A class whose methods are all private
- B. A behavior specification: a collection of method specifications a class can commit to support ✅
- C. A class that cannot have subclasses
- D. The graphical part of an application

**Answer:** B

**Explanation:** An interface is a behavior specification. A class that implements it is able to support the behaviors specified, which results in an is-a relationship just like class inheritance.

### W1.3-06 · MRQ

**Type:** MRQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Java interfaces · **Source:** W1.3f · **Basis:** bold

**Question:** Which statements about Java interfaces are correct? (Select all that apply.)

- A. An interface cannot be instantiated ✅
- B. An interface can be used as a type, e.g. `DrivableVehicle dv = new CarModelX();` ✅
- C. An interface can inherit from several other interfaces ✅
- D. A class can implement at most one interface
- E. An interface can contain constants and static methods ✅

**Answer:** A, B, C, E

**Explanation:** Interfaces can only be implemented by classes (or extended by other interfaces), can serve as types, allow multiple inheritance among themselves, and may hold constants and static methods. A class can implement multiple interfaces while extending one class.

### W1.3-07 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** extends vs implements · **Source:** W1.3f · **Basis:** body

**Question:** `Shape` is an abstract class and `Printable` is an interface. Which declaration is correct for a class `Circle` that is both?

- A. `class Circle implements Shape extends Printable`
- B. `class Circle extends Shape, Printable`
- C. `class Circle extends Shape implements Printable` ✅
- D. `class Circle implements Shape, Printable`

**Answer:** C

**Explanation:** A class inherits from a class with `extends` and supports an interface with `implements`. `extends` is also used when an interface inherits from another interface.

### W1.3-08 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Substitutability · **Source:** W1.3g · **Basis:** bold

**Question:** `AcademicStaff` is a subclass of `Staff`. Which statement is correct?

- A. `AcademicStaff a = new Staff();` is allowed, because a staff member may be academic
- B. Neither assignment is allowed
- C. Both assignments are allowed
- D. `Staff s = new AcademicStaff();` is allowed, because every `AcademicStaff` instance is a `Staff` instance ✅

**Answer:** D

**Explanation:** Every instance of a subclass is an instance of the superclass, but not vice versa. So a child object can be substituted where a parent is expected, not the other way round.

### W1.3-09 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** Dynamic vs static binding · **Source:** W1.3h · **Basis:** bold

**Question:** Which statement about method binding is correct?

- A. Overridden methods are resolved at runtime using the object's actual type; overloaded methods are resolved at compile time ✅
- B. Both overloaded and overridden methods are resolved at compile time
- C. Overloaded methods are resolved at runtime; overridden methods at compile time
- D. Both overloaded and overridden methods are resolved at runtime

**Answer:** A

**Explanation:** Overridden methods use dynamic (late) binding and resolve to the implementation in the object's actual type. Overloaded methods use static (early) binding.

### W1.3-10 · MCQ

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** How polymorphism is achieved · **Source:** W1.3i · **Basis:** bold

**Question:** Which concept is NOT one of the three that combine to achieve polymorphism?

- A. Substitutability
- B. Operation overloading ✅
- C. Dynamic binding
- D. Operation overriding

**Answer:** B

**Explanation:** Polymorphism is achieved by substitutability, operation overriding and dynamic binding. Overloading is resolved statically and is unrelated.

### W1.3-11 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** AB3 polymorphic execute · **Source:** W1.3i · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/LogicManager.java`, `src/main/java/seedu/address/logic/commands/Command.java`

**Question:** AB3's `LogicManager#execute` never checks which command it received. What makes the second line below run, say, `DeleteCommand`'s logic?
```
Command command = addressBookParser.parseCommand(commandText);
commandResult = command.execute(model);
```

- A. Static binding chooses the method from the declared type `Command`
- B. Method overloading of `execute` in `Command`
- C. Dynamic binding resolves the overridden `execute` to the implementation in the object's actual class ✅
- D. `LogicManager` copies the code of each command at compile time

**Answer:** C

**Explanation:** The variable of type `Command` can hold any subclass object (substitutability), each subclass overrides `execute`, and the call is bound at runtime to the actual object's implementation.

### W1.3-12 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** AB3 abstract Command · **Source:** W1.3c, W1.3d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/Command.java`

**Question:** AB3 declares `public abstract class Command` with `public abstract CommandResult execute(Model model) throws CommandException;`. Which consequence follows?

- A. `new Command()` can be used when no specific command is needed
- B. Subclasses may not add other methods
- C. `Command` cannot be used as a variable type
- D. Every concrete subclass such as `ListCommand` must provide an implementation of `execute` ✅

**Answer:** D

**Explanation:** An abstract class cannot be instantiated but can be a reference type; a concrete subclass must implement all inherited abstract methods or be declared abstract itself.

### W1.3-13 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.3] OOP: Polymorphism · **Subtopic:** AB3 interface as type · **Source:** W1.3e, W1.3f · **Basis:** bold · **AB3:** `src/main/java/seedu/address/MainApp.java`, `src/main/java/seedu/address/logic/Logic.java`

**Question:** AB3's `MainApp` declares the field `protected Logic logic;` and later assigns `logic = new LogicManager(model, storage);`, where `LogicManager implements Logic`. Which point about interfaces does this show?

- A. An interface can be used as a type, and an implementing class object is-a instance of that type ✅
- B. An interface can be instantiated when it has a single implementation
- C. A class can extend an interface
- D. Interfaces cannot declare methods

**Answer:** A

**Explanation:** Interfaces cannot be instantiated, but they can be used as reference types; an object of a class that implements the interface can be assigned to such a reference.

## [W1.4] Java: Collections

### W1.4-01 · MRQ

**Type:** MRQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** Collections framework · **Source:** W1.4a · **Basis:** bold

**Question:** What does the Java collections framework contain? (Select all that apply.)

- A. Interfaces: abstract data types that represent collections ✅
- B. Implementations: concrete, reusable data structures ✅
- C. Algorithms: methods such as searching and sorting that work on collection interfaces ✅
- D. Compilers: tools that translate collections to arrays

**Answer:** A, B, C

**Explanation:** The framework is a unified architecture consisting of interfaces, implementations and algorithms. The algorithms are polymorphic — the same method works on different implementations of an interface.

### W1.4-02 · MCQ

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** Choosing a core interface · **Source:** W1.4a · **Basis:** bold

**Question:** You need to store the cards in a player's hand, where the same card can never appear twice and position does not matter. Which core collection interface models this most directly?

- A. `List`
- B. `Set` ✅
- C. `Queue`
- D. `Map`

**Answer:** B

**Explanation:** A `Set` cannot contain duplicate elements. A `List` is an ordered sequence that allows duplicates, a `Queue` holds elements prior to processing, and a `Map` maps keys to values.

### W1.4-03 · MCQ

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** Interface vs implementation · **Source:** W1.4a · **Basis:** bold

**Question:** Which statement correctly relates `List` and `ArrayList`?

- A. `List` is an implementation of the `ArrayList` interface
- B. Both are interfaces
- C. `List` is an interface and `ArrayList` is one implementation of it ✅
- D. Both are implementations of `Collection`

**Answer:** C

**Explanation:** Interfaces such as `List<E>` let collections be manipulated independently of their representation; `ArrayList<E>` and `LinkedList<E>` are concrete implementations.

### W1.4-04 · MCQ

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** Map · **Source:** W1.4a · **Basis:** bold

**Question:** Which statement about a `Map` is correct?

- A. It can contain duplicate keys but not duplicate values
- B. It gives access to elements by integer index
- C. It holds elements in the order they are to be processed
- D. It maps keys to values, and each key maps to at most one value ✅

**Answer:** D

**Explanation:** A `Map` is an object that maps keys to values; it cannot contain duplicate keys, and each key maps to at most one value.

### W1.4-05 · MCQ

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** ArrayList · **Source:** W1.4b · **Basis:** body

**Question:** What does `items.indexOf("pear")` return when `items` is an `ArrayList<String>` that does not contain "pear"?

- A. -1 ✅
- B. 0
- C. `null`
- D. It throws an exception

**Answer:** A

**Explanation:** `ArrayList` is a resizable-array implementation of `List`; `indexOf` returns the index of the first occurrence, or -1 if the item is absent.

### W1.4-06 · MCQ

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** HashMap · **Source:** W1.4c · **Basis:** body

**Question:** A `HashMap<String, Integer>` already contains the key "Monday". What does `roster.put("Monday", 5)` do?

- A. Adds a second entry with the key "Monday"
- B. Updates the value associated with "Monday" ✅
- C. Throws an exception because the key exists
- D. Does nothing, because keys cannot be reused

**Answer:** B

**Explanation:** A `HashMap` stores key–value pairs with unique keys; `put` on an existing key replaces its value.

### W1.4-07 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** AB3 Set of tags · **Source:** W1.4a · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/person/Person.java`

**Question:** AB3's `Person` stores its tags as `private final Set<Tag> tags = new HashSet<>();`. Which property of the chosen collection type fits the idea that a person should not carry the same tag twice?

- A. A `Set` keeps elements in insertion order
- B. A `Set` allows access by integer index
- C. A `Set` cannot contain duplicate elements ✅
- D. A `Set` maps each tag to a value

**Answer:** C

**Explanation:** `Set` models the mathematical set abstraction with no duplicates; `HashSet` is the implementation behind the `Set` interface type.

### W1.4-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.4] Java: Collections · **Subtopic:** AB3 interface-typed collections · **Source:** W1.4a · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/ArgumentMultimap.java`

**Question:** AB3's `ArgumentMultimap` declares `private final Map<Prefix, List<String>> argMultimap = new HashMap<>();`. What does this line illustrate about the collections framework?

- A. `Map` and `HashMap` are two names for the same class
- B. `HashMap` is an interface that `Map` implements
- C. A `Map` can contain duplicate keys when its values are lists
- D. The variable is typed with the interface (`Map`) while the object is a concrete implementation (`HashMap`) ✅

**Answer:** D

**Explanation:** Interfaces allow collections to be manipulated independently of the details of their representation; `HashMap<K, V>` is an implementation of `Map<K, V>`.

## [W1.5] Exception Handling

### W1.5-01 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** What exceptions are for · **Source:** W1.5b · **Basis:** bold

**Question:** What kind of situation are exceptions meant to deal with?

- A. 'Unusual' but not entirely unexpected situations met at runtime ✅
- B. The normal, most common path of execution
- C. Situations that can never happen in a correct program
- D. Compile-time syntax errors

**Answer:** A

**Explanation:** Exceptions deal with unusual but not entirely unexpected situations such as a network timeout or a corrupted file. Normal conditions should be handled with ordinary control flow and return statements.

### W1.5-02 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** Exception categories · **Source:** W1.5c · **Basis:** bold

**Question:** A user types the name of a file that does not exist, and the program gets a `FileNotFoundException`. Which category is this, and why?

- A. A runtime exception, because it happens at run time
- B. A checked exception, because a well-written application should anticipate and recover from it ✅
- C. An error, because the file system is external to the application
- D. An unchecked exception, because the compiler cannot predict it

**Answer:** B

**Explanation:** Checked exceptions are exceptional conditions a well-written application should anticipate and recover from. Errors are external conditions it usually cannot recover from; runtime exceptions are internal conditions that usually indicate bugs.

### W1.5-03 · MRQ

**Type:** MRQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** Unchecked exceptions · **Source:** W1.5c · **Basis:** bold

**Question:** Which of these are unchecked exceptions in Java? (Select all that apply.)

- A. `NullPointerException` ✅
- B. `IOException`
- C. `java.io.IOError` ✅
- D. A class declared as `extends RuntimeException` ✅
- E. A class declared as `extends Exception`

**Answer:** A, C, D

**Explanation:** Errors and runtime exceptions (and their subclasses) are collectively the unchecked exceptions. Everything else, including `IOException` and custom classes extending `Exception`, is checked.

### W1.5-04 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** Finding a handler · **Source:** W1.5d · **Basis:** bold

**Question:** A method throws an exception that it does not handle itself. What does the runtime system do next?

- A. Terminates the program immediately
- B. Restarts the method from its first statement
- C. Searches the call stack, in reverse order of the calls, for a handler whose type matches ✅
- D. Returns `null` to the caller and continues

**Answer:** C

**Explanation:** The runtime looks for an exception handler starting with the method where the error occurred and proceeding back through the call stack. The program terminates only if the stack is exhausted without finding one.

### W1.5-05 · MRQ

**Type:** MRQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** Benefits of exceptions · **Source:** W1.5d · **Basis:** body

**Question:** Which are benefits of using exceptions? (Select all that apply.)

- A. Code for the usual work can be separated from code that handles unusual situations ✅
- B. Problems in the environment, such as a missing file, are prevented from occurring
- C. An error raised in one location can be handled in another ✅

**Answer:** A, C

**Explanation:** Exceptions let error information propagate through the call stack and keep error handling apart from normal code. They handle problems; they cannot prevent problems in the environment.

### W1.5-06 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** try, catch and finally · **Source:** W1.5e · **Basis:** bold

**Question:** In the code below, `process()` throws an `IOException`. What is printed?
```
try {
    process();
    System.out.println("A");
} catch (IOException e) {
    System.out.println("B");
} finally {
    System.out.println("C");
}
System.out.println("D");
```

- A. A B C D
- B. B D
- C. C D
- D. B C D ✅

**Answer:** D

**Explanation:** The rest of the `try` block is skipped when the exception is thrown, the matching `catch` runs, the `finally` block is guaranteed to run, and execution then continues after the `try` statement.

### W1.5-07 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** Catch or Specify · **Source:** W1.5e · **Basis:** bold

**Question:** A method calls code that may throw a checked exception. What does the Catch or Specify Requirement demand?

- A. The method must either enclose the code in a `try` with a matching handler or list the exception in its `throws` clause ✅
- B. The method must both catch the exception and list it in a `throws` clause
- C. The exception must be converted to a runtime exception
- D. Nothing; the requirement applies only to unchecked exceptions

**Answer:** A

**Explanation:** Checked exceptions are subject to the Catch or Specify Requirement: handle it with `try`/`catch`, or declare it with `throws`. Unchecked exceptions are not required to follow it.

### W1.5-08 · MCQ

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** throw vs throws · **Source:** W1.5e · **Basis:** bold

**Question:** Which line correctly throws an exception from inside a method body?

- A. `throws new EmptyStackException();`
- B. `throw new EmptyStackException();` ✅
- C. `throw EmptyStackException;`
- D. `catch new EmptyStackException();`

**Answer:** B

**Explanation:** The `throw` statement requires a throwable object. `throws` is the clause in a method signature that specifies exceptions the method may throw.

### W1.5-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** AB3 checked and unchecked · **Source:** W1.5c · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/exceptions/CommandException.java`, `src/main/java/seedu/address/model/person/exceptions/DuplicatePersonException.java`

**Question:** In AB3, `CommandException extends Exception` and `DuplicatePersonException extends RuntimeException`. What follows from these declarations?

- A. Both must be declared in `throws` clauses
- B. `DuplicatePersonException` is checked and `CommandException` is unchecked
- C. `CommandException` is checked, so `Command#execute` declares `throws CommandException`; `DuplicatePersonException` is unchecked and need not be declared ✅
- D. Neither can be caught with a `catch` block

**Answer:** C

**Explanation:** All exceptions are checked except `Error`, `RuntimeException` and their subclasses. Checked exceptions fall under the Catch or Specify Requirement; unchecked ones do not.

### W1.5-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W1.5] Exception Handling · **Subtopic:** AB3 exception propagation · **Source:** W1.5d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/DeleteCommand.java`, `src/main/java/seedu/address/ui/MainWindow.java`

**Question:** In AB3, `DeleteCommand#execute` throws a `CommandException` for an invalid index, but the message is shown to the user by `MainWindow#executeCommand`, which has `catch (CommandException | ParseException e)`. Which benefit of exceptions does this show?

- A. Exceptions prevent invalid input from being typed
- B. Exceptions make the program terminate safely
- C. Exceptions remove the need for a `throws` clause
- D. The code that meets the problem need not know how to deal with it; the exception travels up the call stack to code that does ✅

**Answer:** D

**Explanation:** Code that encounters an exceptional situation can encapsulate the details in an exception object and throw it so that another piece of code — here in the UI — can catch it and deal with it.

## [W1.6] SE: Intro

### W1.6-01 · MCQ

**Type:** MCQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** What software engineering is · **Source:** W1.6a · **Basis:** bold

**Question:** Which description of software engineering matches the course's "simply put" version?

- A. Turning human needs into dependable software while dealing with real-world limits ✅
- B. Writing code as quickly as possible
- C. Managing programmers so that deadlines are met
- D. Proving programs correct mathematically

**Answer:** A

**Explanation:** Software engineering applies a systematic, disciplined, quantifiable approach to development, operation and maintenance — simply put, turning human needs into dependable software within limits such as time, money and people.

### W1.6-02 · MCQ

**Type:** MCQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** Origin of the term · **Source:** W1.6a · **Basis:** bold

**Question:** When did the term "software engineering" become well known?

- A. With the release of the first personal computers in the 1980s
- B. During the software crisis of the late 1960s ✅
- C. When agile methods appeared in the 2000s
- D. When large language models learned to write code

**Answer:** B

**Explanation:** As software grew, projects ran late, over budget or failed — the software crisis. A 1968 NATO conference used the title "software engineering" to express the hope of making software development systematic.

### W1.6-03 · MCQ

**Type:** MCQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** No silver bullet · **Source:** W1.6a · **Basis:** bold

**Question:** In "No Silver Bullet" (1986), why did Brooks predict that no single breakthrough would transform software development within ten years?

- A. Because computers were not fast enough
- B. Because programmers resist new tools
- C. Because most of the remaining difficulty is essential complexity that comes from the problem itself, not from imperfect tools ✅
- D. Because software projects are always under-funded

**Answer:** C

**Explanation:** Brooks separated accidental complexity (from imperfect tools) from essential complexity (from the problem being solved) and argued the latter is most of the remaining work, so no single tool could give a tenfold improvement.

### W1.6-04 · MRQ

**Type:** MRQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** Scope of software engineering · **Source:** W1.6a · **Basis:** bold

**Question:** Which statements about software engineering today are consistent with the course? (Select all that apply.)

- A. It covers the whole life of a system, not only writing its code ✅
- B. Success is measured by the value delivered, not the amount of code written ✅
- C. Generating code faster automatically produces better software
- D. AI amplifies both the strengths and the weaknesses of the engineering process around it ✅

**Answer:** A, B, D

**Explanation:** SE spans studying needs, designing, building, testing, deploying and improving. Faster generation does not automatically mean better software; teams with clear goals, good tests and reviews benefit, while others may just create defects sooner.

### W1.6-05 · MCQ

**Type:** MCQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** Fundamentals and AI · **Source:** W1.6a · **Basis:** bold

**Question:** What does the course conclude about software engineering fundamentals as AI takes on more implementation work?

- A. They matter less, because AI writes most of the code
- B. They matter only for teams that do not use AI
- C. They will be replaced by natural-language prompts
- D. They matter more, because engineers must understand the work to direct, evaluate or fix it ✅

**Answer:** D

**Explanation:** AI makes fundamentals more important, not less: deciding, designing, checking and taking responsibility become more valuable, and AI cannot take responsibility for the released system.

### W1.6-06 · MCQ

**Type:** MCQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** AI-native software engineering · **Source:** W1.6a · **Basis:** bold

**Question:** Which description matches "AI-native software engineering"?

- A. Redesigning the workflow itself for ongoing collaboration between humans and AI ✅
- B. Humans handing AI multi-step tasks within today's workflow
- C. Using an AI assistant for code completion inside the existing process
- D. Letting AI release software without human involvement

**Answer:** A

**Explanation:** AI-assisted SE has AI working inside a human-directed process; agentic SE gives AI multi-step tasks; AI-native SE redesigns the process for human–AI collaboration, with humans still setting direction and deciding what is safe to release.

### W1.6-07 · MCQ

**Type:** MCQ · **Topic:** [W1.6] SE: Intro · **Subtopic:** Brooks's law · **Source:** W1.6a · **Basis:** bold

**Question:** What is the main idea of The Mythical Man-Month, known as Brooks's law?

- A. The second version of a system is always better than the first
- B. Adding manpower to a late software project makes it later ✅
- C. Software cost doubles every eighteen months
- D. No project should exceed ten developers

**Answer:** B

**Explanation:** Brooks's law states that adding manpower to a late software project makes it later. The book also warns about over-complex second systems and recommends prototyping.

---

# Week 2

## [W2.1] SDLC Process Models: Basics

### W2.1-01 · MCQ

**Type:** MCQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** Code-and-fix · **Source:** W2.1a · **Basis:** bold

**Question:** A solo developer writes a small script over a weekend by coding straight away and fixing whatever breaks, with no explicit stages. What does the course say about this approach?

- A. It is a sequential model with very short stages
- B. It is never acceptable, even for small programs
- C. It is code-and-fix: fine for small, short, one-person work, but it stops working as the software and the team grow ✅
- D. It is an iterative model with one iteration

**Answer:** C

**Explanation:** Code-and-fix has no explicit stages and no overhead, which is adequate for a small program by one person. As software and team grow there is no way to track progress, divide work or record decisions.

### W2.1-02 · MRQ

**Type:** MRQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** SDLC · **Source:** W2.1a · **Basis:** bold

**Question:** Which statements about the software development lifecycle (SDLC) are correct? (Select all that apply.)

- A. Stages such as requirements, analysis, design, implementation and testing are collectively known as the SDLC ✅
- B. The lifecycle ends when the product reaches its users
- C. Deployment, operation and maintenance are commonly counted as lifecycle activities ✅
- D. What happens after release, such as defect reports and feature requests, feeds back into development ✅

**Answer:** A, C, D

**Explanation:** Reaching users is not the end of the lifecycle; deployment, operation and maintenance count too, and what happens then becomes input to later work.

### W2.1-03 · MRQ

**Type:** MRQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** Sequential model · **Source:** W2.1b · **Basis:** bold

**Question:** Which statements describe the sequential (waterfall) model? (Select all that apply.)

- A. It views software development as a linear process ✅
- B. Each completed stage produces artifacts used by the next stage ✅
- C. A strict version moves only in the forward direction ✅
- D. It delivers a working product at the end of every stage
- E. Feedback from integration and real users tends to arrive late ✅

**Answer:** A, B, C, E

**Explanation:** The waterfall model goes through the stages in order, passing artifacts forward; strictly, it never goes back. Because each stage's output is checked mainly by the next stage, feedback arrives late. A working product appears only near the end.

### W2.1-04 · MCQ

**Type:** MCQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** When the sequential model fits · **Source:** W2.1b · **Basis:** bold

**Question:** For which project is the sequential model most likely to work well?

- A. A product for users who have never used anything similar and cannot yet state what they need
- B. A project built on an unproven technology
- C. A project where early user feedback is essential
- D. A project solving a well-understood problem with stable requirements ✅

**Answer:** D

**Explanation:** The sequential model can work well when the problem is well understood, since requirements stay stable and effort can be estimated accurately. Real-world projects that are not well understood at the start are unsuitable for it.

### W2.1-05 · MCQ

**Type:** MCQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** How the models divide a project · **Source:** W2.1c · **Basis:** bold

**Question:** How do the sequential and iterative models differ in the way they divide a project?

- A. Sequential divides by activity; iterative divides into bounded cycles that each run through several activities ✅
- B. Sequential divides by team; iterative divides by feature
- C. Sequential divides into cycles; iterative divides by activity
- D. Both divide by activity, but iterative has shorter stages

**Answer:** A

**Explanation:** A sequential stage (e.g. 'testing') ends when that activity is finished for the whole product. An iteration is a bounded cycle that runs through several activities and ends in a result the team can learn from.

### W2.1-06 · MCQ

**Type:** MCQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** Breadth-first vs depth-first · **Source:** W2.1c · **Basis:** bold

**Question:** A team building a Minesweeper game spends its first iteration producing the complete, polished UI with no game logic behind it. Which approach is this, and what is its consequence?

- A. Breadth-first; a working product exists after the iteration
- B. Depth-first; the iteration may not produce a working product ✅
- C. Breadth-first; all components evolve in parallel
- D. Depth-first; every feature is partially usable

**Answer:** B

**Explanation:** A depth-first iteration fleshes out only some components or functionality areas, so early iterations might not yield a working product. Breadth-first evolves all major components in parallel and yields a working product each iteration.

### W2.1-07 · MCQ

**Type:** MCQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** Iterating vs incrementing · **Source:** W2.1c · **Basis:** bold

**Question:** What is the difference between iterating and incrementing?

- A. They are two names for the same thing
- B. Iterating adds new functionality; incrementing fixes defects
- C. Iterating reworks something that already exists in light of feedback; incrementing adds to it ✅
- D. Iterating is done in sequential projects; incrementing in iterative ones

**Answer:** C

**Explanation:** To iterate is to rework what exists based on feedback; to increment is to add to it. Most projects do both, hence 'iterative and incremental'. What an iteration delivers — a usable improvement or addition — is called an increment.

### W2.1-08 · MCQ

**Type:** MCQ · **Topic:** [W2.1] SDLC Process Models: Basics · **Subtopic:** What belongs in early iterations · **Source:** W2.1c · **Basis:** bold

**Question:** A project depends on an unproven technology. According to the course, when should work that tests this assumption be scheduled, and why?

- A. In the last iteration, when the rest of the product is stable
- B. Whenever the team has spare time
- C. Never; risky assumptions should be removed from the project
- D. In an early iteration, because finding out you were wrong is cheapest while changing course is still cheap ✅

**Answer:** D

**Explanation:** An early iteration is a chance to find out you were wrong while changing course is still cheap, so the assumptions whose failure would cost the most belong early.

## [W2.4] IDEs: Basic Features

### W2.4-01 · MCQ

**Type:** MCQ · **Topic:** [W2.4] IDEs: Basic Features · **Subtopic:** IDEs · **Source:** W2.4a · **Basis:** bold

**Question:** Why are Integrated Development Environments called "integrated"?

- A. They support most development-related work, such as editing, building and debugging, within the same tool ✅
- B. They can only be used with integrated build servers
- C. They integrate the work of several developers into one code base
- D. They integrate the program with the operating system at run time

**Answer:** A

**Explanation:** IDEs support most development-related work within one tool: a source code editor, compiler/interpreter with build automation support, a debugger and other tools.

### W2.4-02 · MRQ

**Type:** MRQ · **Topic:** [W2.4] IDEs: Basic Features · **Subtopic:** IDE features · **Source:** W2.4a · **Basis:** body

**Question:** Which of these are features commonly available in IDEs? (Select all that apply.)

- A. Syntax error highlighting ✅
- B. Debugging by executing the program one step at a time ✅
- C. Code navigation and auto-completion ✅
- D. Support for automated testing and version management ✅

**Answer:** A, B, C, D

**Explanation:** IDEs typically provide an editor with highlighting, completion and navigation, build support, a debugger, and further tools such as testing and version management support. Not every IDE has every feature, but most have them in some form.

## [W2.5] Intro to Automated Testing

### W2.5-01 · MCQ

**Type:** MCQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** Test cases · **Source:** W2.5a · **Basis:** bold

**Question:** At a minimum, what does a test case specify?

- A. The name of the tester and the date of the test
- B. The input to the software under test and the expected behavior ✅
- C. The code that fixes the defect being tested
- D. The number of defects the test should find

**Answer:** B

**Explanation:** A test case specifies how to perform a test; at a minimum it gives the input to the SUT and the expected behavior. Identifiers, names and objectives are optional extras.

### W2.5-02 · MCQ

**Type:** MCQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** Test case failure · **Source:** W2.5a · **Basis:** bold

**Question:** A test case fails. Why does the course say this indicates only a *potential* defect in the software under test?

- A. Because failures are usually caused by hardware
- B. Because a defect exists only after a developer confirms it
- C. Because the mismatch could be due to an error in the test case itself ✅
- D. Because the software may still pass other test cases

**Answer:** C

**Explanation:** A test case failure is a mismatch between expected and actual behavior. It points to a potential defect, since the test case — for example its expected output — could be the thing that is wrong.

### W2.5-03 · MRQ

**Type:** MRQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** Sources of test cases · **Source:** W2.5a · **Basis:** bold

**Question:** According to the course, on what can test cases be based? (Select all that apply.)

- A. The specification ✅
- B. Reviewing similar existing systems ✅
- C. Comparing to the past behavior of the SUT ✅
- D. The number of developers on the team

**Answer:** A, B, C

**Explanation:** Test cases can be determined from the specification, from similar existing systems, or by comparison with the SUT's past behavior.

### W2.5-04 · MCQ

**Type:** MCQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** Regression testing · **Source:** W2.5b · **Basis:** bold

**Question:** "Regression testing is the automated re-testing of software after it has been modified." How accurate is this statement?

- A. Fully accurate
- B. Inaccurate: regression testing checks only the modified lines
- C. Inaccurate: regression testing is done before modification
- D. Partially accurate: regression testing need not be automated, although automation makes it more practical ✅

**Answer:** D

**Explanation:** Regression testing is re-testing to detect regressions — unintended, undesirable effects of a modification. It is more effective when done frequently, which is more practical when automated, but it does not have to be automated.

### W2.5-05 · MCQ

**Type:** MCQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** Automated test cases · **Source:** W2.5c · **Basis:** bold

**Question:** What makes a test case 'automated'?

- A. It can be run programmatically and its pass/fail result is determined programmatically ✅
- B. It runs every time the developer saves a file
- C. It is written by a tool rather than a person
- D. It needs no expected output

**Answer:** A

**Explanation:** An automated test case is both executed and judged by a program, which cuts the effort of repeated runs and avoids the human error manual testing is prone to.

### W2.5-06 · MCQ

**Type:** MCQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** I/O redirection · **Source:** W2.5d · **Basis:** bold

**Question:** A CLI app is tested with the command below, followed by comparing `output.txt` with `expected.txt`. Which statement is correct?
```
java AddressBook < input.txt > output.txt
```

- A. `<` sends the program's output to `input.txt`
- B. `<` feeds `input.txt` to the app as if typed by the user, and `>` writes the app's output to `output.txt` ✅
- C. The app's code must be changed to read from files
- D. The command compares the two files automatically

**Answer:** B

**Explanation:** Input/output redirection semi-automates CLI testing with no change to the app: `<` redirects a file as input and `>` redirects output to a file. The comparison with the expected output is a separate step using a diff tool.

### W2.5-07 · MCQ

**Type:** MCQ · **Topic:** [W2.5] Intro to Automated Testing · **Subtopic:** Limits of I/O redirection · **Source:** W2.5d · **Basis:** body

**Question:** In which case will testing by input/output redirection and file comparison NOT work?

- A. The app reads several lines of input
- B. The expected output is long
- C. The app's output contains the current time ✅
- D. The app is written in Python

**Answer:** C

**Explanation:** The technique suits CLI apps whose exact output can be predetermined. If the output varies from run to run, such as with a time stamp, the comparison fails and more sophisticated automation is needed.

---

# Week 3

## [W3.3] Automating the Build Process

### W3.3-01 · MCQ

**Type:** MCQ · **Topic:** [W3.3] Automating the Build Process · **Subtopic:** Integration · **Source:** W3.3a · **Basis:** bold

**Question:** What is 'integration' in software development?

- A. Converting source code into machine code
- B. Installing the product on the user's machine
- C. Merging two companies' development teams
- D. Combining parts of a software product to form a whole ✅

**Answer:** D

**Explanation:** Combining parts of a product to form a whole is called integration — and it is one of the more troublesome tasks, as it rarely goes smoothly.

### W3.3-02 · MRQ

**Type:** MRQ · **Topic:** [W3.3] Automating the Build Process · **Subtopic:** Build automation · **Source:** W3.3b · **Basis:** bold

**Question:** Which statements about build automation tools are correct? (Select all that apply.)

- A. They automate the steps of the build process, usually by means of build scripts ✅
- B. Some of them also serve as dependency management tools ✅
- C. Gradle and Maven are examples for Java ✅
- D. They are needed only when a project has no automated tests

**Answer:** A, B, C

**Explanation:** Build tools such as Gradle, Maven, Ant and Make automate steps like compiling, testing and packaging via build scripts; Maven and Gradle also manage third-party dependencies. Running automated tests is typically one of the build steps.

### W3.3-03 · MCQ

**Type:** MCQ · **Topic:** [W3.3] Automating the Build Process · **Subtopic:** CI vs CD · **Source:** W3.3c · **Basis:** bold

**Question:** What does continuous deployment (CD) add to continuous integration (CI)?

- A. Changes are also deployed to end users, not only integrated, built and tested ✅
- B. Automatic running of tests after each change
- C. Automatic compilation after each change
- D. Manual approval of each change by a tester

**Answer:** A

**Explanation:** In CI, integration, building and testing happen automatically after each code change. CD is the natural extension where changes are also deployed to end users at the same time.

### W3.3-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.3] Automating the Build Process · **Subtopic:** AB3 continuous integration · **Source:** W3.3c · **Basis:** bold · **AB3:** `.github/workflows/gradle.yml`

**Question:** AB3's repository contains `.github/workflows/gradle.yml`, which runs `./gradlew check coverage` on every push and pull request. Which practice is this an example of?

- A. Continuous deployment, because the app is released to users on every push
- B. Continuous integration, because building and testing happen automatically after each code change ✅
- C. Dependency management, because Gradle downloads libraries
- D. Manual regression testing

**Answer:** B

**Explanation:** CI is the application of build automation in which integration, building and testing happen automatically after each change. The workflow does not deliver the app to end users, so it is not CD.

### W3.3-05 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.3] Automating the Build Process · **Subtopic:** AB3 Gradle · **Source:** W3.3b · **Basis:** bold · **AB3:** `build.gradle`

**Question:** AB3's `build.gradle` lists JUnit and Jackson libraries under `dependencies { … }` as well as defining tasks such as running tests and building the JAR. Which statement about Gradle does this illustrate?

- A. Gradle is only a compiler
- B. Gradle replaces the need for revision control
- C. Gradle is a build automation tool that also serves as a dependency management tool ✅
- D. Gradle is a continuous deployment service

**Answer:** C

**Explanation:** Build automation tools automate build steps through build scripts, and some — including Gradle and Maven — also fetch the correct versions of third-party libraries the project depends on.

## [W3.4] Java: JavaDoc, file I/O, packages, JARs

### W3.4-01 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** JavaDoc · **Source:** W3.4a · **Basis:** bold

**Question:** What is JavaDoc?

- A. A Java library for reading documents
- B. A tool that checks that code matches its comments
- C. A coding standard for writing Java comments
- D. A tool that generates API documentation in HTML format from comments in the source code ✅

**Answer:** D

**Explanation:** JavaDoc generates HTML API documentation from specially formatted comments (`/** … */`); modern IDEs also use these comments for tooltips.

### W3.4-02 · MRQ

**Type:** MRQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** JavaDoc comments · **Source:** W3.4b · **Basis:** bold

**Question:** Which elements appear in the course's minimal JavaDoc comment for a method? (Select all that apply.)

- A. A summary sentence describing what the method does ✅
- B. `@param` tags for the parameters ✅
- C. A `@return` tag for the returned value ✅
- D. A `@date` tag giving when the method was written

**Answer:** A, B, C

**Explanation:** The minimal method comment starts with a summary, followed by `@param`, `@return` and, where relevant, `@throws` tags. There is no date tag in the example.

### W3.4-03 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** FileWriter · **Source:** W3.4c · **Basis:** bold

**Question:** What does `new FileWriter(filePath, true)` do differently from `new FileWriter(filePath)`?

- A. It appends to the file instead of overwriting its current content ✅
- B. It writes binary data instead of text
- C. It creates the file only if it does not already exist
- D. It closes the file automatically after each write

**Answer:** A

**Explanation:** A `FileWriter` overwrites by default; passing `true` as the additional boolean parameter makes it append. In both cases `close()` must be called for the writing to be completed.

### W3.4-04 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** Reading and representing files · **Source:** W3.4c · **Basis:** bold

**Question:** Which pairing of class and purpose matches the course material?

- A. `java.io.File` — reads the lines of a file one at a time
- B. `java.nio.file.Files` — a utility class offering file operations such as copy and delete ✅
- C. `Scanner` — copies and deletes files
- D. `FileWriter` — checks whether a file exists

**Answer:** B

**Explanation:** `File` represents a file object and its properties, a `Scanner` with a `File` source reads content, `FileWriter` writes, and `Files` (with `Paths`) is a utility class for operations such as copying and deleting.

### W3.4-05 · MRQ

**Type:** MRQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** Packages · **Source:** W3.4d · **Basis:** bold

**Question:** Which statements about Java packages are correct? (Select all that apply.)

- A. The package statement goes at the very top of every source file in the package ✅
- B. The package of a type should match the folder path of its source file ✅
- C. Package names are written in all lower case ✅
- D. Importing a package also imports its sub-packages
- E. A static import lets static members be used without the type name ✅

**Answer:** A, B, C, E

**Explanation:** Packages need a package statement first in each file, match the folder structure, and use lower-case names. Packages do not behave as hierarchies: `import a.b.*` does not import classes in `a.b.c`.

### W3.4-06 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** Using package members · **Source:** W3.4d · **Basis:** bold

**Question:** Class `Main` in package `seedu.tojava` needs the public class `Processor` from package `seedu.tojava.logic`, without adding any `import` statement. What can it do?

- A. Nothing; an import is mandatory
- B. Refer to it as `logic.Processor`
- C. Refer to it by its fully qualified name, `seedu.tojava.logic.Processor` ✅
- D. Move `Main` into the default package

**Answer:** C

**Explanation:** To use a public package member from outside its package you either use its fully qualified name or import the member or its package.

### W3.4-07 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** Access modifiers · **Source:** W3.4e · **Basis:** bold

**Question:** A member is declared `protected`. From where can it be accessed?

- A. Only within its own class
- B. Only within its own package
- C. From any class anywhere
- D. Within its own package and, in addition, by subclasses of its class in other packages ✅

**Answer:** D

**Explanation:** `private` limits access to the class; no modifier (package-private) to the package; `protected` to the package plus subclasses in other packages; `public` to everywhere.

### W3.4-08 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** Class-level access · **Source:** W3.4e · **Basis:** bold

**Question:** A top-level class is declared without any access modifier. Which classes can see it?

- A. Only classes within its own package ✅
- B. All classes everywhere
- C. Only its subclasses
- D. Only itself

**Answer:** A

**Explanation:** At the class level, `public` makes the class visible everywhere; no modifier (package-private, the default) makes it visible only within its own package.

### W3.4-09 · MCQ

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** JAR files · **Source:** W3.4f · **Basis:** bold

**Question:** How are Java applications typically delivered, and how is such a file launched?

- A. As `.class` files, launched with `javac`
- B. As JAR files, with an executable JAR launched using `java -jar foo.jar` ✅
- C. As `.java` files, launched with `java`
- D. As ZIP files, launched by double-clicking the source folder

**Answer:** B

**Explanation:** Java applications are typically delivered as JAR (Java Archive) files containing classes and other resources; an executable JAR is run with `java -jar`.

### W3.4-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** AB3 packages · **Source:** W3.4d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/AddCommand.java`

**Question:** AB3's `AddCommand.java` is stored at `src/main/java/seedu/address/logic/commands/AddCommand.java`. What must its package statement be, and why?

- A. `package commands;` — only the last folder counts
- B. `package src.main.java.seedu.address.logic.commands;` — the full path from the project root
- C. `package seedu.address.logic.commands;` — the package should match the folder path under the source root ✅
- D. No package statement is needed for classes in sub-folders

**Answer:** C

**Explanation:** The package of a type should match the folder path of the source file relative to the source folder, written in lower case with dots as separators.

### W3.4-11 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.4] Java: JavaDoc, file I/O, packages, JARs · **Subtopic:** AB3 static imports · **Source:** W3.4d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/person/Name.java`

**Question:** AB3's `Name.java` contains `import static java.util.Objects.requireNonNull;` and then calls `requireNonNull(name);`. What does the static import achieve?

- A. It makes `Objects` a superclass of `Name`
- B. It copies the method into the `Name` class at compile time
- C. It imports every class in `java.util`
- D. It lets the static method be used without writing the type name `Objects` ✅

**Answer:** D

**Explanation:** A static import imports static members of a type so that they can be used without specifying the type name.

## [W3.5] Code Quality: Coding Standards

### W3.5-01 · MCQ

**Type:** MCQ · **Topic:** [W3.5] Code Quality: Coding Standards · **Subtopic:** Aim of a coding standard · **Source:** W3.5b · **Basis:** bold

**Question:** What is the aim of a coding standard?

- A. To make the entire code base look as if it was written by one person ✅
- B. To let each developer keep a recognisable personal style
- C. To make the code run faster
- D. To reduce the number of comments needed

**Answer:** A

**Explanation:** Following a consistent style is an essential way to improve code quality; a coding standard (style guide) aims to make the whole code base look like one person's work.

### W3.5-02 · MCQ

**Type:** MCQ · **Topic:** [W3.5] Code Quality: Coding Standards · **Subtopic:** Choosing a standard · **Source:** W3.5b · **Basis:** body

**Question:** You join an existing project. What is the recommended approach to coding standards?

- A. Use the style you are most productive with
- B. Find out the coding standard the project currently uses and follow it closely ✅
- C. Propose a new standard that follows your previous company's practice
- D. Follow no standard until the code is reviewed

**Answer:** B

**Explanation:** The whole team should use the same standard, so a newcomer should adopt the one already in use rather than an individual style.

### W3.5-03 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.5] Code Quality: Coding Standards · **Subtopic:** AB3 Checkstyle · **Source:** W3.5b · **Basis:** bold · **AB3:** `config/checkstyle/checkstyle.xml`, `build.gradle`

**Question:** AB3 applies the `checkstyle` Gradle plugin with rules in `config/checkstyle/checkstyle.xml`, and the rules are run as part of the build's checks. What is the purpose of this setup in terms of code quality?

- A. To measure how much of the code is covered by tests
- B. To generate API documentation
- C. To enforce a consistent coding standard across all contributors automatically ✅
- D. To optimise the compiled code

**Answer:** C

**Explanation:** Checkstyle checks the code against the project's style rules, helping the team follow a strict coding standard so the code base looks as if written by one person.

## [W3.6] Developer Testing

### W3.6-01 · MCQ

**Type:** MCQ · **Topic:** [W3.6] Developer Testing · **Subtopic:** Developer testing · **Source:** W3.6a · **Basis:** bold

**Question:** What is developer testing?

- A. Testing that checks whether developers follow the coding standard
- B. Testing performed only after the product is released
- C. Testing of development tools such as compilers
- D. Testing done by the developers themselves, as opposed to dedicated testers or end-users ✅

**Answer:** D

**Explanation:** Developer testing is the testing done by the developers themselves; it enables early testing.

### W3.6-02 · MRQ

**Type:** MRQ · **Topic:** [W3.6] Developer Testing · **Subtopic:** Delaying testing · **Source:** W3.6b · **Basis:** bold

**Question:** Which are disadvantages of delaying testing until the full product is complete? (Select all that apply.)

- A. Locating the cause of a failure is difficult because the search space is larger ✅
- B. Fixing a bug found then could result in major rework ✅
- C. One bug might hide other bugs ✅
- D. The delivery may have to be delayed ✅

**Answer:** A, B, C, D

**Explanation:** All four are listed by the course, which is why early testing is preferred: the earlier a bug is found, the easier and cheaper it is to fix.

### W3.6-03 · MCQ

**Type:** MCQ · **Topic:** [W3.6] Developer Testing · **Subtopic:** Cost of fixing bugs · **Source:** W3.6b · **Basis:** bold

**Question:** How does the cost of fixing a bug change as a project moves towards release?

- A. It goes up: the earlier a bug is found, the easier and cheaper it is to fix ✅
- B. It stays about the same
- C. It goes down, because the code is better understood
- D. It depends only on who finds the bug

**Answer:** A

**Explanation:** The rule of thumb is that earlier is cheaper, since late-found bugs can require major rework, especially if they stem from design or requirements.

## [W3.7] Unit Testing

### W3.7-01 · MCQ

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** Test drivers · **Source:** W3.7a · **Basis:** bold

**Question:** What is a test driver?

- A. A person who leads the testing team
- B. Code that 'drives' the SUT by invoking it with test inputs and verifying that the behavior is as expected ✅
- C. A stub that replaces a dependency
- D. A tool that measures test coverage

**Answer:** B

**Explanation:** A test driver is the code that exercises the software under test for the purpose of testing; JUnit is a tool for automating such tests in Java.

### W3.7-02 · MCQ

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** Unit testing · **Source:** W3.7c · **Basis:** bold

**Question:** What is unit testing?

- A. Testing the whole system against the requirements
- B. Testing whether units integrate correctly with each other
- C. Testing individual units such as methods or classes to ensure each piece works correctly ✅
- D. Testing by end users in their own environment

**Answer:** C

**Explanation:** Unit testing targets individual units (methods, classes, subsystems) in isolation.

### W3.7-03 · MCQ

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** JUnit test naming · **Source:** W3.7d · **Basis:** body

**Question:** A JUnit test method is named `intDivision_zeroDivisor_exceptionThrown`. What do the three parts stand for?

- A. Test class, test number, tester
- B. Setup, action, cleanup
- C. Package, class, method
- D. Unit being tested, description of the test inputs, expected outcome ✅

**Answer:** D

**Explanation:** Test methods sometimes follow the convention `unitBeingTested_descriptionOfTestInputs_expectedOutcome` instead of plain camelCase.

### W3.7-04 · MCQ

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** Checking for exceptions · **Source:** W3.7d · **Basis:** body

**Question:** In the test below, what is the role of `fail()`?
```
try {
    new IntPair(1, 0).intDivision();
    fail();
} catch (Exception e) {
    assertEquals("Divisor is zero", e.getMessage());
}
```

- A. It makes the test fail if the call did not throw an exception ✅
- B. It rethrows the exception to JUnit
- C. It marks the test as skipped
- D. It resets the object for the next test

**Answer:** A

**Explanation:** `fail()` sits right after the call that should throw. If execution reaches it, no exception was thrown, so the test fails; otherwise control jumps to the `catch` block, which verifies the message.

### W3.7-05 · MCQ

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** Why stubs · **Source:** W3.7e · **Basis:** bold

**Question:** `Logic` depends on `Storage`. A test creates `new Logic(new DatabaseStorage())` and checks `Logic`'s output. Why is this not a proper unit test of `Logic`?

- A. Because `Logic` has a constructor parameter
- B. Because a bug in `DatabaseStorage` could affect the result, so `Logic` is not tested in isolation ✅
- C. Because the test uses assertions
- D. Because unit tests may not create objects

**Answer:** B

**Explanation:** A proper unit test requires the unit to be tested in isolation from its dependencies. Replacing `DatabaseStorage` with a stub removes the influence of bugs outside the unit.

### W3.7-06 · MRQ

**Type:** MRQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** Stubs · **Source:** W3.7e · **Basis:** bold

**Question:** Which statements about a stub are correct? (Select all that apply.)

- A. It has the same interface as the component it replaces ✅
- B. Its implementation is so simple that it is unlikely to have bugs ✅
- C. It mimics responses only for a limited set of predetermined inputs ✅
- D. It computes its responses by querying the real database
- E. Its responses are typically hard-coded ✅

**Answer:** A, B, C, E

**Explanation:** A stub shares the interface of the real component but has a trivial implementation that returns hard-coded responses for a few predetermined inputs, rather than computing or retrieving them.

### W3.7-07 · MCQ

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** JUnit lifecycle · **Source:** W3.7f · **Basis:** body

**Question:** In JUnit 5, which annotation marks a method that should run before every test method in the class?

- A. `@BeforeAll`
- B. `@Disabled`
- C. `@BeforeEach` ✅
- D. `@Tag`

**Answer:** C

**Explanation:** `@BeforeEach` runs before each test method and `@BeforeAll` once for the class. `@Disabled` switches a test off temporarily and `@Tag` labels tests.

### W3.7-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** AB3 model stub · **Source:** W3.7e · **Basis:** bold · **AB3:** `src/test/java/seedu/address/logic/commands/AddCommandTest.java`

**Question:** AB3's `AddCommandTest` defines a private class `ModelStub implements Model` whose methods all throw `AssertionError`, with small subclasses that override only what a test needs, and passes these to `AddCommand#execute` instead of a `ModelManager`. What is the purpose?

- A. To make the tests run in parallel
- B. To test `ModelManager` more thoroughly
- C. To avoid writing assertions
- D. To test `AddCommand` in isolation from the real Model implementation ✅

**Answer:** D

**Explanation:** Stubs isolate the SUT from its dependencies. Because the stub has the same interface (`Model`), it can be substituted for the real component so bugs in `ModelManager` cannot affect the `AddCommand` unit test.

### W3.7-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W3.7] Unit Testing · **Subtopic:** AB3 test naming · **Source:** W3.7c, W3.7d · **Basis:** body · **AB3:** `src/test/java/seedu/address/logic/commands/DeleteCommandTest.java`

**Question:** `DeleteCommandTest` in AB3 has a test method named `execute_invalidIndexUnfilteredList_throwsCommandException`. What does this name tell you?

- A. It tests `execute` with an invalid index on an unfiltered list and expects a `CommandException` ✅
- B. The test is disabled until the index bug is fixed
- C. It tests three different methods in one test
- D. It is an integration test of the UI

**Answer:** A

**Explanation:** The name follows the `unitBeingTested_descriptionOfTestInputs_expectedOutcome` convention, and the `FooTest` class naming for the class `Foo` under test.

---

# Week 4

## [W4.1] Design: Models

### W4.1-01 · MRQ

**Type:** MRQ · **Topic:** [W4.1] Design: Models · **Subtopic:** Models · **Source:** W4.1a · **Basis:** bold

**Question:** Which statements about models are correct? (Select all that apply.)

- A. A model is a representation of something else ✅
- B. A model gives a simpler view of a complex entity because it captures only a selected aspect ✅
- C. Multiple models of the same entity may be needed to capture it fully ✅
- D. A good model captures every aspect of the entity it represents

**Answer:** A, B, C

**Explanation:** Models are abstractions: each omits some aspects, which is why several models may be needed. A class diagram, for instance, captures structure but not behavior.

### W4.1-02 · MCQ

**Type:** MCQ · **Topic:** [W4.1] Design: Models · **Subtopic:** Data vs control abstraction · **Source:** W4.1a · **Basis:** bold

**Question:** Working with a `File` object without thinking about the arrays and bits underneath is an example of which kind of abstraction?

- A. Control abstraction
- B. Data abstraction ✅
- C. Procedural abstraction
- D. Behavioral abstraction

**Answer:** B

**Explanation:** Data abstraction abstracts away lower-level data items to think in terms of bigger entities. Control abstraction hides the details of control flow to focus on higher-level tasks.

### W4.1-03 · MRQ

**Type:** MRQ · **Topic:** [W4.1] Design: Models · **Subtopic:** Uses of models · **Source:** W4.1b · **Basis:** bold

**Question:** In which ways are models useful in software development, according to the course? (Select all that apply.)

- A. To analyze a complex entity related to software development ✅
- B. To communicate information among stakeholders ✅
- C. As a blueprint for creating software ✅
- D. To replace testing of the final product

**Answer:** A, B, C

**Explanation:** Models help to analyze, to communicate and to serve as blueprints. They are not described as a substitute for testing.

### W4.1-04 · MCQ

**Type:** MCQ · **Topic:** [W4.1] Design: Models · **Subtopic:** Model-driven development · **Source:** W4.1b · **Basis:** panel

**Question:** What characterises model-driven development (MDD)?

- A. Models are drawn after coding, purely as documentation
- B. Models are used only to communicate with customers
- C. Models are the primary engineering artifacts: the system is first created as models, which are then converted to code ✅
- D. Code is written first and models are generated from it automatically

**Answer:** C

**Explanation:** MDD strives to exploit models as blueprints, creating the system as models and converting them to code through code generation.

### W4.1-05 · MCQ

**Type:** MCQ · **Topic:** [W4.1] Design: Models · **Subtopic:** UML · **Source:** W4.1c · **Basis:** bold

**Question:** What is the Unified Modeling Language (UML)?

- A. A programming language for generating models
- B. A process for gathering requirements
- C. A tool for drawing diagrams
- D. A graphical notation to describe various aspects of a software system ✅

**Answer:** D

**Explanation:** UML is a graphical notation, unified from the earlier notations of Rumbaugh, Booch and Jacobson; it is not a language you execute, a process, or a specific tool.

### W4.1-06 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.1] Design: Models · **Subtopic:** AB3 multiple models · **Source:** W4.1a · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** The AB3 Developer Guide shows an architecture diagram, a separate (partial) class diagram for each component, and sequence diagrams for specific commands. Which point about models does this best illustrate?

- A. Multiple models of the same entity may be needed, each capturing a selected aspect ✅
- B. Models are useful only as blueprints for code generation
- C. A single model should capture every aspect of a system
- D. Class diagrams can show behavior as well as structure

**Answer:** A

**Explanation:** Each diagram captures one aspect — high-level structure, a component's class structure, or behavior over time — and omits the rest, which is what makes them abstractions.

## [W4.2] Class/Object Diagrams: Basics

### W4.2-01 · MCQ

**Type:** MCQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** Object vs class structures · **Source:** W4.2a · **Basis:** bold

**Question:** Which pairing is correct?

- A. Object diagrams model class structures; class diagrams model object structures
- B. Object diagrams model object structures; class diagrams model class structures ✅
- C. Both model object structures at different times
- D. Both model class structures at different levels of detail

**Answer:** B

**Explanation:** An OO solution is a network of objects whose structure can change over time, following rules that can be illustrated as a class structure. UML object diagrams model the former, class diagrams the latter.

### W4.2-02 · MCQ

**Type:** MCQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** Associations · **Source:** W4.2b · **Basis:** bold

**Question:** In a class diagram, what are the main connections among classes, and how is the most basic one drawn?

- A. Dependencies, drawn as dashed arrows
- B. Inheritance, drawn as a triangle
- C. Associations, drawn as solid lines between the classes ✅
- D. Notes, drawn as boxes with a folded corner

**Answer:** C

**Explanation:** Classes form the basis of class diagrams and associations are the main connections among them; the most basic class diagram is classes with solid lines between them.

### W4.2-03 · MRQ

**Type:** MRQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** Association decorations · **Source:** W4.2b · **Basis:** bold

**Question:** Which of these are decorations that can be added to an association in a class diagram? (Select all that apply.)

- A. Association label ✅
- B. Association role ✅
- C. Multiplicity ✅
- D. Navigability ✅

**Answer:** A, B, C, D

**Explanation:** Associations can show labels, roles, multiplicity and navigability to add more information.

### W4.2-04 · MRQ

**Type:** MRQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** Object diagram notation · **Source:** W4.2d · **Basis:** body

**Question:** How does an object diagram differ from a class diagram in notation? (Select all that apply.)

- A. Instance and class names are underlined, with a colon before the class name ✅
- B. Methods are omitted ✅
- C. Multiplicities are omitted ✅
- D. Associations are drawn as dashed lines

**Answer:** A, B, C

**Explanation:** Object diagrams show objects such as `jake:Employee` underlined, and omit methods and multiplicities — each association line connects to exactly one object. Links are still solid lines.

### W4.2-05 · MCQ

**Type:** MCQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** One class diagram, many object diagrams · **Source:** W4.2d · **Basis:** bold

**Question:** Which statement about the relationship between class diagrams and object diagrams is correct?

- A. Each class diagram corresponds to exactly one object diagram
- B. An object diagram can violate the class diagram if it shows a later point in time
- C. An object diagram must show one object for every class in the class diagram
- D. Multiple object diagrams can correspond to a single class diagram ✅

**Answer:** D

**Explanation:** Each object diagram shows 'an instance of' the class diagram, and many different object structures can follow the same class structure.

### W4.2-06 · MCQ

**Type:** MCQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** Inheritance in object diagrams · **Source:** W4.2d · **Basis:** bold

**Question:** `Employee` is a child class of `Person`. An object diagram needs to show one employee, Jake. What should it show?

- A. A single object, shown either as `jake:Employee` or as `jake:Person` ✅
- B. Two linked objects, `jake:Person` and `jake:Employee`
- C. A triangle between a `Person` object and an `Employee` object
- D. Nothing; inherited classes cannot appear in object diagrams

**Answer:** A

**Explanation:** When the class diagram has inheritance, the object diagram shows an object of the parent class or the child class but not both, because there is only one object.

### W4.2-07 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** AB3 object diagrams · **Source:** W4.2d · **Basis:** body · **AB3:** `docs/diagrams/UndoRedoState0.puml`

**Question:** The AB3 Developer Guide illustrates the proposed undo/redo feature with a series of diagrams containing boxes labelled `ab0:AddressBook`, `ab1:AddressBook`, `ab2:AddressBook` (underlined). What do these boxes represent?

- A. Three subclasses of `AddressBook`
- B. Three `AddressBook` objects, drawn in object-diagram notation ✅
- C. Three components of the architecture
- D. Three methods of the `AddressBook` class

**Answer:** B

**Explanation:** Underlined `name:Class` is the notation for an object. The series shows how the object structure changes over time while the class structure stays the same.

### W4.2-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.2] Class/Object Diagrams: Basics · **Subtopic:** AB3 multiplicity · **Source:** W4.2b · **Basis:** bold · **AB3:** `docs/diagrams/UiClassDiagram.puml`

**Question:** In AB3's UI class diagram, the association from `MainWindow` to `HelpWindow` is marked `0..1`, while the one from `MainWindow` to `CommandBox` is marked `1`. What does this say?

- A. A `MainWindow` has several help windows but one command box
- B. `HelpWindow` is a subclass of `MainWindow`
- C. A `MainWindow` is linked to at most one `HelpWindow` (possibly none) and to exactly one `CommandBox` ✅
- D. `CommandBox` is optional and `HelpWindow` is compulsory

**Answer:** C

**Explanation:** These numbers are multiplicities, one of the decorations on an association: `0..1` means zero or one object, `1` means exactly one.

## [W4.3] Class Diagrams: Beyond Basics

### W4.3-01 · MCQ

**Type:** MCQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** Notes and constraints · **Source:** W4.3a, W4.3b · **Basis:** bold

**Question:** How can a constraint be shown in a UML diagram?

- A. As an underlined label on an association
- B. As a dashed arrow to the constrained class
- C. As a stereotype in `<< >>`
- D. Inside a note, within curly braces ✅

**Answer:** D

**Explanation:** UML notes augment diagrams with additional information; a constraint can be given inside a note within curly braces, in natural language or a formal notation such as OCL.

### W4.3-02 · MRQ

**Type:** MRQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** Relationships and class-like entities · **Source:** W4.3c · **Basis:** bold

**Question:** Besides associations, which relationships between classes can a class diagram show? (Select all that apply.)

- A. Inheritance ✅
- B. Composition ✅
- C. Aggregation ✅
- D. Dependency ✅

**Answer:** A, B, C, D

**Explanation:** A class diagram can show inheritance, compositions, aggregations and dependencies, as well as class-like entities such as enumerations, abstract classes and interfaces.

### W4.3-03 · MCQ

**Type:** MCQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** Reading multiplicities · **Source:** W4.3c · **Basis:** body

**Question:** In a class diagram, the `Board`–`Snake` association has multiplicity `3..5` at the `Snake` end. Which statement matches the diagram?

- A. A Board must have at least three and at most five Snakes ✅
- B. A Board can have any number of Snakes up to five
- C. A Board can have two Snakes
- D. A Snake can be on three to five Boards

**Answer:** A

**Explanation:** Multiplicities are read literally, including the lower bound: `3..5` excludes two. The number at the `Snake` end says how many Snakes one Board is linked to.

### W4.3-04 · MCQ

**Type:** MCQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** Association classes · **Source:** W4.3d · **Basis:** bold

**Question:** Which of these is a suitable association class for the association between `Driver` and `Car`?

- A. `Mileage` — the total distance the car has travelled
- B. `Rental` — the period for which that driver hired that car ✅
- C. `Licence` — the driver's licence details
- D. `Engine` — the engine fitted in the car

**Answer:** B

**Explanation:** An association class represents additional information about an association. The rental period belongs to the driver–car pairing, whereas total mileage and engine are properties of the car and the licence a property of the driver.

### W4.3-05 · MCQ

**Type:** MCQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** Implementing association classes · **Source:** W4.3d · **Basis:** body

**Question:** How is an association class implemented in code?

- A. With a special `association` keyword
- B. As an interface implemented by both associated classes
- C. As a normal class with variables referring to the two ends of the association ✅
- D. It cannot be implemented; it exists only in diagrams

**Answer:** C

**Explanation:** There is no special way to implement an association class: it is a normal class (e.g. `Transaction` with `seller`, `buyer` and `date`) that plays a special role from a design point of view.

### W4.3-06 · MCQ

**Type:** MCQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** Stereotypes · **Source:** W4.3f · **Basis:** bold

**Question:** What distinguishes `<<interface>>` from a stereotype such as `<<facade>>`, although both use the `<< >>` notation?

- A. `<<interface>>` can be applied only to associations
- B. There is no difference; both are optional labels
- C. `<<facade>>` is built into UML, while `<<interface>>` is user-defined
- D. Removing `<<interface>>` turns the element into a regular class, whereas removing a stereotype does not change the element's type ✅

**Answer:** D

**Explanation:** Stereotypes are a lightweight extension mechanism adding domain-specific meaning without changing the element. `<<interface>>` and `<<enumeration>>` are built-in classifier kinds that indicate the element's true type.

### W4.3-07 · MRQ · AB3

**Type:** MRQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** AB3 class diagram notation · **Source:** W4.3c · **Basis:** bold · **AB3:** `docs/diagrams/LogicClassDiagram.puml`, `src/main/java/seedu/address/logic/commands/Command.java`

**Question:** AB3's Logic class diagram labels one box `{abstract} Command` and another `<<interface>> Logic`, and shows `LogicManager` connected to `Logic` by a dashed line with a triangle. Which statements follow, and agree with the code? (Select all that apply.)

- A. `Command` cannot be instantiated directly ✅
- B. `LogicManager` implements the `Logic` interface ✅
- C. `Logic` is a subclass of `LogicManager`
- D. Classes such as `DeleteCommand` inherit from `Command` ✅

**Answer:** A, B, D

**Explanation:** A class diagram can show class-like entities such as abstract classes and interfaces. The dashed line with a triangle is interface realisation, with the triangle at the interface; the code has `public abstract class Command` and `LogicManager implements Logic`.

### W4.3-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.3] Class Diagrams: Beyond Basics · **Subtopic:** AB3 stereotypes · **Source:** W4.3f · **Basis:** bold · **AB3:** `docs/diagrams/LogicClassDiagram.puml`

**Question:** In AB3's Logic class diagram, the dashed arrow from `Command` to `CommandResult` carries the label `<<create>>`. What kind of UML element is that label?

- A. A stereotype, adding the meaning that a Command creates CommandResult objects ✅
- B. A constraint
- C. A multiplicity
- D. A navigability marker

**Answer:** A

**Explanation:** Stereotypes add domain-specific meaning to existing UML elements — here to a dependency — without changing the underlying structure of the model.

## [W4.4] Java: JavaFX

### W4.4-01 · MCQ

**Type:** MCQ · **Topic:** [W4.4] Java: JavaFX · **Subtopic:** JavaFX · **Source:** W4.4a · **Basis:** body

**Question:** Which statement about JavaFX matches the course material?

- A. It is a build tool for Java GUIs
- B. It is a technology for building Java-based GUIs that used to be part of Java but is now a third-party dependency ✅
- C. It is the part of the JDK that replaced Swing and cannot be removed
- D. It is a testing framework for user interfaces

**Answer:** B

**Explanation:** JavaFX is a GUI technology that was once bundled with Java and has since become a third-party dependency, maintained by OpenJDK.

### W4.4-02 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.4] Java: JavaFX · **Subtopic:** AB3 JavaFX dependency · **Source:** W4.4a · **Basis:** body · **AB3:** `build.gradle`

**Question:** AB3's `build.gradle` lists `org.openjfx` modules such as `javafx-controls` and `javafx-fxml` in its `dependencies` block. Why are they there?

- A. Because Gradle cannot compile GUI code otherwise
- B. Because AB3 tests its UI with JavaFX
- C. Because JavaFX is a third-party dependency rather than a built-in part of Java ✅
- D. Because JavaFX replaces the Java compiler

**Answer:** C

**Explanation:** JavaFX is no longer part of Java itself, so a project that builds its GUI with it has to declare it as a dependency.

## [W4.5] Java: varargs

### W4.5-01 · MCQ

**Type:** MCQ · **Topic:** [W4.5] Java: varargs · **Subtopic:** Varargs · **Source:** W4.5a · **Basis:** body

**Question:** Given `public static void search(String ... keywords)`, which calls are valid?

- A. Only `search("book")`
- B. Only calls with at least one argument
- C. Only `search(new String[] {"book"})`
- D. `search()`, `search("book")` and `search("book", "paper")` ✅

**Answer:** D

**Explanation:** Varargs is syntactic sugar that lets a method take a variable number of arguments, including none.

### W4.5-02 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.5] Java: varargs · **Subtopic:** AB3 varargs · **Source:** W4.5a · **Basis:** body · **AB3:** `src/main/java/seedu/address/logic/parser/ArgumentTokenizer.java`, `src/main/java/seedu/address/logic/parser/AddCommandParser.java`

**Question:** AB3 declares `ArgumentTokenizer.tokenize(String argsString, Prefix... prefixes)`. `AddCommandParser` calls it with five prefixes, and other parsers call it with a different number. Which Java feature makes this possible with one method?

- A. Varargs ✅
- B. Generics
- C. Method overriding
- D. Static imports

**Answer:** A

**Explanation:** The `Prefix...` parameter is a variable-arguments parameter, so callers can pass any number of `Prefix` values.

## [W4.6] Code Quality: Naming

### W4.6-01 · MCQ

**Type:** MCQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** Nouns and verbs · **Source:** W4.6b · **Basis:** bold

**Question:** Which pair of names follows the guideline "nouns for classes/variables, verbs for methods"?

- A. Class `CheckLimit`, method `result()`
- B. Class `LimitChecker`, method `calculate()` ✅
- C. Class `CheckLimit`, method `calculate()`
- D. Class `LimitChecker`, method `result()`

**Answer:** B

**Explanation:** Classes and variables should be nouns and methods verbs, so `CheckLimit` (a verb phrase) and `result()` (a noun) are the poor choices.

### W4.6-02 · MCQ

**Type:** MCQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** Single vs multi-valued · **Source:** W4.6b · **Basis:** bold

**Question:** Which declaration best follows the advice to distinguish clearly between single-valued and multi-valued variables?

- A. `ArrayList<Person> student;`
- B. `Person students;`
- C. `ArrayList<Person> students;` ✅
- D. `ArrayList<Person> personData;`

**Answer:** C

**Explanation:** A plural name signals a collection and a singular one a single value, so `students` for a list of persons is clear.

### W4.6-03 · MRQ

**Type:** MRQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** Names that explain · **Source:** W4.6d · **Basis:** bold

**Question:** Which renamings improve a name in the way the course recommends? (Select all that apply.)

- A. `processInput()` → `removeWhiteSpaceFromInput()` ✅
- B. `flag` → `isValidInput` ✅
- C. `bySizeOrder()` → `orderBySize()` ✅
- D. `originalValue` and `finalValue` → `value1` and `value2`

**Answer:** A, B, C

**Explanation:** A name should explain the entity accurately and in enough detail, with words in a sensible order. Numbers (or case) should not be used to tell names apart.

### W4.6-04 · MCQ

**Type:** MCQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** Standard words · **Source:** W4.6c · **Basis:** bold

**Question:** A developer names a retry counter after a character from a currently popular TV show. Which guideline is broken?

- A. Use nouns for things and verbs for actions
- B. Related things should be named similarly
- C. Keep names as short as possible
- D. Avoid foreign language words, slang, and names meaningful only in specific contexts or times ✅

**Answer:** D

**Explanation:** Names tied to private jokes or passing popular culture do not explain themselves to other readers or at other times.

### W4.6-05 · MCQ

**Type:** MCQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** Misleading names · **Source:** W4.6f · **Basis:** bold

**Question:** `colorBlack` and `colorWhite` hold hexadecimal colour values, `colorBlue` holds the number of times blue is used, and `hexForRed` holds a hexadecimal colour value. What is the problem?

- A. Related things are named differently and an unrelated thing is named similarly ✅
- B. The names use camelCase
- C. The names are too long
- D. The names contain colour words

**Answer:** A

**Explanation:** Related things should be named similarly, while unrelated things should not. `colorBlue` looks like the colour values but is a count, and `hexForRed` is a colour value named differently; `hexForBlack`, `hexForWhite`, `hexForRed` and `blueColorCount` would be clearer.

### W4.6-06 · MCQ

**Type:** MCQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** Name length · **Source:** W4.6e · **Basis:** body

**Question:** What is the course's position on name length?

- A. Shorter is always better
- B. Lengthy names are best avoided, but names that are too short are even worse ✅
- C. Longer is always better
- D. Length does not matter if names are unique

**Answer:** B

**Explanation:** Names should not be lengthy, yet too-short names are worse. Abbreviations, if needed, should be used consistently and explained somewhere obvious.

### W4.6-07 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.6] Code Quality: Naming · **Subtopic:** AB3 naming · **Source:** W4.6b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/Model.java`

**Question:** AB3's `Model` interface has methods named `addPerson`, `deletePerson` and `hasPerson`, and the code base has classes named `UniquePersonList` and `CommandResult`. Which naming guideline do these names follow?

- A. Names should be as short as possible
- B. Use numbers to distinguish related names
- C. Nouns for classes and verbs for methods ✅
- D. Use abbreviations consistently

**Answer:** C

**Explanation:** Classes are named with nouns or noun phrases and methods with verbs (or question-like forms such as `hasPerson` for booleans).

## [W4.7] Static Analysis

### W4.7-01 · MCQ

**Type:** MCQ · **Topic:** [W4.7] Static Analysis · **Subtopic:** Static analysis · **Source:** W4.7a · **Basis:** bold

**Question:** What is static analysis?

- A. Analysis of a program's performance while it runs
- B. Analysis done once, before the project starts
- C. Analysis of static (class-level) members only
- D. Analysis of code without actually executing it ✅

**Answer:** D

**Explanation:** Static analysis examines code without running it and can find things such as unused variables, unhandled exceptions and style errors. Analysis that needs execution is dynamic analysis.

### W4.7-02 · MRQ

**Type:** MRQ · **Topic:** [W4.7] Static Analysis · **Subtopic:** Static vs dynamic · **Source:** W4.7a · **Basis:** bold

**Question:** Which of these can be obtained by static analysis, without running the program? (Select all that apply.)

- A. Unused variables ✅
- B. Coding style violations ✅
- C. The time a method takes for a given input
- D. Potential bugs flagged by a static analyzer ✅

**Answer:** A, B, D

**Explanation:** Static analysis can reveal unused variables, style errors and, with higher-end analyzers, potential bugs. Performance characteristics require dynamic analysis, where the code is executed.

### W4.7-03 · MCQ

**Type:** MCQ · **Topic:** [W4.7] Static Analysis · **Subtopic:** Linters · **Source:** W4.7a · **Basis:** bold

**Question:** How are linters related to static analyzers?

- A. Linters are a subset of static analyzers that aim to locate areas where code can be made 'cleaner' ✅
- B. Static analyzers are a subset of linters
- C. Linters are dynamic analysis tools
- D. They are unrelated kinds of tools

**Answer:** A

**Explanation:** Linters are static analyzers focused specifically on making code cleaner; analyzers in general can also locate potential bugs, memory leaks and inefficient structures.

### W4.7-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W4.7] Static Analysis · **Subtopic:** AB3 Checkstyle as static analysis · **Source:** W4.7a · **Basis:** bold · **AB3:** `build.gradle`, `config/checkstyle/checkstyle.xml`

**Question:** AB3 runs Checkstyle (rules such as `UnusedImports` and `MissingSwitchDefault`) and JaCoCo (which reports the code exercised when the tests run). Which classification is correct?

- A. Both are static analysis
- B. Checkstyle is static analysis; JaCoCo's coverage data comes from executing the code ✅
- C. Both are dynamic analysis
- D. Checkstyle is dynamic analysis; JaCoCo is static analysis

**Answer:** B

**Explanation:** Static analysis examines code without executing it, as Checkstyle does. Information that requires running the code, such as which lines the tests executed, is dynamic.

## [W4.8] Code Reviews

### W4.8-01 · MCQ

**Type:** MCQ · **Topic:** [W4.8] Code Reviews · **Subtopic:** Code review · **Source:** W4.8a · **Basis:** bold

**Question:** What is a code review?

- A. Running the code to see whether it fails
- B. A meeting to assign coding tasks
- C. The systematic examination of code with the intention of finding where it can be improved ✅
- D. Rewriting a colleague's code

**Answer:** C

**Explanation:** Code review is a systematic examination of code to find improvements; it can take the form of pull request reviews, pair programming or formal inspections.

### W4.8-02 · MCQ

**Type:** MCQ · **Topic:** [W4.8] Code Reviews · **Subtopic:** Pair programming · **Source:** W4.8a · **Basis:** bold

**Question:** In pair programming, what are the roles of the two programmers?

- A. One writes code and the other writes tests, at separate workstations
- B. Both type on the same file from separate computers
- C. The senior programmer codes while the junior watches, without switching
- D. The driver writes code while the observer (navigator) reviews each line as it is typed; they switch roles frequently ✅

**Answer:** D

**Explanation:** Pair programming has two programmers at one workstation, with an implicit review by the navigator of everything the driver writes.

### W4.8-03 · MRQ

**Type:** MRQ · **Topic:** [W4.8] Code Reviews · **Subtopic:** Formal inspections · **Source:** W4.8a · **Basis:** bold

**Question:** Which roles are part of a formal inspection? (Select all that apply.)

- A. Author ✅
- B. Moderator ✅
- C. Secretary ✅
- D. Inspector/reviewer ✅
- E. Driver

**Answer:** A, B, C, D

**Explanation:** A formal inspection has an author (creator of the artifact), a moderator (plans and runs the meeting), a secretary (records findings) and inspectors/reviewers. 'Driver' is a pair programming role.

### W4.8-04 · MRQ

**Type:** MRQ · **Topic:** [W4.8] Code Reviews · **Subtopic:** Reviews vs testing · **Source:** W4.8a · **Basis:** body

**Question:** Which are advantages of code reviews over testing? (Select all that apply.)

- A. They can detect coding standard violations as well as functionality defects ✅
- B. They can verify non-code artifacts and incomplete code ✅
- C. They do not require test drivers or stubs ✅
- D. They are automated and therefore less error-prone

**Answer:** A, B, C

**Explanation:** Reviews can examine things testing cannot and need no test scaffolding. Their disadvantage is that they are a manual process and therefore error-prone.

---

# Week 5

## [W5.1] Requirements: Intro

### W5.1-01 · MCQ

**Type:** MCQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Brownfield vs greenfield · **Source:** W5.1a · **Basis:** bold

**Question:** A university already runs a course registration system. A team is hired to add an online payment option to it. In the course's terms, what type of project is this?

- A. A brownfield project, because it updates an existing software product ✅
- B. A greenfield project, because the payment feature is entirely new
- C. A greenfield project, because new requirements must be gathered
- D. A brownfield project, because the stakeholders are already known

**Answer:** A

**Explanation:** A brownfield project replaces or updates an existing product; a greenfield project develops a new system from scratch. Whether individual features are new, or requirements need gathering, does not decide the type — requirements are gathered in both.

### W5.1-02 · MRQ

**Type:** MRQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Stakeholders · **Source:** W5.1a · **Basis:** bold

**Question:** Which of the following can be stakeholders of a software project? (Select all that apply.)

- A. The users of the product ✅
- B. The developers building the product ✅
- C. A government agency whose regulations the product must follow ✅
- D. The sponsor paying for the product ✅

**Answer:** A, B, C, D

**Explanation:** A stakeholder is any individual or organization involved in, or potentially affected by, the project. That covers users and sponsors as well as less obvious parties such as developers and regulators.

### W5.1-03 · MRQ

**Type:** MRQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Functional vs non-functional · **Source:** W5.1b · **Basis:** bold

**Question:** Which of these are non-functional requirements? (Select all that apply.)

- A. Search results should be returned within two seconds. ✅
- B. An administrator can view a log of user activities.
- C. A course can have up to 2000 students. ✅
- D. The source code should be open source. ✅
- E. A student can view the details of their team members.

**Answer:** A, C, D

**Explanation:** Functional requirements specify what the system should do; non-functional requirements specify the constraints under which it is developed and operated. Response time, capacity limits and constraints on how the project is run are NFRs, while things a user type can do are functional.

### W5.1-04 · MCQ

**Type:** MCQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Why NFRs matter · **Source:** W5.1b · **Basis:** bold

**Question:** Why does the course advise identifying non-functional requirements as early as possible?

- A. They take longer to implement than functional requirements
- B. They are easier to miss, yet can be critical to the product's success ✅
- C. They are usually more numerous than functional requirements
- D. They cannot be changed once the design has started

**Answer:** B

**Explanation:** Stakeholders tend to think of functional requirements first, so NFRs are easier to miss, and sometimes they are critical — a product that is too slow or insecure is unlikely to succeed even with the right functionality.

### W5.1-05 · MCQ

**Type:** MCQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Priority categories · **Source:** W5.1c · **Basis:** body

**Question:** Requirements are grouped as Essential, Typical and Novel. Which description fits a 'Typical' requirement?

- A. Users will not accept the product without it
- B. It is a new feature that could differentiate the product from others
- C. Most similar systems have it, but the product can survive without it ✅
- D. It has been judged out of scope and discarded

**Answer:** C

**Explanation:** Essential requirements must be fulfilled or users will not accept the product; Typical ones are found in most similar systems but are not vital; Novel ones are differentiators.

### W5.1-06 · MCQ

**Type:** MCQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Testable requirements · **Source:** W5.1d · **Basis:** bold

**Question:** Which requirement is unambiguous and testable in the sense used by the course?

- A. The interface should have a modern look and feel.
- B. Error messages should be helpful.
- C. The system should be usable by a novice.
- D. The app should launch within three seconds on a five-year-old phone. ✅

**Answer:** D

**Explanation:** An unambiguous, testable requirement specifies an observable result that determines whether it has been met. The other three rely on judgments ('modern', 'helpful', 'usable') that people can disagree about.

### W5.1-07 · MRQ

**Type:** MRQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Changing requirements · **Source:** W5.1e · **Basis:** bold

**Question:** According to the course, why do requirements keep changing while a product is being built? (Select all that apply.)

- A. Stakeholders work out what they want by seeing something concrete ✅
- B. The world the product lives in changes ✅
- C. The team learns what things actually cost ✅
- D. Requirements are only written down after the product is delivered

**Answer:** A, B, C

**Explanation:** The three reasons given are that stakeholders refine their wants once they see something concrete, the environment changes (e.g. new regulation, competitors), and the team discovers real costs. Requirements are recorded during the project, not after it.

### W5.1-08 · MCQ

**Type:** MCQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** Cost of accepting changes · **Source:** W5.1e · **Basis:** bold

**Question:** A team accepts a new requirement late in the project. What does the course say this implies?

- A. Priorities must be revisited, because the change is also a decision about what will not be built ✅
- B. The specification no longer needs to be kept up to date
- C. The new requirement automatically takes the lowest priority
- D. Earlier requirements were gathered incorrectly

**Answer:** A

**Explanation:** Every change is also a decision about what will not be built: a late requirement competes with those already agreed, so priorities are revisited rather than settled once. An out-of-date specification becomes misleading, so it must still be maintained.

### W5.1-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.1] Requirements: Intro · **Subtopic:** AB3 non-functional requirements · **Source:** W5.1b · **Basis:** body · **AB3:** `docs/DeveloperGuide.md`

**Question:** The AB3 Developer Guide states that the app "should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage". How should this be classified?

- A. A functional requirement, because it concerns storing persons
- B. A non-functional requirement, because it constrains how the system operates ✅
- C. A user story, because it mentions typical usage
- D. A glossary entry, because it defines a limit

**Answer:** B

**Explanation:** It does not state something the system should do; it states a performance/capacity constraint under which the system operates, so it is an NFR. AB3 lists it in its Non-Functional Requirements section.

## [W5.2] Requirements: Gathering

### W5.2-01 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Brainstorming · **Source:** W5.2a · **Basis:** bold

**Question:** Which statement describes a key characteristic of a brainstorming session?

- A. It needs at least five participants to be effective
- B. Only the most experienced people should take part
- C. All ideas are welcome; the aim is to generate ideas, not to validate them ✅
- D. It is mainly a way to eliminate bad ideas early

**Answer:** C

**Explanation:** In brainstorming there are no "bad" ideas: the aim is to generate a large number of diverse ideas, not to validate or eliminate them. Group size and seniority are not defining features.

### W5.2-02 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Choosing a technique · **Source:** W5.2c, W5.2d, W5.2f · **Basis:** bold

**Question:** A team wants opinions about a planned product from several thousand potential users. Which requirements gathering technique fits best?

- A. Observation
- B. Focus group
- C. Interview
- D. User survey ✅

**Answer:** D

**Explanation:** Surveys solicit responses and opinions from a large number of stakeholders. Focus groups and interviews involve small numbers of people, and observation watches users in their natural work environment rather than asking for opinions.

### W5.2-03 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Focus groups · **Source:** W5.2f · **Basis:** bold

**Question:** How does the course characterise a focus group?

- A. A kind of informal interview within an interactive group setting ✅
- B. A questionnaire sent to a large number of stakeholders
- C. A formal review of the requirements specification by domain experts
- D. A session where users are watched silently in their work environment

**Answer:** A

**Explanation:** Focus groups are a kind of informal interview within an interactive group setting, where a group such as potential users is asked about their understanding of an issue, process or product.

### W5.2-04 · MRQ

**Type:** MRQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Running interviews · **Source:** W5.2e · **Basis:** bold

**Question:** Which of these are part of the course's advice for running a requirements interview? (Select all that apply.)

- A. Open with something concrete rather than an abstract question ✅
- B. Ask what goes wrong today and what the person does instead ✅
- C. Play the answer back in your own words before moving on ✅
- D. Record everything the interviewee says directly as requirements
- E. Avoid finding out about the person's responsibilities beforehand

**Answer:** A, B, C

**Explanation:** The advice includes opening with something concrete, asking about problems and workarounds, and playing answers back. What you hear should be treated as claims to be checked rather than requirements to be recorded, and you should find out what the person is responsible for before meeting them.

### W5.2-05 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Workarounds · **Source:** W5.2e · **Basis:** bold

**Question:** During an interview, a clerk mentions keeping a private spreadsheet alongside the official system. Why is this worth pursuing?

- A. It shows the clerk is not following the official process and should be reported
- B. Workarounds are where unmet requirements hide ✅
- C. It proves the official system should be replaced by a spreadsheet
- D. Spreadsheets are the preferred format for recording requirements

**Answer:** B

**Explanation:** The course advises asking what goes wrong today and what people do instead, because workarounds such as a private spreadsheet reveal needs the current system does not meet.

### W5.2-06 · MRQ

**Type:** MRQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Prototyping · **Source:** W5.2g · **Basis:** body

**Question:** Which of the following are purposes of a prototype mentioned by the course? (Select all that apply.)

- A. To get users' feedback ✅
- B. To validate a technical concept (a proof-of-concept) ✅
- C. To compare multiple alternatives on a small scale before committing to one ✅
- D. To serve as the final product once enough features are added
- E. To do early field-testing under controlled conditions ✅

**Answer:** A, B, C, E

**Explanation:** A prototype is a mock-up, scaled-down version or partial system built to get feedback, validate a technical concept, preview or compare alternatives, or field-test early. It is not described as the final product.

### W5.2-07 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** What prototyping uncovers · **Source:** W5.2g · **Basis:** bold

**Question:** Prototyping is said to be particularly good at uncovering which kind of requirements?

- A. Requirements about legal compliance
- B. Requirements about data storage volumes
- C. Requirements related to how users interact with the system ✅
- D. Requirements about the development schedule

**Answer:** C

**Explanation:** Prototyping can uncover requirements, in particular those related to how users interact with the system — which is why UI prototypes (wireframes) are used to get quick feedback.

### W5.2-08 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Gathering vs validating · **Source:** W5.2h · **Basis:** bold

**Question:** What is the difference between gathering and validating requirements?

- A. Gathering is done by developers; validating is done by testers after release
- B. Gathering produces user stories; validating produces use cases
- C. Gathering covers functional requirements; validating covers non-functional ones
- D. Gathering tells you what people said; validating tells you whether what you noted is what they meant ✅

**Answer:** D

**Explanation:** Validation checks that what was written down matches what the stakeholder meant, for example by stating the requirement back in their words or showing a sketch. It is not a later testing activity, and it is not tied to a particular notation or requirement type.

### W5.2-09 · MCQ

**Type:** MCQ · **Topic:** [W5.2] Requirements: Gathering · **Subtopic:** Observable result · **Source:** W5.2h · **Basis:** bold

**Question:** While validating a requirement, stakeholders cannot agree on what observable result would mean it has been 'met'. What does the course recommend?

- A. Treat it as not ready: record it as an open question or put a prototype in front of users next ✅
- B. Drop the requirement as out of scope
- C. Implement the developers' interpretation and adjust later
- D. Split it into several user stories with the same wording

**Answer:** A

**Explanation:** If stakeholders do not agree that a stated observable result would make the requirement 'met', the requirement is not ready. It is recorded as an open question, or becomes the next thing to prototype.

## [W5.3] Requirements: Specifying

### W5.3-01 · MCQ

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** Prose · **Source:** W5.3a · **Basis:** bold

**Question:** For which of these is a prose (textual) description especially useful?

- A. Listing every feature grouped by priority
- B. Describing abstract ideas such as the vision of a product ✅
- C. Specifying step-by-step interactions between a user and the system
- D. Defining domain terms for all stakeholders

**Answer:** B

**Explanation:** Prose is especially useful for abstract ideas such as product vision, although lengthy prose should be avoided because it is hard to follow. The other needs are better served by feature lists, use cases and a glossary.

### W5.3-02 · MCQ

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** User story perspective · **Source:** W5.3c · **Basis:** bold

**Question:** Why is "As a developer, I want to use Python to implement the software, so that we can reuse existing Python modules" a poor user story?

- A. It does not follow the role–function–benefit format
- B. It states a benefit, which user stories should omit
- C. It is not written from the perspective of a user or customer of the system ✅
- D. It is too short to estimate

**Answer:** C

**Explanation:** User stories are told from the perspective of the person who desires the capability, usually a user or customer. This one follows the format but describes an implementation choice from the developer's viewpoint.

### W5.3-03 · MRQ

**Type:** MRQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** User story facts · **Source:** W5.3c, W5.3d · **Basis:** bold

**Question:** Which statements about user stories are correct? (Select all that apply.)

- A. They are based on stories users tell about their experience with similar systems
- B. They can be written on a physical medium or in a digital tool ✅
- C. The benefit part can be omitted if it is obvious ✅
- D. They are another name for use cases
- E. High-level user stories covering bigger functionality are called epics ✅

**Answer:** B, C, E

**Explanation:** User stories are short descriptions of a feature from the user's perspective, written on cards/sticky notes or in tools; the benefit may be omitted when obvious, and big stories (epics or themes) are broken into normal-sized ones. Despite the name they are not anecdotes about other systems, and they are distinct from use cases.

### W5.3-04 · MCQ

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** Acceptance criteria · **Source:** W5.3d · **Basis:** bold

**Question:** Conditions of satisfaction added to a user story are more widely known as what?

- A. Epics
- B. Personas
- C. Non-functional requirements
- D. Acceptance criteria ✅

**Answer:** D

**Explanation:** Conditions of satisfaction specify what must be true for the implementation to be accepted as 'done'; they are more widely known as acceptance criteria.

### W5.3-05 · MCQ

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** Level of detail · **Source:** W5.3e · **Basis:** bold

**Question:** How do user stories mainly differ from traditional requirements specifications?

- A. In the level of detail: they give only enough to make a reasonably low-risk estimate ✅
- B. They must be written by the customer
- C. They can only express functional requirements
- D. They are written after the feature is implemented

**Answer:** A

**Explanation:** User stories differ mainly in the level of detail; details are worked out later in discussion with the customer. They can also capture NFRs, because even NFRs must benefit some stakeholder.

### W5.3-06 · MRQ

**Type:** MRQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** Brainstorming user stories · **Source:** W5.3e · **Basis:** bold

**Question:** A team is brainstorming user stories for a new product using the course's recipe. Which actions are consistent with it? (Select all that apply.)

- A. Defining the target user as a persona before listing stories ✅
- B. Stating related problems the product will NOT solve when defining the problem scope ✅
- C. Ranking each story by value as soon as it is proposed
- D. Listing scenarios in chronological order to form a user journey ✅
- E. Deciding how each story will be implemented before recording it

**Answer:** A, B, D

**Explanation:** The recipe is: clear your mind of preconceived product ideas, define the persona, define the problem scope (including what is excluded), list scenarios as a user journey, then list stories supporting the scenarios. Stories are not evaluated during brainstorming, and implementation details are not discussed.

### W5.3-07 · MCQ

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** User journey · **Source:** W5.3e · **Basis:** bold

**Question:** What is a user journey?

- A. A list of features grouped by order of delivery
- B. A chronological narrative of a persona's interaction with the product, formed by scenarios ✅
- C. A profile of the target user and their work patterns
- D. A replacement for user stories once the product scope is clear

**Answer:** B

**Explanation:** Together, the scenarios form a user journey: a chronological narrative of a persona's interaction with the product. It helps to find user stories but does not replace them; the user profile is the persona.

### W5.3-08 · MRQ

**Type:** MRQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** Glossary · **Source:** W5.3f · **Basis:** body

**Question:** In which situations is a glossary entry appropriate? (Select all that apply.)

- A. A technical term may not be known to all stakeholders ✅
- B. A term has multiple meanings and the intended one must be indicated ✅
- C. Several terms are used for the same concept and one must be chosen ✅
- D. A requirement does not fit into any other section

**Answer:** A, B, C

**Explanation:** A glossary ensures all stakeholders share a common understanding of noteworthy terms, abbreviations and acronyms. Requirements that do not fit elsewhere go in a supplementary requirements section, not the glossary.

### W5.3-09 · MCQ

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** Supplementary requirements · **Source:** W5.3g · **Basis:** bold

**Question:** Where are most non-functional requirements typically listed in a requirements document?

- A. In the glossary
- B. In the feature list
- C. In a supplementary requirements section ✅
- D. In the product vision

**Answer:** C

**Explanation:** A supplementary requirements section captures requirements that do not fit elsewhere, and is typically where most NFRs are listed.

### W5.3-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.3] Requirements: Specifying · **Subtopic:** AB3 user stories · **Source:** W5.3d · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** In the AB3 Developer Guide's user story table, the story "As a user, I want to add a new person" has an empty "So that I can…" cell. Which point about user stories does this illustrate?

- A. User stories must not mention benefits for essential features
- B. Functional requirements never have benefits
- C. A story without a benefit is an epic
- D. The benefit can be omitted when it is obvious ✅

**Answer:** D

**Explanation:** The {benefit} part of a user story can be omitted if it is obvious, as it is for adding a person to an address book. The course still recommends confirming that a concrete benefit exists.

## [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments

### W5.4-01 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Readability · **Source:** W5.4a · **Basis:** bold

**Question:** Why does the course rank readability among the most important dimensions of code quality?

- A. Code needs to be read, understood and modified by other developers — and later by yourself as a 'stranger' ✅
- B. Readable code always runs faster than unreadable code
- C. Compilers reject code that does not follow readability guidelines
- D. Readable code does not need testing

**Answer:** A

**Explanation:** Programs are read and modified by others, and even your own code becomes unfamiliar over time. Readability is about human understanding, not run-time speed or compilation.

### W5.4-02 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Long methods and nesting · **Source:** W5.4b, W5.4c · **Basis:** bold

**Question:** Which pair of guidelines does the course give about method length and nesting?

- A. Keep methods under 10 lines; never nest conditionals
- B. Consider shortening methods beyond about 30 LoC; avoid deep nesting, especially arrowhead-style code ✅
- C. Keep methods under 100 lines; allow up to six levels of indentation
- D. Method length does not matter; only nesting depth does

**Answer:** B

**Explanation:** Long methods hold more than a reader can process at once, so shortening should be considered beyond 30 lines of code. Deep nesting makes logic hard to track, and arrowhead-style code in particular is to be avoided.

### W5.4-03 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Complicated expressions · **Source:** W5.4d · **Basis:** bold

**Question:** The statement below is hard to read. Which change follows the course's guideline?
```
return ((length < MAX_LENGTH) || (previousSize != length)) && (typeCode == URGENT);
```

- A. Remove the parentheses, since operator precedence makes them unnecessary
- B. Add a comment explaining how the expression is evaluated
- C. Compute intermediate booleans with meaningful names first, then return a simple expression ✅
- D. Rewrite it using nested ternary operators

**Answer:** C

**Explanation:** Complicated expressions, especially with negations and nested parentheses, should be evaluated in steps using named intermediate values (e.g. `isValidCode && isUrgent`). A comment explaining HOW would be redundant once the code is self-explanatory.

### W5.4-04 · MRQ

**Type:** MRQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Magic literals · **Source:** W5.4e · **Basis:** bold

**Question:** Which lines contain a magic literal that the course would ask you to replace with a named constant? (Select all that apply.)

- A. `return 9;` where 9 is the maximum size minus one ✅
- B. `return MAX_SIZE - 1;`
- C. `throw new Exception("Error 1432");` ✅
- D. `static final double PI = 3.14159;`

**Answer:** A, C

**Explanation:** A literal that does not explain its own meaning is a magic literal; this applies to strings as well as numbers. Defining a named constant such as `PI` or using `MAX_SIZE` is the recommended fix, not a violation.

### W5.4-05 · MRQ

**Type:** MRQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Make the code obvious · **Source:** W5.4f · **Basis:** bold

**Question:** Which practices follow the guideline "make the code as explicit as possible"? (Select all that apply.)

- A. Using explicit type conversion instead of relying on implicit conversion ✅
- B. Using parentheses or braces to show grouping even where they can be skipped ✅
- C. Using an enumeration when a variable can take only a small number of values ✅
- D. Using an `int` with values 0, 1 and 2 to represent system states

**Answer:** A, B, C

**Explanation:** Explicit conversions, explicit grouping and enumerations make intent obvious. Encoding states as bare integers hides their meaning; an enum such as `SystemState` is preferred.

### W5.4-06 · MRQ

**Type:** MRQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Do not trip up the reader · **Source:** W5.4h · **Basis:** bold

**Question:** Which of these would make a reader go "huh?" according to the course? (Select all that apply.)

- A. An unused parameter in a method signature ✅
- B. Multiple statements on the same line ✅
- C. Assigning a value to a variable and then overwriting it before the value is used ✅
- D. A header comment describing the purpose of a method
- E. Different things that are made to look similar ✅

**Answer:** A, B, C, E

**Explanation:** The course lists unused parameters, similar things that look different, different things that look similar, multiple statements per line and data flow anomalies. Header comments are encouraged.

### W5.4-07 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** KISS · **Source:** W5.4i · **Basis:** bold

**Question:** A developer replaces a simple, working brute-force routine with an intricate generic framework "for better reusability", with no concrete need for reuse. Which guideline does this go against?

- A. SLAP
- B. DRY
- C. Use the default branch
- D. KISS ✅

**Answer:** D

**Explanation:** KISS ("keep it simple, stupid") says not to write 'clever' code or dismiss a simple solution for a complicated one because of supposed benefits such as reusability, unless strongly justified.

### W5.4-08 · MRQ

**Type:** MRQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Premature optimization · **Source:** W5.4j · **Basis:** bold

**Question:** Which are drawbacks of optimizing code prematurely, as stated by the course? (Select all that apply.)

- A. You may not know which parts are the real performance bottlenecks ✅
- B. Optimizing can complicate the code ✅
- C. Hand-optimized code can be harder for the compiler to optimize ✅
- D. Optimized code can never be tested

**Answer:** A, B, C

**Explanation:** The three stated drawbacks are not knowing the real bottlenecks, added complexity that affects correctness and readability, and making the compiler's job harder. Testability is not among them.

### W5.4-09 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Make it work, right, fast · **Source:** W5.4j · **Basis:** bold

**Question:** What does "make it work, make it right, make it fast" imply?

- A. Correctness takes priority over optimization, although optimizing is sometimes necessary ✅
- B. Code should never be optimized
- C. Performance should be addressed first so later work is not wasted
- D. Optimization and correctness should be tackled in the same step

**Answer:** A

**Explanation:** Incorrect code has no value however fast it is, so correctness comes first. The course notes there are cases where optimizing takes priority (e.g. resource-constrained environments); the guideline is a caution to optimize only when needed.

### W5.4-10 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** SLAP · **Source:** W5.4k · **Basis:** bold

**Question:** Which code fragment best follows the Single Level of Abstraction Principle?

- A. `readData(); salary = basic * rise + 1000; tax = (taxable ? salary * 0.07 : 0); displayResult();`
- B. `readData(); processData(); displayResult();` ✅
- C. `readData(); salary = basic * rise + 1000; displayResult(); tax = salary * 0.07;`
- D. `open(file); read(bytes); salary = basic * rise + 1000; print(salary);`

**Answer:** B

**Explanation:** SLAP says to avoid multiple levels of abstraction within a code fragment. The chosen fragment has three steps at the same high level; the others mix high-level calls with low-level calculations.

### W5.4-11 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Data vs control abstraction · **Source:** W5.4k · **Basis:** bold

**Question:** Calling `print("Hello")` without caring how characters reach the screen is an example of which kind of abstraction?

- A. Data abstraction
- B. Class abstraction
- C. Control abstraction ✅
- D. Architectural abstraction

**Answer:** C

**Explanation:** Control abstraction hides the details of the actual control flow so you can focus on the task at a higher level. Data abstraction hides lower-level data items so you can think in terms of bigger entities.

### W5.4-12 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Happy path and guard clauses · **Source:** W5.4l · **Basis:** bold

**Question:** What is the effect of using guard clauses in a method?

- A. The happy path becomes nested inside the checks for unusual cases
- B. All error handling moves to the end of the method
- C. The method no longer needs to handle unusual cases
- D. Unusual cases are handled as soon as they are detected, leaving the happy path un-nested and prominent ✅

**Answer:** D

**Explanation:** Guard clauses deal with unusual conditions immediately (e.g. by returning or throwing), so the reader need not keep them in mind and the path taken when everything goes well stays clear and un-indented.

### W5.4-13 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Default branch · **Source:** W5.4n · **Basis:** bold

**Question:** A `switch` statement handles colours "red" and "blue", which are the only valid inputs. How should the `default` branch be used?

- A. Use it to detect an error, such as raising an exception for unexpected input ✅
- B. Use it to handle "blue", so one case label can be saved
- C. Omit it, because every valid input already has a case
- D. Use it to repeat the action for "red" as a safe fallback

**Answer:** A

**Explanation:** Always include a default branch, and use it for the intended default action rather than just to execute the last option. If there is no default action, the default branch should detect errors.

### W5.4-14 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Recycling variables · **Source:** W5.4o · **Basis:** bold

**Question:** What is wrong with this method?
```
double computeRectangleArea(double length, double width) {
    length = length * width;
    return length;
}
```

- A. It uses a magic number
- B. It reuses a formal parameter as a local variable for a different purpose ✅
- C. It has an empty catch block
- D. It violates SLAP

**Answer:** B

**Explanation:** The parameter `length` is reused to hold the area. The course says to use one variable for one purpose and not to reuse formal parameters as local variables; a separate `area` variable should be declared.

### W5.4-15 · MRQ

**Type:** MRQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Unsafe practices · **Source:** W5.4p, W5.4q, W5.4r · **Basis:** bold

**Question:** Which of these follow the course's guidelines on error-prone practices? (Select all that apply.)

- A. Deleting unused code as soon as it becomes redundant ✅
- B. Keeping commented-out code in case it is needed again
- C. Declaring a variable inside the `if` block that is the only place it is used ✅
- D. Leaving a `catch` block empty so that minor errors do not disturb the user
- E. Minimizing the use of global variables ✅

**Answer:** A, C, E

**Explanation:** Dead code should be deleted (it can be recovered from revision control), variables should be defined in the least possible scope, and globals minimized. Empty catch blocks silently ignore errors and should be avoided.

### W5.4-16 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** DRY · **Source:** W5.4s · **Basis:** bold

**Question:** Which situation violates the DRY principle?

- A. A method is called from ten different places
- B. Two classes each have a method named `toString`
- C. A system-wide timeout value is defined separately in several files ✅
- D. A constant is declared once and imported where needed

**Answer:** C

**Explanation:** DRY requires every piece of knowledge to have a single, unambiguous, authoritative representation. The same timeout value defined in multiple places duplicates knowledge; calling one method from many places is reuse, not duplication.

### W5.4-17 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** WHAT, WHY, HOW · **Source:** W5.4w · **Basis:** bold

**Question:** Which comment is the kind the course recommends?

- A. `// increment x` above `x++;`
- B. `// loop through the list and check each item using an if statement`
- C. `// quick fix for the bug I found last night`
- D. `// Remove spaces to comply with the IE23.5 formatting rules` ✅

**Answer:** D

**Explanation:** Comments should explain WHAT the code is supposed to do and WHY it is implemented that way, not HOW it works. The chosen comment gives a rationale; the others repeat the obvious, explain mechanics, or are private notes rather than writing for the reader.

### W5.4-18 · MCQ

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** Value of WHAT comments · **Source:** W5.4w · **Basis:** bold

**Question:** A method has the header comment "Removes all spaces from the input" but its body is `return input.trim();`. What does this illustrate?

- A. A WHAT comment lets the reader compare the specification with the implementation and spot a bug ✅
- B. Comments that state WHAT are redundant and should be deleted
- C. HOW comments are more useful than WHAT comments
- D. The comment should be changed to describe trim() step by step

**Answer:** A

**Explanation:** A WHAT comment is the specification of what the code is supposed to do; here it reveals that the implementation (which trims only leading and trailing spaces) does not match the intent.

### W5.4-19 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** AB3 default branch · **Source:** W5.4n · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/AddressBookParser.java`

**Question:** In AB3, `AddressBookParser#parseCommand` switches on the command word. What does its `default` branch do, and which guideline does that follow?

- A. It runs `HelpCommand`, following "make the happy path prominent"
- B. It throws a `ParseException` for an unknown command, following "use the default branch to detect errors" ✅
- C. It runs the last command in the list, following KISS
- D. It returns `null`, following "avoid empty catch blocks"

**Answer:** B

**Explanation:** The default branch throws `ParseException(MESSAGE_UNKNOWN_COMMAND)` instead of doubling as the handler for some valid command, which is the course's advice when there is no intended default action.

### W5.4-20 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** AB3 guard clause · **Source:** W5.4l · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/DeleteCommand.java`

**Question:** `DeleteCommand#execute` in AB3 begins by checking whether the target index is beyond the displayed list and, if so, throws a `CommandException`; only then does it fetch and delete the person. Which readability practice does this show?

- A. Premature optimization
- B. Arrowhead-style nesting
- C. A guard clause that keeps the happy path prominent ✅
- D. Recycling a parameter as a local variable

**Answer:** C

**Explanation:** The unusual case (invalid index) is handled as soon as it is detected, so the main path — get the person, delete, return the result — stays un-nested.

### W5.4-21 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.4] Code Quality: Readability, Unsafe Practices, Code Comments · **Subtopic:** AB3 named constants · **Source:** W5.4e · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/AddressBookParser.java`, `src/main/java/seedu/address/logic/commands/AddCommand.java`

**Question:** AB3's `AddressBookParser` matches the command word against `AddCommand.COMMAND_WORD`, `DeleteCommand.COMMAND_WORD` and so on, rather than against the strings "add" and "delete". Which guideline does this follow?

- A. Do not repeat the obvious in comments
- B. Avoid deep nesting
- C. Minimize the scope of variables
- D. Avoid magic literals ✅

**Answer:** D

**Explanation:** Each command word is a named constant defined once in its command class, so the literal's meaning is explicit and it has a single authoritative definition.

## [W5.5] Refactoring

### W5.5-01 · MCQ

**Type:** MCQ · **Topic:** [W5.5] Refactoring · **Subtopic:** Definition · **Source:** W5.5a · **Basis:** bold

**Question:** Which activity is refactoring?

- A. Renaming a method and extracting a helper, in small steps, without changing external behavior ✅
- B. Fixing a defect that produces a wrong total
- C. Adding an export feature while tidying nearby code
- D. Discarding a poorly written module and writing it again from scratch

**Answer:** A

**Explanation:** Refactoring is restructuring code in small steps without modifying its external behavior. Rewriting is not done in small steps, and bug fixes and new features change external behavior.

### W5.5-02 · MRQ

**Type:** MRQ · **Topic:** [W5.5] Refactoring · **Subtopic:** Benefits · **Source:** W5.5a · **Basis:** bold

**Question:** Which statements about refactoring are true? (Select all that apply.)

- A. It can make hidden bugs easier to spot ✅
- B. It can improve performance ✅
- C. It can change the number of methods or classes ✅
- D. It removes the need for regression testing if done with an IDE

**Answer:** A, B, C

**Explanation:** Refactoring has secondary benefits such as revealing bugs and sometimes better performance, and refactorings may add or remove methods and classes. Even IDE-aided refactoring can cause regressions, so each small refactoring should be followed by regression testing.

### W5.5-03 · MCQ

**Type:** MCQ · **Topic:** [W5.5] Refactoring · **Subtopic:** Named refactorings · **Source:** W5.5a · **Basis:** bold

**Question:** The same statement `send();` appears as the last line of both the `if` branch and the `else` branch. Which refactoring moves it to after the conditional?

- A. Extract Method
- B. Consolidate Duplicate Conditional Fragments ✅
- C. Inline Method
- D. Split Loop

**Answer:** B

**Explanation:** Consolidate Duplicate Conditional Fragments applies when the same fragment is in all branches of a conditional: it is moved outside. Extract Method turns a groupable fragment into a method whose name explains its purpose.

### W5.5-04 · MCQ

**Type:** MCQ · **Topic:** [W5.5] Refactoring · **Subtopic:** Code smells · **Source:** W5.5d · **Basis:** bold

**Question:** Which statement about code smells is correct?

- A. A code smell is a compile-time warning
- B. A code smell always indicates a bug
- C. A code smell is a surface indication that usually, but not always, corresponds to a deeper problem ✅
- D. A code smell can only be found by profiling

**Answer:** C

**Explanation:** Code smells are quick-to-spot surface indications that usually correspond to a deeper problem in the code, and are one way to identify refactoring opportunities — but they do not always indicate a problem.

### W5.5-05 · MCQ

**Type:** MCQ · **Topic:** [W5.5] Refactoring · **Subtopic:** How much refactoring · **Source:** W5.5d · **Basis:** bold

**Question:** When is it "too much" refactoring?

- A. When more than one refactoring is applied in a day
- B. When a refactoring adds a new method
- C. When the code already passes all tests
- D. When the benefits no longer justify the cost ✅

**Answer:** D

**Explanation:** Costs and benefits depend on context, which is why some refactorings are opposites of each other (e.g. Extract Method and Inline Method). Refactoring should stop when it no longer pays off.

### W5.5-06 · MCQ

**Type:** MCQ · **Topic:** [W5.5] Refactoring · **Subtopic:** Technical debt · **Source:** W5.5d · **Basis:** bold

**Question:** What does the course say about refactoring and technical debt?

- A. Periodic refactoring is a good way to pay off technical debt a code base has accumulated ✅
- B. Refactoring creates technical debt that is later repaid by adding features
- C. Technical debt can only be removed by rewriting the system
- D. Technical debt refers to the money owed to tool vendors

**Answer:** A

**Explanation:** Technical debt is the accumulated deficiency in internal quality that makes code harder to modify; the extra effort to add features is the 'interest'. Periodic refactoring pays the debt down.

### W5.5-07 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.5] Refactoring · **Subtopic:** AB3 Extract Method · **Source:** W5.5a · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/AddCommandParser.java`

**Question:** In AB3, `AddCommandParser#parse` calls a private helper `arePrefixesPresent(argMultimap, PREFIX_NAME, …)` instead of writing the stream-based check inline. Having this check in its own well-named method is the result one would get from which refactoring?

- A. Inline Method
- B. Extract Method ✅
- C. Split Temporary Variable
- D. Consolidate Duplicate Conditional Fragments

**Answer:** B

**Explanation:** Extract Method takes a fragment that can be grouped together and turns it into a method whose name explains its purpose — here, whether all required prefixes are present.

## [W5.6] Assertions

### W5.6-01 · MCQ

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** Purpose · **Source:** W5.6a · **Basis:** bold

**Question:** What are assertions used for?

- A. To report invalid user input in a friendly way
- B. To replace unit tests in production code
- C. To define assumptions about the program state so that the runtime can verify them ✅
- D. To recover from missing files at run time

**Answer:** C

**Explanation:** An assertion states an assumption about program state; if the runtime finds it violated, that indicates a possible bug. Problems caused by users or the environment are handled with exceptions.

### W5.6-02 · MCQ

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** Assertion failure · **Source:** W5.6a · **Basis:** bold

**Question:** Why does the runtime typically take drastic action, such as terminating the program, when an assertion fails?

- A. Because assertion failures are caused by invalid user input
- B. Because assertions are expensive to evaluate
- C. Because Java cannot continue after any error
- D. Because the failure indicates a possible bug, and the sooner execution stops the safer ✅

**Answer:** D

**Explanation:** An assertion failure means the code has reached a state that violates an assumption — a possible bug — so stopping early is the safer response.

### W5.6-03 · MRQ

**Type:** MRQ · **Topic:** [W5.6] Assertions · **Subtopic:** Java assert · **Source:** W5.6b · **Basis:** bold

**Question:** Which statements about Java assertions are correct? (Select all that apply.)

- A. Java disables assertions by default ✅
- B. They can be enabled with the `-enableassertions` (or `-ea`) flag ✅
- C. They can be disabled without modifying the code ✅
- D. They are always enabled in production but disabled in tests

**Answer:** A, B, C

**Explanation:** Java's `assert` is off by default and is switched on with `-ea`; it can be turned on or off without touching the code. The risk is believing assertions are being verified when they are not.

### W5.6-04 · MCQ

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** Java assert vs JUnit · **Source:** W5.6b · **Basis:** bold

**Question:** Which statement correctly contrasts Java `assert` with JUnit assertions?

- A. Both check a condition, but JUnit assertions are more powerful, customized for testing, and not disabled by default ✅
- B. Both are disabled by default
- C. Java `assert` is for test code; JUnit assertions are for functional code
- D. JUnit assertions are compiled into Java `assert` statements

**Answer:** A

**Explanation:** The course recommends JUnit assertions in test code and Java `assert` in functional code. JUnit assertions are more powerful and are not disabled by default.

### W5.6-05 · MCQ

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** Do not do work in assertions · **Source:** W5.6c · **Basis:** bold

**Question:** What is the problem with this line?
```
assert writeFile() : "File writing is supposed to return true";
```

- A. The message after the colon is not allowed
- B. The file will not be written when assertions are disabled ✅
- C. `assert` cannot call a method
- D. It will always throw an exception

**Answer:** B

**Explanation:** Assertions can be disabled, in which case the expression is never evaluated and `writeFile()` is not called. Assertions should not be used to do work.

### W5.6-06 · MCQ

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** Assertions vs exceptions · **Source:** W5.6c · **Basis:** bold

**Question:** A calculator app terminates with an 'assertion failure' message when a user asks for the square root of a negative number. What is the best assessment?

- A. This is a correct use of assertions, since the input is invalid
- B. Assertions must have been disabled
- C. The program has a bug: invalid user input should have been handled with an exception, not left to an assertion ✅
- D. The user should be prevented from typing negative numbers by the operating system

**Answer:** C

**Explanation:** Assertion failures indicate that the programmer made a mistake; exceptions are for unusual but foreseeable conditions created by the user or environment. Invalid input reaching an assertion means the code failed to handle it properly.

### W5.6-07 · MRQ

**Type:** MRQ · **Topic:** [W5.6] Assertions · **Subtopic:** What assertions verify · **Source:** W5.6c · **Basis:** bold

**Question:** Assertions are suitable for verifying assumptions about which of the following? (Select all that apply.)

- A. Preconditions ✅
- B. Postconditions ✅
- C. Class invariants ✅
- D. Control-flow invariants ✅
- E. The validity of data typed by the user

**Answer:** A, B, C, D

**Explanation:** The course lists internal invariants, control-flow invariants, preconditions, postconditions and class invariants. User input is an external condition to be handled with exceptions.

### W5.6-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** AB3 assert vs exception · **Source:** W5.6c · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/EditCommand.java`

**Question:** In AB3's `EditCommand`, `execute` throws a `CommandException` when the user supplies an out-of-range index, while the private method `createEditedPerson` starts with `assert personToEdit != null;`. Why is the split appropriate?

- A. Both are user errors, so either mechanism would do
- B. Exceptions cannot be thrown from private methods
- C. Assertions are faster than exceptions, so they are used in private methods
- D. A bad index is a user mistake (exception); a null `personToEdit` at that point could only be a programmer mistake (assertion) ✅

**Answer:** D

**Explanation:** Exceptions handle unusual conditions created by the user or environment; assertions verify assumptions that hold unless the programmer has made an error. `createEditedPerson` is only reached after `execute` has validated the index.

### W5.6-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W5.6] Assertions · **Subtopic:** AB3 assertions at run time · **Source:** W5.6b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/EditCommand.java`

**Question:** A user starts AB3 with plain `java -jar addressbook.jar` (no extra JVM flags). What happens to the `assert` statements in classes such as `EditCommand`?

- A. They are not verified, because Java disables assertions unless `-ea` is passed ✅
- B. They are converted to exceptions automatically
- C. They are checked, because the JAR was built with Gradle
- D. They cause the app to refuse to start

**Answer:** A

**Explanation:** Java disables assertions by default; they are verified only when the JVM is started with `-enableassertions`/`-ea`. This is why assertions must not be relied on to do work.

---

# Week 6

## [W6.1] Modeling: Sequence Diagrams

### W6.1-01 · MCQ

**Type:** MCQ · **Topic:** [W6.1] Modeling: Sequence Diagrams · **Subtopic:** Purpose of sequence diagrams · **Source:** W6.1a · **Basis:** bold

**Question:** What do sequence diagrams model?

- A. The classes in a system and the associations among them
- B. The interactions between various entities in a system, in a specific scenario ✅
- C. The objects that exist at one moment and their links
- D. The components of a system and where they are deployed

**Answer:** B

**Explanation:** Sequence diagrams capture interactions for a specific scenario, for example to verify that the designed internal interactions can produce the expected outcome. Structure is the business of class and object diagrams.

### W6.1-02 · MRQ

**Type:** MRQ · **Topic:** [W6.1] Modeling: Sequence Diagrams · **Subtopic:** Uses of sequence diagrams · **Source:** W6.1a · **Basis:** body

**Question:** For which of these purposes does the course say a sequence diagram can be used? (Select all that apply.)

- A. Modeling how components of a system interact to respond to a user action ✅
- B. Modeling how objects inside a component interact to respond to a method call from another component ✅
- C. Modeling the multiplicities of associations between classes

**Answer:** A, B

**Explanation:** Both component-level and object-level interactions can be shown. Multiplicities belong to class diagrams.

### W6.1-03 · MCQ

**Type:** MCQ · **Topic:** [W6.1] Modeling: Sequence Diagrams · **Subtopic:** Self-invocation · **Source:** W6.1b · **Basis:** panel

**Question:** In a sequence diagram, an arrow leaves the activation bar of a `Logic` object and loops back to the same `Logic` lifeline. What does this show?

- A. `Logic` is running in a parallel thread
- B. `Logic` creates another instance of `Logic`
- C. One of the `Logic` object's methods is calling another of its own methods ✅
- D. A loop that repeats the previous messages

**Answer:** C

**Explanation:** An arrow from a lifeline back to itself is a self-invocation. Loops are shown with a frame, and object creation by an arrow to a new object.

### W6.1-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W6.1] Modeling: Sequence Diagrams · **Subtopic:** AB3 delete sequence diagram · **Source:** W6.1a · **Basis:** bold · **AB3:** `docs/diagrams/DeleteSequenceDiagram.puml`, `docs/DeveloperGuide.md`

**Question:** The AB3 Developer Guide includes a sequence diagram of the interactions within the Logic component for `execute("delete 1")`, involving `LogicManager`, `AddressBookParser`, `DeleteCommandParser`, `DeleteCommand` and `Model`. What is the role of this diagram?

- A. To show the class structure of the Logic component
- B. To show where the Logic component is deployed
- C. To show every possible command the parser accepts
- D. To show how objects interact in one specific scenario — executing a particular delete command ✅

**Answer:** D

**Explanation:** Sequence diagrams model interactions in a specific scenario; AB3 uses one to trace a single command through the Logic objects. The class structure is shown separately in the Logic class diagram.

## [W6.2] Architecture Diagrams

### W6.2-01 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** What architecture is · **Source:** W6.2a · **Basis:** bold

**Question:** How does the course define software architecture?

- A. The set of significant decisions about a system's overall organization ✅
- B. A diagram of boxes and arrows drawn before coding starts
- C. The complete set of classes and methods in a system
- D. The choice of programming language and IDE

**Answer:** A

**Explanation:** Architecture identifies the major parts, their responsibilities, how they interact and how they are deployed. It is more than a diagram and deliberately leaves out most of what is inside each part.

### W6.2-02 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Architecture vs detailed design · **Source:** W6.2a · **Basis:** bold

**Question:** Which is an architectural decision rather than a detailed design decision?

- A. `Storage` uses one class per file format
- B. Persistent data is handled by a separate `Storage` component ✅
- C. A particular collection type holds the invoices inside `Model`
- D. A helper method in `Logic` validates the command word

**Answer:** B

**Explanation:** Architecture and detailed design differ in how far a decision reaches: an architectural decision constrains the other parts and is expensive to reverse. What goes on inside a component is normally detailed design.

### W6.2-03 · MRQ

**Type:** MRQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Statements about architecture · **Source:** W6.2a · **Basis:** bold

**Question:** Which statements about software architecture are correct? (Select all that apply.)

- A. Every software system has an architecture, even if nobody designed one deliberately ✅
- B. An architecture is a shared and evolving technical understanding ✅
- C. It includes constraints and the reasons behind choices, not only a diagram ✅
- D. It is usually decided by the project manager
- E. It normally contains the private implementation details of each component

**Answer:** A, B, C

**Explanation:** An unplanned system still has parts and dependencies. Architecture is a technical decision of the development team, is revised deliberately as requirements change, and is concerned with the externally visible side of the parts rather than their private details.

### W6.2-04 · MRQ

**Type:** MRQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Quality attributes · **Source:** W6.2b · **Basis:** bold

**Question:** Which pairings of quality attribute and meaning match the course? (Select all that apply.)

- A. Modifiability — how easily it can be changed ✅
- B. Reliability — how well it keeps working when something fails ✅
- C. Deployability — how easily a new version reaches users ✅
- D. Performance — how well it protects data and resists misuse

**Answer:** A, B, C

**Explanation:** The listed attributes are modifiability, performance (how quickly it responds), reliability, security (protecting data and resisting misuse) and deployability.

### W6.2-05 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Conflicting attributes · **Source:** W6.2b · **Basis:** bold

**Question:** What does the course identify as the central difficulty of architecture?

- A. Drawing diagrams in a standard notation
- B. Choosing between UML tools
- C. Quality attributes often conflict, so no architecture is best on every attribute ✅
- D. Architecture cannot be changed after the first release

**Answer:** C

**Explanation:** For example, splitting a system across machines helps scaling but is slower and adds network failures. The aim is an architecture that fits the qualities and likely changes that matter for the system.

### W6.2-06 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Limiting the spread of change · **Source:** W6.2b · **Basis:** bold

**Question:** An invoice manager has `Ui`, `Logic`, `Model` and `Storage` components. A new optional "priority" field is added to every invoice and all four components have to change. What does this indicate?

- A. The architecture has failed and should be replaced
- B. Dependencies between the components are in the wrong direction
- C. The field should be stored in `Ui` only
- D. Not necessarily a failure: some changes genuinely cross several responsibilities ✅

**Answer:** D

**Explanation:** A useful architecture limits how far many changes spread, but it does not restrain every change. A field that is entered, validated, held and saved touches every responsibility.

### W6.2-07 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Components, interfaces, dependencies · **Source:** W6.2c · **Basis:** bold

**Question:** Which statement about architectural concepts is correct?

- A. An interface is the agreement stating how the rest of the system may use a component ✅
- B. A dependency arrow always represents a method call
- C. A component is a Java construct declared with the `component` keyword
- D. A component should be as small as a single class

**Answer:** A

**Explanation:** A component is a major part with one coherent responsibility, not a special programming construct. A dependency arrow describes reliance — it may be a call, a message or a network request — and dependencies have a direction.

### W6.2-08 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Logical vs deployment view · **Source:** W6.2d · **Basis:** bold

**Question:** "This system has four components" and "this system runs on four computers" are statements about which two views, respectively?

- A. Deployment view; logical view
- B. Logical view; deployment view ✅
- C. Code view; context view
- D. Both are about the logical view

**Answer:** B

**Explanation:** A logical view shows the major parts and their dependencies; a deployment view shows where the parts actually run. Keeping them separate prevents confusing the two statements.

### W6.2-09 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** C4 levels · **Source:** W6.2d · **Basis:** bold

**Question:** What is the correct order of the four core C4 levels, from the most zoomed-out to the most zoomed-in?

- A. Container, system context, component, code
- B. System context, component, container, code
- C. System context, container, component, code ✅
- D. Code, component, container, system context

**Answer:** C

**Explanation:** A system context diagram shows the system with its users and neighbouring systems; a container diagram shows its applications and data stores; a component diagram zooms into one container; a code diagram zooms into one component.

### W6.2-10 · MRQ

**Type:** MRQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** 4+1 and C4 · **Source:** W6.2d · **Basis:** bold

**Question:** Which statements about the 4+1 view model and the C4 model are correct? (Select all that apply.)

- A. 4+1 describes a system using five standard views, the "+1" being scenarios ✅
- B. C4 is a specific form of multi-level design views ✅
- C. Each of them defines its own new diagram notation
- D. Both are meant for large systems ✅

**Answer:** A, B, D

**Explanation:** Neither is a notation: 4+1 organizes different kinds of architectural information and C4 gives zoom levels for static structure, and both can use UML or informal boxes and arrows.

### W6.2-11 · MCQ

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** Reading architecture diagrams · **Source:** W6.2e · **Basis:** bold

**Question:** Architecture diagrams have no universally adopted notation. What does the course suggest asking first when reading one?

- A. How many classes does each box contain?
- B. Which UML version was used?
- C. Who drew the diagram?
- D. What view is this? ✅

**Answer:** D

**Explanation:** The four questions, in order, are: what view is this, what are the major parts, what is each part responsible for, and what do the relationships mean.

### W6.2-12 · MCQ · AB3

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** AB3 architecture components · **Source:** W6.2c · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`, `docs/diagrams/ArchitectureDiagram.puml`

**Question:** The AB3 architecture diagram shows the main components `UI`, `Logic`, `Model` and `Storage` (plus `Main` and `Commons`). According to the Developer Guide, which component is responsible for executing commands?

- A. `Logic` ✅
- B. `UI`
- C. `Model`
- D. `Storage`

**Answer:** A

**Explanation:** Each component is a major part with one coherent responsibility: UI is the user interface, Logic is the command executor, Model holds the app's data in memory, and Storage reads and writes data on the hard disk.

### W6.2-13 · MCQ · AB3

**Type:** MCQ · **Topic:** [W6.2] Architecture Diagrams · **Subtopic:** AB3 component interfaces · **Source:** W6.2c · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`, `src/main/java/seedu/address/logic/Logic.java`, `src/main/java/seedu/address/logic/LogicManager.java`

**Question:** In AB3 the Logic component declares its API in `Logic.java` and implements it in `LogicManager`; other components use it through `Logic`. In architectural terms, what is `Logic.java`?

- A. The Logic component's deployment view
- B. The interface: the agreement on how the rest of the system may use the component ✅
- C. A dependency of the Logic component on the UI
- D. A detailed design decision private to the component

**Answer:** B

**Explanation:** An interface states how the rest of the system may use a component. The Developer Guide notes that using the interface rather than the concrete class prevents outside components from being coupled to the implementation.

## [W6.3] Logging

### W6.3-01 · MCQ

**Type:** MCQ · **Topic:** [W6.3] Logging · **Subtopic:** Logging · **Source:** W6.3a · **Basis:** bold

**Question:** What is logging?

- A. Displaying error messages to the user
- B. Saving the user's data to a file
- C. The deliberate recording of certain information during a program execution for future reference ✅
- D. Stepping through a program with a debugger

**Answer:** C

**Explanation:** Logging records information — typically to a log file — so that it can be consulted later, for example when troubleshooting.

### W6.3-02 · MCQ

**Type:** MCQ · **Topic:** [W6.3] Logging · **Subtopic:** Black box analogy · **Source:** W6.3a · **Basis:** bold

**Question:** In what way is a log file like the black box of an airplane?

- A. It is hidden from the users
- B. It is hard to open without special tools
- C. It records everything that happens
- D. It does not prevent problems, but helps in understanding what went wrong after the fact ✅

**Answer:** D

**Explanation:** Logs can be used to find out how the system behaved before and during an incident, so that action can be taken to prevent a recurrence.

### W6.3-03 · MCQ

**Type:** MCQ · **Topic:** [W6.3] Logging · **Subtopic:** Logging levels · **Source:** W6.3b · **Basis:** body

**Question:** A Java program's logging level is set to `WARNING`. What happens to this call?
```
logger.log(Level.INFO, "going to start processing");
```

- A. It is not written to the log file, because `INFO` is a lower level than `WARNING` ✅
- B. It is written to the log file with a warning prefix
- C. It throws an exception
- D. It is written only to the console

**Answer:** A

**Explanation:** Each message has a level, and messages below the configured level are not logged. This is how logging systems let you change the logging intensity without editing the code.

### W6.3-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W6.3] Logging · **Subtopic:** AB3 LogsCenter · **Source:** W6.3b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/commons/core/LogsCenter.java`, `docs/Logging.md`

**Question:** AB3 classes obtain a logger with `LogsCenter.getLogger(Class)`, and `LogsCenter` holds a single logging level setting for the app. Which feature of logging systems does this make use of?

- A. Logs can be read only by developers
- B. Logging intensity can be changed easily, without editing every logging statement ✅
- C. Log messages are shown to the user as errors
- D. Logging removes the need for exceptions

**Answer:** B

**Explanation:** Most programming environments come with logging systems that allow logging to be enabled, disabled or changed in intensity easily; AB3 centralises this in `LogsCenter`, built on `java.util.logging`.

## [W6.4] Debugging

### W6.4-01 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Debugging · **Source:** W6.4a · **Basis:** bold

**Question:** What is debugging?

- A. Testing a program to discover whether it has problems
- B. Reviewing code to improve its style
- C. The process of finding the cause of a known problem in a program, and fixing it ✅
- D. Adding assertions to a program

**Answer:** C

**Explanation:** Debugging starts from a known problem. The hard part is usually the diagnosis rather than the correction.

### W6.4-02 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Mistake, defect, infection, failure · **Source:** W6.4a · **Basis:** bold

**Question:** A programmer wrongly believes list indices start at 1 and writes a loop that starts at index 1. When the loop runs, the variable `total` holds too small a value, and the screen shows a wrong total. Which term names the wrong value held in `total`?

- A. Mistake
- B. Defect
- C. Failure
- D. Infection ✅

**Answer:** D

**Explanation:** The mistake is the human act (the wrong belief), the defect is the resulting error in the software (the loop), the infection is the resulting error in the program state at run time, and the failure is the externally visible wrong behavior.

### W6.4-03 · MRQ

**Type:** MRQ · **Topic:** [W6.4] Debugging · **Subtopic:** Why debugging is hard · **Source:** W6.4a · **Basis:** bold

**Question:** Which factors make debugging hard, according to the course? (Select all that apply.)

- A. The defect can be far from where the failure shows up ✅
- B. You cannot inspect everything in a running program's state ✅
- C. The wrong assumption that caused the bug can also create a blind spot while debugging ✅
- D. Defects exist only in code, never in configuration or data

**Answer:** A, B, C

**Explanation:** The crash site is not always the crime scene, state is too large to inspect fully, and wrong assumptions persist — which is why debugging must be driven by evidence from the running program. Defects can also lie in configuration, data, dependencies or requirements.

### W6.4-04 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** How not to debug · **Source:** W6.4a · **Basis:** body

**Question:** A developer keeps changing whatever looks suspicious and re-running the program, hoping the failure goes away. What does the course call this, and what is wrong with it?

- A. Shotgun debugging; it produces activity without producing useful information ✅
- B. Delta debugging; it is too slow
- C. Rubber duck debugging; it needs a second person
- D. Backward slicing; it inspects too much code

**Answer:** A

**Explanation:** Stare-and-hope, shotgun debugging, fixing the symptom and keeping no record all generate activity without information. A productive debugging step is one that rules something out.

### W6.4-05 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** TRAFFIC · **Source:** W6.4b · **Basis:** bold

**Question:** In the TRAFFIC mnemonic for systematic debugging, what do the letters stand for?

- A. Test, Run, Analyse, Fix, Finish, Inspect, Commit
- B. Track, Reproduce, Automate and simplify, Find origins, Focus, Isolate, Correct ✅
- C. Trace, Record, Assert, Fail fast, Fix, Integrate, Check
- D. Track, Review, Automate, Find, Fix, Improve, Close

**Answer:** B

**Explanation:** TRAFFIC is a map rather than a mandatory sequence. The most common mistake is jumping straight to C (Correct).

### W6.4-06 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** First step of debugging · **Source:** W6.4b · **Basis:** bold

**Question:** According to the course, what should the first step of debugging be?

- A. Adding print statements around the error message
- B. Trying the most likely fix
- C. Stating what the correct behavior is, and why ✅
- D. Running the full test suite

**Answer:** C

**Explanation:** Without a statement of the correct behavior, in testable form, there is nothing to compare against — and sometimes the fault turns out to be in the test rather than the code.

### W6.4-07 · MRQ

**Type:** MRQ · **Topic:** [W6.4] Debugging · **Subtopic:** Reproduce, automate, simplify · **Source:** W6.4b · **Basis:** bold

**Question:** Which statements about reproducing and simplifying a failure are correct? (Select all that apply.)

- A. A reliable reproduction makes every experiment cheap and later confirms the fix worked ✅
- B. Automating the reproduction as a test case early makes the hypothesis loop cheap ✅
- C. The smaller the failing case, the smaller the search space ✅
- D. Halving the input always finds the failing element
- E. If a failure cannot be reproduced, it cannot be investigated

**Answer:** A, B, C

**Explanation:** Halving can fail when the failure needs two elements that the halving separates. An unreproducible failure can still be investigated through stack traces, logs and dumps, aiming to make it more observable or more frequent.

### W6.4-08 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Prioritising candidate origins · **Source:** W6.4b · **Basis:** bold

**Question:** You have several candidate origins for a defect. Which ordering of suspicion does the course suggest as a starting bias?

- A. The compiler first, then libraries, then your own code
- B. Long-stable code before recently changed code
- C. All candidates equally, checked in file order
- D. Recently changed code before long-stable code, your code before library code, and library code before the compiler or OS ✅

**Answer:** D

**Explanation:** Candidate origins are not equally likely, and the checking order decides how long the search takes. The bias is a starting point, not a rule.

### W6.4-09 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Binary search techniques · **Source:** W6.4b · **Basis:** bold

**Question:** A feature worked in last month's release but fails today, and the commit history between them is long. Which technique fits best?

- A. Binary search over versions, e.g. with `git bisect` ✅
- B. Binary search over the execution
- C. A field watchpoint
- D. Rubber duck debugging

**Answer:** A

**Explanation:** Bisecting the commit history finds when the code stopped working. Binary search over the execution instead pauses a single run partway to find when the state first becomes infected.

### W6.4-10 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Isolating · **Source:** W6.4b · **Basis:** bold

**Question:** While isolating a defect, a developer makes three changes at once, re-runs, and the failure disappears. What is the problem?

- A. Nothing; the bug is fixed
- B. The outcome does not tell which change produced it; change one thing at a time ✅
- C. Too few changes were made
- D. The failure should have been reproduced on another machine

**Answer:** B

**Explanation:** Isolating means running one check, discarding what it rules out and repeating. Changing several things at once makes the result uninformative.

### W6.4-11 · MRQ

**Type:** MRQ · **Topic:** [W6.4] Debugging · **Subtopic:** Making bugs easier to find · **Source:** W6.4b · **Basis:** bold

**Question:** Which practices make bugs easier to find, according to the course? (Select all that apply.)

- A. Failing fast, by checking preconditions and invariants on entry to a method ✅
- B. Keeping scopes small ✅
- C. Preferring immutability ✅
- D. Logging at component boundaries ✅
- E. Catching all exceptions silently so the program keeps running

**Answer:** A, B, C, D

**Explanation:** The cheapest bug to debug is the one that announces itself. Fail-fast checks, small scopes, immutability, incremental development, static checks and boundary logging all help; silently swallowing exceptions hides the infection.

### W6.4-12 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Choosing a probe · **Source:** W6.4c · **Basis:** bold

**Question:** A failure happens only occasionally on users' machines and cannot be reproduced locally. Which probe is the natural choice?

- A. A debugger with a line breakpoint
- B. Temporary print statements
- C. Logging ✅
- D. Evaluate expression

**Answer:** C

**Explanation:** Logging is the disciplined, permanent form of printing: leveled, filterable and still there when the failure happens on a user's machine. A debugger suits problems that are reproducible and local.

### W6.4-13 · MRQ

**Type:** MRQ · **Topic:** [W6.4] Debugging · **Subtopic:** Debuggers · **Source:** W6.4c · **Basis:** bold

**Question:** Which statements about debuggers are correct? (Select all that apply.)

- A. A debugger lets you pause a running program and inspect it without modifying its code ✅
- B. It works from outside your program, as a separate process ✅
- C. Breakpoints take effect only when the program is started through the debugger ✅
- D. Setting a breakpoint adds a line to the source file

**Answer:** A, B, C

**Explanation:** A debugger attaches to the program and asks the runtime to pause it; the code is untouched and the paused program keeps all its state, so further questions cost seconds.

### W6.4-14 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Breakpoint kinds · **Source:** W6.4c · **Basis:** bold

**Question:** A loop runs 10,000 times and the problem appears only when `i == 4137`. Which kind of breakpoint is most suitable?

- A. Line breakpoint
- B. Field watchpoint
- C. Exception breakpoint
- D. Conditional breakpoint ✅

**Answer:** D

**Explanation:** A conditional breakpoint pauses only when its condition holds. A line breakpoint would pause on every pass, an exception breakpoint pauses when an exception is thrown, and a field watchpoint pauses when a field's value changes.

### W6.4-15 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Stepping commands · **Source:** W6.4c · **Basis:** bold

**Question:** The debugger is paused on `total += item.price();`. Which command pauses next at the first line inside `price()`?

- A. Step into ✅
- B. Step over
- C. Step out
- D. Resume

**Answer:** A

**Explanation:** Step into moves into the method called on the current line. Step over runs the line, including the calls it makes, as one step; step out finishes the current method; resume runs to the next breakpoint.

### W6.4-16 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Field watchpoints · **Source:** W6.4c · **Basis:** body

**Question:** A cart's field `items` is assigned a list once, at declaration. Later, another method empties that same list through a second reference. Why would a field watchpoint on `items` not catch this?

- A. Watchpoints work only on static fields
- B. A watchpoint fires when the field is reassigned, not when the object it refers to is modified ✅
- C. Watchpoints cannot be set on collections
- D. Watchpoints fire only when an exception is thrown

**Answer:** B

**Explanation:** A field watchpoint pauses when a field's value changes. Emptying the list mutates the object but leaves the field pointing at the same object.

### W6.4-17 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Reading stack traces · **Source:** W6.4c · **Basis:** bold

**Question:** When reading a stack trace to locate a problem, which frame does the course tell you to look for after the exception type and message?

- A. The bottom frame, usually `main`
- B. The topmost frame overall
- C. The topmost frame in your own code ✅
- D. The frame with the highest line number

**Answer:** C

**Explanation:** The topmost frame overall is usually library code. The topmost frame in your code is where the failure surfaced in your program; the cause is often in a caller further down that passed the bad value.

### W6.4-18 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** AI assistants in debugging · **Source:** W6.4c · **Basis:** bold

**Question:** How should a suggestion from an AI assistant about the cause of a defect be treated?

- A. As the diagnosis, since AI can analyse all the code at once
- B. As useless, since AI cannot run the code
- C. As a replacement for reproducing the failure
- D. As a hypothesis to be made falsifiable and verified against the running program ✅

**Answer:** D

**Explanation:** AI assistants are useful for explaining error messages and proposing hypotheses, but unreliable at diagnosing defects in code they cannot run — they can be confident, fluent and incorrect.

### W6.4-19 · MRQ

**Type:** MRQ · **Topic:** [W6.4] Debugging · **Subtopic:** Finishing a fix · **Source:** W6.4d · **Basis:** bold

**Question:** Once you have a candidate fix, which steps does the course list for finishing the job? (Select all that apply.)

- A. Look for the defect's relatives, such as copy-pasted blocks ✅
- B. Verify against the reproduction, then run the full test suite ✅
- C. Add a regression test that fails before the fix and passes after ✅
- D. Remove temporary probes such as stray print statements ✅
- E. Bundle the fix with unrelated cleanup in one commit

**Answer:** A, B, C, D

**Explanation:** The fix should be committed on its own, apart from unrelated cleanup, so that the history stays bisectable. Deliberately added assertions and logging can stay.

### W6.4-20 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Fix the cause · **Source:** W6.4d · **Basis:** bold

**Question:** A total is sometimes negative because of a defect elsewhere. A developer adds `if (total < 0) total = 0;` just before the total is displayed. What is the course's view of this?

- A. It removes the symptom but leaves the cause; the fix should address the cause, not the infection or the failure ✅
- B. It is a proper fix because the failure no longer appears
- C. It is acceptable if a comment explains it
- D. It is a design change rather than a code fix

**Answer:** A

**Explanation:** Special-casing a failing input or clamping a bad value hides the symptom. One should not settle on a fix until the whole failure can be explained.

### W6.4-21 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Heisenbugs · **Source:** W6.4e · **Basis:** bold

**Question:** A failure disappears whenever a print statement is added or a debugger is attached. What is this kind of defect called?

- A. A regression
- B. A Heisenbug ✅
- C. A performance bug
- D. A design error

**Answer:** B

**Explanation:** A Heisenbug changes or vanishes when you try to observe it, because observation perturbs timing or memory layout. Concurrency bugs are a related category that depends on timing and scheduling.

### W6.4-22 · MCQ

**Type:** MCQ · **Topic:** [W6.4] Debugging · **Subtopic:** Delta debugging and tracing · **Source:** W6.4e · **Basis:** bold

**Question:** What does delta debugging automate?

- A. Setting breakpoints at every line
- B. Recording every executed line for later examination
- C. Simplifying the failing case by systematically removing parts of the input while it still fails ✅
- D. Searching the commit history for the breaking change

**Answer:** C

**Explanation:** Delta debugging automates simplification and copes with cases where plain halving fails. Recording the execution is tracing, and searching versions is bisecting.

---

# Week 7

## [W7.1] Requirements: Use Cases

### W7.1-01 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** What a use case is · **Source:** W7.1a · **Basis:** bold

**Question:** What does a use case describe?

- A. The internal steps the system takes to store data
- B. The classes needed to implement a feature
- C. A short statement of a feature from the user's perspective, with its benefit
- D. An interaction between the user and the system for a specific functionality of the system ✅

**Answer:** D

**Explanation:** A use case describes a set of action sequences, including variants, that yields an observable result of value to an actor. The role–function–benefit statement is a user story.

### W7.1-02 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Use cases and requirement types · **Source:** W7.1a · **Basis:** bold

**Question:** Which kind of requirements do use cases capture?

- A. Functional requirements ✅
- B. Non-functional requirements
- C. Both equally well
- D. Only requirements that do not involve an actor

**Answer:** A

**Explanation:** Use cases capture functional requirements. They are not good for requirements that do not involve a user interacting with the system, and performance requirements do not belong in a use case.

### W7.1-03 · MRQ

**Type:** MRQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Actors · **Source:** W7.1b · **Basis:** bold

**Question:** Which statements about actors in use cases are correct? (Select all that apply.)

- A. An actor is a role played by an external entity, such as a human user or another system ✅
- B. A use case can involve multiple actors ✅
- C. A single person can play many roles ✅
- D. Many persons can play a single role ✅
- E. An actor can be involved in only one use case

**Answer:** A, B, C, D

**Explanation:** An actor is a role, not a person: one person may be a Student, a Guest and a Tutor, and many kinds of people may play Student. An actor can take part in many use cases, and actors can be other systems.

### W7.1-04 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Levels of detail · **Source:** W7.1b · **Basis:** bold

**Question:** Consider three use cases for a learning management system: (i) Conduct a survey, (ii) Take the survey, (iii) Answer survey question. Which statement is correct?

- A. They are at the same level of detail
- B. They are at different levels, with (i) the highest and (iii) the lowest ✅
- C. Only (i) is a valid use case
- D. Use cases must all be written at the lowest level

**Answer:** B

**Explanation:** Use cases can be specified at various levels of detail. The advice is to start high-level, work towards lower levels, and not mix levels.

### W7.1-05 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Writing steps · **Source:** W7.1c · **Basis:** bold

**Question:** Which step is written the way the course recommends for a use case?

- A. User right-clicks the text box and chooses 'clear'.
- B. LMS saves the file into the cache and indicates success.
- C. User clears the input. ✅
- D. User presses Ctrl+S and the system writes to the database.

**Answer:** C

**Explanation:** A use case describes only externally visible behavior, and a step gives the actor's intention, not the mechanics. UI details and internal workings are left out.

### W7.1-06 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** MSS and extensions · **Source:** W7.1c · **Basis:** bold

**Question:** What is the Main Success Scenario (MSS) of a use case?

- A. The scenario most likely to fail
- B. The list of all alternative flows
- C. The set of preconditions for the use case
- D. The most straightforward interaction, which assumes that nothing goes wrong ✅

**Answer:** D

**Explanation:** The MSS (also called the Basic Course of Action or Main Flow of Events) should be self-contained and give a complete usage scenario. Extensions are add-ons describing exceptional or alternative flows.

### W7.1-07 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Extension numbering · **Source:** W7.1c · **Basis:** body

**Question:** In a use case, what does an extension numbered `*a` indicate, compared with one numbered `3a`?

- A. `*a` can happen at any step; `3a` can happen just after step 3 ✅
- B. `*a` happens before step 1; `3a` after step 3
- C. `*a` is optional; `3a` is compulsory
- D. `*a` is an inclusion; `3a` is an extension

**Answer:** A

**Explanation:** By the convention used, `3a`, `3b` are extensions that can occur just after step 3, with sub-steps `3a1`, `3a2`; `*a` can occur at any time, such as the user cancelling.

### W7.1-08 · MRQ

**Type:** MRQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Preconditions and guarantees · **Source:** W7.1c · **Basis:** bold

**Question:** Which statements about preconditions and guarantees are correct? (Select all that apply.)

- A. Preconditions specify the state the system is expected to be in before the use case starts ✅
- B. Guarantees specify what the use case promises at the end of its operation ✅
- C. Guarantees do for a use case what acceptance criteria do for a user story ✅
- D. Preconditions are the first steps of the MSS

**Answer:** A, B, C

**Explanation:** "User is logged in" is a typical precondition. Guarantees state the observable result that decides whether the interaction did its job, as acceptance criteria do for user stories.

### W7.1-09 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** What not to list as extensions · **Source:** W7.1c · **Basis:** body

**Question:** Should a use case list "the system crashes" or "power failure" as extensions?

- A. Yes, as `*a` extensions, since they can happen at any step
- B. No, because the system cannot function beyond such catastrophic failures ✅
- C. Yes, but only in the preconditions
- D. No, because extensions may only describe user errors

**Answer:** B

**Explanation:** Extensions describe alternative or exceptional flows the system can respond to. Catastrophic failures are not listed.

### W7.1-10 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** System as an actor · **Source:** W7.1d · **Basis:** bold

**Question:** A system generates daily reports at midnight without any user involvement. What does the course recommend when writing use cases for it?

- A. Write a use case with 'System' as the actor
- B. Write it as an extension of every other use case
- C. Do not use 'System' as an actor; limit use cases to behaviors that involve an external actor ✅
- D. Model the clock as a class

**Answer:** C

**Explanation:** Some use 'System' as an actor for system-initiated behavior, but the course recommends the other camp: a use case such as 'view daily report' qualifies, while 'generate daily report' does not.

### W7.1-11 · MRQ

**Type:** MRQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Advantages of use cases · **Source:** W7.1d · **Basis:** bold

**Question:** Which are advantages of documenting requirements as use cases? (Select all that apply.)

- A. They use a simple notation and plain English, so users can understand them and give feedback ✅
- B. They decouple user intention from mechanism, leaving designers freedom over the UI ✅
- C. Identifying extensions encourages considering all situations ✅
- D. They are well suited to capturing requirements that do not involve user interaction

**Answer:** A, B, C

**Explanation:** The last statement is the main disadvantage: use cases are not good for requirements without a user interacting with the system, so they should not be the sole means of specifying requirements.

### W7.1-12 · MCQ

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** Use cases vs other formats · **Source:** W7.1d · **Basis:** body

**Question:** Which statement about use cases is correct?

- A. Use cases are better than user stories
- B. Use case diagrams contain more detail than textual use cases
- C. Use cases cannot be written at different levels of abstraction
- D. Use case diagrams are less detailed than textual use cases ✅

**Answer:** D

**Explanation:** A use case diagram is a brief visual summary — a 'table of contents' — while the text carries the detail. It is not correct to say one format is better than another; it depends on context.

### W7.1-13 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** AB3 use case extensions · **Source:** W7.1c · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** In the AB3 Developer Guide's "Delete a person" use case, the MSS has four steps, and one extension reads: "3a. The given index is invalid. 3a1. AddressBook shows an error message. Use case resumes at step 2." What does this extension describe?

- A. An alternative flow that can occur just after step 3, after which the main flow continues from step 2 ✅
- B. A precondition that must hold before step 3
- C. A step that is always performed between steps 3 and 4
- D. A guarantee of the use case

**Answer:** A

**Explanation:** Extensions are add-ons to the MSS for exceptional or alternative flows; the number shows the step they follow, and they end with either "Use case ends" or a resume point.

### W7.1-14 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.1] Requirements: Use Cases · **Subtopic:** AB3 use case wording · **Source:** W7.1c · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** The first step of AB3's "Delete a person" use case is written as "User requests to list persons", not "User types `list` and presses Enter". Why is the first wording appropriate?

- A. Because use cases must not mention the user
- B. Because a step gives the intention of the actor, not the mechanics of the UI ✅
- C. Because AB3 has no `list` command
- D. Because use cases document internal system behavior

**Answer:** B

**Explanation:** Omitting UI details leaves flexibility to the UI designer and keeps the use case about externally visible interaction.

## [W7.2] Requirements Documents

### W7.2-01 · MRQ

**Type:** MRQ · **Topic:** [W7.2] Requirements Documents · **Subtopic:** Requirement formats · **Source:** W7.2a · **Basis:** bold

**Question:** Which pairings of requirements format and purpose match the course? (Select all that apply.)

- A. User story — records one negotiable slice of user value ✅
- B. Use case — makes one workflow, and what can go wrong, precise ✅
- C. Glossary — settles what shared terms mean ✅
- D. Feature list — captures requirements that cut across all the other formats

**Answer:** A, B, C

**Explanation:** Requirements are documented in different formats suited to different purposes. A feature list supports scope and delivery discussions; cross-cutting requirements go in supplementary requirements.

### W7.2-02 · MCQ

**Type:** MCQ · **Topic:** [W7.2] Requirements Documents · **Subtopic:** PRD vs SRS · **Source:** W7.2a · **Basis:** bold

**Question:** A team must agree requirements precisely with a customer under a contract that will be audited. Which single-document variant fits?

- A. A product brief
- B. A product requirements document (PRD)
- C. A software requirements specification (SRS) ✅
- D. A feature list

**Answer:** C

**Explanation:** Product-led teams usually write a PRD or product brief. The SRS is its more formal, heavier and more structured counterpart, used where requirements must be agreed precisely, audited or contracted.

### W7.2-03 · MCQ

**Type:** MCQ · **Topic:** [W7.2] Requirements Documents · **Subtopic:** Requirement vs specification · **Source:** W7.2a · **Basis:** bold

**Question:** Which statement is a software specification rather than a requirement?

- A. A member should be able to renew a borrowed book.
- B. Members need a convenient way to keep books longer.
- C. The library wants fewer overdue books.
- D. When a member selects Renew for an eligible loan, the system shall extend the due date by the configured loan period and display the new due date. ✅

**Answer:** D

**Explanation:** A requirements document explains the problem and required outcomes; a specification defines the system's behavior precisely enough to implement and verify it.

### W7.2-04 · MCQ

**Type:** MCQ · **Topic:** [W7.2] Requirements Documents · **Subtopic:** Specification-driven development · **Source:** W7.2a · **Basis:** bold

**Question:** What is specification-driven development?

- A. An approach that relies heavily on a detailed specification to direct the implementation and to judge the work delivered ✅
- B. Developing without written requirements
- C. Writing the specification after the code, from the tests
- D. A process in which only the customer may change the code

**Answer:** A

**Explanation:** The detailed specification is the single source of truth for what to build; the approach is especially relevant when most of the work is done by AI agents.

### W7.2-05 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.2] Requirements Documents · **Subtopic:** AB3 requirements appendix · **Source:** W7.2a · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** The "Appendix: Requirements" of the AB3 Developer Guide contains product scope, a user story table, use cases, non-functional requirements and a glossary. Which observation from the course does this reflect?

- A. Requirements should be documented in one format only
- B. Requirements are documented in different formats, each suited to a different purpose, and some teams keep them in a single document ✅
- C. Use cases can replace all other formats
- D. A glossary is needed only for formal SRS documents

**Answer:** B

**Explanation:** Prose, user stories, use cases, supplementary requirements and a glossary each serve a purpose; AB3 keeps them together in one place.

## [W7.3] Design: High-Level View

### W7.3-01 · MCQ

**Type:** MCQ · **Topic:** [W7.3] Design: High-Level View · **Subtopic:** Two aspects of design · **Source:** W7.3a · **Basis:** bold

**Question:** Deciding what commands a product offers and how its screens behave for users belongs to which aspect of software design?

- A. Implementation/internal design
- B. Detailed design
- C. Product/external design ✅
- D. Architectural design

**Answer:** C

**Explanation:** Product (external) design is about the external behavior that meets users' requirements; implementation (internal) design is about how the product will be implemented to give that behavior.

### W7.3-02 · MCQ

**Type:** MCQ · **Topic:** [W7.3] Design: High-Level View · **Subtopic:** Top-down vs bottom-up · **Source:** W7.3b · **Basis:** bold

**Question:** "Top-down design is better than bottom-up design." What is the course's position?

- A. True, in all cases
- B. False; bottom-up is always better
- C. True, except for small systems
- D. False; it depends — top-down suits big, novel systems, while bottom-up can suit variations of existing systems or reuse of existing components ✅

**Answer:** D

**Explanation:** Multi-level design can be done top-down, bottom-up or as a mix. Bottom-up is not usually scalable for bigger systems but may be preferable when there are many components to reuse.

### W7.3-03 · MRQ

**Type:** MRQ · **Topic:** [W7.3] Design: High-Level View · **Subtopic:** Agile design · **Source:** W7.3c · **Basis:** bold

**Question:** Which statements describe agile design, as contrasted with full upfront design? (Select all that apply.)

- A. The design is emergent rather than defined up front ✅
- B. Some initial architectural modeling is done at the very beginning ✅
- C. The design is expected to change over the product's lifetime ✅
- D. A fully documented set of models is produced before coding starts

**Answer:** A, B, C

**Explanation:** Agile design does just enough initial modeling to get going and lets the overall design emerge over time, although the architecture is expected to stay relatively stable.

### W7.3-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.3] Design: High-Level View · **Subtopic:** AB3 user guide vs developer guide · **Source:** W7.3a · **Basis:** bold · **AB3:** `docs/UserGuide.md`, `docs/DeveloperGuide.md`

**Question:** AB3's User Guide documents each command's format and what it does for the user; the Developer Guide's Design section documents components and classes. Which pairing with the two aspects of design is right?

- A. User Guide — product/external design; Developer Guide — implementation/internal design ✅
- B. User Guide — internal design; Developer Guide — external design
- C. Both describe internal design
- D. Both describe external design

**Answer:** A

**Explanation:** External design is the product's behavior as users see it; internal design is how the product is implemented to deliver that behavior.

## [W7.4] Design: Fundamentals

### W7.4-01 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Abstraction · **Source:** W7.4a · **Basis:** bold

**Question:** What is the guiding principle of abstraction?

- A. Every detail should be visible at every level
- B. Only details relevant to the current perspective or task at hand need to be considered ✅
- C. Details should be hidden only from end users
- D. Higher levels should repeat the details of lower levels

**Answer:** B

**Explanation:** Abstraction deals with complexity by establishing a level of interest and suppressing the details below it. It can be applied repeatedly and is not limited to data or control abstraction.

### W7.4-02 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Coupling · **Source:** W7.4b · **Basis:** bold

**Question:** What is coupling?

- A. A measure of how focused a component's responsibilities are
- B. The number of classes in a component
- C. A measure of the degree of dependence between components, classes, methods and so on ✅
- D. The process of combining components into a whole

**Answer:** C

**Explanation:** Coupling measures dependence; low coupling means a component depends less on others. How related and focused a component's responsibilities are is cohesion.

### W7.4-03 · MRQ

**Type:** MRQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Effects of high coupling · **Source:** W7.4b · **Basis:** bold

**Question:** As coupling in a system increases, which effects follow? (Select all that apply.)

- A. Maintenance becomes harder because changes ripple to coupled modules ✅
- B. Testing and reuse of a module become harder ✅
- C. The risk of regressions increases ✅
- D. Integration becomes easier because everything is connected

**Answer:** A, B, C

**Explanation:** High coupling makes maintenance, integration, testing and reuse harder. Integration gets harder, not easier: more components must be integrated at once, or more drivers and stubs are needed.

### W7.4-04 · MRQ

**Type:** MRQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** When A is coupled to B · **Source:** W7.4c · **Basis:** body

**Question:** In which of these cases is class `A` coupled to class `B`? (Select all that apply.)

- A. `A` calls a method of `B` ✅
- B. `A` receives an object of `B` as a parameter ✅
- C. `A` inherits from `B` ✅
- D. `B` inherits from `A`
- E. `A` and `B` were written by the same developer

**Answer:** A, B, C

**Explanation:** X is coupled to Y if some changes to Y may require changes in X. A child class is coupled to its parent, not the other way round, and authorship has nothing to do with coupling.

### W7.4-05 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Types of coupling · **Source:** W7.4d · **Basis:** bold

**Question:** Module `Report` calls `Printer.print(data, true)`, where the boolean tells `Printer` whether to take its 'draft' path or its 'final' path. Which type of coupling does the flag introduce?

- A. Data coupling
- B. Content coupling
- C. External coupling
- D. Control coupling ✅

**Answer:** D

**Explanation:** Control coupling is when one module controls the flow of another by passing it information on what to do, such as a flag. Passing plain data as parameters is data coupling.

### W7.4-06 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Content and common coupling · **Source:** W7.4d · **Basis:** bold

**Question:** Two modules both read and write the same global variable. Which type of coupling is this?

- A. Common (global) coupling ✅
- B. Content coupling
- C. Temporal coupling
- D. Subclass coupling

**Answer:** A

**Explanation:** Common/global coupling is two modules sharing the same global data. Content coupling is one module modifying or relying on the internal workings of another.

### W7.4-07 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** External coupling · **Source:** W7.4d · **Basis:** bold

**Question:** Two modules must both follow a file format defined by a government agency. Which type of coupling is this?

- A. Data coupling
- B. External coupling ✅
- C. Common coupling
- D. Control coupling

**Answer:** B

**Explanation:** External coupling is when two modules share an externally imposed convention such as a data format, communication protocol or device interface.

### W7.4-08 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Cohesion · **Source:** W7.4e · **Basis:** bold

**Question:** Which statement about cohesion is correct?

- A. Lower cohesion is better, as it spreads responsibilities widely
- B. Cohesion measures dependence between components
- C. Higher cohesion is better: related functionality is kept together and unrelated things are kept out ✅
- D. Cohesion applies only to methods, not to classes

**Answer:** C

**Explanation:** Cohesion measures how strongly related and focused the responsibilities of a component are. Low cohesion lowers understandability, maintainability and reusability.

### W7.4-09 · MCQ

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Judging cohesion · **Source:** W7.4f · **Basis:** panel

**Question:** A `Payroll` class calculates salaries and writes them to the database. It also pops up an error dialog if the database cannot be reached. What is the design issue?

- A. The class is too tightly coupled to its subclasses
- B. The class violates encapsulation
- C. The class has too many instances
- D. The class is less cohesive, because it interacts with the user as well as doing payroll and database work ✅

**Answer:** D

**Explanation:** A highly cohesive component keeps related functionalities together and keeps unrelated things out; showing dialogs is unrelated to the payroll responsibility.

### W7.4-10 · MRQ

**Type:** MRQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** Forms of cohesion · **Source:** W7.4f · **Basis:** bold

**Question:** Cohesion can be present in several forms. Which of these are examples from the course? (Select all that apply.)

- A. Code related to a single concept is kept together ✅
- B. Code that is invoked close together in time is kept together, such as initialization code ✅
- C. Code that manipulates the same data structure is kept together ✅
- D. Code written by the same developer is kept together

**Answer:** A, B, C

**Explanation:** The three forms named are grouping by concept, by time of invocation and by the data structure manipulated.

### W7.4-11 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** AB3 coupling through interfaces · **Source:** W7.4b, W7.4c · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/LogicManager.java`, `docs/DeveloperGuide.md`

**Question:** AB3's `LogicManager` constructor is `LogicManager(Model model, Storage storage)`, where `Model` and `Storage` are interfaces. What does this achieve in terms of coupling?

- A. It keeps `LogicManager` from being coupled to the concrete implementations `ModelManager` and `StorageManager` ✅
- B. It removes all dependence of Logic on Model and Storage
- C. It makes `ModelManager` depend on `LogicManager`
- D. It increases coupling, because two parameters are passed

**Answer:** A

**Explanation:** Logic still depends on the Model and Storage APIs, but the Developer Guide notes that interacting through the interface rather than the concrete class prevents coupling to that component's implementation.

### W7.4-12 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** AB3 CommandResult flags · **Source:** W7.4d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/CommandResult.java`, `src/main/java/seedu/address/ui/MainWindow.java`

**Question:** AB3's `CommandResult` carries the booleans `showHelp` and `exit`. `MainWindow#executeCommand` checks `isShowHelp()` and `isExit()` to decide whether to open the help window or close the app. Which type of coupling between Logic and UI do these flags best illustrate?

- A. Content coupling
- B. Control coupling ✅
- C. Common/global coupling
- D. Temporal coupling

**Answer:** B

**Explanation:** The flags are information about what to do next, which steers the UI's control flow — the course's example of control coupling is passing a flag.

### W7.4-13 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** AB3 subclass coupling · **Source:** W7.4d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/commands/DeleteCommand.java`, `src/main/java/seedu/address/logic/commands/Command.java`

**Question:** `DeleteCommand extends Command` in AB3, and `Command.java` makes no mention of `DeleteCommand`. Which statement about coupling is correct?

- A. `Command` is coupled to `DeleteCommand` by subclass coupling
- B. Neither is coupled to the other
- C. `DeleteCommand` is coupled to `Command` by subclass coupling, but not the reverse ✅
- D. They are coupled only by temporal coupling

**Answer:** C

**Explanation:** Subclass coupling arises when a class inherits from another; the child is coupled to the parent, not the other way round.

### W7.4-14 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.4] Design: Fundamentals · **Subtopic:** AB3 cohesion in parsing · **Source:** W7.4e, W7.4f · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/ArgumentTokenizer.java`, `src/main/java/seedu/address/logic/parser/ParserUtil.java`

**Question:** AB3 splits command parsing across classes: `ArgumentTokenizer` breaks the argument string up by prefixes, `ParserUtil` converts strings into model types such as `Name` and `Phone`, and each `XYZCommandParser` builds one kind of command. Which design quality does this division mainly serve?

- A. Lower cohesion
- B. Faster parsing
- C. Higher coupling
- D. Higher cohesion: each class keeps one focused, related set of responsibilities ✅

**Answer:** D

**Explanation:** Cohesion is about how strongly related and focused a component's responsibilities are; keeping unrelated tasks in separate classes raises it.

## [W7.6] Integration Approaches

### W7.6-01 · MCQ

**Type:** MCQ · **Topic:** [W7.6] Integration Approaches · **Subtopic:** Timing of integration · **Source:** W7.6a · **Basis:** bold

**Question:** Why is "late and one-time" integration not recommended?

- A. It tends to reveal many incompatibilities near the end, causing major rework and delivery delays ✅
- B. It prevents developers from working in parallel
- C. It needs too many stubs
- D. It makes each component smaller

**Answer:** A

**Explanation:** Waiting until all components are complete and integrating near the end surfaces incompatibilities late. Integrating early and frequently, in small steps, avoids this.

### W7.6-02 · MCQ

**Type:** MCQ · **Topic:** [W7.6] Integration Approaches · **Subtopic:** Walking skeleton · **Source:** W7.6a · **Basis:** body

**Question:** A team first builds a 'walking skeleton' of the product and then all developers flesh it out in parallel, one feature at a time, integrating after each feature. Which integration approach is this?

- A. Late and one-time
- B. Early and frequent ✅
- C. Big-bang
- D. Bottom-up only

**Answer:** B

**Explanation:** Early and frequent integration means integrating early and evolving each part in parallel in small steps, re-integrating frequently.

### W7.6-03 · MCQ

**Type:** MCQ · **Topic:** [W7.6] Integration Approaches · **Subtopic:** Big-bang vs incremental · **Source:** W7.6b · **Basis:** bold

**Question:** What is the main drawback of big-bang integration?

- A. It requires drivers for every component
- B. It can be used only in sequential projects
- C. It uncovers too many problems at the same time, making debugging and bug-fixing more complex ✅
- D. It forces integration to happen too early

**Answer:** C

**Explanation:** Big-bang integrates all (or too many) components at once. Incremental integration brings in a few at a time, surfacing problems in a manageable way.

### W7.6-04 · MCQ

**Type:** MCQ · **Topic:** [W7.6] Integration Approaches · **Subtopic:** Stubs and drivers · **Source:** W7.6c · **Basis:** bold

**Question:** Which pairing is correct for incremental integration?

- A. Top-down needs drivers; bottom-up needs stubs
- B. Neither needs stubs or drivers
- C. Both need only stubs
- D. Top-down needs stubs for lower-level components; bottom-up may need drivers to exercise them ✅

**Answer:** D

**Explanation:** In top-down integration higher-level components come first, so stubs stand in for lower-level ones. In bottom-up, the UI may not exist yet, so drivers are needed to test the lower-level components.

### W7.6-05 · MCQ

**Type:** MCQ · **Topic:** [W7.6] Integration Approaches · **Subtopic:** Sandwich integration · **Source:** W7.6c · **Basis:** bold

**Question:** What is sandwich integration?

- A. A mix of top-down and bottom-up, so that the two 'meet' in the middle ✅
- B. Integrating components in alphabetical order
- C. Integrating all components at once after separate testing
- D. Integrating the middle layer first, then both ends

**Answer:** A

**Explanation:** Based on the order of integration, incremental integration can be top-down, bottom-up or sandwich, which does both.

### W7.6-06 · MCQ · AB3

**Type:** MCQ · **Topic:** [W7.6] Integration Approaches · **Subtopic:** AB3 CI and integration timing · **Source:** W7.6a · **Basis:** bold · **AB3:** `.github/workflows/gradle.yml`

**Question:** AB3's GitHub Actions workflow builds and tests the whole project on every push and every pull request. In terms of integration timing and frequency, which approach does this support?

- A. Late and one-time integration
- B. Early and frequent integration ✅
- C. Big-bang integration at the end of each milestone
- D. Top-down integration only

**Answer:** B

**Explanation:** Building and testing after each change means integration problems surface in small steps and soon after they are introduced, rather than near the end of the project.

## [W7.7] Project Mgt: Scheduling and Tracking

### W7.7-01 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Milestones · **Source:** W7.7a · **Basis:** bold

**Question:** What is a milestone?

- A. A task that takes more than a month
- B. The final delivery date only
- C. A marker of significant progress, often at the end of a stage ✅
- D. A meeting to review task estimates

**Answer:** C

**Explanation:** A milestone marks significant progress — for example each intermediate product release — and dependencies and priorities are considered in deciding what goes into each.

### W7.7-02 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Buffers · **Source:** W7.7b · **Basis:** bold

**Question:** A team lead doubles every task estimate so that delays will not be noticed. What does the course advise instead?

- A. Use no buffers, so that estimates stay honest
- B. Let each developer decide their own buffer privately
- C. Add the buffer only to the last task
- D. Keep explicit buffers rather than inflating task estimates into hidden ones ✅

**Answer:** D

**Explanation:** A buffer is time set aside to absorb unforeseen delays. Explicit buffers make incorrect effort estimates easier to detect, which is feedback for improving future estimates.

### W7.7-03 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Kanban boards and issue trackers · **Source:** W7.7c · **Basis:** bold

**Question:** On a Kanban board, the "In progress" column holds many more cards than the others. What can this reveal?

- A. A buildup of work that needs attention ✅
- B. The cards are too large
- C. The project is ahead of schedule
- D. The board has too few columns

**Answer:** A

**Explanation:** Kanban boards give a simple visual way to track task status as cards move across columns; a crowded column signals a buildup. Issue trackers are commonly used to track task assignment and progress.

### W7.7-04 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Well-defined tasks · **Source:** W7.7d · **Basis:** bold

**Question:** Which task in a work breakdown structure is ill-defined?

- A. Implement component X
- B. Do some more testing ✅
- C. Test the delete functionality
- D. Find a suitable tool for testing the UI

**Answer:** B

**Explanation:** All tasks should be well-defined: it should be clear when the task is considered done. "Some more" gives no such criterion.

### W7.7-05 · MRQ

**Type:** MRQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Work breakdown structure · **Source:** W7.7d · **Basis:** bold

**Question:** Which statements about a Work Breakdown Structure (WBS) are correct? (Select all that apply.)

- A. It is a hierarchical decomposition of the project's total scope into smaller, manageable pieces of work ✅
- B. It may include effort estimates and prerequisite tasks ✅
- C. Effort is traditionally measured in person hours, days or months ✅
- D. It shows tasks as horizontal bars against time

**Answer:** A, B, C

**Explanation:** A WBS breaks complex tasks into subtasks with estimates and prerequisites. Bars against time describe a Gantt chart.

### W7.7-06 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Gantt vs PERT · **Source:** W7.7e, W7.7f · **Basis:** bold

**Question:** Which chart shows the order of tasks as a directed graph and helps identify the critical path?

- A. Gantt chart
- B. Kanban board
- C. PERT chart ✅
- D. Work breakdown structure

**Answer:** C

**Explanation:** A PERT chart uses nodes for task effort estimates and arrows for precedence, showing which tasks can run concurrently and the shortest completion time. A Gantt chart is a 2-D bar chart of time versus tasks.

### W7.7-07 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Critical path · **Source:** W7.7f · **Basis:** bold

**Question:** A project's critical path adds up to six days. A task that is NOT on the critical path, estimated at half a day, takes a full day instead, and still finishes before any task that depends on it needs it. What is the earliest the project can now finish?

- A. Five and a half days
- B. Seven days
- C. Six and a half days
- D. Six days ✅

**Answer:** D

**Explanation:** The critical path is the path in which any delay directly affects the project duration. A small delay in a non-critical task leaves the duration unchanged, whereas a delay on the critical path extends it.

### W7.7-08 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Team structures · **Source:** W7.7g · **Basis:** bold

**Question:** In which team structure is every member equal in responsibility and accountability, with decisions made by consensus?

- A. Egoless (democratic) team ✅
- B. Strict hierarchy team
- C. Chief programmer team
- D. Surgical team

**Answer:** A

**Explanation:** The egoless team tends to find good solutions to hard problems because everyone contributes, but risks falling apart for lack of an authority figure to resolve conflicts.

### W7.7-09 · MCQ

**Type:** MCQ · **Topic:** [W7.7] Project Mgt: Scheduling and Tracking · **Subtopic:** Chief programmer team · **Source:** W7.7g · **Basis:** bold

**Question:** What characterises a chief programmer team?

- A. Every member reports to a different boss
- B. A single authoritative figure makes the major decisions, assisted by specialists ✅
- C. All members vote on the architecture
- D. The team has no assigned roles

**Answer:** B

**Explanation:** The chief programmer makes decisions such as the architecture, and success relies heavily on that person's technical and managerial skills. A strict hierarchy instead has a rigidly defined organization in which each member reports to a single boss.

---

# Week 8

## [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics

### W8.1-01 · MCQ

**Type:** MCQ · **Topic:** [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics · **Subtopic:** Label, role, multiplicity · **Source:** W8.1a · **Basis:** panel

**Question:** An association between `Student` and `Teacher` is drawn with the text "mentored by" along the line, the word "mentor" at the `Teacher` end, and "1" at the `Teacher` end. What are these three, in that order?

- A. Role, label, navigability
- B. Multiplicity, role, label
- C. Label, role, multiplicity ✅
- D. Label, navigability, multiplicity

**Answer:** C

**Explanation:** A label names the association, a role names what an end plays in it, and a multiplicity says how many objects take part at that end. All are optional decorations on an association.

### W8.1-02 · MCQ

**Type:** MCQ · **Topic:** [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics · **Subtopic:** Why object diagrams omit multiplicity · **Source:** W8.1c · **Basis:** body

**Question:** Why are multiplicities omitted in object diagrams?

- A. Objects cannot be linked to more than one class
- B. Multiplicities apply only to inheritance
- C. UML forbids numbers in object diagrams
- D. Each association line in an object diagram connects to exactly one object, so the multiplicity is always 1 ✅

**Answer:** D

**Explanation:** Object diagrams show actual objects and links; methods and multiplicities are left out, and names are underlined with a colon before the class name.

### W8.1-03 · MCQ

**Type:** MCQ · **Topic:** [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics · **Subtopic:** Labels and roles in object diagrams · **Source:** W8.1c · **Basis:** bold

**Question:** In an object diagram, when is it worth showing an association label or role on a link?

- A. When it adds value, for example when there are multiple associations between the same two classes ✅
- B. Never, because labels belong only in class diagrams
- C. Always, because object diagrams must repeat everything in the class diagram
- D. Only when the link has a multiplicity

**Answer:** A

**Explanation:** Association labels and roles can be omitted unless they add value. With two associations between the same classes (say major and minor), a link without a label is ambiguous.

### W8.1-04 · MCQ

**Type:** MCQ · **Topic:** [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics · **Subtopic:** Matching object and class diagrams · **Source:** W8.1c · **Basis:** bold

**Question:** An object diagram shows one `Unit` object linked to one `Item` object. Class diagram X gives the `Unit`–`Item` association multiplicity `1` at the Item end; class diagram Y gives it `*`. Which class diagrams can the object diagram be an instance of?

- A. Only X
- B. Both X and Y ✅
- C. Only Y
- D. Neither

**Answer:** B

**Explanation:** Multiple object diagrams can correspond to one class diagram, and here both class diagrams allow one Unit to be linked to one Item.

### W8.1-05 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.1] [Revisiting] Drawing Class/Object Diagrams - Basics · **Subtopic:** AB3 code to class diagram · **Source:** W8.1a · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/AddressBook.java`, `docs/diagrams/ModelClassDiagram.puml`

**Question:** In AB3, the class `AddressBook` has the field `private final UniquePersonList persons;`. How does this show up in the Model class diagram?

- A. As a dashed dependency arrow from `UniquePersonList` to `AddressBook`
- B. As an inheritance triangle between the two classes
- C. As an association from `AddressBook` to `UniquePersonList` with multiplicity 1 ✅
- D. It does not appear, because fields are never drawn

**Answer:** C

**Explanation:** Associations are the main connections among classes in a class diagram, and a reference held as a field is typically modelled as an association — here with multiplicity 1, since an AddressBook has exactly one such list.

## [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate

### W8.2-01 · MCQ

**Type:** MCQ · **Topic:** [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate · **Subtopic:** Associations as attributes · **Source:** W8.2c · **Basis:** bold

**Question:** The association "a `Piece` may be on a `Square`" (multiplicity `0..1`) is to be shown in a class diagram. Which option is NOT correct?

- A. Draw it as a line between `Piece` and `Square`
- B. Show it as an attribute `isOn: Square [0..1]` in `Piece`
- C. Show it as an attribute with a default value of `null`
- D. Show both the line and the attribute for this same association ✅

**Answer:** D

**Explanation:** An association can be shown as an attribute instead of a line, in the form `name: type [multiplicity] = default value` — but as either an attribute or a line, not both. A line is preferred as it is easier to spot.

### W8.2-02 · MCQ

**Type:** MCQ · **Topic:** [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate · **Subtopic:** Notes vs constraints · **Source:** W8.2a, W8.2b · **Basis:** bold

**Question:** A UML note attached to the `Account` class contains the text `{balance >= 0}`. What is this?

- A. A constraint, given inside a note within curly braces ✅
- B. An association label
- C. A stereotype
- D. An attribute with a default value

**Answer:** A

**Explanation:** Notes augment diagrams with additional information; a constraint is given inside a note within curly braces, in natural language or a formal notation such as OCL.

### W8.2-03 · MRQ

**Type:** MRQ · **Topic:** [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate · **Subtopic:** What class diagrams can show · **Source:** W8.2d · **Basis:** bold

**Question:** Which class-like entities can a class diagram show besides ordinary classes? (Select all that apply.)

- A. Enumerations ✅
- B. Abstract classes ✅
- C. Interfaces ✅
- D. Use cases

**Answer:** A, B, C

**Explanation:** A class diagram can show enumerations, abstract classes and interfaces, and relationships such as inheritance, composition, aggregation and dependency. Use cases belong to use case diagrams.

### W8.2-04 · MCQ

**Type:** MCQ · **Topic:** [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate · **Subtopic:** Exact multiplicities · **Source:** W8.2d · **Basis:** panel

**Question:** A class diagram shows the `Board`–`Square` association with multiplicity `100` at the `Square` end. Which statement matches the diagram?

- A. A Board can have 100 or fewer Squares
- B. A Board must have exactly 100 Squares ✅
- C. A Board can have at least 100 Squares
- D. A Square can be on 100 Boards

**Answer:** B

**Explanation:** A single number means exactly that many. "100 or fewer" would be written `0..100`.

### W8.2-05 · MCQ

**Type:** MCQ · **Topic:** [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate · **Subtopic:** Association class judgement · **Source:** W8.2e · **Basis:** bold

**Question:** `Man` and `Woman` are linked by a 'married to' association, and the date of the marriage must be recorded. Where does it belong?

- A. As an attribute of `Man`
- B. As an attribute of `Woman`
- C. In an association class such as `Marriage`, because the date is information about the association itself ✅
- D. In a note attached to the diagram

**Answer:** C

**Explanation:** An association class represents additional information about an association. It is implemented as a normal class holding references to the two ends.

### W8.2-06 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.2] [Revisiting] Drawing Class/Object Diagrams - Intermediate · **Subtopic:** AB3 relationships in diagrams · **Source:** W8.2d · **Basis:** bold · **AB3:** `docs/diagrams/ModelClassDiagram.puml`, `src/main/java/seedu/address/model/AddressBook.java`

**Question:** AB3's Model class diagram connects `AddressBook` to the `ReadOnlyAddressBook` interface with a dashed line ending in a triangle at `ReadOnlyAddressBook`. Which line of code does this correspond to?

- A. `public class AddressBook extends ReadOnlyAddressBook`
- B. `import seedu.address.model.ReadOnlyAddressBook;`
- C. `private ReadOnlyAddressBook addressBook;`
- D. `public class AddressBook implements ReadOnlyAddressBook` ✅

**Answer:** D

**Explanation:** Class diagrams can show interfaces, and a dashed line with a triangle pointing at the interface denotes that the class implements it. A solid line with a triangle would be class inheritance.

## [W8.3] [Revisiting] Drawing Sequence Diagrams

### W8.3-01 · MCQ

**Type:** MCQ · **Topic:** [W8.3] [Revisiting] Drawing Sequence Diagrams · **Subtopic:** Reference frames · **Source:** W8.3c · **Basis:** bold

**Question:** What is a `ref` frame used for in a UML sequence diagram?

- A. To omit a segment of the interaction and show it as a separate sequence diagram ✅
- B. To show a segment that repeats
- C. To show that two interactions run in parallel
- D. To show that an object is deleted

**Answer:** A

**Explanation:** Reference frames help to break complicated sequence diagrams into parts, or simply to leave out details that are not of interest.

### W8.3-02 · MCQ

**Type:** MCQ · **Topic:** [W8.3] [Revisiting] Drawing Sequence Diagrams · **Subtopic:** Parallel paths · **Source:** W8.3d · **Basis:** bold

**Question:** A sequence diagram shows `Logic` calling `CloudServer#poll()` and `LocalData#poll()` inside a `par` frame. What does this imply about a Java implementation?

- A. The two calls are alternatives; only one is made
- B. The implementation is likely to be multi-threaded ✅
- C. The second call is optional
- D. The two calls are made in a loop

**Answer:** B

**Explanation:** UML uses `par` frames for parallel paths. A normal Java program cannot do several things at the same time, so parallel paths suggest multi-threading.

### W8.3-03 · MCQ

**Type:** MCQ · **Topic:** [W8.3] [Revisiting] Drawing Sequence Diagrams · **Subtopic:** Unrolling a chained call · **Source:** W8.3b · **Basis:** panel

**Question:** The statement `new Quote().print();` appears inside `if (isFirstPage) { … }`. How should it be shown in a sequence diagram?

- A. As one arrow labelled `new Quote().print()`
- B. As a self-invocation on the caller
- C. As two interactions inside an optional-path frame: creation of the `Quote` object, then a `print()` call on it ✅
- D. As a `par` frame containing both calls

**Answer:** C

**Explanation:** The chained expression is 'unrolled' into object creation followed by the method call. The `if` without an `else` makes it an optional path, and since the object is not kept in a variable it can be considered deleted soon after.

### W8.3-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.3] [Revisiting] Drawing Sequence Diagrams · **Subtopic:** AB3 object creation in a sequence diagram · **Source:** W8.3a · **Basis:** bold · **AB3:** `docs/diagrams/DeleteSequenceDiagram.puml`, `src/main/java/seedu/address/logic/parser/AddressBookParser.java`

**Question:** AB3's delete sequence diagram shows `AddressBookParser` creating a `DeleteCommandParser`, calling `parse("1")` on it, and the parser's lifeline then being marked as destroyed. Which line in `AddressBookParser#parseCommand` does this correspond to?

- A. `return new DeleteCommand(index);`
- B. `DeleteCommandParser.parse(arguments);`
- C. `private final DeleteCommandParser parser = new DeleteCommandParser();`
- D. `case DeleteCommand.COMMAND_WORD -> new DeleteCommandParser().parse(arguments);` ✅

**Answer:** D

**Explanation:** The parser object is created, used once and not stored, so the sequence diagram shows creation, one call, and deletion. The diagram models this one scenario of interactions.

## [W8.4] Testing: Types

### W8.4-01 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Integration testing · **Source:** W8.4a · **Basis:** bold

**Question:** What is integration testing meant to discover?

- A. Bugs in the 'glue code' — how different parts of the software work together ✅
- B. Whether the whole system meets the user requirements
- C. Bugs inside a single method tested in isolation
- D. Whether the code follows the coding standard

**Answer:** A

**Explanation:** Integration testing checks whether different parts integrate as expected; such bugs often come from a mismatch between what a part is assumed to do and what it actually does.

### W8.4-02 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Unit vs integration test cases · **Source:** W8.4b · **Basis:** bold

**Question:** `Car` depends on `Engine` and `Wheel`. After unit testing `Car` with stubs, a tester reruns exactly the same test cases with the real `Engine` and `Wheel` and calls it integration testing. What does the course say?

- A. That is all integration testing requires
- B. Integration testing is not simply repeating unit test cases with the actual dependencies; it adds test cases that focus on the interactions between the parts ✅
- C. Integration tests must always use stubs
- D. Unit tests should be deleted once integration tests exist

**Answer:** B

**Explanation:** Integration tests are additional test cases aimed at interactions. In practice developers often use a hybrid of unit and integration tests to minimise the need for stubs.

### W8.4-03 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Hybrid approach · **Source:** W8.4b · **Basis:** bold

**Question:** In the hybrid unit+integration approach for `Car`, `Engine` and `Wheel`, what is given up compared with the pure approach?

- A. `Engine` and `Wheel` are never unit tested
- B. No integration test cases are written
- C. `Car` is never tested in isolation from its dependencies ✅
- D. Stubs must be written for every class

**Answer:** C

**Explanation:** The hybrid approach drops the step of unit testing `Car` with stubs and tests it with the real, already unit-tested dependencies, so no stubs are needed and the risk from the dependencies is small.

### W8.4-04 · MRQ

**Type:** MRQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** System testing · **Source:** W8.4c · **Basis:** bold

**Question:** Which statements about system testing are correct? (Select all that apply.)

- A. It takes the whole system and tests it against the system specification ✅
- B. Its test cases are based on the specified external behavior of the system ✅
- C. It includes testing against non-functional requirements ✅
- D. It is done on individual classes with stubs for the rest

**Answer:** A, B, C

**Explanation:** System testing is whole-system testing against the system specification, typically by a QA team, and covers non-functional aspects such as performance, load, security, compatibility, usability and portability.

### W8.4-05 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Types of non-functional testing · **Source:** W8.4c · **Basis:** body

**Question:** Checking that a system keeps working when a very large number of users use it at once is which kind of testing?

- A. Usability testing
- B. Portability testing
- C. Compatibility testing
- D. Load testing (also called stress or scalability testing) ✅

**Answer:** D

**Explanation:** Load testing checks behavior under heavy load. Usability testing looks at ease of use, portability at different platforms and compatibility at working with other systems.

### W8.4-06 · MRQ

**Type:** MRQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** GUI testing · **Source:** W8.4d · **Basis:** bold

**Question:** Which statements about testing GUIs are correct? (Select all that apply.)

- A. Testing a GUI is harder than testing a CLI or an API ✅
- B. Moving as much logic as possible out of the GUI can make GUI testing easier ✅
- C. There are tools that can automate GUI testing, such as TestFX for JavaFX ✅
- D. GUI testing is easier than API testing because it needs no extra coding

**Answer:** A, B, C

**Explanation:** GUIs support many operations in arbitrary order, are harder to automate and can look or behave differently across environments. With logic moved out, most testing can bypass the GUI through the API.

### W8.4-07 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Acceptance testing · **Source:** W8.4e · **Basis:** bold

**Question:** What is acceptance testing, also known as user acceptance testing (UAT)?

- A. Testing the system to ensure it meets the user requirements ✅
- B. Testing individual units before integration
- C. Testing done by developers using their own product daily
- D. Testing whether the code is accepted by the compiler

**Answer:** A

**Explanation:** UAT gives the customer assurance that the system does what it is intended to do; it is often a prerequisite to project sign-off.

### W8.4-08 · MRQ

**Type:** MRQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** System vs acceptance testing · **Source:** W8.4f · **Basis:** body

**Question:** Which statements correctly compare system testing with acceptance testing? (Select all that apply.)

- A. Both involve testing the whole system ✅
- B. System testing is done against the system specification; acceptance testing against the requirements specification ✅
- C. Acceptance testing typically has more user involvement ✅
- D. If system testing is done adequately, acceptance testing is unnecessary
- E. Acceptance testing focuses more on positive test cases ✅

**Answer:** A, B, C, E

**Explanation:** System testing is done by the project's testers on a test bed with positive and negative cases; acceptance testing by a team representing the customer, at or near the deployment site. Passing system tests does not necessarily mean passing acceptance testing.

### W8.4-09 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Why acceptance can still fail · **Source:** W8.4f · **Basis:** bold

**Question:** A system passes all its system tests. Why might it still fail acceptance testing?

- A. Acceptance tests use stubs, which behave differently
- B. It may conform to the system specification yet fail to solve the user's problem, or behave differently in the deployment environment ✅
- C. System tests cover only non-functional requirements
- D. Acceptance tests are run before system tests

**Answer:** B

**Explanation:** Flaws in the system design, or subtle differences between the test bed and the deployment environment, can let a system pass system tests but not meet user requirements.

### W8.4-10 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Alpha vs beta testing · **Source:** W8.4g · **Basis:** bold

**Question:** A selected subset of target users tries the product in their own offices as part of their normal work. What kind of testing is this?

- A. Alpha testing
- B. System testing
- C. Beta testing ✅
- D. Dogfooding

**Answer:** C

**Explanation:** Beta testing is done by a selected subset of target users in their natural work setting. Alpha testing is done by users under controlled conditions set by the development team; dogfooding is the creators themselves using the product.

### W8.4-11 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Dogfooding · **Source:** W8.4h · **Basis:** bold

**Question:** How does dogfooding differ from regular testing?

- A. It is automated, while regular testing is manual
- B. It is done by a testing team under controlled conditions
- C. It tests only non-functional requirements
- D. The creators become end users of their own product, rather than pretending to be end users ✅

**Answer:** D

**Explanation:** Dogfooding is when creators use their own product to experience it as end users do. Long-term, authentic use can reveal what short, simulated testing misses — provided observations are deliberately collected.

### W8.4-12 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Scripted vs exploratory · **Source:** W8.4i · **Basis:** bold

**Question:** "Scripted testing means the tests are written in a scripting language, and manual testing is called exploratory testing." Is this correct?

- A. No: scripted means a predetermined set of test cases, which need not be executable; exploratory means devising test cases on the fly from earlier results ✅
- B. Partly: the first half is right
- C. Yes
- D. No: both terms refer to automated testing

**Answer:** A

**Explanation:** In scripted testing, test cases are written first from the expected behavior and then performed. Exploratory testing is simultaneous learning, test design and test execution; it is usually, but not by definition, manual.

### W8.4-13 · MRQ

**Type:** MRQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Names for exploratory testing · **Source:** W8.4i · **Basis:** bold

**Question:** Which of these are other names for exploratory testing? (Select all that apply.)

- A. Reactive testing ✅
- B. Error guessing technique ✅
- C. Attack-based testing ✅
- D. Bug hunting ✅
- E. Regression testing

**Answer:** A, B, C, D

**Explanation:** The first four are all names for exploratory testing. Regression testing is re-testing to detect unintended effects of changes.

### W8.4-14 · MCQ

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** Which approach is better · **Source:** W8.4j · **Basis:** bold

**Question:** Which statement reflects the course's view on scripted and exploratory testing?

- A. Scripted testing is always better
- B. A mix is better: scripted testing is more systematic, while exploratory testing depends on the tester's experience and intuition and can reach some bugs sooner ✅
- C. Exploratory testing is always better
- D. Neither is useful for critical systems

**Answer:** B

**Explanation:** Scripted testing is likely to find more bugs given enough time but costs more to set up. Exploratory testing can find problems quickly but should not be the sole means of testing a critical system.

### W8.4-15 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** AB3 test types · **Source:** W8.4a, W8.4b · **Basis:** bold · **AB3:** `docs/Testing.md`

**Question:** AB3's Testing guide describes three types of tests: unit tests, integration tests, and hybrid tests that "combine unit and integration testing", such as `LogicManagerTest`. Which practice from the course does the third type reflect?

- A. Exploratory testing
- B. Acceptance testing
- C. The hybrid unit+integration approach, used in practice to minimise the need for stubs ✅
- D. Alpha testing

**Answer:** C

**Explanation:** Rather than testing a unit with stubs and then again with real dependencies, the hybrid approach tests it together with its real dependencies and includes its unit-level cases.

### W8.4-16 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.4] Testing: Types · **Subtopic:** AB3 logic outside the GUI · **Source:** W8.4d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/ui/MainWindow.java`, `src/test/java/seedu/address/logic/LogicManagerTest.java`

**Question:** In AB3, `MainWindow#executeCommand` simply calls `logic.execute(commandText)` and displays the result, while parsing and command execution live in the Logic component and are tested by tests such as `LogicManagerTest` that call `logic.execute(...)` directly. Which GUI-testing advice does this design follow?

- A. Automate GUI tests with record-and-replay tools
- B. Test only through the GUI, as end users would
- C. Avoid testing the Logic component, since the GUI covers it
- D. Move as much logic as possible out of the GUI, so most behavior can be tested through the API ✅

**Answer:** D

**Explanation:** With little logic in the GUI, the GUI can be bypassed and the rest tested through automated API-level tests, leaving fewer test cases that must go through the GUI.

## [W8.5] Testing: Intermediate Concepts

### W8.5-01 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Dependency injection · **Source:** W8.5a · **Basis:** bold

**Question:** What is dependency injection?

- A. 'Injecting' objects to replace current dependencies with a different object, such as a stub ✅
- B. Downloading third-party libraries during the build
- C. Adding more dependencies to a class to make it more capable
- D. Calling a dependency's private methods from a test

**Answer:** A

**Explanation:** Dependency injection replaces a dependency with another object; it is often used to inject stubs so the SUT can be tested in isolation. It is not a technique for increasing dependencies.

### W8.5-02 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Implementing dependency injection · **Source:** W8.5b · **Basis:** bold

**Question:** `Payroll` uses a `SalaryManager`. A test calls `payroll.setSalaryManager(new SalaryManagerStub())`, where `SalaryManagerStub extends SalaryManager` and returns hard-coded salaries. Which OOP mechanism makes this substitution work?

- A. Encapsulation
- B. Polymorphism ✅
- C. Method overloading
- D. Static binding

**Answer:** B

**Explanation:** Polymorphism can be used to implement dependency injection: the stub is a subtype of the dependency, so it can be passed where the real object is expected and its overridden methods are the ones called.

### W8.5-03 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Testability · **Source:** W8.5c · **Basis:** bold

**Question:** Which version of a greeting method is more testable, and why?

- A. `getGreeting()` that reads the system clock itself, because it has no parameters
- B. Both are equally testable
- C. `getGreeting(int hour)`, because a test can pass any hour and check the result at any time of day ✅
- D. Neither can be tested automatically

**Answer:** C

**Explanation:** Testability indicates how easy it is to test an SUT and depends on design and implementation. A method that reads the clock itself can be tested for the afternoon case only in the afternoon or by tampering with the clock.

### W8.5-04 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Branch vs condition coverage · **Source:** W8.5d · **Basis:** bold

**Question:** For the decision `if (x > 2 && x < 44)`, what is the minimum number of test cases for 100% decision (branch) coverage and for 100% condition coverage, respectively?

- A. 1 and 2
- B. 2 and 2
- C. 2 and 3 ✅
- D. 3 and 4

**Answer:** C

**Explanation:** Decision coverage needs the whole expression to be true once and false once. Condition coverage needs each sub-expression to be true and false at least once; because of short-circuiting, `x < 44` is evaluated only when `x > 2` is true, so three cases are needed.

### W8.5-05 · MRQ

**Type:** MRQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Coverage types · **Source:** W8.5d · **Basis:** bold

**Question:** Which pairings of coverage type and basis are correct? (Select all that apply.)

- A. Statement coverage — lines of code executed ✅
- B. Function/method coverage — functions executed ✅
- C. Path coverage — possible paths through the code executed ✅
- D. Entry/exit coverage — number of classes instantiated

**Answer:** A, B, C

**Explanation:** Test coverage measures the extent to which testing exercises the code. Entry/exit coverage is based on the possible calls to, and exits from, the operations in the SUT.

### W8.5-06 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Highest intensity · **Source:** W8.5d · **Basis:** panel

**Question:** Which of these, if achieved at 100%, gives the highest intensity of testing?

- A. Statement coverage
- B. Branch coverage
- C. Condition coverage
- D. Path coverage ✅

**Answer:** D

**Explanation:** 100% path coverage means all possible paths have been executed, which is close to exhaustive testing and very hard to reach, especially with loops. Even so, it cannot cover paths the programmer forgot to write.

### W8.5-07 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Counting paths · **Source:** W8.5d · **Basis:** body

**Question:** How many test cases are needed, at minimum, for 100% path coverage of this method?
```
int findRate(int input) {
    if (input == 0) return 0;
    int cap = 100 / input;
    if (cap < 0) return -1;
    else return cap;
}
```

- A. 2
- B. 3 ✅
- C. 4
- D. 5

**Answer:** B

**Explanation:** There are three paths: the early return for zero, the negative-cap return and the final return — triggered, for example, by 0, -5 and 8.

### W8.5-08 · MCQ

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Using coverage · **Source:** W8.5e · **Basis:** bold

**Question:** How can coverage analysis improve the quality of testing?

- A. By showing what the tests miss, so that test cases can be added — for example to cover missed branches ✅
- B. By removing the need for regression testing
- C. By proving the code has no bugs once coverage is 100%
- D. By generating the missing tests automatically

**Answer:** A

**Explanation:** Coverage is usually measured with coverage analysis tools, and gaps in coverage point to where more test cases are needed.

### W8.5-09 · MRQ

**Type:** MRQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** Test-driven development · **Source:** W8.5f, W8.5g · **Basis:** bold

**Question:** Which statements about Test-Driven Development (TDD) are correct? (Select all that apply.)

- A. Tests are written before the corresponding functional code ✅
- B. Functionality and tests evolve in small increments ✅
- C. It guarantees that the code is testable ✅
- D. All test cases must be written before any functional code
- E. JUnit can be used only when following TDD

**Answer:** A, B, C

**Explanation:** TDD advocates writing each test before the SUT code it covers, in small steps — not writing all tests up front. Tools like JUnit work with or without TDD.

### W8.5-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** AB3 dependency injection · **Source:** W8.5a, W8.5b · **Basis:** bold · **AB3:** `src/test/java/seedu/address/logic/commands/AddCommandTest.java`, `src/main/java/seedu/address/logic/commands/AddCommand.java`

**Question:** In AB3, `AddCommand#execute(Model model)` receives its `Model` as a parameter. `AddCommandTest` passes in a `ModelStubWithPerson` (which implements `Model`) instead of a `ModelManager`. What is this an example of?

- A. Test-driven development
- B. Dependency injection of a stub, made possible by polymorphism ✅
- C. Path coverage
- D. Exploratory testing

**Answer:** B

**Explanation:** Because the command depends on the `Model` interface and receives it from outside, a test can inject a stub that implements the same interface, isolating `AddCommand` from the real model.

### W8.5-11 · MCQ · AB3

**Type:** MCQ · **Topic:** [W8.5] Testing: Intermediate Concepts · **Subtopic:** AB3 coverage tooling · **Source:** W8.5e · **Basis:** bold · **AB3:** `build.gradle`

**Question:** AB3's `build.gradle` applies the `jacoco` plugin and produces a coverage report after the tests run. What does this give the developers?

- A. A guarantee that every bug is found
- B. Automatic generation of unit tests
- C. A measure of how much of the code the tests exercise, which helps to find untested parts ✅
- D. A check that the code follows the coding standard

**Answer:** C

**Explanation:** Test coverage is a metric of the extent to which testing exercises the code, usually measured with a coverage analysis tool such as JaCoCo.

---

# Week 9

## [W9.1] Conceptual Class Diagrams (aka OODMs)

### W9.1-01 · MCQ

**Type:** MCQ · **Topic:** [W9.1] Conceptual Class Diagrams (aka OODMs) · **Subtopic:** Domain modeling · **Source:** W9.1a · **Basis:** bold

**Question:** What is domain modeling?

- A. Modeling the classes of the software solution
- B. Modeling the user interface
- C. Modeling the deployment of the system
- D. Modeling the problem domain, i.e. how things actually work in the real world ✅

**Answer:** D

**Explanation:** Domain modeling helps in understanding the problem domain. It can use a domain-specific notation, UML, or other general-purpose notations such as an organization chart.

### W9.1-02 · MCQ

**Type:** MCQ · **Topic:** [W9.1] Conceptual Class Diagrams (aka OODMs) · **Subtopic:** CCD vs class diagram · **Source:** W9.1a · **Basis:** bold

**Question:** What is the main difference between a conceptual class diagram (CCD) and a class diagram of the software?

- A. A CCD models the class structure of the problem domain; a class diagram models the solution domain ✅
- B. A CCD has fewer classes
- C. A CCD is not a UML diagram
- D. A CCD shows behavior; a class diagram shows structure

**Answer:** A

**Explanation:** Both use class diagram notation and both show structure, not behavior. CCDs, also called OO domain models, do not contain solution-specific classes such as `DatabaseConnection`.

### W9.1-03 · MRQ

**Type:** MRQ · **Topic:** [W9.1] Conceptual Class Diagrams (aka OODMs) · **Subtopic:** CCD notation · **Source:** W9.1a · **Basis:** bold

**Question:** Which statements about conceptual class diagrams are correct? (Select all that apply.)

- A. Their notation is a subset of the class diagram notation ✅
- B. They omit methods ✅
- C. They omit navigability ✅
- D. They show the behavior of the problem domain

**Answer:** A, B, C

**Explanation:** CCDs represent the class structure of the problem domain, with methods and navigability left out. To show behavior, other diagrams such as sequence diagrams are used.

### W9.1-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.1] Conceptual Class Diagrams (aka OODMs) · **Subtopic:** AB3 model diagram is not a CCD · **Source:** W9.1a · **Basis:** bold · **AB3:** `docs/diagrams/ModelClassDiagram.puml`

**Question:** AB3's Model class diagram contains `Person`, `Name`, `Phone` and `Tag`, and also `ModelManager`, `UniquePersonList`, `UserPrefs` and directed association arrows. Why is it a class diagram of the solution rather than a conceptual class diagram?

- A. Because it has more than five classes
- B. Because it includes solution-specific classes and shows navigability, which CCDs do not ✅
- C. Because it is drawn with PlantUML
- D. Because it models people, who are not part of a problem domain

**Answer:** B

**Explanation:** CCDs model only the problem domain and omit navigability and methods. Classes like `ModelManager` exist only in the software solution.

## [W9.2] Activity Diagrams

### W9.2-01 · MCQ

**Type:** MCQ · **Topic:** [W9.2] Activity Diagrams · **Subtopic:** Activity diagrams · **Source:** W9.2a · **Basis:** bold

**Question:** What are activity diagrams used to model?

- A. The class structure of the problem domain
- B. The interactions between specific objects in one scenario
- C. Workflows: the flow in which a process or set of tasks is executed ✅
- D. The components of a system and their dependencies

**Answer:** C

**Explanation:** Software projects often involve workflows, such as processing an insurance claim or the execution flow of an algorithm, and understanding them matters for project success.

### W9.2-02 · MCQ

**Type:** MCQ · **Topic:** [W9.2] Activity Diagrams · **Subtopic:** Parallel vs alternate paths · **Source:** W9.2a · **Basis:** panel

**Question:** In a burger shop workflow, three workers prepare the drinks, burgers and desserts at the same time, and the customer collects the food only when all three are ready. How is this modelled in an activity diagram?

- A. As alternate paths, of which exactly one is taken
- B. As three separate activity diagrams
- C. As a loop repeated three times
- D. As parallel paths, all of which must complete before the flow continues ✅

**Answer:** D

**Explanation:** Parallel paths require every branch to finish before execution passes the point where they join. Alternate paths, such as paying by voucher or by cash, take only one branch.

### W9.2-03 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.2] Activity Diagrams · **Subtopic:** AB3 activity diagram · **Source:** W9.2a · **Basis:** bold · **AB3:** `docs/diagrams/CommitActivityDiagram.puml`, `docs/DeveloperGuide.md`

**Question:** The AB3 Developer Guide contains a diagram that starts with "User executes command" and then branches on whether the command commits the address book, to summarise what happens when a user executes a new command. What type of UML diagram is it?

- A. Activity diagram ✅
- B. Object diagram
- C. Sequence diagram
- D. Class diagram

**Answer:** A

**Explanation:** It models a workflow with an alternate path, which is what activity diagrams are for.

## [W9.3] Conceptualizing a Design

### W9.3-01 · MCQ

**Type:** MCQ · **Topic:** [W9.3] Conceptualizing a Design · **Subtopic:** Modeling before coding · **Source:** W9.3a · **Basis:** bold

**Question:** What can models be used for before coding starts, according to the course?

- A. Only to document decisions already made
- B. To analyze and design the software, e.g. checking whether a class structure can produce the desired behavior ✅
- C. To replace the need for requirements
- D. To measure code quality

**Answer:** B

**Explanation:** Modeling sample interactions shows whether the planned classes can deliver the behavior, what API each class needs, and whether more classes are needed.

### W9.3-02 · MCQ

**Type:** MCQ · **Topic:** [W9.3] Conceptualizing a Design · **Subtopic:** Discovering APIs · **Source:** W9.3b, W9.3c · **Basis:** body

**Question:** A designer draws sequence diagrams of a player issuing `newgame` and `clear x y` to a `TextUi`, then of what `TextUi` needs from `Logic`. What is the main thing this technique produces?

- A. The final code of `Logic`
- B. A list of test cases
- C. The operations each class's API needs, such as `Logic#clearCellAt(x, y)` ✅
- D. The multiplicities of associations

**Answer:** C

**Explanation:** Each modelled interaction reveals methods the participating classes must offer. The same technique works for architecture-level APIs.

### W9.3-03 · MCQ

**Type:** MCQ · **Topic:** [W9.3] Conceptualizing a Design · **Subtopic:** How much to model · **Source:** W9.3c · **Basis:** body

**Question:** What does the course say about the level of detail of UML diagrams used while designing components?

- A. Every design must be captured in complete, formal UML diagrams
- B. Sequence diagrams must be drawn for every method
- C. Diagrams should be drawn only after the code is finished
- D. Rough sketches are fine; draw sequence diagrams when unsure which operations are needed or to verify the class structure ✅

**Answer:** D

**Explanation:** It is not necessary to draw elaborate diagrams capturing all details of the design.

## [W9.4] Architecture Diagrams: Drawing

### W9.4-01 · MRQ

**Type:** MRQ · **Topic:** [W9.4] Architecture Diagrams: Drawing · **Subtopic:** Drawing architecture diagrams · **Source:** W9.4a · **Basis:** bold

**Question:** Which guidelines does the course give for drawing architecture diagrams? (Select all that apply.)

- A. Name each component by its responsibility, not its current implementation ✅
- B. Show only what is architecturally relevant ✅
- C. Use familiar symbols, and explain them in a legend ✅
- D. Use double-headed arrows wherever two components are related

**Answer:** A, B, C

**Explanation:** Arrow directions should be used meaningfully; indiscriminate double-headed arrows hide which dependencies are one-way and which are genuinely bidirectional.

### W9.4-02 · MCQ

**Type:** MCQ · **Topic:** [W9.4] Architecture Diagrams: Drawing · **Subtopic:** Naming components · **Source:** W9.4a · **Basis:** bold

**Question:** Which is the better name for the component that persists data, and why?

- A. `Storage`, because it stays accurate even if the implementation later changes to a database ✅
- B. `JsonFileHandler`, because it says exactly how data is stored
- C. `Data`, because it is shortest
- D. `FileSystem`, because it names the technology

**Answer:** A

**Explanation:** A name based on responsibility survives implementation changes; a name based on the current implementation becomes inaccurate.

### W9.4-03 · MCQ

**Type:** MCQ · **Topic:** [W9.4] Architecture Diagrams: Drawing · **Subtopic:** Too many components · **Source:** W9.4a · **Basis:** bold

**Question:** A draft architecture diagram shows thirty boxes. What does the course say this indicates?

- A. The system is well modularised
- B. It has slipped to a lower level of abstraction than an architecture diagram should have ✅
- C. The diagram needs more arrows
- D. It should be redrawn as a sequence diagram

**Answer:** B

**Explanation:** An architecture diagram should show only what is architecturally relevant, which is usually a handful of components.

### W9.4-04 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.4] Architecture Diagrams: Drawing · **Subtopic:** AB3 architecture diagram naming · **Source:** W9.4a · **Basis:** bold · **AB3:** `docs/diagrams/ArchitectureDiagram.puml`

**Question:** The components in AB3's architecture diagram are called `UI`, `Logic`, `Model`, `Storage`, `Main` and `Commons`, although storage is implemented with JSON files. Which guideline does this naming follow?

- A. Use familiar symbols
- B. Avoid double-headed arrows
- C. Name each component by its responsibility, not its current implementation ✅
- D. Show every class in the diagram

**Answer:** C

**Explanation:** `Storage` remains an accurate name even if the JSON implementation is replaced.

## [W9.5] Design Principles

### W9.5-01 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Separation of concerns · **Source:** W9.5a · **Basis:** bold

**Question:** What does the separation of concerns (SoC) principle say?

- A. Each developer should work on a separate file
- B. Separate testing from development
- C. Keep data and behavior in separate classes
- D. Separate the code into distinct sections such that each section addresses a separate concern ✅

**Answer:** D

**Explanation:** Applying SoC reduces functional overlaps among code sections and limits the ripple effect of changes. It applies at class level and at higher levels, and should lead to higher cohesion and lower coupling.

### W9.5-02 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Single responsibility principle · **Source:** W9.5b · **Basis:** bold

**Question:** A `TextUi` class both parses user commands and displays output to the user. Which principle does it violate, and why?

- A. SRP, because it has more than one reason to change — a change in UI formatting or a change in command syntax ✅
- B. LSP, because it has no subclasses
- C. OCP, because it cannot be extended
- D. DIP, because it depends on low-level classes

**Answer:** A

**Explanation:** The single responsibility principle says a class should have one, and only one, reason to change.

### W9.5-03 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Liskov substitution principle · **Source:** W9.5c · **Basis:** bold

**Question:** `Staff#adjustMySalary(int percent)` is specified to work for all positive percentages. `Academic`, a subclass, overrides it to accept only values from 1 to 100. What is the issue?

- A. None; subclasses may narrow what they accept
- B. It violates LSP: the subclass is more restrictive than the behavior specified by the superclass ✅
- C. It violates OCP: the superclass was modified
- D. It violates ISP: the method is unused

**Answer:** B

**Explanation:** LSP says derived classes must be substitutable for their base classes. Code written against `Staff` could pass 150 and break when given an `Academic`, even though Java allows the substitution at the language level.

### W9.5-04 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Open-closed principle · **Source:** W9.5d · **Basis:** bold

**Question:** Which statement is closest to the meaning of the open-closed principle?

- A. A module should be open for modification but closed for extension
- B. A module should stay open to modification for as long as possible
- C. It should be possible to change a module's behavior by extending it, without modifying its code ✅
- D. A module should be closed once it has been tested

**Answer:** C

**Explanation:** OCP: a module should be open for extension but closed for modification. In OOP this often requires separating a module's specification (interface) from its implementation.

### W9.5-05 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Law of Demeter · **Source:** W9.5e · **Basis:** bold

**Question:** Inside `Logic#setMinefield(Minefield mf)`, which statement violates the Law of Demeter?

- A. `mf.init();`
- B. `Cell c = new Cell(); c.init();`
- C. `timer.start();` where `timer` is a field of `Logic`
- D. `mf.getCell(1, 3).clear();` ✅

**Answer:** D

**Explanation:** LoD aims to prevent objects from navigating the internal structure of other objects. Calling a method on a parameter, on one's own field or on an object one created is fine; reaching through `mf` to a `Cell` inside it is talking to a stranger.

### W9.5-06 · MRQ

**Type:** MRQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Names for the Law of Demeter · **Source:** W9.5e · **Basis:** bold

**Question:** Which of these are other names for the Law of Demeter? (Select all that apply.)

- A. Don't talk to strangers ✅
- B. Principle of least knowledge ✅
- C. Don't add people to a late project
- D. You aren't gonna need it

**Answer:** A, B

**Explanation:** "Don't add people to a late project" paraphrases Brooks' law and "You aren't gonna need it" is YAGNI.

### W9.5-07 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Interface segregation principle · **Source:** W9.5f · **Basis:** bold

**Question:** `Payroll#adjustSalaries` takes an `AdminStaff` parameter but uses only its salary methods, never `arrangeMeeting()`. Which principle suggests it should take a `SalariedStaff` interface instead?

- A. Interface segregation principle ✅
- B. Liskov substitution principle
- C. Open-closed principle
- D. YAGNI

**Answer:** A

**Explanation:** ISP: no client should be forced to depend on methods it does not use.

### W9.5-08 · MRQ

**Type:** MRQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Dependency inversion principle · **Source:** W9.5g · **Basis:** bold

**Question:** Which statements about the dependency inversion principle (DIP) are correct? (Select all that apply.)

- A. High-level modules should not depend on low-level modules; both should depend on abstractions ✅
- B. Abstractions should not depend on details; details should depend on abstractions ✅
- C. It can complicate the design by introducing extra abstractions ✅
- D. It is the technique of replacing dependencies with stubs during testing

**Answer:** A, B, C

**Explanation:** Replacing dependencies with test doubles is dependency injection, a different idea. DIP changes the direction of dependencies rather than necessarily reducing their number.

### W9.5-09 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** SOLID · **Source:** W9.5h · **Basis:** body

**Question:** Which principle is NOT one of the five SOLID principles?

- A. Single responsibility principle
- B. Law of Demeter ✅
- C. Interface segregation principle
- D. Liskov substitution principle

**Answer:** B

**Explanation:** SOLID stands for Single responsibility, Open-closed, Liskov substitution, Interface segregation and Dependency inversion.

### W9.5-10 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** YAGNI · **Source:** W9.5i · **Basis:** bold

**Question:** A developer adds a plug-in mechanism "because we might want plug-ins someday", though no requirement calls for it. Which principle advises against this?

- A. DRY
- B. SRP
- C. YAGNI ✅
- D. Law of Demeter

**Answer:** C

**Explanation:** YAGNI — You Aren't Gonna Need It: do not add code simply because you might need it in the future, since predictions about the future often fail and the work may be wasted.

### W9.5-11 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** DRY · **Source:** W9.5j · **Basis:** panel

**Question:** The same discount calculation is implemented in two places, using two different algorithms that give the same results. Does this violate the DRY principle?

- A. No, because the code is not copy-pasted
- B. No, because the results are the same
- C. Yes, but only if both are in the same class
- D. Yes, because one piece of knowledge has two representations ✅

**Answer:** D

**Explanation:** DRY requires every piece of knowledge to have a single, unambiguous, authoritative representation. A functionality implemented twice violates it even if the implementations differ.

### W9.5-12 · MCQ

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** Brooks' law · **Source:** W9.5k · **Basis:** bold

**Question:** A project is running late and the manager proposes adding three developers. What does Brooks' law predict, and why?

- A. The project will become even later, because the added communication and learning overhead outweighs the extra manpower ✅
- B. The project will finish on time, because effort is spread
- C. Nothing changes
- D. Quality will improve but the schedule will not

**Answer:** A

**Explanation:** Brooks' law: adding people to a late project will make it later. New members need time to learn the project and existing members spend time helping them.

### W9.5-13 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** AB3 and the open-closed principle · **Source:** W9.5d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/LogicManager.java`, `src/main/java/seedu/address/logic/parser/AddressBookParser.java`

**Question:** Suppose a new `RemarkCommand extends Command` is added to AB3. `LogicManager#execute`, which calls `command.execute(model)`, needs no change, but a new case must be added to the `switch` in `AddressBookParser#parseCommand`. What does this say about the open-closed principle in AB3?

- A. Both classes are closed for modification with respect to new commands
- B. `LogicManager` is open for extension and closed for modification with respect to new commands; `AddressBookParser` is not ✅
- C. Neither class follows OCP in this respect
- D. OCP does not apply to commands

**Answer:** B

**Explanation:** OCP says a module's behavior should be extendable without modifying it. `LogicManager` works with any `Command` subclass, whereas the parser's switch has to be edited for each new command.

### W9.5-14 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** AB3 and dependency inversion · **Source:** W9.5g · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/LogicManager.java`

**Question:** AB3's `LogicManager` declares `private final Model model;` and `private final Storage storage;`, both interfaces, and `ModelManager` and `StorageManager` implement those interfaces. Which principle does this arrangement illustrate?

- A. Law of Demeter
- B. YAGNI
- C. Dependency inversion: the high-level module and the implementations both depend on abstractions ✅
- D. Brooks' law

**Answer:** C

**Explanation:** Rather than the higher-level `LogicManager` depending directly on concrete lower-level classes, both sides depend on the `Model` and `Storage` abstractions.

### W9.5-15 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** AB3 and interface segregation · **Source:** W9.5f · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/ReadOnlyAddressBook.java`, `src/main/java/seedu/address/storage/Storage.java`

**Question:** AB3's `ReadOnlyAddressBook` interface declares only `getPersonList()`, and `Storage#saveAddressBook` takes a `ReadOnlyAddressBook` rather than an `AddressBook`. Which principle does this best illustrate?

- A. YAGNI
- B. Liskov substitution
- C. Single responsibility of `AddressBook`
- D. Interface segregation: the client is not forced to depend on the mutating methods it does not use ✅

**Answer:** D

**Explanation:** Saving only needs to read the data, so it depends on a narrow read-only interface instead of the full `AddressBook` class.

### W9.5-16 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.5] Design Principles · **Subtopic:** AB3 parser and command classes · **Source:** W9.5a, W9.5b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/AddCommandParser.java`, `src/main/java/seedu/address/logic/commands/AddCommand.java`

**Question:** In AB3, `AddCommandParser` only turns the user's argument string into an `AddCommand`, and `AddCommand#execute` only carries out the addition on the model. A change in command syntax affects the first class; a change in what adding means affects the second. Which principles does this split reflect?

- A. Separation of concerns and the single responsibility principle ✅
- B. Brooks' law and YAGNI
- C. Liskov substitution and interface segregation
- D. Law of Demeter only

**Answer:** A

**Explanation:** Each class addresses one concern and has one reason to change, which also raises cohesion.

## [W9.6] [Revisiting] SDLC Process Models

### W9.6-01 · MCQ

**Type:** MCQ · **Topic:** [W9.6] [Revisiting] SDLC Process Models · **Subtopic:** The basic process models · **Source:** W9.6b · **Basis:** panel

**Question:** "The sequential model and the waterfall model are the two most basic process models." Is this correct?

- A. Yes
- B. No: they are the same model; the two basic ones are the sequential (waterfall) model and the iterative model ✅
- C. No: the two basic ones are Scrum and XP
- D. No: the waterfall model is a kind of iterative model

**Answer:** B

**Explanation:** The sequential model is also called the waterfall model. It is contrasted with the iterative model.

### W9.6-02 · MRQ

**Type:** MRQ · **Topic:** [W9.6] [Revisiting] SDLC Process Models · **Subtopic:** Sequential vs iterative · **Source:** W9.6c · **Basis:** panel

**Question:** Which statements comparing the sequential and iterative models are correct? (Select all that apply.)

- A. A sequential project is organized by activities ✅
- B. An iterative project is organized into bounded cycles ✅
- C. The iterative model can be breadth-first or depth-first ✅
- D. The iterative model is always the better choice

**Answer:** A, B, C

**Explanation:** Neither model is definitively better; the iterative model typically adapts better to changing requirements, while the sequential model can work well for well-understood problems.

### W9.6-03 · MCQ

**Type:** MCQ · **Topic:** [W9.6] [Revisiting] SDLC Process Models · **Subtopic:** Deadline risk · **Source:** W9.6c · **Basis:** panel

**Question:** Which model carries the higher risk of having nothing to deliver at a fixed deadline, and why?

- A. Iterative, because the plan keeps changing
- B. Both equally
- C. Sequential, because there is no intermediate working version to fall back on ✅
- D. Neither, since deadlines are independent of the process

**Answer:** C

**Explanation:** An iterative project can fall back on the version from the previous iteration, though not all promised features are guaranteed. A sequential project that overruns has no deliverable product yet.

### W9.6-04 · MCQ

**Type:** MCQ · **Topic:** [W9.6] [Revisiting] SDLC Process Models · **Subtopic:** What an iteration should produce · **Source:** W9.6c · **Basis:** bold

**Question:** Besides progress, what should an iteration ideally produce?

- A. A complete requirements document
- B. A signed-off design
- C. A new team structure
- D. New knowledge — decided in advance by stating what would show the iteration succeeded and what decision the answer will drive ✅

**Answer:** D

**Explanation:** Each iteration produces a new version and feedback for later iterations; ideally it also answers a question that matters, such as whether an approach or estimate holds.

### W9.6-05 · MCQ

**Type:** MCQ · **Topic:** [W9.6] [Revisiting] SDLC Process Models · **Subtopic:** Lifecycle after release · **Source:** W9.6a · **Basis:** bold

**Question:** Which statement about the time after software reaches its users matches the course?

- A. Deployment, operation and maintenance are lifecycle activities, and what happens then feeds back into development ✅
- B. Only defect fixing counts as a lifecycle activity
- C. The SDLC is over; later changes are a separate project
- D. Process models all name and divide these activities in the same way

**Answer:** A

**Explanation:** Defect reports, actual usage and requests for new capability become inputs to later work. Process models differ in how they partition and name these activities.

## [W9.7] SDLC Process Models (continued)

### W9.7-01 · MRQ

**Type:** MRQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Agile manifesto · **Source:** W9.7a · **Basis:** bold

**Question:** According to the agile manifesto, which of these are valued more than their counterparts? (Select all that apply.)

- A. Individuals and interactions (over processes and tools) ✅
- B. Working software (over comprehensive documentation) ✅
- C. Customer collaboration (over contract negotiation) ✅
- D. Following a plan (over responding to change)

**Answer:** A, B, C

**Explanation:** The manifesto values responding to change over following a plan. The items on the right still have value; the items on the left are valued more.

### W9.7-02 · MRQ

**Type:** MRQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Agile processes · **Source:** W9.7a · **Basis:** bold

**Question:** Which statements about agile processes are correct? (Select all that apply.)

- A. Requirements are prioritized by user need ✅
- B. Planning and design stay light and keep evolving ✅
- C. XP and Scrum are two well-known agile processes ✅
- D. They suit every project, including fixed-price contracts with a signed-off scope

**Answer:** A, B, C

**Explanation:** Agile approaches depend on conditions such as a customer who can give continuous feedback and the ability to ship changes cheaply; without these they are not a good fit.

### W9.7-03 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Scrum accountabilities · **Source:** W9.7b · **Basis:** bold

**Question:** In Scrum, who represents the stakeholders and decides what the product needs next?

- A. The Scrum Master
- B. The Product Owner ✅
- C. The Developers
- D. The project manager

**Answer:** B

**Explanation:** A Scrum team has three accountabilities: the Product Owner, the Scrum Master (accountable for the team using Scrum well) and the Developers (a cross-functional group doing analysis, design, implementation and testing).

### W9.7-04 · MRQ

**Type:** MRQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Sprints · **Source:** W9.7b · **Basis:** bold

**Question:** Which statements about Scrum Sprints are correct? (Select all that apply.)

- A. A Sprint is a short, time-boxed iteration of one month or less ✅
- B. Every Sprint in a project has the same length ✅
- C. Each Sprint aims to create a potentially deliverable Increment ✅
- D. A Sprint is extended when the planned work is not finished

**Answer:** A, B, C

**Explanation:** The Sprint must end on time; incomplete work returns to the Product Backlog. The next Sprint begins immediately after the previous one.

### W9.7-05 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Product Backlog vs Sprint Backlog · **Source:** W9.7b · **Basis:** bold

**Question:** What is the Sprint Backlog?

- A. The prioritized set of high-level requirements for the whole product
- B. The list of defects found during the Sprint Review
- C. The items selected from the Product Backlog for the current Sprint ✅
- D. The record of what each developer did yesterday

**Answer:** C

**Explanation:** Work comes from the Product Backlog, which covers the product as a whole; the items chosen for the current Sprint form the Sprint Backlog.

### W9.7-06 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Sprint Goal · **Source:** W9.7b · **Basis:** bold

**Question:** Midway through a Sprint, the team learns that one planned item is harder than expected. What does Scrum allow?

- A. Changing the Sprint Goal to match what can be finished
- B. Extending the Sprint by a week
- C. Nothing; the plan is frozen
- D. Updating the Sprint Backlog and renegotiating scope with the Product Owner, as long as the Sprint Goal survives ✅

**Answer:** D

**Explanation:** Within a Sprint the Sprint Goal stays fixed, but the plan for reaching it does not.

### W9.7-07 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Review vs Retrospective · **Source:** W9.7b · **Basis:** body

**Question:** A Sprint ends with two distinct meetings. Which pairing is correct?

- A. Sprint Review — team and stakeholders inspect the Increment; Sprint Retrospective — the team inspects how it worked and chooses improvements ✅
- B. Sprint Review — the team inspects how it worked; Sprint Retrospective — stakeholders inspect the Increment
- C. Both inspect the Increment
- D. Both are optional

**Answer:** A

**Explanation:** The Review is about the product; the Retrospective is about the team's way of working.

### W9.7-08 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Daily Scrum · **Source:** W9.7b · **Basis:** bold

**Question:** What is the Daily Scrum for?

- A. Solving the technical problems team members have run into
- B. Developers synchronizing their plans and surfacing what is blocking them; it is not a problem-solving meeting ✅
- C. Reporting progress to the Product Owner
- D. Reviewing the Increment with stakeholders

**Answer:** B

**Explanation:** Issues that need solving are identified and taken up separately.

### W9.7-09 · MRQ

**Type:** MRQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** XP values · **Source:** W9.7c · **Basis:** bold

**Question:** XP aims to improve a software project in five essential ways. Which of these are among them? (Select all that apply.)

- A. Communication ✅
- B. Simplicity ✅
- C. Feedback ✅
- D. Courage ✅
- E. Documentation

**Answer:** A, B, C, D

**Explanation:** The five are communication, simplicity, feedback, respect and courage.

### W9.7-10 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** What makes XP extreme · **Source:** W9.7c · **Basis:** bold

**Question:** What makes Extreme Programming 'extreme'?

- A. It uses unusual practices that no other process uses
- B. It has no planning at all
- C. Not the practices it uses but how often it uses them — pushing good practices to happen continuously ✅
- D. It requires programmers to work extreme hours

**Answer:** C

**Explanation:** Practices such as frequent releases, continuous integration, test-driven development, constant refactoring and pair programming were already considered good; XP pushes each to happen all the time.

### W9.7-11 · MRQ

**Type:** MRQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Unified process · **Source:** W9.7d · **Basis:** bold

**Question:** Which statements about the unified process (UP) are correct? (Select all that apply.)

- A. It was developed by the Three Amigos, the creators of UML ✅
- B. It has four phases: inception, elaboration, construction and transition ✅
- C. It is a customizable framework rather than a single fixed process ✅
- D. It requires the use of UML
- E. A UP project can be phased and iterative at the same time ✅

**Answer:** A, B, C, E

**Explanation:** Phases and iterations are different things: a phase says where the project is in its overall arc, while an iteration is one pass of work through several workflows. UP does not require UML.

### W9.7-12 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** UP phases · **Source:** W9.7d · **Basis:** body

**Question:** In which unified process phase is the system architecture mainly determined?

- A. Inception
- B. Transition
- C. Construction
- D. Elaboration ✅

**Answer:** D

**Explanation:** Inception is about understanding the problem and planning; elaboration refines requirements and determines the high-level design; construction is the major implementation effort; transition readies the system for production use.

### W9.7-13 · MRQ

**Type:** MRQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Choosing a model · **Source:** W9.7e · **Basis:** bold

**Question:** Which questions does the course list as usually deciding whether a project leans sequential or iterative? (Select all that apply.)

- A. How well is the problem understood at the start? ✅
- B. How costly is a late change? ✅
- C. Are users available to give feedback during development? ✅
- D. Does anything outside the project demand signed-off documents? ✅
- E. Which programming language will be used?

**Answer:** A, B, C, D

**Explanation:** Other listed questions are how stable the requirements are likely to be and how large and experienced the team is. No approach is best for every project.

### W9.7-14 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** Applying the questions · **Source:** W9.7e · **Basis:** panel

**Question:** Which project leans most clearly towards a largely sequential approach?

- A. Braking software for a car, with regulation-prescribed requirements and stage-by-stage evidence required ✅
- B. A prototype of a game for a hackathon
- C. A new feature for a social media app, where it is unknown which version users will prefer
- D. An internal tool whose users sit next to the developers

**Answer:** A

**Explanation:** Stable, prescribed requirements, very expensive post-release change and external demands for signed-off evidence all point towards a sequential approach.

### W9.7-15 · MCQ

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** CMMI · **Source:** W9.7f · **Basis:** bold

**Question:** What is CMMI?

- A. An agile process similar to Scrum
- B. A framework for assessing and improving an organization's process, defining five maturity levels ✅
- C. A UML diagram type
- D. A tool for continuous integration

**Answer:** B

**Explanation:** A team's process can itself be assessed and deliberately improved. CMMI, from the Software Engineering Institute at Carnegie Mellon University, defines maturity levels from ad hoc to continuously improving.

### W9.7-16 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.7] SDLC Process Models (continued) · **Subtopic:** AB3 continuous integration and XP · **Source:** W9.7c · **Basis:** body · **AB3:** `.github/workflows/gradle.yml`

**Question:** AB3's GitHub Actions workflow builds the project and runs its tests on every push and pull request. Which XP practice does this automation correspond to?

- A. Pair programming
- B. Small and frequent releases to users
- C. Continuous integration ✅
- D. Test-driven development

**Answer:** C

**Explanation:** XP pushes integration to happen continuously instead of near the end. The workflow does not by itself show that tests were written before the code, so it is not evidence of TDD.

## [W9.8] Writing Developer Documents

### W9.8-01 · MCQ

**Type:** MCQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** Two forms of developer documentation · **Source:** W9.8a · **Basis:** bold

**Question:** Documentation that explains how a system is designed, implemented and tested, so that others can evolve the code, is for which audience?

- A. Developer-as-user
- B. Customer
- C. End user
- D. Developer-as-maintainer ✅

**Answer:** D

**Explanation:** Developer-as-user documentation, such as API documentation and tutorials, explains how to use a component. Developer-as-maintainer documentation explains its internals.

### W9.8-02 · MRQ

**Type:** MRQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** Four kinds of documentation · **Source:** W9.8a · **Basis:** bold

**Question:** Which pairings of documentation type and orientation are correct? (Select all that apply.)

- A. Tutorials — learning-oriented ✅
- B. How-to guides — goal-oriented ✅
- C. Explanation — understanding-oriented ✅
- D. Reference — information-oriented ✅

**Answer:** A, B, C, D

**Explanation:** These four have different purposes and need different approaches: a lesson, a series of steps, background and context, and an accurate and complete description.

### W9.8-03 · MCQ

**Type:** MCQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** Documentation formats · **Source:** W9.8a · **Basis:** bold

**Question:** Why is software documentation best kept in a text format such as Markdown?

- A. For ease of version tracking, and a writer-friendly format lets non-programmers edit it ✅
- B. Text files load faster in browsers
- C. Binary formats cannot hold diagrams
- D. Text formats need no tools

**Answer:** A

**Explanation:** Text formats work well with revision control; writer-friendly source formats, static site generators and text-based diagramming tools such as PlantUML support this.

### W9.8-04 · MRQ

**Type:** MRQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** Comprehensibility · **Source:** W9.8b · **Basis:** bold

**Question:** Which practices make developer documentation more comprehensible, according to the course? (Select all that apply.)

- A. Using plenty of diagrams ✅
- B. Using plenty of examples ✅
- C. Using simple and direct explanations ✅
- D. Removing statements that add no value ✅
- E. Having a separate section for each type of diagram

**Answer:** A, B, C, D

**Explanation:** Accuracy and comprehensiveness are not enough. Diagrams should appear where they explain something; separate sections per artifact type signal a misunderstanding of the documentation's purpose.

### W9.8-05 · MCQ

**Type:** MCQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** Top-down description · **Source:** W9.8c · **Basis:** bold

**Question:** Why is a top-down, breadth-first explanation recommended for project documents?

- A. It is shorter than a bottom-up one
- B. Readers can follow the path that interests them down to the component they want to study in depth ✅
- C. It forces readers to read the entire document
- D. It avoids the need for diagrams

**Answer:** B

**Explanation:** A top-down document is structured like an upside-down tree, from the overall system to components, so readers need not understand the whole system.

### W9.8-06 · MRQ

**Type:** MRQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** Minimal but sufficient · **Source:** W9.8d · **Basis:** bold

**Question:** Which statements describe 'just enough' developer documentation? (Select all that apply.)

- A. Focus on higher-level information that is not readily visible in the code or comments ✅
- B. Describe similarities in one place and emphasize only the differences elsewhere ✅
- C. Describe every method in prose, even when the code is clear
- D. Repeat the full description for each similar component, for completeness

**Answer:** A, B

**Explanation:** Writing and maintaining documentation has a cost; documentation should complement the code rather than restate it.

### W9.8-07 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** AB3 Developer Guide structure · **Source:** W9.8c · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** The Design section of the AB3 Developer Guide first presents the overall architecture and how the main components interact, and only then has a section for each of the UI, Logic, Model and Storage components. Which documentation guideline does this follow?

- A. Minimal but sufficient
- B. Use a separate section for each type of diagram
- C. Describe top-down ✅
- D. Write tutorials before reference material

**Answer:** C

**Explanation:** A top-down description starts with the high-level view and drills down, so a reader interested in one component can skip to it.

### W9.8-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W9.8] Writing Developer Documents · **Subtopic:** AB3 placeholder names · **Source:** W9.8d · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`

**Question:** The AB3 Developer Guide describes parsing using placeholder names such as `XYZCommandParser` and `XYZCommand` instead of writing a separate description for `AddCommandParser`, `DeleteCommandParser` and so on. Which guideline does this apply?

- A. Use plenty of examples
- B. Describe top-down
- C. Keep documentation in a text format
- D. Describe the similarities in one place rather than duplicating text for each similar item ✅

**Answer:** D

**Explanation:** Minimal-but-sufficient documentation avoids repeating chunks of text when several designs are similar.

---

# Week 10

## [W10.1] Design Patterns

### W10.1-01 · MCQ

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** What a design pattern is · **Source:** W10.1a · **Basis:** bold

**Question:** Which description fits the concept of a software design pattern best?

- A. An elegant reusable solution to a commonly recurring problem within a given context in software design ✅
- B. An architectural style for the whole system
- C. A design that appears repeatedly in a code base
- D. A good design technique invented by the Gang of Four

**Answer:** A

**Explanation:** Design patterns are refined solutions to recurring design problems; the term was popularised by the book by the "Gang of Four", but the concept is not limited to techniques they proposed.

### W10.1-02 · MRQ

**Type:** MRQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Pattern format · **Source:** W10.1b · **Basis:** bold

**Question:** Which components are compulsory when describing a design pattern in the course's format? (Select all that apply.)

- A. Context ✅
- B. Problem ✅
- C. Solution ✅
- D. Anti-patterns
- E. Consequences

**Answer:** A, B, C

**Explanation:** Context, problem and solution are the core. Anti-patterns, consequences and other useful information (code examples, known uses, related patterns) are optional.

### W10.1-03 · MCQ

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Singleton context · **Source:** W10.1c · **Basis:** bold

**Question:** When is the Singleton pattern applicable?

- A. When a class should have a private constructor
- B. When a class should have no more than one instance ✅
- C. When a single class should hold all of the system's functionality
- D. When a component's internal structure should be hidden from its clients

**Answer:** B

**Explanation:** The Singleton context is that certain classes should have no more than one instance. A private constructor is part of the solution, not the reason; hiding internals is the Facade pattern.

### W10.1-04 · MRQ

**Type:** MRQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Singleton implementation · **Source:** W10.1c, W10.1d · **Basis:** bold

**Question:** Which elements are part of the usual Singleton implementation? (Select all that apply.)

- A. A `private` constructor ✅
- B. A `private` class-level variable holding the single instance ✅
- C. A `public` class-level method such as `getInstance()` that returns the single instance ✅
- D. A `public` constructor that throws an exception on the second call

**Answer:** A, B, C

**Explanation:** The constructor is private so others cannot instantiate the class at will; the instance is kept in a private static variable and reached through a public static method, which creates it on first use.

### W10.1-05 · MRQ

**Type:** MRQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Singleton drawbacks · **Source:** W10.1e · **Basis:** bold

**Question:** Which are drawbacks of the Singleton pattern noted by the course? (Select all that apply.)

- A. The singleton object acts like a global variable, increasing coupling across the code base ✅
- B. In testing, it is difficult to replace singleton objects with stubs ✅
- C. In testing, singleton objects carry data from one test to another ✅
- D. It is difficult to apply and needs a lot of extra code

**Answer:** A, B, C

**Explanation:** Singleton is easy to apply and effective, but it has significant cons. The course suggests using it only when multiple instances could be created by mistake and that would have real negative consequences.

### W10.1-06 · MCQ

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Facade pattern · **Source:** W10.1f · **Basis:** bold

**Question:** The `UI` of a library system needs functionality that lives in a `Book` class deep inside the `Logic` component, but should not know that `Book` exists. Which pattern addresses this?

- A. Singleton
- B. Command
- C. Facade ✅
- D. Abstraction Occurrence

**Answer:** C

**Explanation:** The Facade pattern places a class between a component's internals and its users so that all access to the component goes through the facade, without exposing internal details.

### W10.1-07 · MCQ

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Command pattern · **Source:** W10.1g · **Basis:** bold

**Question:** What is the essential element of the Command pattern?

- A. Each command is implemented as a static method
- B. Commands that can be created only once
- C. A single class with a large `switch` over command names
- D. A general Command type whose objects can be passed around, stored and executed without knowing the specific type of command ✅

**Answer:** D

**Explanation:** The pattern lets some part of the code execute commands without knowing each command type, via polymorphism: the invoker treats every command as the general type and calls `execute()`.

### W10.1-08 · MCQ

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Command pattern roles · **Source:** W10.1g · **Basis:** body

**Question:** In the general form of the Command pattern, which role calls `execute()` on a command while treating it as the general Command type?

- A. Invoker ✅
- B. Client
- C. Receiver
- D. ConcreteCommand

**Answer:** A

**Explanation:** The Client creates a ConcreteCommand and passes it to the Invoker; the Invoker issues the request by calling `execute()`; the Receiver is what the command acts on.

### W10.1-09 · MCQ

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Abstraction Occurrence · **Source:** W10.1h · **Basis:** bold

**Question:** A library holds many copies of each book title. Copies share the title, author and ISBN but each has its own barcode and purchase date. What does the Abstraction Occurrence pattern prescribe?

- A. One `Book` class holding all the fields, with the shared data repeated in every object
- B. Two classes, such as `BookTitle` for the shared information and `BookCopy` for the unique information ✅
- C. A separate subclass for each book title, with the shared data hard-coded
- D. A singleton `Library` that stores all data in maps

**Answer:** B

**Explanation:** A single class duplicates data and invites inconsistency; a class per title is the anti-pattern. The solution represents each copy by two objects, separating common and unique information.

### W10.1-10 · MRQ

**Type:** MRQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** Recognising Abstraction Occurrence · **Source:** W10.1h · **Basis:** panel

**Question:** Which pairs fit the Abstraction–Occurrence relationship? (Select all that apply.)

- A. `CarModel` and `Car` ✅
- B. `Magazine` and `MagazineIssue` ✅
- C. `Car` and `Wheel`
- D. `Club` and `Member`

**Answer:** A, B

**Explanation:** A `Car` is an occurrence of a `CarModel`, and an issue is an occurrence of a magazine. A wheel is part of a car and a member is part of a club — 'part of', not 'occurrence of'.

### W10.1-11 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** AB3 Command pattern · **Source:** W10.1g · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/LogicManager.java`, `src/main/java/seedu/address/logic/commands/Command.java`

**Question:** In AB3, `AddressBookParser` creates an `AddCommand`, `DeleteCommand` or other command object and returns it typed as `Command`; `LogicManager` then calls `command.execute(model)`. Which design pattern is this, and what is `LogicManager`'s role in it?

- A. Facade; the facade class
- B. Singleton; the single instance
- C. Command; the invoker that executes commands without knowing their concrete type ✅
- D. Abstraction Occurrence; the abstraction

**Answer:** C

**Explanation:** The Command pattern has a general command type that can be executed without knowledge of the specific command. The parser plays the client that creates concrete commands, and the model is what the commands act on.

### W10.1-12 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** AB3 facade-like component API · **Source:** W10.1f · **Basis:** bold · **AB3:** `src/main/java/seedu/address/ui/MainWindow.java`, `src/main/java/seedu/address/logic/Logic.java`

**Question:** AB3's `MainWindow` holds a `Logic` reference and calls `logic.execute(commandText)`; it never refers to `AddressBookParser` or the individual command classes inside the Logic component. Which design pattern's idea does this follow?

- A. Singleton
- B. Abstraction Occurrence
- C. Command
- D. Facade: access to the component goes through one class without exposing its internals ✅

**Answer:** D

**Explanation:** The Facade pattern lets other components use a component's functionality through a class that sits in front of its internals.

### W10.1-13 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.1] Design Patterns · **Subtopic:** AB3 avoids Singleton · **Source:** W10.1e · **Basis:** bold · **AB3:** `src/main/java/seedu/address/MainApp.java`

**Question:** AB3 needs only one `Model` and one `Logic` object. `MainApp#init` creates them once and passes them on through constructors, e.g. `new LogicManager(model, storage)`, rather than making them Singletons with `getInstance()`. Which Singleton drawback does this avoid?

- A. Singletons act like global variables and are hard to replace with stubs in tests ✅
- B. Singletons cannot have instance methods
- C. Singletons cannot implement interfaces
- D. Singletons need more memory

**Answer:** A

**Explanation:** Because dependencies are handed in through constructors and typed as interfaces, tests can supply stubs — something that is difficult when code reaches a singleton through a static method.

## [W10.2] Defensive Programming

### W10.2-01 · MCQ

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** Defensive programming · **Source:** W10.2a · **Basis:** bold

**Question:** Under which assumption does a defensive programmer write code?

- A. Callers always respect preconditions
- B. "If you leave room for things to go wrong, they will go wrong" ✅
- C. Performance matters more than correctness
- D. Errors should be handled only at the user interface

**Answer:** B

**Explanation:** A defensive programmer proactively tries to eliminate any room for things to go wrong — for example by returning a defensive copy instead of an internal object.

### W10.2-02 · MCQ

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** Defensive copy · **Source:** W10.2a · **Basis:** body

**Question:** `getConfig()` currently returns the object's internal `config` field directly. Why would a defensive programmer return `config.copy()` instead?

- A. Copies are faster to access
- B. Because Java cannot return fields directly
- C. So that a caller who modifies the returned object cannot affect the internal `config` ✅
- D. To reduce memory use

**Answer:** C

**Explanation:** Returning a defensive copy removes the possibility that code outside the class changes internal state that was not meant to be modified.

### W10.2-03 · MCQ

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** Compulsory associations · **Source:** W10.2b · **Basis:** body

**Question:** Every `Account` must have exactly one `Guarantor`. `Account` has the method below and no other protection. Is this defensive?
```
void setGuarantor(Guarantor g) { guarantor = g; }
```

- A. Yes, because the field can only be set through a method
- B. Yes, because the multiplicity is shown in the class diagram
- C. No, because setters are never allowed
- D. No, because `setGuarantor(null)` would leave an Account with no Guarantor ✅

**Answer:** D

**Explanation:** When an association is compulsory, a defensive programmer enforces it in code: the constructor requires a guarantor and both constructor and setter reject `null`.

### W10.2-04 · MCQ

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** Referential integrity · **Source:** W10.2d · **Basis:** body

**Question:** `james.setGirlfriend(jean)` is called, and later `jean.setBoyfriend(yong)`, with simple setters that set only their own field. What problem results?

- A. A referential integrity violation: James's girlfriend is Jean, but Jean's boyfriend is not James ✅
- B. A compile error
- C. A multiplicity violation in `Man`
- D. Nothing; the two links are independent

**Answer:** A

**Explanation:** A bidirectional association is emulated with a variable in each class. If the two are not kept consistent, object references disagree — referential integrity is violated. Defensive setters update both ends.

### W10.2-05 · MRQ

**Type:** MRQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** Costs of being defensive · **Source:** W10.2e · **Basis:** bold

**Question:** Defensive programming can have which effects? (Select all that apply.)

- A. Make the code less susceptible to misuse ✅
- B. Make the code longer and more complex ✅
- C. Make the program slower ✅
- D. Make extra effort unnecessary

**Answer:** A, B, C

**Explanation:** It is not necessary to be 100% defensive all the time. The suitable degree depends on how critical the system is, who else will use the code, language support and the overhead.

### W10.2-06 · MCQ

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** Design by contract · **Source:** W10.2f · **Basis:** bold

**Question:** How does the design-by-contract (DbC) approach differ from the defensive approach in its treatment of preconditions?

- A. DbC checks preconditions inside the operation and throws exceptions
- B. DbC assumes the caller is responsible for meeting preconditions; if they are not met, the operation's behavior is unspecified ✅
- C. DbC has no preconditions
- D. DbC requires every method to be static

**Answer:** B

**Explanation:** DbC requires formal, precise and verifiable interface specifications. In the defensive approach the code first checks whether preconditions are met and typically throws exceptions if not.

### W10.2-07 · MRQ

**Type:** MRQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** DbC support · **Source:** W10.2f · **Basis:** body

**Question:** Which statements about design by contract are correct? (Select all that apply.)

- A. It is not natively supported by Java and C++ ✅
- B. In Java, assertions can be used to confirm preconditions ✅
- C. It is an alternative to OOP
- D. Eiffel supports it natively ✅

**Answer:** A, B, D

**Explanation:** DbC is an approach to specifying interfaces and can be used within an OOP solution. Languages without built-in support can use assertions.

### W10.2-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** AB3 immutable compulsory fields · **Source:** W10.2b · **Basis:** body · **AB3:** `src/main/java/seedu/address/model/person/Person.java`

**Question:** AB3's `Person` constructor starts with `requireAllNonNull(name, phone, email, address, tags)`, the fields are `private final`, and there are no setters. How does this relate to enforcing associations defensively?

- A. It leaves the `Person`–`Name` association optional
- B. It is design by contract, since nothing is checked
- C. It enforces compulsory, immutable associations: the links must exist at construction and cannot be changed afterwards ✅
- D. It enforces referential integrity of a bidirectional link

**Answer:** C

**Explanation:** For a compulsory association that cannot change once formed, the defensive approach is a constructor that rejects null and no setter.

### W10.2-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** AB3 defensive copying · **Source:** W10.2a · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/ArgumentMultimap.java`

**Question:** AB3's `ArgumentMultimap#getAllValues` returns `new ArrayList<>(argMultimap.get(prefix))` rather than the internal list itself. What is this?

- A. A singleton accessor
- B. A stub
- C. An equivalence partition
- D. A defensive copy, so that changes to the returned list do not affect the internal data ✅

**Answer:** D

**Explanation:** Defensive programming leaves no room for things to go wrong: by returning a copy, callers cannot corrupt the multimap's own state.

### W10.2-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.2] Defensive Programming · **Subtopic:** AB3 preconditions in the Model API · **Source:** W10.2f · **Basis:** body · **AB3:** `src/main/java/seedu/address/model/Model.java`, `src/main/java/seedu/address/logic/commands/DeleteCommand.java`

**Question:** The Javadoc of AB3's `Model#deletePerson` says "The person must exist in the address book", and `DeleteCommand#execute` takes the person from the model's displayed list before calling it. In design-by-contract terms, what is the Javadoc sentence?

- A. A precondition that the caller is responsible for meeting ✅
- B. A postcondition guaranteed by `deletePerson`
- C. A class invariant of `DeleteCommand`
- D. An exception specification

**Answer:** A

**Explanation:** Under DbC the operation's behavior is specified precisely in the API, including preconditions, and the caller is responsible for ensuring they hold.

## [W10.3] Test Cases: Intro

### W10.3-01 · MCQ

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Exhaustive testing · **Source:** W10.3a · **Basis:** bold

**Question:** Why is exhaustive testing not practical, except for trivial SUTs?

- A. Because test cases cannot be automated
- B. Because it often requires a massive or infinite number of test cases ✅
- C. Because it finds too many bugs
- D. Because specifications are always incomplete

**Answer:** B

**Explanation:** Every test case adds to the cost of testing, so test cases must be designed to make the best use of testing resources.

### W10.3-02 · MCQ

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Effective vs efficient · **Source:** W10.3a · **Basis:** bold

**Question:** Test suite A uses 20 test cases and finds 8 defects. Test suite B uses 40 test cases and finds the same 8 defects. Which statement is correct?

- A. B is more effective than A
- B. A is more effective than B
- C. A is more efficient than B ✅
- D. B is more efficient than A

**Answer:** C

**Explanation:** Effectiveness is the percentage of existing bugs found, which is equal here. Efficiency is the rate of success — bugs found per test case — which is higher for A.

### W10.3-03 · MCQ

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Making testing E&E · **Source:** W10.3a · **Basis:** bold

**Question:** What should each new test case do for testing to be effective and efficient?

- A. Repeat an existing test with slightly different data
- B. Use inputs chosen at random
- C. Cover as many lines of code as possible
- D. Target a potential fault that is not already targeted by existing test cases ✅

**Answer:** D

**Explanation:** A test that targets a fault already covered adds cost without adding fault-finding ability.

### W10.3-04 · MCQ

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Positive vs negative test cases · **Source:** W10.3b · **Basis:** bold

**Question:** For `print(Integer i)`, a test passes `null` and expects an error message. What kind of test case is this?

- A. Negative ✅
- B. Positive
- C. Exploratory
- D. Regression

**Answer:** A

**Explanation:** A negative test case is designed to produce a behavior indicating an invalid or unexpected situation; a positive one is designed to produce expected, valid behavior.

### W10.3-05 · MRQ

**Type:** MRQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Black-box, white-box, gray-box · **Source:** W10.3c · **Basis:** bold

**Question:** Which pairings are correct? (Select all that apply.)

- A. Black-box — test cases designed exclusively from the SUT's specified external behavior ✅
- B. White-box (glass-box) — test cases designed from what is known about the implementation ✅
- C. Gray-box — test case design uses some important information about the implementation ✅
- D. Black-box — also known as structured or implementation-based

**Answer:** A, B, C

**Explanation:** Black-box is also called specification-based or responsibility-based; white-box is also called glass-box, structured or implementation-based.

### W10.3-06 · MCQ

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Gray-box example · **Source:** W10.3c · **Basis:** bold

**Question:** A tester works mainly from the specification of a sort operation, but knows it switches algorithm for lists longer than 1000 items and adds test cases on both sides of that size. Which approach is this?

- A. Black-box
- B. Gray-box ✅
- C. White-box
- D. Exploratory

**Answer:** B

**Explanation:** Gray-box design uses some important information about the implementation, without designing the tests entirely from the code.

### W10.3-07 · MCQ

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** Testing from use cases · **Source:** W10.3d · **Basis:** bold

**Question:** How can use cases be used in testing?

- A. Only for unit testing individual methods
- B. Only to decide the order of integration
- C. For system and acceptance testing, e.g. the MSS as one test case and each variation due to extensions as another ✅
- D. They cannot, since they contain no code

**Answer:** C

**Explanation:** Use cases do not specify exact data, so the tester still chooses data using equivalence partitions and boundary values; one use case can yield many test cases.

### W10.3-08 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.3] Test Cases: Intro · **Subtopic:** AB3 white-box test design · **Source:** W10.3c · **Basis:** bold · **AB3:** `src/test/java/seedu/address/logic/parser/DeleteCommandParserTest.java`

**Question:** The class comment of AB3's `DeleteCommandParserTest` explains that inputs "1" and "1 abc" take the same path through the `DeleteCommand` code, so only one of them is tested there. Which test design approach does this reasoning reflect?

- A. Black-box, because it relies only on the user guide
- B. Acceptance testing
- C. Exploratory, because tests are devised on the fly
- D. White-box, because test cases are chosen from knowledge of the implementation ✅

**Answer:** D

**Explanation:** White-box design uses what is known about the SUT's code; here it is used to avoid redundant test cases, which also makes the testing more efficient.

## [W10.4] Test Cases: Equivalence Partitioning

### W10.4-01 · MCQ

**Type:** MCQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** Basis of equivalence partitioning · **Source:** W10.4a · **Basis:** bold

**Question:** On what observation is equivalence partitioning based?

- A. Most SUTs process all possible inputs in a small number of distinct ways ✅
- B. Bugs are evenly spread over all inputs
- C. Every input is processed by the SUT in a unique way
- D. Inputs near the middle of a range are the most likely to fail

**Answer:** A

**Explanation:** A range of inputs is treated the same way inside the SUT; an equivalence partition is a group of test inputs likely to be processed in the same way.

### W10.4-02 · MRQ

**Type:** MRQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** Benefits of EP · **Source:** W10.4a · **Basis:** bold

**Question:** By dividing possible inputs into equivalence partitions, a tester can do which of the following? (Select all that apply.)

- A. Avoid testing too many inputs from one partition, which improves efficiency ✅
- B. Ensure all partitions are tested, which improves effectiveness ✅
- C. Prove that the SUT has no bugs
- D. Avoid reading the specification

**Answer:** A, B

**Explanation:** Testing many inputs from the same partition is unlikely to find new bugs, while missing a partition can let bugs go unnoticed. EPs are usually derived from the specification.

### W10.4-03 · MCQ

**Type:** MCQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** Deriving partitions · **Source:** W10.4b · **Basis:** body

**Question:** `isValidMonth(int m)` returns true if `m` is in the range 1 to 12. Which set of equivalence partitions is reasonable?

- A. [1..6], [7..12]
- B. [MIN_INT..0], [1..12], [13..MAX_INT] ✅
- C. [1], [2], [3], … , [12]
- D. [even numbers], [odd numbers]

**Answer:** B

**Explanation:** The values below the range, in the range and above the range are each likely to be processed in the same way. EP is a heuristic, so another tester might merge the two invalid partitions.

### W10.4-04 · MCQ

**Type:** MCQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** Choosing test inputs · **Source:** W10.4b · **Basis:** panel

**Question:** `isValidName(String s)` returns true if `s` is not null and not longer than 50 characters. You can afford only three of these four test inputs: a 50-character string, a 51-character string, a 40-character string, and `null`. Which one is the best to drop?

- A. `null`
- B. The 51-character string
- C. Either the 50-character or the 40-character string, since both are in the same partition ✅
- D. None; all four are in different partitions

**Answer:** C

**Explanation:** The 50- and 40-character strings both fall in the valid partition, so testing both adds least. Between them, the boundary value (50) is the more useful one to keep.

### W10.4-05 · MCQ

**Type:** MCQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** Partitions without adjacent values · **Source:** W10.4b · **Basis:** body

**Question:** Which statement about equivalence partitions is correct?

- A. A partition must be a continuous range of values
- B. Partitions can be found only by reading the code
- C. Each input value is always its own partition
- D. A partition need not consist of adjacent values, e.g. prime and non-prime numbers for `isPrime` ✅

**Answer:** D

**Explanation:** Partitions group inputs processed alike, which need not be contiguous. When an input has few possible values each handled uniquely (such as an enum), each value can be a partition by itself.

### W10.4-06 · MRQ

**Type:** MRQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** Data participants · **Source:** W10.4c · **Basis:** body

**Question:** When testing an OOP method such as `DataStack#push(Object o)`, which data participants should be considered for equivalence partitions? (Select all that apply.)

- A. The target object of the method call ✅
- B. The input parameters of the method ✅
- C. Other data or objects accessed by the method, such as global variables ✅
- D. The name of the test class

**Answer:** A, B, C

**Explanation:** Everything that can influence the method's behavior counts: for `push`, the stack (full or not full), the argument (null or not null) and a global `FREEZE` flag (true or false).

### W10.4-07 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.4] Test Cases: Equivalence Partitioning · **Subtopic:** AB3 partitions in tests · **Source:** W10.4b · **Basis:** bold · **AB3:** `src/test/java/seedu/address/commons/util/StringUtilTest.java`

**Question:** In AB3's `StringUtilTest`, the test for `isNonZeroUnsignedInteger` is organised under comments such as `// EP: empty strings`, `// EP: not a number`, `// EP: zero` and `// EP: signed numbers`, with one or two inputs under each. What is the tester doing?

- A. Choosing a few representative inputs from each equivalence partition ✅
- B. Exhaustive testing of all strings
- C. Measuring path coverage
- D. Exploratory testing

**Answer:** A

**Explanation:** Equivalence partitioning groups inputs likely to be processed in the same way, so all partitions get tested without testing many inputs from the same one.

## [W10.5] Test Cases: Boundary Value Analysis

### W10.5-01 · MCQ

**Type:** MCQ · **Topic:** [W10.5] Test Cases: Boundary Value Analysis · **Subtopic:** Boundary value analysis · **Source:** W10.5a · **Basis:** bold

**Question:** On what observation is boundary value analysis (BVA) based?

- A. Bugs are usually found in the middle of an equivalence partition
- B. Bugs often result from incorrect handling of the boundaries of equivalence partitions ✅
- C. Boundaries are the only inputs users ever enter
- D. Every partition has exactly two boundaries

**Answer:** B

**Explanation:** End points of partitions are often used in branching instructions (e.g. `x > 0` written instead of `x >= 0`), so values near boundaries are more likely to find bugs.

### W10.5-02 · MCQ

**Type:** MCQ · **Topic:** [W10.5] Test Cases: Boundary Value Analysis · **Subtopic:** What to test · **Source:** W10.5a, W10.5b · **Basis:** bold

**Question:** "BVA recommends testing only the values that lie on the boundary of an equivalence partition." Is this correct?

- A. Yes
- B. No: BVA recommends avoiding boundary values
- C. No: test both boundary and non-boundary values, giving priority to boundary values ✅
- D. No: BVA applies only to strings

**Answer:** C

**Explanation:** BVA merely suggests that values on and around a boundary are more likely to cause errors. You should still test non-boundary values.

### W10.5-03 · MCQ

**Type:** MCQ · **Topic:** [W10.5] Test Cases: Boundary Value Analysis · **Subtopic:** Choosing boundary values · **Source:** W10.5b · **Basis:** body

**Question:** For the partition [1..12] of valid months, which set of test values does the course's example use?

- A. 1, 6, 12
- B. 0, 1, 2, 11, 12, 13 ✅
- C. -1, 0, 13, 14
- D. 1 and 12 only

**Answer:** B

**Explanation:** The boundary values are 1 and 12; values just below and just above each boundary are tested as well.

### W10.5-04 · MCQ

**Type:** MCQ · **Topic:** [W10.5] Test Cases: Boundary Value Analysis · **Subtopic:** Boundaries of non-numeric inputs · **Source:** W10.5b · **Basis:** body

**Question:** For the partition "any non-null String", where length is what matters, which inputs are the boundary values?

- A. A string of average length
- B. There are no boundary values for strings
- C. Strings containing digits
- D. The empty string and a string of the maximum possible length ✅

**Answer:** D

**Explanation:** Boundaries follow the dimension of interest; for length they are the shortest and longest possible strings. Some partitions, such as prime numbers, have no specific boundary.

### W10.5-05 · MCQ · AB3

**Type:** MCQ · **Topic:** [W10.5] Test Cases: Boundary Value Analysis · **Subtopic:** AB3 boundary values · **Source:** W10.5a · **Basis:** bold · **AB3:** `src/main/java/seedu/address/model/person/Phone.java`, `src/test/java/seedu/address/model/person/PhoneTest.java`

**Question:** AB3's `Phone` accepts numbers that are at least 3 digits long. `PhoneTest#isValidPhone` checks that "91" is invalid and that "911" is valid. Why are these two inputs well chosen?

- A. They sit on either side of the boundary between the invalid and valid partitions, where bugs are most likely ✅
- B. They are the most common phone numbers
- C. They cover every equivalence partition
- D. They are the only inputs the regular expression can reject or accept

**Answer:** A

**Explanation:** BVA suggests picking values at and next to partition boundaries; a 2-digit and a 3-digit number probe the minimum-length boundary directly.

---

# Week 11

## [W11.1] More Design Patterns

### W11.1-01 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** MVC · **Source:** W11.1a · **Basis:** bold

**Question:** What does the MVC pattern do?

- A. It ensures a class has only one instance
- B. It decouples data, presentation and control logic by separating them into Model, View and Controller components ✅
- C. It lets one object notify others through a shared interface
- D. It hides a component's internals behind one class

**Answer:** B

**Explanation:** MVC addresses the high coupling that results from the interlinked nature of storing, displaying and changing information.

### W11.1-02 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** MVC responsibilities · **Source:** W11.1a · **Basis:** body

**Question:** In MVC, which component handles user input such as mouse clicks and coordinates the response?

- A. Model
- B. View
- C. Controller ✅
- D. Observer

**Answer:** C

**Explanation:** The Model maintains the application state and operations on it; the View presents information and UI elements; the Controller interprets input and invokes operations on the model or updates to the view. The UI is typically the View plus the Controller.

### W11.1-03 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** Observer pattern problem · **Source:** W11.1b · **Basis:** bold

**Question:** `StudentListUi` and `StudentStatsUi` must refresh whenever `StudentList` changes, but `StudentList` should not depend on these UI classes. Which pattern fits, and what is its solution?

- A. Facade — route all access through one class
- B. Singleton — keep one instance of `StudentList`
- C. Command — wrap each change in an object
- D. Observer — force the communication through an interface known to both parties ✅

**Answer:** D

**Explanation:** In the Observer pattern the observed object keeps a list of observers typed by an interface and calls `update()` on each when its data changes, without knowing their concrete classes.

### W11.1-04 · MRQ

**Type:** MRQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** How Observer works · **Source:** W11.1b · **Basis:** body

**Question:** Which statements about the Observer pattern are correct? (Select all that apply.)

- A. The Observable keeps a list of Observers and offers an operation to add one ✅
- B. `notifyObservers()` calls `update()` on every Observer in the list ✅
- C. Polymorphism lets each concrete observer respond to `update()` in its own way ✅
- D. The Observable must know the concrete class of each observer

**Answer:** A, B, C

**Explanation:** The Observable is unaware of the exact nature of its observers; it deals with them only through the Observer interface, and any number can subscribe.

### W11.1-05 · MRQ

**Type:** MRQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** GoF categories · **Source:** W11.1c · **Basis:** bold

**Question:** Which pairings of GoF pattern category and description are correct? (Select all that apply.)

- A. Creational — about object creation ✅
- B. Structural — about composing objects into larger structures ✅
- C. Behavioral — about how objects interact and how responsibility is distributed ✅
- D. Architectural — about deployment of components

**Answer:** A, B, C

**Explanation:** The Gang of Four book contains 23 patterns in three categories: creational, structural and behavioral.

### W11.1-06 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** Classifying patterns · **Source:** W11.1c · **Basis:** bold

**Question:** Which list correctly gives one creational, one structural and one behavioral pattern, in that order?

- A. Singleton, Facade, Observer ✅
- B. Facade, Command, Singleton
- C. Observer, Singleton, Facade
- D. Command, Observer, Singleton

**Answer:** A

**Explanation:** Singleton is creational, Facade is structural, and Observer and Command are behavioral.

### W11.1-07 · MRQ

**Type:** MRQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** Using patterns · **Source:** W11.1e · **Basis:** bold

**Question:** Which statements about using design patterns are correct? (Select all that apply.)

- A. They provide a high-level vocabulary for talking about design ✅
- B. Knowing more patterns is a way to become more 'experienced' ✅
- C. Patterns should not be overused, since they bring overhead such as more classes or levels of abstraction ✅
- D. A pattern should be applied wherever it can be made to fit

**Answer:** A, B, C

**Explanation:** Before applying a pattern, check that it gives a substantial improvement and that the trade-offs are acceptable; a pattern can be overkill.

### W11.1-08 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** Combining patterns · **Source:** W11.1d · **Basis:** bold

**Question:** Which statement about design patterns in a real design is correct?

- A. Only one pattern should be used per system
- B. They are usually embedded in a larger design and sometimes applied in combination with other patterns ✅
- C. Patterns replace the need for an architecture
- D. Each pattern must be implemented in its own package

**Answer:** B

**Explanation:** The course's stock inventory case study combines Abstraction Occurrence, Facade, MVC and Observer, with Singleton applicable to the facade class.

### W11.1-09 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** Patterns vs principles · **Source:** W11.1f · **Basis:** bold

**Question:** Compared with design patterns, design principles are…

- A. more specific, with narrower applicability
- B. identical in scope
- C. more general, with wider applicability and greater overlap among them ✅
- D. always expressed as formal rules

**Answer:** C

**Explanation:** Design principles vary in formality — rules, opinions, rules of thumb, observations and axioms — and are more general than patterns.

### W11.1-10 · MCQ

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** Other types of patterns · **Source:** W11.1g · **Basis:** body

**Question:** According to the course, MVC is "more of" which kind of pattern?

- A. An analysis pattern
- B. A testing pattern
- C. A project management pattern
- D. An architectural pattern ✅

**Answer:** D

**Explanation:** Patterns exist for analysis, design, testing, architecture and project management. Abstraction Occurrence is described as more of an analysis pattern, and MVC as more of an architectural pattern.

### W11.1-11 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.1] More Design Patterns · **Subtopic:** AB3 observable list · **Source:** W11.1b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/ui/PersonListPanel.java`, `src/main/java/seedu/address/model/Model.java`

**Question:** In AB3, the Model exposes the persons as an `ObservableList<Person>`, and `PersonListPanel` passes that list to its `ListView` with `setItems(personList)`; the displayed list then refreshes when the data changes, although the Model never refers to any UI class. Which design pattern underlies this?

- A. Observer ✅
- B. Facade
- C. Singleton
- D. Abstraction Occurrence

**Answer:** A

**Explanation:** The UI observes the model's data and is notified of changes, while the observed side is not coupled to its observers. JavaFX has built-in support for the Observer pattern.

## [W11.2] Architectural Styles

### W11.2-01 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Architectural styles · **Source:** W11.2a · **Basis:** bold

**Question:** Why can one system use several architectural styles at once?

- A. Because styles are interchangeable names for the same structure
- B. Because different styles describe different aspects of a system ✅
- C. Because each component must use a different style
- D. Because styles apply only to diagrams, not to the system

**Answer:** B

**Explanation:** An architectural style is a reusable way of organizing the major parts of a system. Layered is about code organization, monolithic about packaging and deployment, event-driven about what triggers work, and client-server about who requests and who provides.

### W11.2-02 · MRQ

**Type:** MRQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Layered style · **Source:** W11.2b · **Basis:** bold

**Question:** Which statements about the layered style are correct? (Select all that apply.)

- A. Dependencies all point downward: higher layers use lower ones ✅
- B. In strict (closed) layering, a layer may use only the layer immediately below it ✅
- C. In relaxed layering, a layer may use any lower layer ✅
- D. Layering requires the layers to be deployed on different machines

**Answer:** A, B, C

**Explanation:** Layering does not require distribution and does not imply it. In both strict and relaxed layering, dependencies never point back up.

### W11.2-03 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Layers vs tiers · **Source:** W11.2b · **Basis:** bold

**Question:** What is the difference between a layer and a tier?

- A. They are synonyms
- B. A layer is a physical machine; a tier is a package
- C. A layer is a logical division inside the software; a tier is a part that is deployed separately ✅
- D. A tier is a kind of layer that contains the user interface

**Answer:** C

**Explanation:** Layers are not tiers, although "n-tier" is often used loosely to mean layered. A desktop app can have several layers and run as a single tier.

### W11.2-04 · MRQ

**Type:** MRQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Monoliths · **Source:** W11.2c · **Basis:** bold

**Question:** Which statements about the monolithic style are correct? (Select all that apply.)

- A. A monolith is a system deployed as a single unit ✅
- B. A modular monolith is a single deployable unit organized internally into well-defined components ✅
- C. "Monolith" means a badly structured system
- D. A monolith always runs as exactly one process

**Answer:** A, B

**Explanation:** The term describes how a system is deployed, not how well it is organized, and one deployable unit may run as several processes or copies.

### W11.2-05 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Default choice · **Source:** W11.2c, W11.2g · **Basis:** bold

**Question:** One team is building one product. Which architecture does the course call the sensible starting point?

- A. Microservices
- B. Serverless functions
- C. Peer-to-peer
- D. A modular monolith ✅

**Answer:** D

**Explanation:** A modular monolith keeps building, testing and debugging simple while encouraging clear responsibilities. A network boundary should be added only when a concrete requirement justifies its costs.

### W11.2-06 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Event-driven style · **Source:** W11.2d · **Basis:** bold

**Question:** What characterises the event-driven style?

- A. Work is triggered by events rather than by direct calls ✅
- B. All components run on separate servers
- C. Each component calls the next in a fixed sequence
- D. Data flows through a series of filters

**Answer:** A

**Explanation:** An emitter raises an event and consumers react to it, with an event dispatching mechanism routing events to consumers. GUI code, where a click event is delivered to a registered handler, is event-driven.

### W11.2-07 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Trade-off of event-driven architecture · **Source:** W11.2d · **Basis:** bold

**Question:** What is the main trade-off of event-driven architecture?

- A. Higher coupling in exchange for better performance
- B. Reduced coupling at the cost of reduced traceability ✅
- C. Simpler deployment at the cost of security
- D. Fewer components at the cost of more code

**Answer:** B

**Explanation:** A new consumer can subscribe without changing the emitter, but the list of consumers is held by the framework or broker, so it is hard to see at the point of emission what happens when an event is raised.

### W11.2-08 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Publish-subscribe · **Source:** W11.2d · **Basis:** bold

**Question:** In a distributed event-driven system using publish-subscribe, how does an event reach its consumers?

- A. The emitter calls each consumer directly
- B. Consumers poll the emitter's database
- C. The emitter publishes the event to a message broker, which delivers it to the subscribers ✅
- D. The event is written to a shared file

**Answer:** C

**Explanation:** With publish-subscribe the emitter need not know its consumers, and one event can reach any number of them.

### W11.2-09 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Client-server style · **Source:** W11.2e · **Basis:** bold

**Question:** On which aspect does the client-server style focus?

- A. How code inside a program is organized
- B. How the system is packaged
- C. What triggers work
- D. Which parts request capabilities and which parts provide them ✅

**Answer:** D

**Explanation:** A server provides a capability or data, and one or more clients use it; sharing data or processing among several installations is the most common reason.

### W11.2-10 · MRQ

**Type:** MRQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Costs of a network boundary · **Source:** W11.2e · **Basis:** bold

**Question:** Which costs does a network boundary add that local calls never had? (Select all that apply.)

- A. Requests take far longer, and less predictably ✅
- B. Failures can be partial ✅
- C. Versions must stay compatible ✅
- D. Security becomes prominent ✅

**Answer:** A, B, C, D

**Explanation:** A timeout does not reveal whether the server failed before or after doing the work, a new server may receive requests from an old client, and the server must decide who may read or change shared data.

### W11.2-11 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Microservices · **Source:** W11.2f · **Basis:** bold

**Question:** What defines the microservice style?

- A. One product is built as a collection of independently deployable services, each focused on a capability ✅
- B. All services share a single database
- C. Each service is at most a few hundred lines of code
- D. Each service runs without any server

**Answer:** A

**Explanation:** "Micro" does not necessarily mean small: independent deployability around a focused responsibility matters more than size, and each service usually owns the data behind its interface.

### W11.2-12 · MRQ

**Type:** MRQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Modular monolith vs microservices · **Source:** W11.2f · **Basis:** body

**Question:** Which rows of a comparison between a modular monolith and microservices are correct? (Select all that apply.)

- A. Deployment: one unit released together vs many units each released on its own ✅
- B. Communication: mostly calls within one process vs requests or messages across a network ✅
- C. Best fit: one team releasing one product vs several teams needing independent releases ✅
- D. Testing and debugging: harder in the monolith, simpler with microservices

**Answer:** A, B, C

**Explanation:** Microservices trade operational simplicity for team and deployment independence. With a monolith you build and inspect one thing; with microservices you must start and coordinate many.

### W11.2-13 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Containers and serverless · **Source:** W11.2f · **Basis:** bold

**Question:** Which statement about containers and serverless computing is correct?

- A. Both are architectural styles required for microservices
- B. A container packages a program with the runtime, libraries and configuration it needs; serverless lets you deploy code without managing the servers that run it ✅
- C. A container is a function billed per execution
- D. Serverless means the code runs on the user's machine

**Answer:** B

**Explanation:** Both are deployment approaches, not architectural styles, and neither is required for microservices. Docker is a well-known container tool; AWS Lambda is a well-known serverless service.

### W11.2-14 · MCQ

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** Other styles · **Source:** W11.2h · **Basis:** body

**Question:** The shell command `cat file | grep error | sort` illustrates which architectural style?

- A. Broker
- B. Peer-to-peer
- C. Pipes-and-filters ✅
- D. Plug-in (microkernel)

**Answer:** C

**Explanation:** In pipes-and-filters, data flows through a sequence of steps that each transform it and pass it on. Peer-to-peer has each participant act as both client and server; a plug-in architecture has a minimal core with optional separately written features.

### W11.2-15 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** AB3 as a modular monolith · **Source:** W11.2c · **Basis:** bold · **AB3:** `docs/DeveloperGuide.md`, `build.gradle`

**Question:** AB3 is delivered as a single JAR file, and internally it is organized into `UI`, `Logic`, `Model` and `Storage` components with defined interfaces. Which description fits?

- A. A microservice system
- B. A client-server system with four tiers
- C. A peer-to-peer system
- D. A modular monolith ✅

**Answer:** D

**Explanation:** A monolith is deployed as a single unit; a modular monolith is additionally organized into well-defined components. Components are not tiers unless they are deployed separately.

### W11.2-16 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** AB3 layering · **Source:** W11.2b · **Basis:** bold · **AB3:** `docs/diagrams/ArchitectureDiagram.puml`, `src/main/java/seedu/address/logic/LogicManager.java`

**Question:** In AB3, `UI` depends on `Logic` and on `Model`, and `Logic` depends on `Model` and `Storage`; neither `Model` nor `Storage` depends on `UI` or `Logic`. If these are seen as layers with UI at the top, which kind of layering is it?

- A. Relaxed layering, because a higher layer may use more than just the layer immediately below it ✅
- B. Strict (closed) layering, because each layer uses only the one immediately below
- C. Not layering at all, because there are more than three components
- D. Tiered, because each component is deployed separately

**Answer:** A

**Explanation:** In relaxed layering a layer may use any lower layer, skipping intermediates, while dependencies still never point back up. The course's similar invoice manager is described the same way.

### W11.2-17 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.2] Architectural Styles · **Subtopic:** AB3 event-driven UI · **Source:** W11.2d · **Basis:** bold · **AB3:** `src/main/java/seedu/address/ui/CommandBox.java`

**Question:** AB3's `CommandBox` has a method `handleCommandEntered()` annotated with `@FXML`, which JavaFX invokes when the user presses Enter in the command text field. Which architectural style does this part of AB3 show?

- A. Client-server
- B. Event-driven ✅
- C. Pipes-and-filters
- D. Service-oriented

**Answer:** B

**Explanation:** The UI framework delivers the event to a registered handler instead of the text field containing the follow-up logic. If you have written a GUI, you have written event-driven code.

## [W11.3] Test Cases: Combining Multiple Inputs

### W11.3-01 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** Why not all combinations · **Source:** W11.3a · **Basis:** bold

**Question:** An SUT takes four inputs with 6, 5, 2 and 6 chosen test values. Testing every combination needs 360 test cases. How does the course describe this?

- A. Neither effective nor efficient
- B. Efficient but not effective
- C. Effective but not efficient ✅
- D. Both effective and efficient

**Answer:** C

**Explanation:** All combinations have a higher chance of finding bugs but need too many test cases, so smarter ways to combine inputs are needed.

### W11.3-02 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** Counting combinations · **Source:** W11.3b · **Basis:** bold

**Question:** `foo(char p1, int p2, boolean p3)` has 3, 3 and 2 chosen values for its inputs. How many test cases does the all combinations strategy generate?

- A. 8
- B. 9
- C. 18 ✅
- D. 3

**Answer:** C

**Explanation:** All combinations multiplies the number of values: 3 × 3 × 2 = 18.

### W11.3-03 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** At least once · **Source:** W11.3b · **Basis:** bold

**Question:** For the same `foo(char p1, int p2, boolean p3)` with 3, 3 and 2 chosen values, what is the minimum number of test cases under the at least once strategy?

- A. 2
- B. 3 ✅
- C. 8
- D. 18

**Answer:** B

**Explanation:** Each test input must appear at least once, so the input with the most values (three) determines the minimum.

### W11.3-04 · MRQ

**Type:** MRQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** All pairs · **Source:** W11.3b · **Basis:** bold

**Question:** Which statements about the all pairs strategy are correct? (Select all that apply.)

- A. For any given pair of inputs, all combinations between them are tested ✅
- B. It rests on the observation that a bug is rarely the result of more than two interacting factors ✅
- C. It yields fewer test cases than all combinations and more than at least once ✅
- D. It tests every combination of all inputs

**Answer:** A, B, C

**Explanation:** All pairs is a middle ground between all combinations and at least once.

### W11.3-05 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** Random strategy · **Source:** W11.3b · **Basis:** bold

**Question:** What does the random strategy do?

- A. Generates random input values without regard to partitions
- B. Picks one random value per input
- C. Runs the test cases in random order
- D. Generates test cases using one of the other strategies and then picks a subset randomly ✅

**Answer:** D

**Explanation:** It is used when the set produced by another strategy is too big to run in full.

### W11.3-06 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** Valid inputs in positive test cases · **Source:** W11.3c · **Basis:** bold

**Question:** `printLabel(fruitName, unitPrice)` prints a square label for "Cherry". The only test case that uses "Cherry" pairs it with the invalid price 0 and expects an error. What is the problem?

- A. It cannot confirm that square labels are printed, because "Cherry" never appears in a positive test case ✅
- B. The test case has too few inputs
- C. None; "Cherry" has been tested
- D. "Cherry" should be tested only with invalid prices

**Answer:** A

**Explanation:** The heuristic is that each valid input must appear at least once in a positive test case. A case with Cherry and a valid price is needed.

### W11.3-07 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** Invalid inputs individually · **Source:** W11.3d · **Basis:** bold

**Question:** A test case calls `printLabel("Dog", -1)`, where both arguments are invalid, and the SUT reports "invalid fruit". Why is this test case weak?

- A. It has too many inputs
- B. It cannot confirm that each invalid input is handled correctly, since the SUT may stop at the first one it detects ✅
- C. Negative numbers cannot be tested
- D. It should expect two error messages

**Answer:** B

**Explanation:** To verify that a particular invalid input is handled, test it without combining it with other invalid inputs. Combinations of invalid inputs are still worth testing afterwards.

### W11.3-08 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** What the heuristics can tell you · **Source:** W11.3d · **Basis:** panel

**Question:** "By applying the combination heuristics, we can determine the precise number of test cases required." Is this correct?

- A. Yes
- B. Yes, but only for boolean inputs
- C. No; the heuristics are speculative and cannot give a precise number ✅
- D. No; they always give the all-combinations count

**Answer:** C

**Explanation:** The heuristics guide the choice of test cases but do not fix how many are needed.

### W11.3-09 · MCQ

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** Dependencies between inputs · **Source:** W11.3e · **Basis:** body

**Question:** In `calculateGrade(participation, projectGrade, isAbsent, examScore)`, an absent student can only have an exam score of 0. How should this dependency be reflected in the test cases?

- A. Ignore it; inputs are always independent
- B. Remove `isAbsent` from all test cases
- C. Test `isAbsent` true with every exam score
- D. Add a case with `isAbsent` true and a non-zero score expecting an error, and keep `isAbsent` false in the cases that test other exam scores ✅

**Answer:** D

**Explanation:** When inputs depend on each other, some combinations are themselves invalid. Other cases must keep the remaining inputs valid so that each tests only what it targets.

### W11.3-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.3] Test Cases: Combining Multiple Inputs · **Subtopic:** AB3 one invalid input at a time · **Source:** W11.3d · **Basis:** bold · **AB3:** `src/test/java/seedu/address/commons/util/StringUtilTest.java`

**Question:** A comment in AB3's `StringUtilTest`, above the tests of `containsWordIgnoreCase(sentence, word)`, lists the invalid partitions of `word` and `sentence` and states that the following four test cases "test one invalid input at a time". Which heuristic is being applied?

- A. Test invalid inputs individually before combining them ✅
- B. Each valid input at least once in a positive test case
- C. All combinations
- D. All pairs

**Answer:** A

**Explanation:** If several invalid inputs are combined, a passing test cannot show which one the SUT reacted to.

## [W11.4] Other QA Techniques

### W11.4-01 · MCQ

**Type:** MCQ · **Topic:** [W11.4] Other QA Techniques · **Subtopic:** Quality assurance · **Source:** W11.4a · **Basis:** bold

**Question:** What is software quality assurance (QA)?

- A. Another name for testing
- B. The process of ensuring that the software being built has the required levels of quality ✅
- C. The final phase of a project, after coding
- D. A tool that measures code coverage

**Answer:** B

**Explanation:** Testing is the most common QA activity, but QA also includes complementary techniques such as static analysis, code reviews and formal verification.

### W11.4-02 · MCQ

**Type:** MCQ · **Topic:** [W11.4] Other QA Techniques · **Subtopic:** Validation vs verification · **Source:** W11.4b · **Basis:** bold

**Question:** Which pairing is correct?

- A. Validation — are you building the system right? Verification — are you building the right system?
- B. Both ask whether the code compiles
- C. Validation — are you building the right system? Verification — are you building the system right? ✅
- D. Validation is done by developers; verification by users

**Answer:** C

**Explanation:** Quality assurance = validation + verification. Validation asks whether the requirements are correct; verification asks whether they are implemented correctly.

### W11.4-03 · MRQ

**Type:** MRQ · **Topic:** [W11.4] Other QA Techniques · **Subtopic:** Applying validation and verification · **Source:** W11.4b · **Basis:** panel

**Question:** Which statements about validation and verification are correct? (Select all that apply.)

- A. Both must be done, since requirements can be wrong too ✅
- B. Developer testing is more about verification ✅
- C. Acceptance testing is more about validation ✅
- D. It is very important to classify every QA activity as one or the other

**Answer:** A, B, C

**Explanation:** Which category an activity falls into is not that important; what matters is that both are done. A system crash is more likely a verification failure.

### W11.4-04 · MRQ

**Type:** MRQ · **Topic:** [W11.4] Other QA Techniques · **Subtopic:** Formal verification · **Source:** W11.4c · **Basis:** bold

**Question:** Which statements about formal verification are correct? (Select all that apply.)

- A. It uses mathematical techniques to prove the correctness of a program ✅
- B. It can be used to prove the absence of errors ✅
- C. It is more commonly used in safety-critical software such as flight control systems ✅
- D. It proves that the software is useful to its users

**Answer:** A, B, C

**Explanation:** Testing can show only the presence of errors. Formal verification proves compliance with the specification, not the software's actual utility, and it is expensive because it needs specialised notations and knowledge.

### W11.4-05 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.4] Other QA Techniques · **Subtopic:** AB3 QA activities · **Source:** W11.4a · **Basis:** bold · **AB3:** `.github/workflows/gradle.yml`, `build.gradle`

**Question:** AB3's CI runs `./gradlew check coverage`, which runs the JUnit tests, Checkstyle and JaCoCo coverage reporting. Which statement about this in QA terms is correct?

- A. It is validation, because it checks that the requirements are right
- B. It is formal verification, because it proves the absence of errors
- C. It replaces the need for code reviews
- D. It combines testing with static analysis, and is mainly verification ✅

**Answer:** D

**Explanation:** QA uses testing together with complementary techniques such as static analysis. Developer tests check the implementation against intended behavior (verification); they cannot show that the requirements themselves are right.

## [W11.5] Secure Software Engineering

### W11.5-01 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Secure by design · **Source:** W11.5a · **Basis:** bold

**Question:** What does 'secure by design' mean?

- A. Security is part of software engineering throughout, not a specialist activity added after the software is finished ✅
- B. Security features are sold as a separate product
- C. Security experts review the software after it is finished
- D. The design is kept secret

**Answer:** A

**Explanation:** Every engineer needs enough knowledge to recognise common risks, make safer decisions and know when expert help is needed.

### W11.5-02 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Security mindset · **Source:** W11.5a · **Basis:** bold

**Question:** What is the security mindset?

- A. The belief that every user is malicious
- B. Questioning assumptions and considering how a feature could be deliberately misused ✅
- C. Keeping all information secret
- D. Adding as many security features as possible

**Answer:** B

**Explanation:** The security mindset asks what is being trusted and what someone could do if that trust is misplaced. It is not the belief that every user is malicious; software must stay safe when inputs are mistaken, unusual, corrupted or hostile.

### W11.5-03 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** CIA triad · **Source:** W11.5a · **Basis:** bold

**Question:** In an event-registration system, a student manages to cancel another student's registration. Which security property is violated?

- A. Confidentiality
- B. Availability
- C. Integrity ✅
- D. Privacy

**Answer:** C

**Explanation:** Integrity asks whether information and behavior have remained correct and free from improper change. Reading another's registration would violate confidentiality; the service being unusable at peak time would violate availability.

### W11.5-04 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Security terms · **Source:** W11.5a · **Basis:** bold

**Question:** Which definitions match the course? (Select all that apply.)

- A. Threat — a possible way an asset could be harmed ✅
- B. Vulnerability — a weakness that allows a threat to be realized ✅
- C. Attack — an attempt to exploit a vulnerability ✅
- D. Risk — an asset that is worth protecting
- E. Control — something that reduces the likelihood or impact of a threat ✅

**Answer:** A, B, C, E

**Explanation:** An asset is something worth protecting. Risk is the likelihood of a threat combined with the seriousness of its impact.

### W11.5-05 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Authentication vs authorization · **Source:** W11.5a · **Basis:** bold

**Question:** A signed-in attendee sends a request to download the attendee list of an event they do not organize. Which check should stop this?

- A. Authentication, because the identity is unknown
- B. Input validation of the event name
- C. Encryption of the list
- D. Authorization, because the identity is known but may not perform this action on this resource ✅

**Answer:** D

**Explanation:** Authentication establishes which identity is making a request; authorization decides whether that identity may perform a specific action on a specific resource. A user can be authenticated yet unauthorized.

### W11.5-06 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Security vs privacy · **Source:** W11.5a · **Basis:** bold

**Question:** Which statement about privacy and security is correct?

- A. Privacy also asks whether collecting, using, retaining or sharing personal information is appropriate in the first place ✅
- B. Privacy is a part of availability
- C. They are the same thing
- D. Strong access control justifies collecting any data

**Answer:** A

**Explanation:** Security is about protection from unauthorized use; privacy goes further. Data that is never collected cannot later be leaked by that system.

### W11.5-07 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Security as risk management · **Source:** W11.5a · **Basis:** bold

**Question:** Which statement about the limits of security matches the course?

- A. A system is secure once it passes a security scan
- B. Perfect security is not achievable; secure engineering is risk management, and security also has costs ✅
- C. Security should be maximised regardless of cost
- D. Only web applications need security

**Answer:** B

**Explanation:** Controls cost development time, performance and usability, so they are chosen where their benefits justify the costs. A useful security claim says what is protected, from whom, under what assumptions.

### W11.5-08 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Common weaknesses · **Source:** W11.5a · **Basis:** bold

**Question:** A system builds a database query by joining a fixed string with text typed by the user, and the database then executes part of that text as a command. Which weakness is this?

- A. Broken access control
- B. Cross-site scripting
- C. Injection ✅
- D. Outdated components

**Answer:** C

**Explanation:** Injection occurs when a system interprets untrusted data as code or commands. XSS is untrusted content executing as script in another user's browser; broken access control lets someone act without authorization.

### W11.5-09 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Threat modeling · **Source:** W11.5b · **Basis:** bold

**Question:** Which statements about threat modeling are correct? (Select all that apply.)

- A. It is a structured way to ask what needs protection, what could go wrong and what should be done about it ✅
- B. It starts with what matters — assets and stakeholders — not with a list of attacks ✅
- C. A trust boundary is a place where data or control passes between parts with different levels of trust ✅
- D. Its value lies mainly in using the correct diagram format

**Answer:** A, B, C

**Explanation:** The value comes from the questions, not the format. Trust should be earned at each boundary rather than inherited from where data was first seen.

### W11.5-10 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Prioritising risks · **Source:** W11.5b · **Basis:** bold

**Question:** How should a team decide where to spend its security effort?

- A. On the most technically interesting attacks
- B. Equally on every conceivable threat
- C. Only on threats that have already occurred
- D. Where plausible threats could cause serious harm, rating likelihood and impact by a rule agreed in advance ✅

**Answer:** D

**Explanation:** Agreeing the rule in advance means two people analysing the same threat reach the same answer. Budget should not go to exciting but implausible attacks while ordinary permission checks are ignored.

### W11.5-11 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Handling a risk · **Source:** W11.5b · **Basis:** bold

**Question:** Which statement about responding to an identified risk is correct?

- A. A risk can be reduced with a control, removed by dropping the feature or data, or accepted — acceptance being legitimate only when recorded with a reason, an owner and a date to reconsider ✅
- B. Every risk must get a control
- C. Accepted risks need not be recorded
- D. A control is proven effective once it is implemented

**Answer:** A

**Explanation:** Not every risk gets a control. And a control is only a claim until it has been reviewed or tested.

### W11.5-12 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Secure design principles · **Source:** W11.5b · **Basis:** bold

**Question:** Which pairings of principle and meaning are correct? (Select all that apply.)

- A. Least privilege — give each user, component and process only the permissions it needs for its current job ✅
- B. Deny by default — access is refused unless a rule explicitly permits it ✅
- C. Defense in depth — protect an important asset with several independent controls ✅
- D. Minimizing the attack surface — add more interfaces so attacks are spread out

**Answer:** A, B, C

**Explanation:** Minimizing the attack surface means reducing the features, interfaces, data, permissions and dependencies available to be attacked.

### W11.5-13 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Fail securely · **Source:** W11.5b · **Basis:** bold

**Question:** An authorization service times out while a user is trying to open a protected page. What should happen under the fail securely principle?

- A. The page is shown, to preserve availability
- B. Access is denied ✅
- C. The user is asked to confirm their own role
- D. The check is skipped for administrators

**Answer:** B

**Explanation:** When something goes wrong, the failure should deny rather than allow. This trades availability for confidentiality and integrity.

### W11.5-14 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Established mechanisms · **Source:** W11.5b · **Basis:** bold

**Question:** A team plans to write its own password-storage and session-handling code. What does the course advise?

- A. Write it in-house so attackers do not know the design
- B. Store passwords with a fast hash such as SHA-256
- C. Prefer established mechanisms that many people have already reviewed and attacked ✅
- D. Keep passwords in reversible encryption so they can be recovered

**Answer:** C

**Explanation:** Authentication, password storage, encryption and session management are easy to get subtly wrong. Password facilities are deliberately expensive to compute and salt each password separately, so an ordinary fast hash is unsuitable.

### W11.5-15 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Handling untrusted data · **Source:** W11.5b · **Basis:** bold

**Question:** Untrusted data creates three separate responsibilities. Which are they? (Select all that apply.)

- A. Validate it for its intended use on entry ✅
- B. Keep it separate from instructions wherever it reaches an interpreter ✅
- C. Encode it for each output context ✅
- D. Encrypt it before validation

**Answer:** A, B, C

**Explanation:** Validation, separation from commands (e.g. parameterized queries) and output encoding protect different boundaries, and none replaces another.

### W11.5-16 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Where validation must happen · **Source:** W11.5b · **Basis:** bold

**Question:** A web form checks in the browser that a quantity is positive. Is that enough to protect server-side data?

- A. Yes, because invalid values cannot be submitted
- B. Yes, if the check is written in JavaScript
- C. No; validation should happen only in the database
- D. No; validation that protects server-side assets must also occur on the trusted side of the boundary ✅

**Answer:** D

**Explanation:** Client-side validation improves usability but is not a security boundary, because requests can be crafted without using the form.

### W11.5-17 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Preventing injection · **Source:** W11.5b · **Basis:** bold

**Question:** Which practice does the course recommend to prevent untrusted input from being executed as part of a database command?

- A. Using parameterized queries rather than concatenating untrusted strings into commands ✅
- B. Limiting inputs to 20 characters
- C. Removing the word "DROP" from inputs
- D. Encoding the output as HTML

**Answer:** A

**Explanation:** Executable commands should not be built by concatenating untrusted strings. Output encoding addresses a different boundary — placing data into structured output such as a web page.

### W11.5-18 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Identity and authorization · **Source:** W11.5b · **Basis:** bold

**Question:** A request includes the field `isAdmin = true`, set by the client. How should the server treat it?

- A. As proof that the requester is an administrator
- B. As a claim under the user's control; identity must come from an authentication mechanism the trusted side can verify ✅
- C. As trustworthy if the request used HTTPS
- D. As trustworthy once the user has signed in

**Answer:** B

**Explanation:** After identifying the requester, the server authorizes the particular action on the particular resource, and applies the same rule to every path to that action.

### W11.5-19 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Secrets and dependencies · **Source:** W11.5b · **Basis:** bold

**Question:** Which practices does the course recommend? (Select all that apply.)

- A. Keep secrets out of source code and version control ✅
- B. Keep a secret in a store built for the purpose and let the deployment supply it ✅
- C. Commit the ecosystem's lock file, which records the exact resolved versions ✅
- D. Check resolved dependency versions against published advisories using a maintained scanner ✅
- E. Treat a clean scan as proof that the software is secure

**Answer:** A, B, C, D

**Explanation:** Reused code runs with the permissions of your software and so becomes part of its security. A clean scan does not prove security; verification needs both tools and human reasoning.

### W11.5-20 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** When to do security work · **Source:** W11.5c · **Basis:** bold

**Question:** Why should security work accompany every stage of development?

- A. Because security tools are slow
- B. Because security requirements never change
- C. Because a late safeguard cannot reliably repair an insecure assumption made earlier ✅
- D. Because regulators require a security section in every document

**Answer:** C

**Explanation:** Security needs are stated as testable properties early, and the analysis is revisited whenever an important assumption changes — a new kind of user, new sensitive data, a new dependency or a changed trust boundary.

### W11.5-21 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Finding a vulnerability · **Source:** W11.5c · **Basis:** bold

**Question:** You believe you have found a real vulnerability in a system that someone else runs. Which actions does the course recommend? (Select all that apply.)

- A. Stop exploring further ✅
- B. Preserve what is needed to understand the problem, such as the time, what you did and the smallest reproduction ✅
- C. Report it through a private channel rather than a public one ✅
- D. Post the details publicly so that users can protect themselves immediately

**Answer:** A, B, C

**Explanation:** Withholding details until those responsible have had a reasonable chance to act is called coordinated disclosure. For someone else's system, report first and contain only what you are authorized to touch.

### W11.5-22 · MRQ

**Type:** MRQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** AI-assisted code · **Source:** W11.5d · **Basis:** bold

**Question:** Which statements about securing AI-assisted code are correct? (Select all that apply.)

- A. Responsibility for AI-assisted code remains with the engineer and team that accept and deploy it ✅
- B. Fluency, speed, compilation or generated tests are not evidence of security ✅
- C. Instructions found in files, web pages or issue text that the tool reads should be treated as untrusted data ✅
- D. Code that is cheap to generate is also cheap to verify

**Answer:** A, B, C

**Explanation:** AI-generated code must earn its place through understanding, review and verification, and the more a tool can act, the more least privilege and explicit approval matter.

### W11.5-23 · MCQ

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** Independent checks · **Source:** W11.5d · **Basis:** bold

**Question:** After an AI assistant generates an endpoint, a developer asks the same assistant "Is this code secure?" and it answers yes. What is the weakness of this check?

- A. None; the assistant wrote the code and knows it best
- B. The assistant should have been asked twice
- C. The question should have been asked before generating the code
- D. An AI assistant cannot establish that its own answer is complete or correct, so this is not an independent check ✅

**Answer:** D

**Explanation:** Suggestions from the tool are hypotheses. Independent checks, adversarial tests and tracing untrusted data through the change are needed before accepting responsibility for it.

### W11.5-24 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** AB3 validation on entry · **Source:** W11.5b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/logic/parser/ParserUtil.java`, `src/main/java/seedu/address/model/person/Name.java`

**Question:** In AB3, `ParserUtil#parseName` trims the user's text, checks it with `Name.isValidName` — a regular expression describing what an acceptable name looks like — and throws a `ParseException` otherwise. Which secure-coding practice does this correspond to?

- A. Validation: checking that data is acceptable for its intended purpose as early as practical ✅
- B. Parameterized queries
- C. Output encoding
- D. Least privilege

**Answer:** A

**Explanation:** The check sits at the point where user input enters the application, and it describes what is allowed rather than listing what is forbidden.

### W11.5-25 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.5] Secure Software Engineering · **Subtopic:** AB3 re-validating file data · **Source:** W11.5b · **Basis:** bold · **AB3:** `src/main/java/seedu/address/storage/JsonAdaptedPerson.java`

**Question:** When AB3 loads `addressbook.json`, `JsonAdaptedPerson#toModelType` checks each field again (for example `Name.isValidName(name)`) and throws `IllegalValueException` if a value is missing or invalid, even though the app normally writes that file itself. Which idea from threat modeling does this reflect?

- A. Deny by default
- B. A file is a trust boundary: trust should be earned at each boundary, not inherited from where the data was first seen ✅
- C. Defense in depth through encryption
- D. Minimizing the attack surface by removing features

**Answer:** B

**Explanation:** Data read from a file may have been edited or corrupted since the app wrote it, so it is validated again before it becomes model data.

## [W11.6] Reuse

### W11.6-01 · MCQ

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** Why reuse · **Source:** W11.6a · **Basis:** bold

**Question:** What is the benefit of reusing tried-and-tested components?

- A. It guarantees the system has no bugs
- B. It removes the need for testing
- C. It can enhance the robustness of a new system while reducing the manpower and time required ✅
- D. It makes the system smaller

**Answer:** C

**Explanation:** A reused component can be a piece of code, a subsystem or a whole system — but reuse also has costs.

### W11.6-02 · MRQ

**Type:** MRQ · **Topic:** [W11.6] Reuse · **Subtopic:** Costs of reuse · **Source:** W11.6b · **Basis:** bold

**Question:** Which are costs or risks of reusing a component? (Select all that apply.)

- A. It may be overkill, increasing size or degrading performance ✅
- B. It may not be mature or stable enough ✅
- C. It may stop being maintained ✅
- D. Its licence may restrict how you can use or develop your software ✅
- E. Malicious code can sneak in through compromised dependencies ✅

**Answer:** A, B, C, D, E

**Explanation:** A reused component may also have bugs, missing features or security vulnerabilities that matter to you but are not a priority for its maintainers.

### W11.6-03 · MRQ

**Type:** MRQ · **Topic:** [W11.6] Reuse · **Subtopic:** APIs · **Source:** W11.6c · **Basis:** body

**Question:** Which statements about APIs are correct? (Select all that apply.)

- A. An API specifies the interface through which other programs can interact with a software component ✅
- B. It is a contract between the component and its clients ✅
- C. Defining component APIs early lets a team develop components in parallel ✅
- D. Every method of a class, including private ones, is part of its API

**Answer:** A, B, C

**Explanation:** Private methods are not part of a class's API. APIs can be code-level, like the `String` API, or web-based, like the GitHub API.

### W11.6-04 · MCQ

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** Preconditions and postconditions · **Source:** W11.6d · **Basis:** body

**Question:** In a precise API definition of an operation, what does a postcondition describe?

- A. What must be true before the operation is called
- B. What happens while the operation is running
- C. The parameters of the operation
- D. The state of the system after the operation completes ✅

**Answer:** D

**Explanation:** Preconditions must hold before calling; postconditions describe the system afterwards and do not say what happens during the operation.

### W11.6-05 · MCQ

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** Using a library · **Source:** W11.6e, W11.6f · **Basis:** body

**Question:** Before reusing a library in a product, which check does the course mention besides confirming that its functionality fits?

- A. That its licence allows your intended reuse ✅
- B. That it is written in the same IDE
- C. That it has more than a thousand users
- D. That it contains no private methods

**Answer:** A

**Explanation:** The steps are: read the documentation to confirm fit, check the licence, make the library accessible (for example through a dependency management tool), and call its API.

### W11.6-06 · MCQ

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** Frameworks · **Source:** W11.6g · **Basis:** bold

**Question:** What is a software framework?

- A. A collection of unrelated utility functions
- B. A reusable implementation of software, or part of it, providing generic functionality that can be selectively customized to produce a specific application ✅
- C. A document describing coding rules
- D. A runtime environment for applications

**Answer:** B

**Explanation:** Systems in the same category share structure and execution flow, which allows large-scale reuse. A runtime environment is the defining feature of a platform.

### W11.6-07 · MCQ

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** Libraries vs frameworks · **Source:** W11.6h · **Basis:** bold

**Question:** Which statement captures the key difference between a library and a framework?

- A. A framework is always bigger than a library
- B. A library can be customized, but a framework is used as is
- C. Your code calls the library code, while the framework code calls your code ✅
- D. Libraries are for testing; frameworks are for GUIs

**Answer:** C

**Explanation:** Libraries are meant to be used as is; frameworks are meant to be customized or extended, and use inversion of control — the "Hollywood principle": don't call us, we'll call you.

### W11.6-08 · MCQ

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** Platforms · **Source:** W11.6i · **Basis:** bold

**Question:** What is the defining characteristic of a platform?

- A. It is bundled with many libraries
- B. It is open source
- C. It follows the Hollywood principle
- D. It provides a runtime environment for applications ✅

**Answer:** D

**Explanation:** Platforms such as JavaEE and .NET are often bundled with libraries, tools and frameworks, but what makes them platforms is the runtime environment they provide.

### W11.6-09 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** AB3 and JUnit · **Source:** W11.6h · **Basis:** bold · **AB3:** `src/test/java/seedu/address/model/person/NameTest.java`

**Question:** AB3's test classes, such as `NameTest`, contain methods annotated `@Test` that no AB3 code ever calls; JUnit finds and runs them. What does this show about JUnit?

- A. It is a framework, using inversion of control: the framework calls your code ✅
- B. It is a library, because AB3 calls it
- C. It is a platform, because it provides the JVM
- D. It is a design pattern

**Answer:** A

**Explanation:** With a library your code calls the library; with a framework the framework calls your code.

### W11.6-10 · MCQ · AB3

**Type:** MCQ · **Topic:** [W11.6] Reuse · **Subtopic:** AB3 declaring libraries · **Source:** W11.6f · **Basis:** body · **AB3:** `build.gradle`

**Question:** AB3's `build.gradle` names the Jackson libraries in its `dependencies` block and Maven Central under `repositories`. Which step of using a library does this take care of?

- A. Checking the library's licence
- B. Making the library accessible to the project by configuring a dependency management tool ✅
- C. Reading the library's documentation
- D. Calling the library's API

**Answer:** B

**Explanation:** Rather than downloading the library by hand, the project lets its dependency management tool fetch it.

## [W11.7] Cloud Computing : OPTIONAL

### W11.7-01 · MCQ

**Type:** MCQ · **Topic:** [W11.7] Cloud Computing : OPTIONAL · **Subtopic:** Cloud computing · **Source:** W11.7a · **Basis:** bold

**Question:** What is cloud computing?

- A. Running software only on the user's own machine
- B. A kind of peer-to-peer file sharing
- C. The delivery of computing as a service over the network ✅
- D. A programming language for servers

**Answer:** C

**Explanation:** The provider maintains hardware and software at a remote location; users pay for what they use and can scale up or down.

### W11.7-02 · MCQ

**Type:** MCQ · **Topic:** [W11.7] Cloud Computing : OPTIONAL · **Subtopic:** IaaS, PaaS, SaaS · **Source:** W11.7b · **Basis:** bold

**Question:** Using Google Docs in a browser instead of installing a word processor is an example of which cloud service model?

- A. Infrastructure as a service (IaaS)
- B. Platform as a service (PaaS)
- C. None of these
- D. Software as a service (SaaS) ✅

**Answer:** D

**Explanation:** SaaS lets applications be accessed over the network. IaaS delivers infrastructure such as virtual servers; PaaS provides a platform on which developers build applications.

## [W11.8] Other UML Models : OPTIONAL

### W11.8-01 · MCQ

**Type:** MCQ · **Topic:** [W11.8] Other UML Models : OPTIONAL · **Subtopic:** State machine diagrams · **Source:** W11.8a · **Basis:** bold

**Question:** Which UML diagram models state-dependent behavior over an object's full life cycle?

- A. State machine diagram ✅
- B. Deployment diagram
- C. Sequence diagram
- D. Package diagram

**Answer:** A

**Explanation:** A state machine diagram views an object's life cycle as a set of states, each with its own behavior. A sequence diagram captures behavior one scenario at a time.

### W11.8-02 · MRQ

**Type:** MRQ · **Topic:** [W11.8] Other UML Models : OPTIONAL · **Subtopic:** Other UML diagrams · **Source:** W11.8a · **Basis:** bold

**Question:** Which pairings of UML diagram and purpose are correct? (Select all that apply.)

- A. Deployment diagram — which pieces of software run on which pieces of hardware ✅
- B. Package diagram — packages and their dependencies ✅
- C. Communication diagram — like a sequence diagram, but emphasising the data links between participants ✅
- D. Timing diagram — how a class is decomposed into its internal structure

**Answer:** A, B, C

**Explanation:** A timing diagram focuses on timing constraints. Decomposing a class into its internal structure is the job of a composite structure diagram.
