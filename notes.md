
1.Cel aplikacji
Prosty kalkulator umożliwiający wykonywanie podstawowych działań (`+`, `-`, `*`, `/`), obsługę procentów, zmianę znaku i wyświetlanie wyniku. Wygląd wzorowany na prostych kalkulatorach jak na iPhone, bez zbędnych bajerów.

2.Struktura projektu
Podział na małe komponenty:
- `Calculator.tsx` — zarządzanie stanem i logiką.
- `Button.tsx` — prosty przycisk z `label` i `onClick`.
- `Display.tsx` — pokazuje aktualne działanie lub wynik.
- `Calculator.css` — ręczne stylowanie bez bibliotek, responsywne.

3.Stan aplikacji
- `calculation: string` — aktualnie wpisywane działanie.
- `TBLICA buttons` - bedzie zawierac tablice przyciskow po ktorej bede mapowal w celu wsadzenia ich w komponent `Button.tsx`

4.Funkcje aplikacji
- `appendToCalculation(value: string)` — dodaje znak/cyfrę do wpisu.
po prostu ustawiaj stan na podstwie poprzedniego i dodania nowej wartosci
- `clearAll()` — czyści wszystko.
ustaw stan na `pusty string`
- `toggleSign()` — zmienia znak aktualnej liczby.
jesli stan zaczyna sie od `-` to ustaw stan tak zeby usunal pierszy symbol, else dodaj `-` do stanu 
- `percent()` — zmienia ostatnią liczbę na procent.
sprobuj wziac wartosc i policzyc ja metoda JS, ustaw kalkulacje na wartosc podzielona przez 100 i ustaw to do stringa, w catch ustaw error w stanie
- `calculate()` — liczy całe wpisane działanie.
sprobuj ustawic resultat liczac go ze stanu, jesli resultat jest nieskonczony ustaw stan na error, inaczej ustaw stan na resultat w stringu 

5.Stylizacja (CSS)
- Układ grid: 4 kolumny x 5 rzędów.
- Operatorzy (`+`, `-`, `*`, `/`, `=`) — pomarańczowe tło.
- Cyfry i inne przyciski — szare tło.
- Responsywność dla ekranów mobilnych.

7.Parser działań
- Na początek: `eval(expression)`
- Docelowo:
