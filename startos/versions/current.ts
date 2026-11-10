import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.13:0',
  releaseNotes: {
    en_US: `Updated Monetary View to 0.3.13.

- Security: a damaged settings file can no longer switch off the web password or delete your scan results; the web interface stays locked until the file is repaired
- Security: the web interface slows down wrong passwords and refuses malformed requests; blocks with duplicated transactions are refused, as Bitcoin Core does
- The size of Bitcoin's UTXO set is now read once a week instead of daily; to answer, Bitcoin writes the part of the UTXO set it holds in memory to disk
- Faster dashboard on a fully scanned chain
- Fix: after an interrupted first pass, the latest blocks are no longer shown as fully scanned when some were missing
- The footer links to the source code of the running version

[Full release notes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13)`,
    de_DE: `Monetary View auf 0.3.13 aktualisiert.

- Sicherheit: eine beschädigte Einstellungsdatei kann das Web-Passwort nicht mehr abschalten und die Scan-Ergebnisse nicht mehr löschen; die Weboberfläche bleibt gesperrt, bis die Datei repariert ist
- Sicherheit: die Weboberfläche bremst falsche Passwörter aus und lehnt fehlerhafte Anfragen ab; Blöcke mit doppelten Transaktionen werden abgelehnt, wie Bitcoin Core es tut
- Die Größe des UTXO-Sets von Bitcoin wird jetzt einmal pro Woche statt täglich gelesen; um zu antworten, schreibt Bitcoin den Teil des UTXO-Sets, den es im Arbeitsspeicher hält, auf die Festplatte
- Schnelleres Dashboard bei vollständig gescannter Chain
- Behoben: nach einem unterbrochenen ersten Durchlauf werden die neuesten Blöcke nicht mehr als vollständig gescannt angezeigt, wenn einige fehlten
- Die Fußzeile verlinkt den Quellcode der laufenden Version

[Vollständige Versionshinweise](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13)`,
    es_ES: `Monetary View actualizado a 0.3.13.

- Seguridad: un archivo de ajustes dañado ya no puede desactivar la contraseña web ni borrar los resultados del escaneo; la interfaz web queda bloqueada hasta que se repare el archivo
- Seguridad: la interfaz web frena las contraseñas incorrectas y rechaza las solicitudes mal formadas; los bloques con transacciones duplicadas se rechazan, como hace Bitcoin Core
- El tamaño del conjunto UTXO de Bitcoin se lee ahora una vez a la semana en lugar de a diario; para responder, Bitcoin escribe en disco la parte del conjunto UTXO que tiene en memoria
- Panel más rápido con la cadena escaneada por completo
- Corrección: tras una primera pasada interrumpida, los bloques más recientes ya no aparecen como escaneados por completo cuando faltaban algunos
- El pie de página enlaza al código fuente de la versión en uso

[Notas completas de la versión](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13)`,
    fr_FR: `Monetary View mis à jour en 0.3.13.

- Sécurité : un fichier de paramètres endommagé ne peut plus désactiver le mot de passe web ni supprimer les résultats d’analyse ; l’interface web reste verrouillée jusqu’à ce que le fichier soit réparé
- Sécurité : l’interface web ralentit les mots de passe erronés et refuse les requêtes malformées ; les blocs avec des transactions dupliquées sont refusés, comme le fait Bitcoin Core
- La taille de l’ensemble UTXO de Bitcoin est désormais lue une fois par semaine au lieu de chaque jour ; pour répondre, Bitcoin écrit sur le disque la partie de l’ensemble UTXO qu’il garde en mémoire
- Tableau de bord plus rapide avec une chaîne entièrement analysée
- Correction : après une première passe interrompue, les blocs les plus récents ne sont plus affichés comme entièrement analysés lorsqu’il en manquait
- Le pied de page renvoie au code source de la version en cours

[Notes de version complètes](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13)`,
    pl_PL: `Zaktualizowano Monetary View do 0.3.13.

- Bezpieczeństwo: uszkodzony plik ustawień nie może już wyłączyć hasła do interfejsu WWW ani usunąć wyników skanowania; interfejs WWW pozostaje zablokowany do czasu naprawienia pliku
- Bezpieczeństwo: interfejs WWW spowalnia błędne hasła i odrzuca nieprawidłowe żądania; bloki ze zduplikowanymi transakcjami są odrzucane, tak jak robi to Bitcoin Core
- Rozmiar zbioru UTXO Bitcoina jest teraz odczytywany raz w tygodniu zamiast codziennie; aby odpowiedzieć, Bitcoin zapisuje na dysk tę część zbioru UTXO, którą trzyma w pamięci
- Szybszy panel przy w pełni przeskanowanym łańcuchu
- Poprawka: po przerwanym pierwszym przebiegu najnowsze bloki nie są już pokazywane jako w pełni przeskanowane, gdy części brakowało
- Stopka prowadzi do kodu źródłowego uruchomionej wersji

[Pełne informacje o wydaniu](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13)`,
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
