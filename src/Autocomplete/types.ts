export interface SuggestionsFetcher {
  fetchSuggestions: (q: string) => Promise<Suggestion[]>;
}

export interface Suggestion {
  label: string;
  value: string;
}
