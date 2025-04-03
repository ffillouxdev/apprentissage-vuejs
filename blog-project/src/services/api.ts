import type { ArticleModel } from '@/models/ArticleModel'
import axios, { type AxiosInstance } from 'axios'

/* création de l'instance d'axios */
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://liris-ktbs01.insa-lyon.fr:8000/blogephem',
  // inutile avec axios (par défaut json = format préféré)
  headers: { Accept: 'application/json' },
})

// retourne les codes des articles filtrés
// exemple: ['premier', 'apidoc']
async function getFilteredCodes(filter: string): Promise<string[]> {
  return (
    filter
      ? apiClient.get('/', {
          // si filtre différent de ''
          params: {
            search: filter,
          },
        })
      : apiClient // sinon
          .get('/')
  ).then((response) => {
    return (response.data as string[]).map((x): string => x.replace(/..*\//, ''))
  })
}

// retourne les articles filtrés
async function getTabArticles(filter: string): Promise<ArticleModel[]> {
  const tab: ArticleModel[] = []
  let tabCodes: string[] = []
  tabCodes = await getFilteredCodes(filter) // récupère le tableau de codes
  for (const code of tabCodes) {
    const a = await getArticle(code) // récupère un article
    tab.push(a)
  }
  return tab
}

async function getArticle(code: string): Promise<ArticleModel> {
  return apiClient.get(`/${code}`).then((response) => {
    const article = response.data as ArticleModel
    article.code = code // ajout du code comme identifiant unique
    return article
  })
}

async function addArticle(article: ArticleModel): Promise<void> {
  apiClient.post('/', article).then((url) => {
    //url: url de l'article nouvellement créé
    console.log(url)
  })
}

export function useBlogService() {
  return {
    getTabArticles,
    getFilteredCodes,
    addArticle,
  }
}
