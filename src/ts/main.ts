import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = <HTMLDivElement>document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");
