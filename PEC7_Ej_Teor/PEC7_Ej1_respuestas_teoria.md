a. ¿Qué es y cómo funciona el elemento <RouterOutlet>?
RouterOutlet: es una directiva de la biblioteca de enrutadores que se utiliza como un componente. Actúa como un marcador de posición que marca el lugar en la plantilla donde el enrutador debe mostrar los componentes para esa salida.


b. ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?
* RouterLink: cuando se aplica a un elemento en una plantilla, convierte ese elemento en un vínculo que inicia la navegación a una ruta. La navegación abre uno o más componentes enrutados en una o más ubicaciones <router-outlet> de la página.
* RouterLinkActive: realiza un seguimiento de si la ruta vinculada de un elemento está actualmente activa y le permite especificar una o más clases CSS para agregar al elemento cuando la ruta vinculada esté activa.
* Examinando la documentación oficial de Angular, además de <router-outlet> y las directivas mencionadas anteriormente, no existen más directivas relacionadas con el router.


c. ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.
* Router:
    + Muestra el componente de la aplicación para la URL activa, gestiona la navegación de un componente al siguiente.
    + Consta de los siguientes métodos:
        - initialNavigation(): configura el detector de cambios de ubicación y realiza la navegación inicial.
        - setUpLocationChangeListener(): configura el detector de cambios de ubicación. Este oyente detecta navegaciones activadas desde fuera del enrutador (los botones de avance/retroceso del navegador, por ejemplo) y programa una navegación del enrutador correspondiente para que se activen los eventos, guardias, etc. correctos.
        - getCurrentNavigation(): devuelve el objeto de navegación actual cuando el enrutador está navegando y nulo cuando está inactivo.
        - resetConfig(): restablece la configuración de ruta utilizada para la navegación y generación de enlaces.
        - dispose(): se deshace del enrutador.
        - createUrlTree(): agrega segmentos de URL al árbol de URL actual para crear un nuevo árbol de URL.
        - navigateByUrl(): navega a una vista utilizando una ruta de ruta absoluta.
        - navigate(): navega según la serie de comandos proporcionada y un punto de partida. Si no se proporciona una ruta de inicio, la navegación es absoluta.
        - serializeUrl(): serializa un UrlTree en una cadena.
        - parseUrl(): analiza una cadena en un UrlTree.
        - isActive(): devuelve un valor booleano, según la URL está activada o no.
* ActivatedRoute: se proporciona a cada componente de ruta y que contiene información específica de la ruta, como parámetros de ruta, datos estáticos, datos de resolución, parámetros de consulta globales y el fragmento global. Consta del método toString(), que retorna una cadena.


d. ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular?
Las "Route Guards" son scripts que se ejecutan antes de ciertas etapas de la navegación de la ruta. Deciden si continuar con la navegación o redirigirla, impidiendo que los usuarios naveguen a partes de una aplicación sin autorización.
Los principales tipos de route guards en Angular son:
* canActivate, canActivateChild y canDeactivate : si todas las route guards devuelven verdadero, la navegación continúa. Si alguna route guard devuelve falso, se cancela la navegación. Si alguna route guard devuelve un UrlTree, la navegación actual se cancela y comienza una nueva navegación al UrlTree devuelto por la route guard.
* canMatch: si todas las route guards devuelven verdadero, la navegación continúa y el enrutador utilizará la ruta durante la activación. Si alguna route guard devuelve falso, la ruta se omite para hacer coincidir y en su lugar se procesan otras configuraciones de ruta. 
* resolve: se puede utilizar un proveedor de datos con el enrutador para resolver datos durante la navegación. El enrutador espera a que se resuelvan los datos antes de que finalmente se active la ruta.
* canLoad: interfaz que una clase puede implementar para ser una route guard que decide si se pueden cargar clases o componentes hijos.


e. ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy?
Lazy loading es un patrón de diseño que carga NgModules según sea necesario. La carga diferida ayuda a mantener los tamaños de los paquetes iniciales más pequeños, lo que a su vez ayuda a reducir los tiempos de carga.
Los pasos para configurar lazy loading en Angular son:
1. Configurar una aplicación
2. Cree un módulo de funciones con enrutamiento
3. Agregue otro módulo de funciones
4. Configura la interfaz de usuario
5. Importaciones y configuración de rutas
6. Configuración dentro del módulo de funciones
7. Verificar la carga diferida


f. ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?
El archivo app.js contiene un montón de líneas que comienzan con app.use en algún punto intermedio. Estas líneas se conocen como middleware. Cuando llega una solicitud a la aplicación, pasa por cada pieza de middleware por turno. Cada pieza de middleware puede o no hacer algo con la solicitud, pero siempre pasa a la siguiente hasta que llega a la lógica de la aplicación, que devuelve una respuesta.
