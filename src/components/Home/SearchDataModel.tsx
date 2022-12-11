export enum SeeAlsoFormat {
  ApplicationJSON = "application/json",
}

export enum Type {
  IIIFManifest = "IIIF Manifest",
}

export enum Technique {
  Struck = "Struck",
}

export interface WorktypeElement {
  worktypeid: string;
  worktype: WorktypeEnum;
}

export enum WorktypeEnum {
  Seal = "seal",
}
