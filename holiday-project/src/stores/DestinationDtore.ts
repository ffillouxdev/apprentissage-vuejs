import type { DestinationModel } from "@/models/destinationModel";
import { ref } from "vue";

const favorite = ref<DestinationModel | null>(null);

function setFavorite(newFavorite : DestinationModel): void{
     favorite.value = newFavorite;
}

export default function useDestinationStore(){
    return {
        favorite, 
        setFavorite
    }
}