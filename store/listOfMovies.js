import { defineStore } from 'pinia'


export const useListOfMovies = defineStore('ListOfMovies', {
    state: () => ({
        listOfMovies: [],
        query: ''
    }),
    getters: {

    },
    actions: {
        getItems() {
            return this.listOfMovies
        },
        getItem(id) {
            console.log(this.listOfMovies)
            console.log(id)
            return this.listOfMovies.find(x=>x.imdbID===id)
        },
        getQuery() {
            return this.query
        },
        setListOfMovies(x){

            this.listOfMovies=x

        },
        setQuery(x){
            this.query=x
        }
    }
})
