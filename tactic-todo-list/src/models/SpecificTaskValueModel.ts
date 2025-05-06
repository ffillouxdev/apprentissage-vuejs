/**
 * Interface représentant des valeurs spécifiques utilisées pour une tâche spécifique.
 * Utilisé pour le composant specificTaskValueComponent
 */
export interface SpecificTaskValueModel {
  title : string;
  desc: string;
  noData : string; // phrase quand il n'y a pas d'élément dans le composant
}
