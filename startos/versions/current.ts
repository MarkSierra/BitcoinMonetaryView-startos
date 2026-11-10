import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.14:0',
  releaseNotes: {
    en_US: `Updated Monetary View to 0.3.14.

**Security**

- A damaged settings file can no longer switch off the web password or delete your scan results
- Wrong web passwords are slowed down and malformed requests are refused
- Blocks with duplicated transactions are refused, as Bitcoin Core does

**Changes**

- Once a week Monetary View asks Bitcoin for the size of its UTXO set. To answer, Bitcoin writes the part of the UTXO set it holds in memory to disk
- Right after Bitcoin restarts, the scan shows that it is waiting for Bitcoin, not an authentication error
- Faster dashboard on a fully scanned chain

**Fixes**

- A settings file that cannot be read is kept as settings.json.damaged, the service starts with default settings, and the Set Web Password task asks for a new password
- After an interrupted first pass, the latest blocks are scanned without gaps

Release notes of [0.3.13](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13) and [0.3.14](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.14)`,
    de_DE: `Monetary View auf 0.3.14 aktualisiert.

**Sicherheit**

- Eine beschädigte Einstellungsdatei kann das Web-Passwort nicht mehr abschalten und die Scan-Ergebnisse nicht mehr löschen
- Falsche Web-Passwörter werden ausgebremst und fehlerhafte Anfragen abgelehnt
- Blöcke mit doppelten Transaktionen werden abgelehnt, wie Bitcoin Core es tut

**Änderungen**

- Einmal pro Woche fragt Monetary View Bitcoin nach der Größe seines UTXO-Sets. Um zu antworten, schreibt Bitcoin den Teil des UTXO-Sets, den es im Arbeitsspeicher hält, auf die Festplatte
- Direkt nach einem Neustart von Bitcoin zeigt der Scan, dass er auf Bitcoin wartet, statt eines Anmeldefehlers
- Schnelleres Dashboard bei vollständig gescannter Chain

**Behoben**

- Eine Einstellungsdatei, die nicht gelesen werden kann, wird als settings.json.damaged aufbewahrt, der Dienst startet mit Standardeinstellungen, und die Aufgabe „Set Web Password“ fragt nach einem neuen Passwort
- Nach einem unterbrochenen ersten Durchlauf werden die neuesten Blöcke lückenlos gescannt

Versionshinweise zu [0.3.13](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13) und [0.3.14](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.14)`,
    es_ES: `Monetary View actualizado a 0.3.14.

**Seguridad**

- Un archivo de ajustes dañado ya no puede desactivar la contraseña web ni borrar los resultados del escaneo
- Las contraseñas web incorrectas se frenan y las solicitudes mal formadas se rechazan
- Los bloques con transacciones duplicadas se rechazan, como hace Bitcoin Core

**Cambios**

- Una vez a la semana Monetary View pide a Bitcoin el tamaño de su conjunto UTXO. Para responder, Bitcoin escribe en disco la parte del conjunto UTXO que tiene en memoria
- Justo después de que Bitcoin se reinicie, el escaneo muestra que está esperando a Bitcoin, no un error de autenticación
- Panel más rápido con la cadena escaneada por completo

**Correcciones**

- Un archivo de ajustes que no se puede leer se guarda como settings.json.damaged, el servicio arranca con los ajustes predeterminados y la tarea Set Web Password pide una contraseña nueva
- Tras una primera pasada interrumpida, los bloques más recientes se escanean sin huecos

Notas de la versión [0.3.13](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13) y [0.3.14](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.14)`,
    fr_FR: `Monetary View mis à jour en 0.3.14.

**Sécurité**

- Un fichier de paramètres endommagé ne peut plus désactiver le mot de passe web ni supprimer les résultats d’analyse
- Les mots de passe web erronés sont ralentis et les requêtes malformées refusées
- Les blocs avec des transactions dupliquées sont refusés, comme le fait Bitcoin Core

**Modifications**

- Une fois par semaine, Monetary View demande à Bitcoin la taille de son ensemble UTXO. Pour répondre, Bitcoin écrit sur le disque la partie de l’ensemble UTXO qu’il garde en mémoire
- Juste après un redémarrage de Bitcoin, l’analyse indique qu’elle attend Bitcoin, et non une erreur d’authentification
- Tableau de bord plus rapide avec une chaîne entièrement analysée

**Corrections**

- Un fichier de paramètres illisible est conservé sous le nom settings.json.damaged, le service démarre avec les paramètres par défaut et la tâche Set Web Password demande un nouveau mot de passe
- Après une première passe interrompue, les blocs les plus récents sont analysés sans trou

Notes de version de [0.3.13](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13) et [0.3.14](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.14)`,
    pl_PL: `Zaktualizowano Monetary View do 0.3.14.

**Bezpieczeństwo**

- Uszkodzony plik ustawień nie może już wyłączyć hasła do interfejsu WWW ani usunąć wyników skanowania
- Błędne hasła do interfejsu WWW są spowalniane, a nieprawidłowe żądania odrzucane
- Bloki ze zduplikowanymi transakcjami są odrzucane, tak jak robi to Bitcoin Core

**Zmiany**

- Raz w tygodniu Monetary View pyta Bitcoina o rozmiar jego zbioru UTXO. Aby odpowiedzieć, Bitcoin zapisuje na dysk tę część zbioru UTXO, którą trzyma w pamięci
- Zaraz po ponownym uruchomieniu Bitcoina skanowanie pokazuje, że czeka na Bitcoina, a nie błąd uwierzytelniania
- Szybszy panel przy w pełni przeskanowanym łańcuchu

**Poprawki**

- Plik ustawień, którego nie da się odczytać, zostaje zachowany jako settings.json.damaged, usługa startuje z ustawieniami domyślnymi, a zadanie Set Web Password prosi o nowe hasło
- Po przerwanym pierwszym przebiegu najnowsze bloki są skanowane bez luk

Informacje o wydaniu [0.3.13](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.13) i [0.3.14](https://github.com/MarkSierra/BitcoinMonetaryView/releases/tag/v0.3.14)`,
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
