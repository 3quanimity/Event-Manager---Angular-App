import { FormControl } from "@angular/forms";

// ✍️ A validator function returns "null" if the control is "valid", or an "error object" if it's "invalid".

  export function restrictedWords(words: any[]) {
    return (control: FormControl): { [key: string]: any } | null => {
      if(!words) return null

      let invalidWords = words
        .map((word: any) => control.value.includes(word) ? word : null)
        .filter((word: any) => word != null)

      return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(", ") } : null;
    };
  }
