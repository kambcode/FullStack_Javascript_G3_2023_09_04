# Tareas del módulo

Las tareas de los módulos son pensadas para profundizar en los temas expuestos e interiorizar más el conocimiento. 

## Tarea

Para esta tarea y como proyecto final de el modulo te proponemos crear una calculadora usando HTML, CSS y javascript, teniendo en cuenta los siguientes criterios.

1. La calculadora debe contar como minimo con las 4 operaciones básicas (suma, resta, multiplicación y división).
2. El diseño es totalmente libre. Pero a continuación encontrarás un demo de cómo debe funcionar tu calculadora. [demo_calculadora.mp4](./../resources/calculator_demo.mp4)
3. Todo el codigo de javascript debe estar incluido en un archivo de JS. 

Prácticas como la siguiente **NO SON PERMIIDAS**

```html
<input type="button" id="number1" value="1" onclick="document.calculator.ans.value+='1'">
```

Para ello debes usar un selector e incluir la lógica en el archivo de javascript. Recuerda, el HTML debe estar lo más limpio posible. Una práctica sería la siguiente:

```html
<input type="button" onClick="sumar(1)">
```

```javascript 
function sumar (value) {
    // Tu codigo aca
}
```

o tambien puedes hacer lo siguiente


```html
<input type="button" value="1" id="number1">
```

```javascript 
const element = document.getElementById("number1");

element.addEventListener('click', function() {
    // Tu codigo aca
    alert("Clicked" + element.value);
});
```
