/**
 * Interface représentant une tâche.
 * Sert de modèle de données pour toutes les opérations liées à la gestion des tâches.
 * Dans le tableau par exemple.
 */
export interface TaskModel{
  id : number;
  title : string;
  desc? : string;
  dueDate : string; // la date où la tâche doit etre fini au maximum
  priority : "Basse" | "Moyenne" | "Haute";
  isDone: boolean; // si la tâche est finie
  createAt : string; // la date de création
}
