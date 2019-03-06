import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: "ljk1",
    typePresta: "formation",
    client: "Capgeminouche",
    comment: "Du top niveau",
    nbJours: 10
  }),
  new Prestation({
    id: "ljk2",
    typePresta: "infra",
    client: "AsterixEtLesIndiens",
    comment: "super obélix",
    tjmHt: 3000,
    nbJours: 50,
    state: State.ANNULE
  })
];
