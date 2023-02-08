/// <reference path="components/projectinput.ts" />
/// <reference path="components/projectlist.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
