# Layouting Hands On

## Normal Document Flow

Alle Elemente werden in der Reihenfolge im HTML und unter Berücksichtigung ihrer Display Eigenschaft dargestellt.

Block-Level Elemente (`display: block`) werden im Flow immer auf 100% Breite innerhalb des Eltern-Elements dargestellt. Zusätzlich erzeugen diese einen "Zeilenumbruch" um allein auf einer Zeile / Linie zu stehen.

Inline Elemente (`display: inline`) sind immer nur so groß wie ihr Inhalt und fließen in der Schreibrichtung.


## Containing Block

Das Konzept "Containing Block" hat Relevanz beim Thema Positionierung und Relative Größenangaben (z.B. `width: 80%`).

### Relative Größe von Elementen

Prozentangaben (z.B.`width: 40%`) beziehen sich auf Containing Block (in der Regel Eltern Element).

Wann sich welche relative Größenangabe auf welches Element bezieht, kann man über [devdocs](https://devdocs.io) gut nachvollziehen.

[Containing Block auf devocs](https://devdocs.io/css/containing_block)

### Positionierung

Absolut positionierte Elemente mit offset properties (`top, right, bottom, left`) richten sich am Containing Block (nächstes positioniertes Elternelement aus)

Was heißt ein element ist "positioniert"? Wenn ein Element ein `position` value anders als `static` hat. Standardmäßig sind alle Element nicht positioniert.

## JSBin
Das jsbin dazu liegt [hier](https://jsbin.com/xuriyotulo/1/edit?html,css,output).





