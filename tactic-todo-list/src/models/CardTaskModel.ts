/**
 * Interface représentant les données dans le co.
 * Sert de modèle de données pour toutes les opérations liées à la gestion des tâches.
 * Dans le tableau par exemple.
 */
export interface CardTaskModel {
  title : string;
  counter: number | 0;
}
