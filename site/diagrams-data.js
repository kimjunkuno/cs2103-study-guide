globalThis.DIAGRAM_QUESTIONS = {
  "version": 1,
  "cases": [
    {
      "id": "class-inheritance",
      "family": "class",
      "topicId": "W4.3c",
      "week": 4,
      "context": "Cat extends Animal. Find the incorrect relationship.",
      "scene": {
        "nodes": [
          {
            "id": "cat",
            "title": "Cat",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "animal",
            "title": "Animal",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "relation",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "left",
            "kind": "inheritance",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "relation"
      ],
      "fixes": [
        {
          "path": "edges.0.direction",
          "value": "right"
        }
      ],
      "explanation": "The hollow triangle must point to the superclass, Animal.",
      "rule": "Generalization points from the subclass to the superclass.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-class-diagrams-intermediate",
      "optional": false
    },
    {
      "id": "class-composition",
      "family": "class",
      "topicId": "W4.3c",
      "week": 4,
      "context": "A House owns its Rooms; rooms are not shared. Find the composition error.",
      "scene": {
        "nodes": [
          {
            "id": "house",
            "title": "House",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "room",
            "title": "Room",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "relation",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "right",
            "kind": "composition",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "relation"
      ],
      "fixes": [
        {
          "path": "edges.0.direction",
          "value": "left"
        }
      ],
      "explanation": "Put the filled diamond at House, the whole that owns the parts.",
      "rule": "Composition uses a filled diamond at the whole end.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-class-diagrams-intermediate",
      "optional": false
    },
    {
      "id": "class-multiplicity",
      "family": "class",
      "topicId": "W4.2b",
      "week": 4,
      "context": "Each Team has at least one Member. Each Member belongs to one Team.",
      "scene": {
        "nodes": [
          {
            "id": "team",
            "title": "Team",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "member",
            "title": "Member",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "relation",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "none",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": [
              {
                "id": "team-count",
                "text": "1",
                "x": 315,
                "y": 120
              },
              {
                "id": "member-count",
                "text": "0..1",
                "x": 465,
                "y": 120
              }
            ]
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "member-count"
      ],
      "fixes": [
        {
          "path": "edges.0.multiplicity.1.text",
          "value": "1..*"
        }
      ],
      "explanation": "The Member end needs 1..*: one or more members per team.",
      "rule": "Multiplicity at an end counts instances at that end for one instance at the other end.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-class-diagrams-basic",
      "optional": false
    },
    {
      "id": "class-static",
      "family": "class",
      "topicId": "W4.2b",
      "week": 4,
      "context": "Counter.total is shared by all Counter instances. Tap the notation mistake.",
      "scene": {
        "nodes": [
          {
            "id": "counter",
            "title": "Counter",
            "x": 290,
            "y": 140,
            "w": 220,
            "h": 130,
            "rows": [
              {
                "id": "total",
                "text": "total: int",
                "underlined": false,
                "hidden": false
              }
            ],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "total"
      ],
      "fixes": [
        {
          "path": "nodes.0.rows.0.underlined",
          "value": true
        }
      ],
      "explanation": "Underline total: int to show that it is a class-level member.",
      "rule": "UML class-level members are underlined.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-class-diagrams-basic",
      "optional": false
    },
    {
      "id": "object-name",
      "family": "object",
      "topicId": "W4.2c",
      "week": 4,
      "context": "This is an object snapshot. Tap the incorrectly written object heading.",
      "scene": {
        "nodes": [
          {
            "id": "alice",
            "title": "alice:Person",
            "x": 60,
            "y": 120,
            "w": 220,
            "h": 130,
            "rows": [
              {
                "id": "age",
                "text": "age = 20",
                "underlined": false,
                "hidden": false
              }
            ],
            "object": true,
            "hidden": false,
            "underlineTitle": false
          },
          {
            "id": "bob",
            "title": "bob:Person",
            "x": 510,
            "y": 120,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "alice"
      ],
      "fixes": [
        {
          "path": "nodes.0.underlineTitle",
          "value": true
        }
      ],
      "explanation": "Underline alice:Person to mark an object rather than a class.",
      "rule": "An object heading is underlined and may show instanceName:ClassName.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-object-diagrams",
      "optional": false
    },
    {
      "id": "object-value",
      "family": "object",
      "topicId": "W4.2c",
      "week": 4,
      "context": "Alice is 20 years old. Find the incorrect slot in this object snapshot.",
      "scene": {
        "nodes": [
          {
            "id": "alice",
            "title": "alice:Person",
            "x": 290,
            "y": 130,
            "w": 220,
            "h": 130,
            "rows": [
              {
                "id": "age",
                "text": "age: int",
                "underlined": false,
                "hidden": false
              }
            ],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "age"
      ],
      "fixes": [
        {
          "path": "nodes.0.rows.0.text",
          "value": "age = 20"
        }
      ],
      "explanation": "Show the current value, age = 20, rather than a class-level type declaration.",
      "rule": "Object slots show attribute values for a particular instance.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-object-diagrams",
      "optional": false
    },
    {
      "id": "object-link",
      "family": "object",
      "topicId": "W4.2c",
      "week": 4,
      "context": "Alice owns Fido. The line represents that object link.",
      "scene": {
        "nodes": [
          {
            "id": "alice",
            "title": "alice:Person",
            "x": 60,
            "y": 120,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "fido",
            "title": "fido:Dog",
            "x": 510,
            "y": 120,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "link",
            "x1": 280,
            "y1": 155,
            "x2": 510,
            "y2": 155,
            "direction": "none",
            "kind": "dashed",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "link"
      ],
      "fixes": [
        {
          "path": "edges.0.kind",
          "value": "solid"
        }
      ],
      "explanation": "Use a solid link between the two objects.",
      "rule": "An object link instantiates an association and is drawn as a solid line.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-object-diagrams",
      "optional": false
    },
    {
      "id": "object-owner",
      "family": "object",
      "topicId": "W4.2c",
      "week": 4,
      "context": "Each Dog has exactly one owner. Fido belongs to Alice, not Bob.",
      "scene": {
        "nodes": [
          {
            "id": "alice",
            "title": "alice:Person",
            "x": 40,
            "y": 70,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "bob",
            "title": "bob:Person",
            "x": 530,
            "y": 70,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "fido",
            "title": "fido:Dog",
            "x": 285,
            "y": 340,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "alice-link",
            "x1": 150,
            "y1": 140,
            "x2": 340,
            "y2": 340,
            "direction": "none",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "bob-link",
            "x1": 640,
            "y1": 140,
            "x2": 450,
            "y2": 340,
            "direction": "none",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "bob-link"
      ],
      "fixes": [
        {
          "path": "edges.1.hidden",
          "value": true
        }
      ],
      "explanation": "Remove Bob’s link. The snapshot must respect the one-owner constraint.",
      "rule": "Object snapshots must be consistent with association multiplicities and the stated scenario.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week4/topics.html#design-modelling-modelling-structure-object-diagrams",
      "optional": false
    },
    {
      "id": "ccd-database",
      "family": "conceptual",
      "topicId": "W9.1a",
      "week": 9,
      "context": "Model the library domain: Library and Book. Find the solution-specific class.",
      "scene": {
        "nodes": [
          {
            "id": "library",
            "title": "Library",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "book",
            "title": "Book",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "database",
            "title": "DatabaseConnection",
            "x": 285,
            "y": 330,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "association",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "none",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "database"
      ],
      "fixes": [
        {
          "path": "nodes.2.hidden",
          "value": true
        }
      ],
      "explanation": "DatabaseConnection is a software implementation detail, not a library-domain entity.",
      "rule": "Conceptual class diagrams exclude solution-specific classes.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-structure-conceptual-class-diagrams-aka-oodms",
      "optional": false
    },
    {
      "id": "ccd-method",
      "family": "conceptual",
      "topicId": "W9.1a",
      "week": 9,
      "context": "This is a conceptual class diagram of library entities. Find the notation that does not belong.",
      "scene": {
        "nodes": [
          {
            "id": "book",
            "title": "Book",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 130,
            "rows": [
              {
                "id": "checkout",
                "text": "+ checkout()",
                "underlined": false,
                "hidden": false
              }
            ],
            "object": false,
            "hidden": false
          },
          {
            "id": "member",
            "title": "Member",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "association",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "none",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "checkout"
      ],
      "fixes": [
        {
          "path": "nodes.0.rows.0.hidden",
          "value": true
        }
      ],
      "explanation": "Omit operations such as checkout() from the conceptual class diagram.",
      "rule": "The course’s conceptual class notation omits methods.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-structure-conceptual-class-diagrams-aka-oodms",
      "optional": false
    },
    {
      "id": "ccd-navigability",
      "family": "conceptual",
      "topicId": "W9.1a",
      "week": 9,
      "context": "This is a conceptual class diagram, not an implementation class diagram.",
      "scene": {
        "nodes": [
          {
            "id": "member",
            "title": "Member",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "book",
            "title": "Book",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "association",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "association"
      ],
      "fixes": [
        {
          "path": "edges.0.direction",
          "value": "none"
        }
      ],
      "explanation": "Remove the navigability arrow from the association.",
      "rule": "The course’s conceptual class notation omits navigability.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-structure-conceptual-class-diagrams-aka-oodms",
      "optional": false
    },
    {
      "id": "ccd-controller",
      "family": "conceptual",
      "topicId": "W9.1a",
      "week": 9,
      "context": "Model the problem domain of a library. Find the class that represents the user interface.",
      "scene": {
        "nodes": [
          {
            "id": "book",
            "title": "Book",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "member",
            "title": "Member",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "dialog",
            "title": "CheckoutDialog",
            "x": 285,
            "y": 330,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "association",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "none",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "dialog"
      ],
      "fixes": [
        {
          "path": "nodes.2.hidden",
          "value": true
        }
      ],
      "explanation": "CheckoutDialog belongs to the software solution, not the library’s problem domain.",
      "rule": "Conceptual class diagrams describe domain entities, not UI or infrastructure classes.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-structure-conceptual-class-diagrams-aka-oodms",
      "optional": false
    },
    {
      "id": "sequence-direction",
      "family": "sequence",
      "topicId": "W6.1a",
      "week": 6,
      "context": "Client calls Service.find(). Tap the incorrect message.",
      "scene": {
        "nodes": [
          {
            "id": "client",
            "title": "client:Client",
            "x": 50,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "service",
            "title": "service:Service",
            "x": 510,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "client-life",
            "x1": 160,
            "y1": 110,
            "x2": 160,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "service-life",
            "x1": 620,
            "y1": 110,
            "x2": 620,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "call",
            "x1": 160,
            "y1": 210,
            "x2": 620,
            "y2": 210,
            "direction": "left",
            "kind": "solid",
            "label": "find()",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "call"
      ],
      "fixes": [
        {
          "path": "edges.2.direction",
          "value": "right"
        }
      ],
      "explanation": "The call must travel from Client to Service.",
      "rule": "A message arrow points from the sender to the receiver.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week6/topics.html#design-modelling-modelling-behaviors-sequence-diagrams-basic",
      "optional": false
    },
    {
      "id": "sequence-order",
      "family": "sequence",
      "topicId": "W6.1a",
      "week": 6,
      "context": "Client must call find() before save(). Tap either message involved in the ordering error.",
      "scene": {
        "nodes": [
          {
            "id": "client",
            "title": "client:Client",
            "x": 50,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "service",
            "title": "service:Service",
            "x": 510,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "client-life",
            "x1": 160,
            "y1": 110,
            "x2": 160,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "service-life",
            "x1": 620,
            "y1": 110,
            "x2": 620,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "first",
            "x1": 160,
            "y1": 190,
            "x2": 620,
            "y2": 190,
            "direction": "right",
            "kind": "solid",
            "label": "save()",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "second",
            "x1": 160,
            "y1": 300,
            "x2": 620,
            "y2": 300,
            "direction": "right",
            "kind": "solid",
            "label": "find()",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": []
      },
      "answerIds": [
        "first",
        "second"
      ],
      "fixes": [
        {
          "path": "edges.2.label",
          "value": "find()"
        },
        {
          "path": "edges.3.label",
          "value": "save()"
        }
      ],
      "explanation": "Put find() above save(): time progresses down the diagram.",
      "rule": "Messages lower in a sequence diagram occur later in the scenario.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week6/topics.html#design-modelling-modelling-behaviors-sequence-diagrams-basic",
      "optional": false
    },
    {
      "id": "sequence-deletion",
      "family": "sequence",
      "topicId": "W6.1b",
      "week": 6,
      "context": "Service is destroyed at the X. Find what incorrectly continues afterwards.",
      "scene": {
        "nodes": [
          {
            "id": "client",
            "title": "client:Client",
            "x": 50,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "service",
            "title": "service:Service",
            "x": 510,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "client-life",
            "x1": 160,
            "y1": 110,
            "x2": 160,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "service-life",
            "x1": 620,
            "y1": 110,
            "x2": 620,
            "y2": 280,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "after-delete",
            "x1": 620,
            "y1": 280,
            "x2": 620,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [
          {
            "id": "destroy",
            "type": "cross",
            "x": 620,
            "y": 280,
            "label": "",
            "w": 36,
            "h": 36,
            "hidden": false
          }
        ],
        "texts": []
      },
      "answerIds": [
        "after-delete"
      ],
      "fixes": [
        {
          "path": "edges.2.hidden",
          "value": true
        }
      ],
      "explanation": "End the lifeline at the destruction mark.",
      "rule": "An object’s lifeline ends when the object is deleted.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week6/topics.html#design-modelling-modelling-behaviors-sequence-diagrams-intermediate",
      "optional": false
    },
    {
      "id": "sequence-guard",
      "family": "sequence",
      "topicId": "W6.1b",
      "week": 6,
      "context": "send() should run only when hasEmail is true. Find the incorrect condition.",
      "scene": {
        "nodes": [
          {
            "id": "client",
            "title": "client:Client",
            "x": 50,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          },
          {
            "id": "service",
            "title": "service:Service",
            "x": 510,
            "y": 40,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": true,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "client-life",
            "x1": 160,
            "y1": 110,
            "x2": 160,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "service-life",
            "x1": 620,
            "y1": 110,
            "x2": 620,
            "y2": 430,
            "direction": "none",
            "kind": "lifeline",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "send",
            "x1": 160,
            "y1": 260,
            "x2": 620,
            "y2": 260,
            "direction": "right",
            "kind": "solid",
            "label": "send()",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [
          {
            "id": "guard",
            "type": "frame",
            "x": 90,
            "y": 170,
            "label": "opt [!hasEmail]",
            "w": 620,
            "h": 160,
            "hidden": false
          }
        ],
        "texts": []
      },
      "answerIds": [
        "guard"
      ],
      "fixes": [
        {
          "path": "shapes.0.label",
          "value": "opt [hasEmail]"
        }
      ],
      "explanation": "Use [hasEmail], not its negation, for the optional interaction.",
      "rule": "A guarded interaction must match the condition in the scenario.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week6/topics.html#design-modelling-modelling-behaviors-sequence-diagrams-intermediate",
      "optional": false
    },
    {
      "id": "activity-decision",
      "family": "activity",
      "topicId": "W9.2a",
      "week": 9,
      "context": "Take exactly one path: Approve if valid, otherwise Reject. Find the wrong control node.",
      "scene": {
        "nodes": [],
        "edges": [
          {
            "id": "start-flow",
            "x1": 400,
            "y1": 38,
            "x2": 400,
            "y2": 95,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "left-flow",
            "x1": 360,
            "y1": 140,
            "x2": 190,
            "y2": 205,
            "direction": "right",
            "kind": "solid",
            "label": "[valid]",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "right-flow",
            "x1": 440,
            "y1": 140,
            "x2": 610,
            "y2": 205,
            "direction": "right",
            "kind": "solid",
            "label": "[else]",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [
          {
            "id": "start",
            "type": "initial",
            "x": 400,
            "y": 25,
            "label": "",
            "w": 24,
            "h": 24,
            "hidden": false
          },
          {
            "id": "branch",
            "type": "bar",
            "x": 400,
            "y": 120,
            "label": "",
            "w": 130,
            "h": 40,
            "hidden": false
          },
          {
            "id": "left",
            "type": "action",
            "x": 190,
            "y": 240,
            "label": "Approve",
            "w": 190,
            "h": 65,
            "hidden": false
          },
          {
            "id": "right",
            "type": "action",
            "x": 610,
            "y": 240,
            "label": "Reject",
            "w": 190,
            "h": 65,
            "hidden": false
          }
        ],
        "texts": []
      },
      "answerIds": [
        "branch"
      ],
      "fixes": [
        {
          "path": "shapes.1.type",
          "value": "decision"
        }
      ],
      "explanation": "Use a decision diamond to choose between alternative paths.",
      "rule": "Decision nodes model alternatives; forks model parallel paths.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-behaviors-activity-diagrams-basic",
      "optional": false
    },
    {
      "id": "activity-fork",
      "family": "activity",
      "topicId": "W9.2a",
      "week": 9,
      "context": "Prepare food and Prepare drink must both start in parallel. Find the wrong control node.",
      "scene": {
        "nodes": [],
        "edges": [
          {
            "id": "start-flow",
            "x1": 400,
            "y1": 38,
            "x2": 400,
            "y2": 95,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "left-flow",
            "x1": 360,
            "y1": 140,
            "x2": 190,
            "y2": 205,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "right-flow",
            "x1": 440,
            "y1": 140,
            "x2": 610,
            "y2": 205,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [
          {
            "id": "start",
            "type": "initial",
            "x": 400,
            "y": 25,
            "label": "",
            "w": 24,
            "h": 24,
            "hidden": false
          },
          {
            "id": "branch",
            "type": "decision",
            "x": 400,
            "y": 120,
            "label": "",
            "w": 130,
            "h": 40,
            "hidden": false
          },
          {
            "id": "left",
            "type": "action",
            "x": 190,
            "y": 240,
            "label": "Prepare food",
            "w": 190,
            "h": 65,
            "hidden": false
          },
          {
            "id": "right",
            "type": "action",
            "x": 610,
            "y": 240,
            "label": "Prepare drink",
            "w": 190,
            "h": 65,
            "hidden": false
          }
        ],
        "texts": []
      },
      "answerIds": [
        "branch"
      ],
      "fixes": [
        {
          "path": "shapes.1.type",
          "value": "bar"
        }
      ],
      "explanation": "Use a fork bar to start both parallel paths.",
      "rule": "Forks split a flow into parallel paths.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-behaviors-activity-diagrams-basic",
      "optional": false
    },
    {
      "id": "activity-join",
      "family": "activity",
      "topicId": "W9.2a",
      "week": 9,
      "context": "Deliver must wait for both Pack and Charge. Find the incorrect synchronization node.",
      "scene": {
        "nodes": [],
        "edges": [
          {
            "id": "start-flow",
            "x1": 400,
            "y1": 38,
            "x2": 400,
            "y2": 95,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "left-flow",
            "x1": 360,
            "y1": 140,
            "x2": 190,
            "y2": 205,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "right-flow",
            "x1": 440,
            "y1": 140,
            "x2": 610,
            "y2": 205,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "pack-flow",
            "x1": 190,
            "y1": 273,
            "x2": 365,
            "y2": 335,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "charge-flow",
            "x1": 610,
            "y1": 273,
            "x2": 435,
            "y2": 335,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "deliver-flow",
            "x1": 400,
            "y1": 375,
            "x2": 400,
            "y2": 425,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [
          {
            "id": "start",
            "type": "initial",
            "x": 400,
            "y": 25,
            "label": "",
            "w": 24,
            "h": 24,
            "hidden": false
          },
          {
            "id": "branch",
            "type": "bar",
            "x": 400,
            "y": 120,
            "label": "",
            "w": 130,
            "h": 40,
            "hidden": false
          },
          {
            "id": "left",
            "type": "action",
            "x": 190,
            "y": 240,
            "label": "Pack",
            "w": 190,
            "h": 65,
            "hidden": false
          },
          {
            "id": "right",
            "type": "action",
            "x": 610,
            "y": 240,
            "label": "Charge",
            "w": 190,
            "h": 65,
            "hidden": false
          },
          {
            "id": "join",
            "type": "decision",
            "x": 400,
            "y": 355,
            "label": "",
            "w": 130,
            "h": 40,
            "hidden": false
          },
          {
            "id": "deliver",
            "type": "action",
            "x": 400,
            "y": 455,
            "label": "Deliver",
            "w": 190,
            "h": 60,
            "hidden": false
          }
        ],
        "texts": []
      },
      "answerIds": [
        "join"
      ],
      "fixes": [
        {
          "path": "shapes.4.type",
          "value": "bar"
        }
      ],
      "explanation": "Use a join bar to wait for both parallel branches.",
      "rule": "Parallel paths synchronize at a join before the following action proceeds.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-behaviors-activity-diagrams-basic",
      "optional": false
    },
    {
      "id": "activity-swimlane",
      "family": "activity",
      "topicId": "W9.2b",
      "week": 9,
      "context": "Only the Manager approves refunds. Tap the action in the wrong swimlane.",
      "scene": {
        "nodes": [],
        "edges": [],
        "shapes": [
          {
            "id": "cashier-lane",
            "type": "lane",
            "x": 200,
            "y": 245,
            "label": "Cashier",
            "w": 330,
            "h": 420,
            "hidden": false
          },
          {
            "id": "manager-lane",
            "type": "lane",
            "x": 600,
            "y": 245,
            "label": "Manager",
            "w": 330,
            "h": 420,
            "hidden": false
          },
          {
            "id": "refund",
            "type": "action",
            "x": 200,
            "y": 230,
            "label": "Approve refund",
            "w": 230,
            "h": 65,
            "hidden": false
          }
        ],
        "texts": [
          {
            "x": 400,
            "y": 485,
            "text": "Workflow fragment: responsibility assignment"
          }
        ]
      },
      "answerIds": [
        "refund"
      ],
      "fixes": [
        {
          "path": "shapes.2.x",
          "value": 600
        }
      ],
      "explanation": "Move Approve refund into the Manager lane.",
      "rule": "Swimlanes group actions by the participant responsible for them.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-modelling-modelling-behaviors-activity-diagrams-intermediate",
      "optional": false
    },
    {
      "id": "architecture-direction",
      "family": "architecture",
      "topicId": "W9.4a",
      "week": 9,
      "context": "UI depends on Logic. Logic does not depend on UI. Find the incorrect arrow.",
      "scene": {
        "nodes": [
          {
            "id": "ui",
            "title": "UI",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "logic",
            "title": "Logic",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "dependency",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "left",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": [
          {
            "x": 400,
            "y": 330,
            "text": "Legend: A → B means A depends on B"
          }
        ]
      },
      "answerIds": [
        "dependency"
      ],
      "fixes": [
        {
          "path": "edges.0.direction",
          "value": "right"
        }
      ],
      "explanation": "Point the dependency from UI toward Logic, following the legend.",
      "rule": "Architecture arrow directions must express the dependency stated by their legend.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-architecture-architecture-diagrams-drawing",
      "optional": false
    },
    {
      "id": "architecture-both",
      "family": "architecture",
      "topicId": "W9.4a",
      "week": 9,
      "context": "UI depends on Logic, but not the reverse. Find the misleading arrow.",
      "scene": {
        "nodes": [
          {
            "id": "ui",
            "title": "UI",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "logic",
            "title": "Logic",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "dependency",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "both",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": [
          {
            "x": 400,
            "y": 330,
            "text": "Legend: A → B means A depends on B"
          }
        ]
      },
      "answerIds": [
        "dependency"
      ],
      "fixes": [
        {
          "path": "edges.0.direction",
          "value": "right"
        }
      ],
      "explanation": "Use a single-headed arrow for this one-way dependency.",
      "rule": "Do not use double-headed arrows indiscriminately for one-way dependencies.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-architecture-architecture-diagrams-drawing",
      "optional": false
    },
    {
      "id": "architecture-name",
      "family": "architecture",
      "topicId": "W9.4a",
      "week": 9,
      "context": "Name components by responsibility; storage may change from JSON files to a database.",
      "scene": {
        "nodes": [
          {
            "id": "ui",
            "title": "Logic",
            "x": 60,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "logic",
            "title": "JsonFileHandler",
            "x": 510,
            "y": 110,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "dependency",
            "x1": 280,
            "y1": 145,
            "x2": 510,
            "y2": 145,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [],
        "texts": [
          {
            "x": 400,
            "y": 330,
            "text": "Legend: A → B means A depends on B"
          }
        ]
      },
      "answerIds": [
        "logic"
      ],
      "fixes": [
        {
          "path": "nodes.1.title",
          "value": "Storage"
        }
      ],
      "explanation": "Use Storage so the component name survives a change in implementation.",
      "rule": "Architecture component names should describe responsibility, not the current implementation.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-architecture-architecture-diagrams-drawing",
      "optional": false
    },
    {
      "id": "architecture-legend",
      "family": "architecture",
      "topicId": "W9.4a",
      "week": 9,
      "context": "Solid arrows show dependencies; dashed arrows show data flow. Find the incomplete explanation.",
      "scene": {
        "nodes": [
          {
            "id": "ui",
            "title": "UI",
            "x": 40,
            "y": 80,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "logic",
            "title": "Logic",
            "x": 510,
            "y": 80,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          },
          {
            "id": "storage",
            "title": "Storage",
            "x": 510,
            "y": 300,
            "w": 220,
            "h": 70,
            "rows": [],
            "object": false,
            "hidden": false
          }
        ],
        "edges": [
          {
            "id": "dependency",
            "x1": 260,
            "y1": 115,
            "x2": 510,
            "y2": 115,
            "direction": "right",
            "kind": "solid",
            "label": "",
            "hidden": false,
            "multiplicity": []
          },
          {
            "id": "data-flow",
            "x1": 620,
            "y1": 150,
            "x2": 620,
            "y2": 300,
            "direction": "right",
            "kind": "dashed",
            "label": "",
            "hidden": false,
            "multiplicity": []
          }
        ],
        "shapes": [
          {
            "id": "legend",
            "type": "legend",
            "x": 220,
            "y": 350,
            "label": "Solid → dependency",
            "w": 340,
            "h": 100,
            "hidden": false
          }
        ],
        "texts": []
      },
      "answerIds": [
        "legend"
      ],
      "fixes": [
        {
          "path": "shapes.0.label",
          "value": "Solid → dependency\nDashed → data flow"
        }
      ],
      "explanation": "The legend must explain both arrow styles.",
      "rule": "Explain unfamiliar symbols and distinguish each kind of arrow in the legend.",
      "source": "https://nus-cs2103-ay2627-s1.github.io/website/schedule/week9/topics.html#design-architecture-architecture-diagrams-drawing",
      "optional": false
    }
  ]
};
