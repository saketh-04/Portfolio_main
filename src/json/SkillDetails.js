const skillDetails = {
  Java: {
    description:
      "Java is a versatile OOP language used for backend development, Android development, and enterprise systems.",
    codeSnippet: `public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello Java!");
  }
}`,
    codeOutput: "Hello Java!",
  },

  JavaScript: {
    description:
      "JavaScript powers dynamic web development, frontend logic and backend APIs using Node.js.",
    codeSnippet: `console.log("JavaScript Running!");`,
    codeOutput: "JavaScript Running!",
  },

  C: {
    description:
      "C provides strong understanding of memory, OS concepts, and low-level performance.",
    codeSnippet: `#include <stdio.h>
int main(){
  printf("Hello C!");
  return 0;
}`,
    codeOutput: "Hello C!",
  },

  "C++": {
    description:
      "C++ is used in competitive programming, gaming engines and high-performance systems.",
    codeSnippet: `#include <iostream>
using namespace std;
int main(){
  cout << "Hello C++!";
}`,
    codeOutput: "Hello C++!",
  },

  Haskell: {
    description:
      "Haskell is a purely functional language used in academics, functional computing and logic building.",
    codeSnippet: `main = putStrLn "Hello Haskell!"`,
    codeOutput: "Hello Haskell!",
  },

  HTML: {
    description: "HTML is the structure of every webpage.",
    codeSnippet: `<h1>Hello HTML</h1>`,
    codeOutput: "<h1>Hello HTML</h1>",
  },

  CSS: {
    description: "CSS handles styling, responsiveness and animations.",
    codeSnippet: `h1 { color: cyan; }`,
    codeOutput: "Styled heading",
  },

  "React JS": {
    description:
      "React is used for modern UI development with fast rendering, components, and hooks.",
    codeSnippet: `function App(){ return <h1>Hello React</h1> }`,
    codeOutput: "<h1>Hello React</h1>",
  },

  "Express JS": {
    description: "Express is a minimal, fast backend framework for building APIs.",
    codeSnippet: `app.get("/", (req,res)=>res.send("Hello Express"));`,
    codeOutput: "Hello Express",
  },

  "Node JS": {
    description: "Node.js executes JavaScript on the backend for scalable servers.",
    codeSnippet: `console.log("Running Node.js");`,
    codeOutput: "Running Node.js",
  },

  DBMS: {
    description:
      "DBMS includes SQL queries, indexing, transactions and relational data management.",
    codeSnippet: `SELECT * FROM users WHERE age > 18;`,
    codeOutput: "Query executed",
  },

  Git: {
    description: "Git is used for version control and managing code history.",
    codeSnippet: `git commit -m "Initial commit"`,
    codeOutput: "[master] Initial commit",
  },

  GitHub: {
    description: "GitHub hosts repositories, CI/CD pipelines and version management.",
    codeSnippet: `gh repo clone username/project`,
    codeOutput: "Repository Cloned",
  },

  MySQL: {
    description: "MySQL is a relational database used for backend projects.",
    codeSnippet: `SELECT name FROM students WHERE grade='A';`,
    codeOutput: "Query Result",
  },

  Postman: {
    description:
      "Postman is used for testing APIs, endpoints, headers, and backend debugging.",
    codeSnippet: `GET /api/v1/users`,
    codeOutput: "API response received",
  },

  MongoDB: {
    description:
      "MongoDB is a NoSQL database widely used in full-stack applications.",
    codeSnippet: `db.users.find({ age: { $gt: 18 } })`,
    codeOutput: "Document list",
  },

  Firebase: {
    description:
      "Firebase provides authentication, database, hosting and realtime services.",
    codeSnippet: `firebase.auth().signInWithEmailAndPassword(email, pass)`,
    codeOutput: "User Logged In",
  },

  "VS Code": {
    description:
      "VS Code is your primary editor for full-stack development with extensions.",
    codeSnippet: `// VS Code workspace`,
    codeOutput: "VS Code Loaded",
  },
};

export default skillDetails;
