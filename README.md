Projekt von Felix Luck und Phil Potratz

# Dokumentation

## Ziel

Webseite erstellen, in der jeden Tag automatisch ein neues Rezept zufällig herausgesucht wird, und zudem in der Datenbank gespeichert wird. Ziel ist es die Webseite so einfach wie möglich zu halten, um sich zum Zweck der Übersicht auf die zentrale Funktion zu konzentrieren.

## Aufbau

Der Webserver besteht aus einem Gradle-Projekt mit SpringBoot als Backend. In dem React-Ordner befindet sich das Frontend, welches mithilfe ReactJS erstellt wurde. Beim Aufbauen des Gradle-Projekts wird automatisch das Frontend mit aufgebaut.

## Funktionalitäten

Wenn der User die Index-Route lädt, dann wird geprüft, ob an diesem Tag schon ein Rezept angefragt wurde. Falls ja, wird das letzt Rezept aus der Datenbank genutzt, und falls nein wird eine API-Request ans Backend geschickt, um das neue Rezept zu erhalten und es in der Datenbank zu speichern. Somit wird die Anzahl der externen API-Requests minimiert. Die JSON-Response unserer extern genutzten API "TheMealDB" besteht immer aus einem Titel, Zubereitung, Bild, Videolink usw.. Diese Daten werden auf der Index-Seite dargestellt, oder in einem Raster bei den vergangenen Rezepten mit zusätzlichen Details nach anklicken.

# Arbeitsverteilung

Wir haben an dem Projekt größtenteils gemeinsam gearbeitet, aber auf folgende Punkte haben wir uns konzentriert:

**Backend**

- Modellierung der Datenbankstrunktur (Phil)
- Verwaltung der Datenbank, bzw. tägliches Einbinden des Rezeptes (Felix)
- API-Calls und Routing (Phil)

**Frontend**

- Webseitenstruktur und Navigation (Felix)
- Design und Layout (Felix)
- Aufbereitung und Darstellung der externen API-Response (Felix)
- Dynamische Webseiten (Phil)
