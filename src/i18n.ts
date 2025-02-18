import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Record<string, { translation: Record<string, string> }> = {
  en: {
    translation: {
      language: 'EN',
      title: "Type in options",
      add: "Add",
      decide: "Decide",
      reset: 'Reset',
      decision: 'Decision',
      lastFiveDecisions: 'Last 5 decisions',
      jsonImportTitle: 'Import your options as JSON file',
      noFileSelected: 'No file selected',
      selectFile: 'Select file',
      selectFileLong: 'Select a file to import it.',
      import: 'Import',
      jsonError: 'The imported JSON file is not valid. Please upload a JSON with an array of strings.',
      koMode: 'KO-mode',
      koModeTooltip:'Removes selected option after choice.'
    },
  },
  de: {
    translation: {
      language: 'DE',
      title: "Optionen eingeben",
      add: "Hinzufügen",
      decide: "Entscheiden",
      reset: 'Zurücksetzen',
      decision: 'Entscheidung',
      lastFiveDecisions: 'Letzte 5 Entscheidungen',
      jsonImportTitle: 'Importiere deine Optionen als JSON-Datei',
      noFileSelected: 'Keine Datei ausgewählt',
      selectFile: 'Datei auswählen',
      selectFileLong: 'Wähle eine Datei aus, um sie dann zu importieren.',
      import: 'Importieren',
      jsonError: 'Die importierte JSON-Datei ist nicht valide. Bitte lade eine JSON mit einem Array von Strings hoch.',
      koMode: 'KO-Modus',
      koModeTooltip: 'Entfernt die ausgewählte Option nach der Auswahl.'
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de", // Standard-Sprache
    fallbackLng: "en", // Falls eine Sprache nicht vorhanden ist
    interpolation: {
      escapeValue: false, // React benötigt kein escaping
    },
  });

export default i18n;
