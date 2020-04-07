# react_drama
Dramat w jednym Reakcie!
* JavaScript i HTML
    * Wybieranie elementów - 
    Aby móc manipulować elementami, musimy je najpierw wybrać.
        * getElementById - jeden element o podanym id
        * getElementsByTagName - tablica elementów o podanym tagu
        * getElementsByClassName - tablica elementów posiadających podaną klasę
        * querySelector - element pasujący do selektora
        * querySelectorAll - tablica elenetów pasująca do selektora
    * Właściwości elementów
        * classList - tablica klas dla danego elementu
            * el.classList.add - dodanie klasy
            * el.classList.remove - usunięcie klasy 
            * el.classList.toggle - dodaj klasę jak jej nie ma, albo usuń jak jest
        * className - string z klasami oddzielonymi przecinkiem
        * id - id elemetu
        * innerHTML - zawartość HTML elementu
        * outerHTML - zawartość HTML elementu z elementem
        * innerText - zawartośc tekstowa elementu
        * tagName - nazwa tagu
        * dataset - dane przypisane do elementu
        ```
      <div 
            id="user" 
            data-id="424" 
            data-logged-in=""
      >
        Ala Ma Kota
      </div>
      ```
    * Atrybuty
        * hasAttribute
        * getAttribute
        * setAttribute
        * removeAttribute
    * Style
        * element.style.backgroundColor;
    * Zdarzenia
        * addEventListener
        * removeEventListener
        * Lista zdarzeń
            * mouse
                * mousedown
                * mouseup
                * click
                * dblclick
                * mousemove
                * mouseover
                * mouseout
            * key
                * keydown
                * keypress
                * keyup
           * Pełna lista: `https://en.wikipedia.org/wiki/DOM_events`
* Git
* EC6
* Node i Webpack
